import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';

const updateUserInfo = async(userId: string, userInfo: any) => {
  const db = getFirestore();
  await setDoc(doc(db, 'users', userId), userInfo)
}

const getUserInfo = async (userId: string) => {
  const db = getFirestore();
  return await getDoc(doc(db, 'users', userId))
}

export {
  getUserInfo,
  updateUserInfo
}