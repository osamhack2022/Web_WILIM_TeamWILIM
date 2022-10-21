export interface PostProps {
    _id: string;
    owner: string;
    title: string;
    content: string;
    image: [];
    date: string;
    hashtags: string[];
    comments: string[];
    __v: number;
}

export interface PostCardProps {
    title: string;
    hashtags: string[];
    content: string;
    comments: string[];
}

export interface AddPostProps {
    title: string;
    content: string;
    hashtags: string[];
    username: string;
}