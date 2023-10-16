import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const onSubmit = (values) => console.log(values);
  const validationSchema = Yup.object({
    name:Yup.string().required("لطفا نام خود را وارد کنید"),
    email: Yup.string().required("ایمیل نمیتواند خالی باشد!"),
    password: Yup.number().required("رمز عبور نمیتواند خالی باشد!"),
    passwordConfirm:Yup.number().required("رمز عبور یکسان نیست!")
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log(formik.errors);
  return (
    <form className=" w-full flex flex-col items-center gap-y-4">
          <div className="w-full h-auto mt-4 flex flex-col">
        <label className="text-slate-700 dark:text-text-gray">نام و نام خانوادگی :</label>
        <input
          type="email"
          name="name"
          placeholder="نام خود را وارد کنید"
          className="outline-none border px-4 py-2 mt-2 rounded-xl bg-white dark:bg-gray-700 dark:border-slate-500 dark:text-text-gray "
          {...formik.getFieldProps("name")}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-400 mt-2 ml-4 ">{formik.errors.name}</div>
        )}
      </div>
      <div className="w-full h-auto mt-4 flex flex-col">
        <label className="text-slate-700 dark:text-text-gray">ایمیل :</label>
        <input
          type="email"
          name="email"
          placeholder="ایمیل خود را وارد کنید"
          className="outline-none border px-4 py-2 mt-2 rounded-xl bg-white dark:bg-gray-700 dark:border-slate-500 dark:text-text-gray "
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-red-400 mt-2 ml-4 ">{formik.errors.email}</div>
        )}
      </div>
      <div className="w-full h-auto mt-4 flex flex-col">
        <label className="text-slate-700 dark:text-text-gray">رمز عبور :</label>
        <input
          type="tel"
          className="outline-none border dark:border-slate-500 px-4 py-2 mt-2 rounded-xl bg-white dark:text-text-gray dark:bg-gray-700"
          name="password"
          placeholder="رمزعبور خود را وارد کنید"
          {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="text-red-400 mt-2 ml-4">{formik.errors.password}</div>
        )}
      </div>
      <div className="w-full h-auto mt-4 flex flex-col">
        <label className="text-slate-700 dark:text-text-gray">تایید رمز عبور :</label>
        <input
          type="tel"
          className="outline-none border dark:border-slate-500 px-4 py-2 mt-2 rounded-xl bg-white dark:text-text-gray dark:bg-gray-700"
          name="passwordConfirm"
          placeholder="رمزعبور خود را تکرار کنید"
          {...formik.getFieldProps("passwordConfirm")}
        />
        {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
          <div className="text-red-400 mt-2 ml-4">{formik.errors.passwordConfirm}</div>
        )}
      </div>
      <button
        className="w-full py-2 text-slate-50 bg-gradient-to-r from-blue-300 to-purple-600 dark:from-gray-500 mt-10 rounded-xl"
        onClick={formik.handleSubmit}
      >
        ثبت نام
      </button>
      <span className="mt-12 text-sm text-slate-400">
        Or{" "}

          signUp
        {" "}
        using{" "}
      </span>
      <div className=" flex mt-6 w-64 justify-between">
        <Link to="https://github.com/mehdio-021">
          <AiFillGithub className=" w-8 h-8 text-2xl text-white bg-red-600 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-500 rounded-lg cursor-pointer p-1" />
        </Link>
        <Link to="https://www.instagram.com/mehdio_021/">
          <AiFillInstagram className=" w-8 h-8 text-2xl text-white bg-red-600 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-500 rounded-lg cursor-pointer p-1" />
        </Link>
        <Link to="https://www.linkedin.com/in/mehdi-moharami-442b6b240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <AiFillLinkedin className=" w-8 h-8 text-2xl text-white bg-red-600 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-500 rounded-lg cursor-pointer p-1" />
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
