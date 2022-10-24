import { List } from "./plan";

export interface LocalLoginProps {
  email: string;
  password: string;
}

export interface FetchPlanResProps {
  username: "";
  list: List[];
}

export interface FetchAddUserPlanProps extends List {
  username: string;
}

export interface fetchUserPlanByIdProps {
  username: string;
  id: string;
}

export interface FetchAdditionalUserInfoProps {
  username: string;
  serviceType: "ARMY" | "NAVY" | "AIR_FORCE";
}

export interface LocalLoginProps {
  email: string;
  password: string;
}

export interface LocalRegisterProps {
  email: string;
  password: string;
  username: string;
  serviceType: string;
}