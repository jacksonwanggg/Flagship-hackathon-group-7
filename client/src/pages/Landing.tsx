// src/pages/login.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/login.module.css';

const Landing = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.loginPage}>
        <div>
            <img src="/logo.png" alt="Logo" className="w-20 h-20" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-7 mt-[10rem]">
        <Link 
        href="/login" 
        className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-1 px-[4.5rem] text-center border-2 border-[#f8f1ee] text-3xl font-bold rounded-xl transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-orange-500/50"
        >
        Login
        </Link>
        <Link 
        href="/register" 
        className="bg-transparent text-white py-1 px-[3.5rem] text-center text-3xl border-2 border-[#f8f1ee] font-bold rounded-xl transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-orange-500/50"
        >
        Register
        </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
