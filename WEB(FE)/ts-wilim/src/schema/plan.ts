export interface List {
    id: string;
    detail: string;
    completed: boolean;
    steady: boolean;
}

export interface UserPlan {
    date: string;
    list: List[];
}