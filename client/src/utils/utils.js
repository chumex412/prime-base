import { getStorage, ref } from 'firebase/storage';
import { firebaseApp } from '../storage_initialize';

const storage = getStorage(firebaseApp);

export const fetchFile = async (file) => {
  try {
    const fileRef = await ref(storage, `images/${file}`);
    console.log(fileRef.fullPath) 
    return fileRef._location;
  } catch (err) {
    console.error(err.message);
  }
}