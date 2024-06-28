// src/pages/login.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/login.module.css';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.loginPage}>
        <div  className="absolute inset-0 flex flex-col items-center justify-center space-y-7 mt-[10rem]">
          <Link href="/login" className="bg-white bg-opacity-50 text-black py-4 px-[5.6rem] text-center border-2 border-[#f8f1ee] text-xl font-bold rounded-xl">
            Login
          </Link>
          <Link href="/register" className="bg-white text-black py-4 px-[5rem] text-center text-xl border-2 border-[#f8f1ee] font-bold rounded-xl bg-opacity-50">
            Register
          </Link>
          <div className="flex space-x-5">
            <img src="/google.svg" alt="Google" className="w-12 h-12 hover:cursor-pointer" />
            <img src="/facebook.svg" alt="Facebook" className="w-12 h-12 hover:cursor-pointer" />
            <img src="/instagram.svg" alt="Facebook" className="w-12 h-12 hover:cursor-pointer" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Login;
