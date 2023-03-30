import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const getUserInfo = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();        
    } catch (e) {
        console.log(e);
    }
}

const username = document.getElementById("username");

onAuthStateChanged(auth, async (user) => {
    if(user){
        const userInfo = await getUserInfo(user.uid);
        console.log(user.uid);
        username.innerHTML = userInfo.names;
    }
});

//Sign out
const signOutBtn = document.getElementById("signOut");

signOutBtn.addEventListener("click", e => {
    logOut();
    window.location ="./start.html";
})

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (e){
        console.log(e);
    }
}

