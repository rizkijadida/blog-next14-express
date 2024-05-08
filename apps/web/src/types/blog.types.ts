import { User } from './user.types';

export interface Blog {
  id: number;
  title: string;
  category: string;
  content: string;
  description: string;
  thumbnail: string;
  userId: number;
  createdAt: number;
  updatedAt: Date;
  deletedAt: Date | null;

  user: User;
}

export interface IformCreateBlog {
  title: string;
  category: string;
  content: string;
  description: string;
  thumbnail: File[];
  userId?: number;
}
