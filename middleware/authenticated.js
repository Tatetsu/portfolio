export default async function ({ store, route, redirect, app }) {

    const user = await app.$authState()
    //authStateでplugins/firebase.jsファイルの処理へ非同期処理実行
    //処理が返されたら以下の処理が実行
    console.log({ user })

    if (user) {
        //store/index.jsの"getDate"に情報を入れ直す
        store.commit("getData",
            {
                uid: user.uid, 
                email: user.email
            }
        )
        //上記の処理が成功したら"yesLogin"発動
        store.commit("switchLogin")
    }
    else {
        //storeからログイン情報を消す
        store.commit("deleteLogin")
    }
    
    const userLogin = store.state.user.login
    console.log(userLogin);

    if (userLogin) {
        if(route.name === "signin") {
            return redirect("/mypage")
        }
    }else {
        if ( 
        route.name === "motion" || 
        route.name === "mypage" || 
        route.name === "playlist" || 
        route.name === "program" || 
        route.name === "record" || 
        route.name === "search") {
        return redirect("/signin")
        }
    }

    
}