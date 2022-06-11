import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCGsRKvir9Vn1FnWaIsKlOgNnFQGc60s2Y",
  
    authDomain: "task-manager-66ad4.firebaseapp.com",
  
    projectId: "task-manager-66ad4",
  
    storageBucket: "task-manager-66ad4.appspot.com",
  
    messagingSenderId: "94129506876",
  
    appId: "1:94129506876:web:af3eb70b2770ad3e225139",
  
    measurementId: "G-6WX76PWEC6"
  
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  export {db}