export interface List {
  _id?: string;
  detail: string;
  completed: boolean;
  steady: boolean;
  planListId?: string;
  date: string;
}

export interface UserPlan {
  date: string;
  list: List[];
}
