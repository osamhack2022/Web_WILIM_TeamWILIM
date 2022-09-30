export interface List {
    detail: string;
    completed: boolean;
}

export interface UserPlan {
    date: Date;
    list: List[];
}