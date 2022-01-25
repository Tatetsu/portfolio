import firebase from 'firebase/app'
import 'firebase/auth'
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

const config = {
    projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const auth = firebase.auth()

export default function (context, inject) {
    inject('auth', auth)
}
// export default firebase
