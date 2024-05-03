'use client';
import { axiosInsance } from '@/lib/axios';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ResetPasswordResponse {
  message: string;
}

const useResetPassword = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = async (password: string, token: string) => {
    try {
      setIsLoading(true);
      const { data } = await axiosInsance.patch<ResetPasswordResponse>(
        '/auth/reset-password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert(data.message);
      router.replace('/');
      //   bisa dikasi toast untuk kasi tau error messagenya apa
    } catch (error) {
      if (error instanceof AxiosError) {
        //FIXME: change alert to toast
        alert(error?.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { resetPassword, isLoading };
};

export default useResetPassword;
