import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA72Ag4JVtoNGAcyXI6z2uFqDJbyZIeLxQ',
  authDomain: 'kral-giyim-c0d65.firebaseapp.com',
  projectId: 'kral-giyim-c0d65',
  storageBucket: 'kral-giyim-c0d65.appspot.com',
  messagingSenderId: '682759203484',
  appId: '1:682759203484:web:9b016d363d555b223b1b59',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  pormpt: 'select_account',
})

export const auth = getAuth()

export const sigInWithGooglePopup = () => {
  return signInWithPopup(auth, provider)
}
