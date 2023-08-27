import * as z from "zod"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginForm } from '@/types/auth'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const formSchema = z.object({
    email: z.string().min(8).max(50).email(),
    password: z.string().min(8).max(50)
})
type Props = {
    isOpen: boolean,
    close: () => void,
    signIn: (form: LoginForm) => void
}
export function LoginDialog({isOpen, signIn, close}: Props) {
    const {t} = useTranslation('auth')
    
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{t('signIn')}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('signIn')}</DialogTitle>
          {/* <DialogDescription>
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
