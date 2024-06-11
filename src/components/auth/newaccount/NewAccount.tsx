'use client'

import clsx from 'clsx';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '@/actions/auth/login';
import { registerUser } from '@/actions/auth/register';
import { useState } from 'react';
import Swal from 'sweetalert2';

type FormInputs = {
  name: string;
  email: string;
  password: string;  
}

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage('');
    const { name, email, password } = data;
    
    // Server action
    const resp = await registerUser(name, email, password);

    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    }
    Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Cuenta creada con exito!',
      })
    await login(email.toLowerCase(), password);
    window.location.replace('/');
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registrate
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="sm:mx-auto sm:w-full sm:max-w-sm">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre completo
        </label>
        <input
          className={clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5 w-full", // Ajuste en el ancho aquí
            { 'border-red-500': errors.name }
          )}
          type="text"
          id="name"
          autoFocus
          {...register('name', { required: true })}
        />
        {errors.name && <span className="text-red-500">* El nombre es obligatorio</span>}

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          className={clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5 w-full", // Ajuste en el ancho aquí
            { 'border-red-500': errors.email }
          )}
          type="email"
          id="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span className="text-red-500">* El correo electrónico es obligatorio</span>}

        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          className={clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5 w-full", // Ajuste en el ancho aquí
            { 'border-red-500': errors.password }
          )}
          type="password"
          id="password"
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && <span className="text-red-500">* La contraseña es obligatoria</span>}

        {errorMessage && <span className="text-red-500">{errorMessage}</span>}

        <button className="btn-primary w-full py-2 mt-5">Crear cuenta</button>

        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/login" className="btn-secondary block text-center">
          Ingresar
        </Link>
      </form>
    </div>
  );
};
