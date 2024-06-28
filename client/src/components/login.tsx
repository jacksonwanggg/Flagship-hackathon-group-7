// src/pages/login.tsx
import React from 'react';
import Head from 'next/head';
import styles from '../styles/login.module.css';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.loginPage}>
        <p>hi </p>
      </div>
    </>
  );
};

export default Login;
