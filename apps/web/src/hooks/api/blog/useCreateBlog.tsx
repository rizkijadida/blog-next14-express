'use client';

import { axiosInsance } from '@/lib/axios';
import { Blog, IformCreateBlog } from '@/types/blog.types';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';

const useCreateBlog = () => {
  const router = useRouter();

  const createBlog = async (payload: IformCreateBlog) => {
    try {
      const { title, category, content, description, thumbnail, userId } =
        payload;

      const createBlogForm = new FormData();

      createBlogForm.append('title', title);
      createBlogForm.append('category', category);
      createBlogForm.append('content', content);
      createBlogForm.append('description', description);
      createBlogForm.append('userId', String(userId));

      thumbnail.forEach((file: FileWithPath) => {
        createBlogForm.append('thumbnail', file);
      });

      await axiosInsance.post<Blog>('/blogs', createBlogForm);
      //   toast success here
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace conlole.log woth toast
        console.log(error);

        // FIXME: message
      }
    }
  };
  return { createBlog };
};

export default useCreateBlog;
