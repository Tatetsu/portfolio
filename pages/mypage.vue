<template>
  <div id="my-page">
    <div class="my-data relative mt-36">
      <div class="my-data_box border-2 shadow-lg bg-white">
        <div class="my-data_img h-40 rounded-full">
          <img
            class="rounded-full bg-gray-500 absolute w-32 h-32"
            :src="user.profileImageUrl"
            alt=""
            @click="clickImage"
          />
          <input
            type="file"
            accept="image/png, image/jpeg"
            @change="uploadImage($event)"
            ref="profileImage"
            style="display: none"
          />
        </div>
        <hr class="w-3/4 m-auto" />
        <div class="my-data_txt py-5">
          <ul class="text-center flex justify-around">
            <li>
              <h3>身長</h3>
              <p>{{ user.composition }}<span>cm</span></p>
            </li>
            <li>
              <h3>体重</h3>
              <p>{{ user.weight }}<span>kg</span></p>
            </li>
            <li>
              <h3>目標体重まで</h3>
              <p>残り{{ user.objectiveWeight }}<span>kg</span></p>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <p>*診断をするとここに情報が表示されます</p>
        </div>
      </div>
    </div>

    <div class="calender pt-10">
      <div class="calender_my-calender">
        <div class="my-calender_name">
          <h2 class="font-bold">{{ user.name }}さんのカレンダー</h2>
        </div>
        <div class="my-calender_data bg-white">
          <div class="content">
            <h2>カレンダー{{ displayDate }}</h2>
            <div class="button-area">
              <button @click="prevMonth" class="button">前の月</button>
              <button @click="nextMonth" class="button">次の月</button>
            </div>
            <div class="calendar">
              <div class="calendar-weekly">
                <div class="calendar-youbi" v-for="n in 7" :key="n">
                  {{ youbi(n - 1) }}
                </div>
              </div>
              <div
                class="calendar-weekly"
                v-for="(week, index) in calendars"
                :key="index"
              >
                <div
                  class="calendar-daily"
                  :class="{ outside: currentMonth !== day.month }"
                  v-for="(day, index) in week"
                  :key="index"
                >
                  <div class="calendar-day">
                    {{ day.day }}
                  </div>
                  <div v-for="dayEvent in day.dayEvents" :key="dayEvent.id">
                    <div
                      v-if="dayEvent.width"
                      class="calendar-event"
                      :style="`width:${dayEvent.width}%;background-color:${dayEvent.color}`"
                    >
                      {{ dayEvent.name }}
                    </div>
                    <div v-else style="height: 26px"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        class="rounded-md bg-blue-400 hover:bg-red-600 text-white w-full px-10 py-2"
        v-show="isActive"
        @click="addTask"
      >
        筋トレしました
      </button>
      <button
        class="rounded-md bg-blue-400 hover:bg-red-600 text-white w-full bg-opacity-70 px-10 py-2"
        v-show="notActive"
      >
        今日は記録済みです
      </button>
      <p class="text-sm mt-5">＊筋トレの記録をカレンダーに残しましょう！！</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
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
  layout: "login",
  data() {
    return {
      currentDate: moment(),
      user: {
        name: "ゲスト",
        weight: "◯◯",
        composition: "◯◯",
        objectiveWeight: "◯◯",
        profileImageUrl:
          "https://placehold.jp/20/cccccc/ffffff/150x150.png?text=%20",
      },
      tasks: [],
      events: [],
      todaysLog: false,
      isActive: true,
      notActive: false,
    };
  },
  methods: {
    getStartDate() {
      let date = moment(this.currentDate);
      date.startOf("month");
      const youbiNum = date.day();
      return date.subtract(youbiNum, "days");
    },
    getEndDate() {
      let date = moment(this.currentDate);
      date.endOf("month");
      const youbiNum = date.day();
      return date.add(6 - youbiNum, "days");
    },
    getCalendar() {
      let startDate = this.getStartDate();
      const endDate = this.getEndDate();
      const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

      let calendars = [];
      let calendarDate = this.getStartDate();

      for (let week = 0; week < weekNumber; week++) {
        let weekRow = [];
        for (let day = 0; day < 7; day++) {
          let dayEvents = this.getDayEvents(calendarDate, day);
          weekRow.push({
            day: calendarDate.get("date"),
            month: calendarDate.format("YYYY-MM"),
            date: calendarDate.format("YYYY-MM-DD"),
            dayEvents: dayEvents,
          });
          calendarDate.add(1, "days");
        }
        calendars.push(weekRow);
      }

      return calendars;
      // カレンダーの数字を返している
    },
    nextMonth() {
      this.currentDate = moment(this.currentDate).add(1, "month");
    },
    prevMonth() {
      this.currentDate = moment(this.currentDate).subtract(1, "month");
    },

    youbi(dayIndex) {
      const week = ["日", "月", "火", "水", "木", "金", "土", "日"];
      return week[dayIndex];
    },

    getDayEvents(date, day) {
      let stackIndex = 0;
      let dayEvents = [];
      let startedEvents = [];
      this.sortedEvents.forEach((event) => {
        let startDate = moment(event.start).format("YYYY-MM-DD");
        let endDate = moment(event.end).format("YYYY-MM-DD");
        let Date = date.format("YYYY-MM-DD");
        if (startDate <= Date && endDate >= Date) {
          if (startDate === Date) {
            [stackIndex, dayEvents] = this.getStackEvents(
              event,
              day,
              // date,
              stackIndex,
              dayEvents,
              startedEvents,
              event.start
            );
          } else if (day === 0) {
            [stackIndex, dayEvents] = this.getStackEvents(
              event,
              day,
              // date,
              stackIndex,
              dayEvents,
              startedEvents,
              Date
            );
          } else {
            startedEvents.push(event);
          }
        }
      });
      return dayEvents;
    },

    getEventWidth(end, start, day) {
      let betweenDays = moment(end).diff(moment(start), "days");
      if (betweenDays > 6 - day) {
        return (6 - day) * 100 + 95;
      } else {
        return betweenDays * 100 + 95;
      }
    },

    getStackEvents(event, day, stackIndex, dayEvents, startedEvents, start) {
      [stackIndex, dayEvents] = this.getStartedEvents(
        stackIndex,
        startedEvents,
        dayEvents
      );

      let width = this.getEventWidth(start, event.end, day);
      Object.assign(event, {
        stackIndex,
      });
      dayEvents.push({ ...event, width });
      stackIndex++;
      return [stackIndex, dayEvents];
    },
    getStartedEvents(stackIndex, startedEvents, dayEvents) {
      let startedEvent;
      do {
        startedEvent = startedEvents.find(
          (event) => event.stackIndex === stackIndex
        );
        if (startedEvent) {
          dayEvents.push(startedEvent); //ダミー領域として利用するため
          stackIndex++;
        }
      } while (typeof startedEvent !== "undefined");
      return [stackIndex, dayEvents];
    },

    dragEnd(event, date) {
      let eventId = event.dataTransfer.getData("eventId");
      let dragEvent = this.events.find((event) => event.id == eventId);
      let betweenDays = moment(dragEvent.end).diff(
        moment(dragEvent.start),
        "days"
      );
      dragEvent.start = date;
      dragEvent.end = moment(dragEvent.start)
        .add(betweenDays, "days")
        .format("YYYY-MM-DD");
    },
    changeShow() {},

    async addTask() {
      this.isActive = !this.isActive;
      this.notActive = !this.notActive;
      if (this.todaysLog) {
        alert("今日の筋トレは記録済みです");
        return;
      }
      const uid = this.$store.state.user.uid;
      const db = getFirestore();
      const docRef = doc(db, "exerciseLogs", uid);
      const docSnap = await getDoc(docRef);
      if (this.events.length === 0) {
        await setDoc(docRef, {
          tasks: arrayUnion({
            name: "筋トレしました",
            startDayAt: new Date(),
            endDayAt: new Date(),
            color: "red",
          }),
        });
      } else {
        await updateDoc(docRef, {
          tasks: arrayUnion({
            name: "筋トレしました",
            startDayAt: new Date(),
            endDayAt: new Date(),
            color: "red",
          }),
        });
      }
      alert("今日の筋トレを記録しました");
      const exercise = await getDoc(doc(db, "exerciseLogs", uid));
      if (docSnap.exists()) {
        console.log(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      location.reload();
    },
    clickImage() {
      this.$refs.profileImage.click();
    },
    async uploadImage($event) {
      console.log($event.target.files);

      const reader = new FileReader();
      reader.onload = async (e) => {
        //画像URLを取得している
        // ↓これは、画像を画面に表示する用のURL、実際にstorageじゃなくてfileなので、$event.target.fils[0]を使う
        this.profileImage = $event.target.files[0];
        const storageRef = this.$storage
          .ref()
          .child(`profileImage/${this.$store.state.user.uid}`);
        const snapshot = await storageRef.put(this.profileImage);
        const imageUrl = await snapshot.ref.getDownloadURL();

        // this.profileImageUrl = e.target.result;

        // 以下は、ユーザーのアップデート処理。
        const uid = this.$store.state.user.uid;
        const db = getFirestore();
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {
          profileImageUrl: imageUrl, //ストレージから取得したURL
        });
        alert("プロフィール画像を更新しました");
        location.reload();
      };

      reader.readAsDataURL($event.target.files[0]);
    },
  },

  mounted() {
    const auth = getAuth();

    // login状態が変更されたら
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // loginしてたら
        const db = getFirestore();

        const documentRef = await getDoc(doc(db, `users/${user.uid}`));
        const document = documentRef.data();

        this.user = document || {
          name: "ゲスト",
          weight: "◯◯",
          composition: "◯◯",
          objectiveWeight: "◯◯",
          profileImageUrl:
            "https://placehold.jp/20/cccccc/ffffff/150x150.png?text=%20",
        };
        console.log("user", this.user);

        // Firestoreから自分の筋トレのログを取得
        const exerciseLogsRef = await getDoc(
          doc(db, `exerciseLogs/${user.uid}`)
        );
        const exerciseLogs = exerciseLogsRef.data();
        console.log({ exerciseLogs });
        if (exerciseLogs) {
          // カレンダーに過去の筋トレ情報を貼る this.events = [....]
          this.events = exerciseLogs.tasks.map((task) => {
            task.start = moment(task.startDayAt.toDate()).format("YYYY-MM-DD");
            task.end = moment(task.endDayAt.toDate()).format("YYYY-MM-DD");
            return task;
          });
        }

        // 今日の記録があるかどうかを探す
        // 今の日付を取得
        const now = new Date();
        const dateToday = moment(now).format("YYYYMMDD");
        console.log({ dateToday });

        this.todaysLog = this.events.find(
          (item) =>
            dateToday === moment(item.startDayAt.toDate()).format("YYYYMMDD")
        );
        console.log(this.todaysLog);
      }
    });
  },

  computed: {
    calendars() {
      let calendars = this.getCalendar();
      // console.log({ calendars });

      return calendars;
    },
    displayDate() {
      let displayDate = this.currentDate.format("YYYY[年]M[月]");
      // console.log({ displayDate });
      return displayDate;
    },

    currentMonth() {
      let currentMonth = this.currentDate.format("YYYY-MM");
      // console.log({ currentMonth });
      return currentMonth;
    },
    sortedEvents() {
      const result = this.events.slice().sort(function (a, b) {
        let startDate = moment(a.start).format("YYYY-MM-DD");
        let startDate_2 = moment(b.start).format("YYYY-MM-DD");
        if (startDate < startDate_2) return -1;
        if (startDate > startDate_2) return 1;
        return 0;
      });
      // console.log({ result });
      return result;
    },
  },
};
</script>

<style scoped>
/* カレンダーのCSS */
.content {
  margin: 2em auto;
}
.button-area {
  margin: 0.5em 0;
  display: flex;
  justify-content: space-between;
}
.button {
  padding: 4px 8px;
  margin-right: 8px;
}
.calendar {
  max-width: 900px;
  border-top: 1px solid #e0e0e0;
  font-size: 0.8em;
}
.calendar-weekly {
  display: flex;
  border-left: 1px solid #e0e0e0;
  /* background-color: black; */
}
.calendar-daily {
  flex: 1;
  min-height: 70px;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  margin-right: -1px;
}
.calendar-day {
  text-align: center;
}
.calendar-youbi {
  flex: 1;
  border-right: 1px solid #e0e0e0;
  margin-right: -1px;
  text-align: center;
}
.outside {
  background-color: #f7f7f7;
}
.calendar-event {
  color: white;
  margin-bottom: 1px;
  height: 25px;
  line-height: 25px;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  padding-left: 4px;
}

/* マイデータのCSS */
#my-page {
  width: 80%;
  max-width: 900px;
  margin: 10rem auto;
}

.my-data_img img {
  top: calc(0% - calc(50% - 4rem));
  left: calc(0% + calc(50% - 4rem));
}
</style>
