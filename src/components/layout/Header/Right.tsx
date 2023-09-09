import React, { useState } from 'react';

import { Button } from '../../ui/button';
import { LoginDialog } from './LoginDialog';
import { LoginForm } from '@/types/auth';
import { useBoundStore } from '@/store';
import { useTranslation } from 'react-i18next';

const Right = () => {
  const {t, i18n} = useTranslation('auth')
  const {isAuth, fullname, setUser, logout} = useBoundStore((state) => state)
  const signIn = ({ email, password }: LoginForm) => {
    setUser(email)
  };
  const signOut = () => {
    logout()
  }
  return (
    <div className='h-full flex items-center gap-4'>
      <div className='avatar'>{isAuth ? fullname : 'Guest'}</div>
      {isAuth ? (
        <Button onClick={signOut}>Logout</Button>
        ): (
        <LoginDialog signIn={signIn}/>
        )}
    </div>
  );
};

export default Right;
