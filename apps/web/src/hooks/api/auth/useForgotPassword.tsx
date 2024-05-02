'use client';
import { axiosInsance } from '@/lib/axios';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ForgotPasswordResponse {
  message: string;
}

const useForgotPassword = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const ForgotPassword = async (email: string) => {
    try {
      setIsLoading(true);
      const { data } = await axiosInsance.post<ForgotPasswordResponse>(
        '/auth/forgot-password',
        { email },
      );
      alert(data.message);
      router.replace('/');
      //   bisa dikasi toast untuk kasi tau error messagenya apa
    } catch (error) {
      if (error instanceof AxiosError) {
        //FIXME: change alert to toast
        alert(error?.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { ForgotPassword, isLoading };
};

export default useForgotPassword;
