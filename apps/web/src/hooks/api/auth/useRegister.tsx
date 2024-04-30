'use client';
import { axiosInsance } from '@/lib/axios';
import { User } from '@/types/user.types';
import { useRouter } from 'next/router';

interface RegisterArgs extends Omit<User, 'id'> {
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  const register = async (payload: RegisterArgs) => {
    try {
      await axiosInsance.post('/auth/register', payload);

      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return { register };
};

export default useRegister;
