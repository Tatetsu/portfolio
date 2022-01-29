export default function ({ store, route, redirect }) {
    const userLogin = store.state.user.login
    console.log(userLogin);

    if (userLogin) {
        if(route.name === "login") {
            return redirect("/")
        }
    }else {
        if (route.name === "mypage" || route.name === "motion" || route.name === "playlist" || route.name === "program" || route.name === "record" || route.name === "search") {
            return redirect("/register")

}
    }
}