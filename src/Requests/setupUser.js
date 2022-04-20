import { setStorageUser, setUser } from "../store/userStore";

function setupUser (response) {
     const user = response.data;

     setStorageUser(user);
     setUser(user);
     return user;
}
export default setupUser