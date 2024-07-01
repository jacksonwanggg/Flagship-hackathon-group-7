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
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-7 mt-[10rem]">
            <h1 className='text-4xl font-bold text-white'>Welcome!</h1>
          <h1 className="text-4xl font-bold text-white">Glad to see you!</h1>
          <form className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Username or Email" 
              className="bg-white bg-opacity-25 text-white placeholder-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-white bg-opacity-25 text-white placeholder-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="text-right text-white">
              <Link href="/forgot-password" legacyBehavior>
                <a>Forgot Password?</a>
              </Link>
            </div>
            <Link href="/home" legacyBehavior>
              <a className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 px-[4.5rem] text-center border-2 border-[#f8f1ee] text-2xl font-bold rounded-xl transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-orange-500/50">
                Login
              </a>
            </Link>
          </form>
          <p className="text-white">-Or Login with -</p>
          <div className="flex space-x-5">
            <img src="/google.svg" alt="Google" className="w-12 h-12 hover:cursor-pointer" />
            <img src="/facebook.svg" alt="Facebook" className="w-12 h-12 hover:cursor-pointer" />
          </div>
          <p className="text-white">
            Don&apos;t have an account?
            <Link href="/register" legacyBehavior>
                <a className="font-bold hover:underline" style={{ marginLeft: '10px' }}>Sign Up Now</a>
            </Link>
            </p>
        </div>
      </div>
    </>
  );
};

export default Login;
