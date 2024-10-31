'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import styles from './styles.module.css';


gsap.registerPlugin(useGSAP);

export default function HomeScreen() {
  const container = useRef();
  const router = useRouter();
  useGSAP(
    () => {
        gsap.fromTo(`.btn-create`, {xPercent: -100, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1});
        gsap.fromTo(`.btn-test`, {xPercent: 100, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1});
    },
    { scope: container }
  );
  return (
    <div ref={container} className="bg-home bg-gray-300 flex flex-col gap-12 w-full h-[100vh] justify-center items-center">
      <button 
        onClick={() => router.push('/quiz')}
        className={`btn-create ${styles.btn} w-[300px] bg-white rounded-2xl`}>
        <div className='text-2xl p-4 text-center font-bold from-electricViolet via-pink-600 to-vibrantBlue bg-gradient-to-r bg-clip-text text-transparent'>
          Thêm mới
        </div>
      </button>
      <button
        onClick={() => router.push('/quiz')}
        className={`btn-test ${styles.btn} w-[300px] bg-gradient-to-tr from-electricViolet via-pink-600 to-vibrantBlue rounded-2xl`}>
        <div className='text-2xl p-4 text-center'>
          Kiểm tra
        </div>
      </button>
    </div>
  );
}
