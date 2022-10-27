export interface InitialPostProps {
    postList: PostProps[];
}

export interface PostProps {
    _id: string;
    owner: OwnerProps;
    title: string;
    content: string;
    image: [];
    date: string;
    hashtags: string[];
    comments: CommentProps[];
    __v: number;
    likedUsers: string[];
}

export interface OwnerProps {
    _id: string;
    email: string;
    username: string;
    serviceType: string;
    snsId: string;
    provider: boolean;
    personalPlanId: string;
    __v: number;
    goal: string;
    posts: string[];
    comments: string[];
}

export interface CommentProps {
    _id: string;
    owner: string;
    username: string;
    content: string;
    date: string;
    post: string;
}

export interface PostCardProps {
    _id: string;
    title: string;
    hashtags: string[];
    likedUsers: string[];
    content: string;
    comments: CommentProps[];
    owner: OwnerProps;
}

export interface AddPostProps {
    title: string;
    content: string;
    hashtags: string[];
    username: string;
}

export interface AddCommentProps {
    content: string;
    _id: string;
}

export interface DeleteCommentProps {
    _id: string;
}

export interface DeletePostProps {
    _id: string;
}