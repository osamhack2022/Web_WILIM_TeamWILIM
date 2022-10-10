export interface List {
    detail: string;
    completed: boolean;
}

export interface UserPlan {
    date: string;
    list: List[];
}