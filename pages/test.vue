<template>
  <div class="page">
    <form
      class="form"
      @submit.prevent="submitImg()"
    >
      <input
        type="file"
        accept="img/*"
        @change="changeImg"
      >
      <button
        type="submit"
        class="button"
      >
        click
      </button>
      <div>
        <p>{{ thumbnail }}</p>
        <p>{{ postData.thumbnail }}</p>
        <img :src="postData.thumbnail" alt="">
      </div>
    </form>
    <div>
      <button
        class="button"
        @click="getImg()"
      >
        取得
      </button>
      <img :src="getData.thumbnail" alt="">
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
  arrayUnion,
  serverTimestamp,
  updateDoc,
  Firestore,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

export default {
  data () {
    return {
      thumbnail: '',
      postData: {
        thumbnail: '',
      },
      getData: {
        thumbnail: '',
      },
    }
  },
  methods: {
     async changeImg (e) {
      this.thumbnail = e.target.files[0]

      if (this.thumbnail) {
        const reader = new FileReader()
        reader.onload = () => {
          this.postData.thumbnail = reader.result + ''
        }
        reader.readAsDataURL(this.thumbnail)
        console.log('選択完了')
        this.submitImg(this.thumbnail)
      }

      // const uid = this.$store.state.user.uid;
      // const db = getFirestore();
      // const docRef = doc(db, "profileImage", uid);
      // const docSnap = await getDoc(docRef);
      //  if (this.imageUrl.length === 0) {
      //   await setDoc(docRef, {
      //     imageUrl:this.url,
      //   });
      // } else {
      //   await updateDoc(docRef, {
      //     imageUrl:this.url,
      //   });
      // }
    },
    submitImg (thumbnail) {
      const storage = this.$storage
      const storageRef = storage.ref().child('file.png')
      storageRef.put(thumbnail)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    getImg () {
      const storage = this.$storage
      const storageRef = storage.ref().child('file.png')
      storageRef.getDownloadURL()
        .then(res => {
          console.log(res)
          this.getData.thumbnail = res
        })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>