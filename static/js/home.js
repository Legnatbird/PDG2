import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();


//Sign out
const signOutBtn = document.getElementById("signOut");

signOutBtn.addEventListener("click", e => {
    logOut();
    window.location ="/static/start.html";
})

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (e){
        console.log(e);
    }
}