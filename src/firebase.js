import firebase from 'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDdWKPZEjZFRjI7rRED7hzCWds7g2X9enU',
  authDomain: 'citymovie-a8672.firebaseapp.com',
  databaseURL: 'https://citymovie-a8672-default-rtdb.firebaseio.com',
  projectId: 'citymovie-a8672',
  storageBucket: 'citymovie-a8672.appspot.com',
  messagingSenderId: '935251181693',
  appId: '1:935251181693:web:ba30b98475035054de7114',
})
export const auth = app.auth()
export default app
