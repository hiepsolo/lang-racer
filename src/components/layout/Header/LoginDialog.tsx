import * as z from 'zod';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { LoginForm, SignupForm } from '@/types/auth';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

const LEVELS = [
  {
    name: 'Beginner',
    value: '0'
  },
  {
    name: 'Intermediate',
    value: '1'
  },
  {
    name: 'Advanced',
    value: '2'
  }
];
const formSchema = z.object({
  email: z.string().min(8).max(50).email(),
  password: z.string().min(8).max(50)
});

const formSignupSchema = z
  .object({
    email: z.string().min(8).max(50).email(),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
    name: z.string().max(50),
    level: z.string()
  })
  .refine((schema: any) => {
    if (schema.password && schema.confirmPassword) {
      return schema.password === schema.confirmPassword;
    }
    return true;
  }, 'Confirm password is not matched');

type Props = {
  signIn: (form: LoginForm) => void;
  signUp: (form: SignupForm) => void;
  toggleAuthForm: () => void;
  isSignup: boolean;
};
export function LoginDialog({ signIn, signUp, isSignup, toggleAuthForm }: Props) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('auth');
  let form = useForm<z.infer<typeof formSchema | typeof formSignupSchema>>({
    resolver: zodResolver(isSignup ? formSignupSchema : formSchema),
    defaultValues: isSignup
      ? {
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          level: ''
        }
      : {
          email: '',
          password: ''
        }
  });

  const toggleAuthDialog = () => {
    toggleAuthForm();
  };

  function onSubmit(values: z.infer<typeof formSchema | typeof formSignupSchema>) {
    if (isSignup) {
      signUp(values as SignupForm);
    } else {
      signIn(values);
    }
    setOpen(false);
  }

  const footerNav = () => {
    if (isSignup) {
      return (
        <div className='flex items-center mt-2'>
          <span className='text-gray-500 text-sm'>Already have an account?</span>
          <Button variant='link' type='button' onClick={toggleAuthDialog}>
            Sign In
          </Button>
        </div>
      );
    }
    return (
      <div className='flex items-center mt-2'>
        <span className='text-gray-500 text-sm'>Don't have an account?</span>
        <Button variant='link' type='button' onClick={toggleAuthDialog}>
          Sign Up
        </Button>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{t('signIn')}</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{t('signIn')}</DialogTitle>
          {/* <DialogDescription>
          </DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4 py-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('password')}</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='******' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isSignup && (
              <>
                <FormField
                  control={form.control}
                  name='confirmPassword'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type='password' placeholder='******' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder='Your name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='level'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>English level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select your English level' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {LEVELS.map((lvl) => (
                            <SelectItem key={lvl.name} value={`${lvl.value}`}>
                              {lvl.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <DialogFooter>
              <div className='flex flex-col w-full'>
                <Button type='submit'>Save changes</Button>
                {footerNav()}
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
