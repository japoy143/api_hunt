//inputs
export type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className: string;
  type: string;
  required?: boolean;
};

export type commentType = {
  email: string;
  userId: string;
  avatar: number;
  comment: string;
  timestamp: string;
};
//API Types
export type APIType = {
  _id: string;
  name: string;
  category: string;
  link: string;
  description: string;
  key: boolean;
  comments: commentType[];
  isCommentSection: boolean;
  likes: number;
};

//islogin or User Status
export type UserStatus = {
  id: number;
};

//comment section typo
export type commentType = {
  avatar: 0;
  comment: string;
  timestamp: string;
};

//avatar type
export type avatarType = {
  img: string;
};
