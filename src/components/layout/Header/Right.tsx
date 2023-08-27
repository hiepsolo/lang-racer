import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { LoginDialog } from './LoginDialog';
import { LoginForm } from '@/types/auth';

const Right = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const openLoginDialog = () => {
    setIsOpenDialog(true)
  }
  const signIn = ({ email, password }: LoginForm) => {
    console.log('Signin', email, password);
  };
  const closeDialog = () => { setIsOpenDialog(false) }
  return (
    <div className='h-full flex items-center gap-4'>
      <Button onClick={openLoginDialog}>Sign in</Button>
      <LoginDialog isOpen={isOpenDialog} signIn={signIn} close={closeDialog} />
      <div className='avatar'>Guest</div>
    </div>
  );
};

export default Right;
