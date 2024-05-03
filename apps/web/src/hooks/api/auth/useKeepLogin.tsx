'use client';
import { axiosInsance } from '@/lib/axios';
import { useAppDispatch } from '@/redux/hooks';
import { loginAction } from '@/redux/slices/userSclice';
import { User } from '@/types/user.types';
import { AxiosError } from 'axios';

interface KeepLoginResponse {
  message: string;
  data: User;
}

const useKeepLogin = () => {
  const dispatch = useAppDispatch();

  const keeplogin = async () => {
    try {
      const { data } =
        await axiosInsance.get<KeepLoginResponse>('/auth/keep-login');
      dispatch(loginAction(data.data));

      //   bisa diaksi toast untuk kasi tau error messagenya apa
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        //FIXME: change alert to toast
        alert(error?.response?.data);
      }
    }
  };

  return { keeplogin };
};

export default useKeepLogin;
