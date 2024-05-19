//inputs
export type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className: string;
  type: string;
  required?: boolean;
};

export type User = {
  username: string;
  avatar: string;
};

//API Types
export type APIType = {
  name: string;
  category: string;
  link: string;
  description: string;
  key: boolean;
  comments: User[];
  likes: number;
};

//islogin or User Status
export type UserStatus = {
  id: number;
};
