export interface User {
  comments?: string[];
  posts?: string[];
  snsId?: string;
  _id?: string;
  email?: string;
  password: string;
  username: string;
  provider?: null | "kakao" | "naver";
  serviceType: string;
  goal?: string;
  likedPosts?: string[];
}


