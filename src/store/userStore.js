// import { writable } from 'svelte/store'
// import { browser } from "$app/env";


// const userStore = writable(getStorageUser())

// get user from local storage
// export function getStorageUser()  {
//     if(browser) {
//     return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
// }
// }

// set user t localstorage
// export const setStorageUser = (user) => {
//     if(browser){
//      localStorage.setItem('user', JSON.stringify(user))
//     }
// }

// export const setUser = (user) => {
//     userStore.set(user)
// } 

// export const logoutUser = () => {
//     localStorage.clear();
// }


// export default userStore