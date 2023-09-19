import { LoginForm, SignupForm } from '@/types/auth';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFromLocal, saveToLocal } from '@/lib/local';
import { getUserInfo, updateUserInfo } from '@/lib/database';

import { Button } from '@/components/ui/button';
import { LoginDialog } from './LoginDialog';
import { appStore } from '@/store';
import { useAlert } from '@/hooks/use-alert';
import { useStore } from 'zustand';
import { useTranslation } from 'react-i18next';

const Right = () => {
  const { t, i18n } = useTranslation('auth');
  const {notify, notifyError} = useAlert()
  const { isAuth, fullname, setUser, logout } = useStore(appStore, (state) => state);
  const [isSignup, setIsSignup] = useState(false);
  const signIn = ({ email, password }: LoginForm) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user.user.displayName || user.user.email!);
        if (getFromLocal() === null) {
          getUserInfo(user.user.uid).then(data => {
            if (data.data()) {
              saveToLocal(data.data()!)
            }
          })
        }
      })
      .catch((err) => {
        notifyError('Sign in failed', 'Email or password is incorrect!')
      });
  };
  const signOut = () => {
    logout();
  };

  const toggleAuthForm = () => {
    setIsSignup((val) => !val);
  };

  const signUp = async ({ email, password, level, name }: SignupForm) => {
    const auth = getAuth();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateUserInfo(user.user.uid, { level });
      await updateProfile(user.user, {
        displayName: name
      });
      setUser(name|| email)
      notify('User created successful', 'Your account was created successfully!')
    } catch (error) {
      notifyError('Sign up failed', 'Sorry, we cannot create a new account, please try again')
    }
  };
  return (
    <div className='h-full flex items-center gap-4'>
      <div className='avatar'>{isAuth ? fullname : 'Guest'}</div>
      {isAuth ? (
        <Button onClick={signOut}>Logout</Button>
      ) : (
        <LoginDialog signUp={signUp} signIn={signIn} toggleAuthForm={toggleAuthForm} isSignup={isSignup} />
      )}
    </div>
  );
};

export default Right;
