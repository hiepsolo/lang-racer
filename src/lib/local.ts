import { UserInfo } from '@/types/auth';

const LOCAL_STORAGE_KEY = 'info'
const saveToLocal = (data: object) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
const getFromLocal = (): UserInfo | null => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY)
  return data !== null ? JSON.parse(data) as UserInfo : null
}

export {saveToLocal, getFromLocal}