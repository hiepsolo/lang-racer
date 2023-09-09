import * as z from 'zod';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoginForm } from '@/types/auth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  email: z.string().min(8).max(50).email(),
  password: z.string().min(8).max(50)
});
type Props = {
  signIn: (form: LoginForm) => void;
};
export function LoginDialog({ signIn }: Props) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('auth');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    signIn(values)
    setOpen(false)
  }
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
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
