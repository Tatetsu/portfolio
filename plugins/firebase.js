import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const config = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_Id,
    measurementId: process.env.MEASUREMENT_ID
}

firebase.initializeApp(config)

const auth = firebase.auth()

export default function (context, inject) {
    inject('auth', auth)
    inject('firebase', firebase)
    inject('authState', () => {
        return new Promise((resolve) => {
            firebase.auth().onAuthStateChanged((user) => {
                resolve(user || null)
            })
        })
    })
}



