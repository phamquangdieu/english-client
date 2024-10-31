import Image from 'next/image';
import React from 'react'

const Result = () => {
    return (
        <div className='w-full items-center justify-center flex flex-col'>
            <div className='rounded-xl'>
                <Image
                className='rounded-[50px]'
                    src={'/leo-fail.webp'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 300 , height: 'auto' }}
                />
            </div>
            <div className='text-2xl mt-12'>Số câu trả lời đúng là 10/15</div>
        </div>
    );
}
 
export default Result;