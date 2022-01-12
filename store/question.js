import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const questionsRef = db.collection('questions')

export const state = () => ({
    questions: []
})

export const actions = {

}