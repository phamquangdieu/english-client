'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { Button } from 'antd';
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
      console.log(response);
      mutate({ token: response?.access_token });
    },
  });
  return (
    <div>
      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
      <Button onClick={login}>123</Button>
    </div>
  );
};

export default Login;
