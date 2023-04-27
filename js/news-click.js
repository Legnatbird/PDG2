import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

//Firebase atributtes
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

//Atributtes
let global__newID;
const newsImage = document.getElementById("image");
const newsTitle = document.getElementById("title");
const newsDate = document.getElementById("date");
const newsType = document.getElementById("type");
const newsDescription = document.getElementById("description");

//Firebase lecture about the news
const getNews = async () => {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const newID = searchParams.get("id");
    global__newID = newID;

    const docRef = doc(db, "news", newID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    loadNews(data);
}

const loadNews = (news) => {
    newsTitle.innerText = news.title;
    newsType.innerText = news.type;
    newsDescription.innerText = news.description;
    newsDate.innerText = news.date;

    newsImage.setAttribute("src", news.image);
}

getNews();