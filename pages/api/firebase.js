import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { collection, addDoc, getFirestore,doc, setDoc,getDoc } from "firebase/firestore"; 
import { getAuth, signInWithPhoneNumber } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCJD-BYk3U5W86OavkOCtQXpM8I3ZJi7nk",
  authDomain: "m-and-b-13b79.firebaseapp.com",
  projectId: "m-and-b-13b79",
  storageBucket: "m-and-b-13b79.appspot.com",
  messagingSenderId: "616293405000",
  appId: "1:616293405000:web:accd3f27d4baabb1ec237d",
  measurementId: "G-2JRCDTPWER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);

const db = getFirestore(app);
export const addItems = async (name, imageUrl, price, description) => {try {
  const itemRef = doc(db, `users/${name}`)
  await setDoc(itemRef, {
    name,
    price,
    imageUrl,
    desc: description
  });
  console.log("Document written with ID: ", itemRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}}

export const auth = getAuth(app);

export const signIn = (phoneNumber, appVerifier) =>{
  try {
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      const codeResult = confirmationResult;
      console.log(codeResult);
      alert("msg sent");
      // ...
    }).catch((error) => {
      
    });
  } catch (error) {
    
  }
}  

export const isNewUser = async (userUID) => {
  const userRef = doc(db,`users/${userUID}`);
  const snapShot= await getDoc(userRef);
  if (!snapShot.exists()) {
    return true;
  } 
  return false;
}

export const addUser = async (name, phoneNumber, userUID) => {
    const userRef = doc(db,`users/${userUID}`);
    await setDoc(userRef, {
      name,
      phoneNumber,
    });
    console.log("Document written with ID: ", userUID);

}

export const handleCart = () => {
  
}
