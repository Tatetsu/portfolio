// import { vuexfireMutations } from 'vuexfire'

// export const mutations = {
//     ...vuexfireMutations
// }

export const state = () => ({
    user: {
        uid:"",
        email:"",
        login: false
    }
})

export const getters = {
    user: state => {
        return state.user
    }
}

export const actions = {
    checkLogin({ commit }) {
        this.$auth.onAuthStateChanged(function(user) {
            if (user) {
                commit("getData", { uid: user.uid, email: user.email })
                commit("switchLogin")
            } else {
                commit("deleteLogin")
            }
        })
    }
}

export const mutations = {
    getData(state, payload) {
        state.user.uid = payload.uid
        state.user.email = payload.email
    },
    switchLogin(state) {
        state.user.login = true
    },deleteLogin(state) {
        state.user.login = false
    },
    signOut(state) {
        state.user.uid = ""
        state.user.email = ""
        state.user.login = false
    }
}