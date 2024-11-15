'use client'

import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <button className='py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600' onClick={() => signOut({ callbackUrl: '/login' })}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;