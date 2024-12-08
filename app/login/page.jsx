'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import authApi from '../api/authApi';

const Login = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: 'getToken',
    mutationFn: authApi.getUserInfo,
    onSuccess: (data) => {
      Cookies.set('token', data.data.token);
      router.push('/');
    },
  });

  const login = useGoogleLogin({
    onSuccess: (response) => {
      mutate({ token: response?.access_token });
    },
  });
  return (
    <div className="bg-home h-[100vh] w-full flex items-center justify-center">
      <button
        onClick={login}
        class="m-4 p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"
      >
        <span class="block text-black px-8 py-4 font-semibold rounded-full bg-white">
          Login with google
        </span>
      </button>
    </div>
  );
};

export default Login;
