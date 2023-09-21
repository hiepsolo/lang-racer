import {addDoc, collection, doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';

const updateUserInfo = async(userId: string, userInfo: any) => {
  const db = getFirestore();
  await setDoc(doc(db, 'users', userId), userInfo)
}

const getUserInfo = async (userId: string) => {
  const db = getFirestore();
  return await getDoc(doc(db, 'users', userId))
}

// Get the maximum sequence in Cloudstore and set window.sequence = max. Then run the saveToContents()
// const saveToContents =async (level: string, en: string, vi: string) => {
//   const db = getFirestore();
//   return await addDoc(collection(db, 'contents'), {
//     sequence: ((window as any).sequence as number)++,
//     level,
//     en,
//     vi
//   })
// }

export {
  getUserInfo,
  updateUserInfo,
}