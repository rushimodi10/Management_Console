"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import {useFormState} from "react-dom";
// import { useState } from "react";

const LoginForm = () => {

  // const [error, setError] = useState()
  // const handleLogin = async (formData) => {
  //   const data = await authenticate(formData);
  //   data.error && setError(data.error);
  // }

  const [state, formAction] = useFormState(authenticate, undefined);

  return (
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
  );
}
export default LoginForm