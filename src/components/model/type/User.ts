export interface User {
  
  email: string,
  login: string,
  name: string,
  pwd: string,
  avatar?: File
}

export interface UserVisualData {
  id?: number,
  email: string,
  login: string,
  name: string,
  avatar: string
}[]

export interface UserAuth {
  login: string,
  pwd: string
}