import { Apply } from '../../model/type/type';

export default function getRequestFormData(event: Event): Apply {
  event.preventDefault();
  const requestForm = document.getElementById('requestForm') as HTMLFormElement;
  const data = new FormData(requestForm);
  const category = data.get('category') as string;
  const format = data.get('format') as string;
  const country = data.get('location') as string;
  const address = data.get('address') as string;
  const text = data.get('textarea') as string;

  function getContacts(): (string | null)[] {
    const phone = document.getElementById('phone') as HTMLElement;
    const email = document.getElementById('email') as HTMLElement;
    const messenger = document.getElementById('messenger') as HTMLElement;
    const contactPhone: FormDataEntryValue | null = data.get('phone');
    const contactEmail: FormDataEntryValue | null = data.get('email');
    const contactMessenger: FormDataEntryValue | null = data.get('messenger');

    const contact: (string | null)[] = [];

    if (contactPhone) contact.push(phone.getAttribute('name'));
    if (contactEmail) contact.push(email.getAttribute('name'));
    if (contactMessenger) contact.push(messenger.getAttribute('name'));

    (event.target as HTMLFormElement).reset();

    return contact;
  }
  
  const formData: Apply = {
    category: category,
    format: format,
    contact: getContacts(),
    country: country,
    location: address,
    description: text,
    open: true,
  };

  return formData;
}