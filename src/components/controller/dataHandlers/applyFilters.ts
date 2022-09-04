import { getApplies } from "../../model/api/applies";
import { getAuthUserData } from "../../model/api/users";
import { ApplyWithUser } from "../../model/type/type";
import { UserVisualData } from "../../model/type/User";


export const getOpenApplies = (applies: ApplyWithUser[]) : ApplyWithUser[] => applies.filter(apply => apply.open);

export const getClosedApplies = (applies: ApplyWithUser[]) : ApplyWithUser[] => applies.filter(apply => !apply.open);

export const getMyCreatedApplies = (applies: ApplyWithUser[]) => {
  let user = getAuthUserData() as UserVisualData;
  if (!user) return []
  return applies.filter(apply => apply.userId === user.id)
};

export const getMyParticipateApplies = (applies: ApplyWithUser[]) => {
  let user = getAuthUserData() as UserVisualData;
  if (!user) return []
  return applies.filter(apply => apply.participants.some(p => p === user.id));
  
};