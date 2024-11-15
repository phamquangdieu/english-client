import { Spin } from 'antd';
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-8">
      <Spin spinning />
      <div className="text-2xl">Đang tải ...</div>
    </div>
  );
};

export default LoadingScreen;
