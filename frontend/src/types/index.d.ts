//inputs
export type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className: string;
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
