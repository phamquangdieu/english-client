'use client';

import { Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

const AddWord = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = () => {
    const values = form.getFieldsValue();
    console.log(values);
  }
  return (
    <div className='bg-add-word h-[100vh] p-[200px] flex flex-col items-center justify-center w-full'>
      <div className='mb-12 text-6xl text-center font-bold from-neonGreen  to-yellow-300 bg-gradient-to-r bg-clip-text text-transparent'>
          Thêm mới
      </div>
      <Form form={form} className='w-full' className="w-[800px]" onFinish={onFinish}>
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
                Tạo mới
              </div>
            </button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
 
export default AddWord;