'use client';

import { useMutation } from '@tanstack/react-query';
import { Form, Spin, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import wordApi from '../api/wordApi';

const AddWord = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const {mutate, isPending} = useMutation({
    mutationKey: 'addWord',
    mutationFn: wordApi.addWord,
    onSuccess: () => {
      message.success('Tạo thành công!');
      form.resetFields();
    },
    onError: () => message.error('Có lỗi xảy ra!')
  });
  const onFinish = () => {
    const values = form.getFieldsValue();
    mutate(values);
  }
  return (
    <div className='bg-add-word h-[100vh] p-[200px] flex flex-col items-center justify-center w-full'>
      <div className='mb-12 text-6xl text-center font-bold from-neonGreen  to-yellow-300 bg-gradient-to-r bg-clip-text text-transparent'>
          Thêm mới
      </div>
      <Form form={form} className="w-[800px]" onFinish={onFinish}>
        <Form.Item name="word">
          <div class="p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <input class="p-3 w-full rounded-full focus:outline-none" type="text" placeholder="Từ (Tiếng Anh)" />
          </div>
        </Form.Item>
        <Form.Item name="mean">
          <div class="p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <input class="p-3 w-full rounded-full focus:outline-none" type="text" placeholder="Nghĩa (Tiếng Việt)" />
          </div>
        </Form.Item>
        <Form.Item>
          <div className='flex justify-center gap-8 items-center'>
            <button 
              type="button"
              onClick={() => router.push('/')}
              className={`w-[200px] bg-white rounded-2xl`}>
              <div className='text-base p-4 text-center font-bold from-electricViolet via-pink-600 to-vibrantBlue bg-gradient-to-r bg-clip-text text-transparent'>
                Trang chủ
              </div>
            </button>
            <button
              type='submit'
              className={`btn-test w-[200px] bg-gradient-to-tr from-electricViolet via-pink-600 to-vibrantBlue rounded-2xl`}>
              <div className='text-base p-4 text-center text-white'>
                {isPending ? <Spin /> : 'Tạo mới'}
              </div>
            </button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
 
export default AddWord;