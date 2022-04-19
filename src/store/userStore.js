import { writable } from 'svelte/store'

const userStore = writable(getStorageUser())

// get user from local storage
function getStorageUser()  {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

// set user t localstorage
export const setStorageUser = (user) => {
     localStorage.setItem('user', JSON.stringify(user))
}

export const setUser = (user) => {
    userStore.set(user)
} 

export const logoutUser = () => {
    localStorage.clear()
}


export default userStore