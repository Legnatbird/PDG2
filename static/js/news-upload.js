import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-storage.js";
import { getFirestore, doc, getDoc, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

//Feedback is necesary?
const feedback = document.getElementById("feedback");

//With this I upload to the firebase News.
const uploadNewsForm = document.getElementById("uploadNews");

//Upload Image
const uploadImage = async (file) => {
    try {
        console.log(file.name);
        const storageRef = ref(storage,`news/images/${file.name}`);
        const image = await uploadBytes(storageRef, file);
        return await getDownloadURL(ref(storage, image.ref.fullPath));
    } catch (e) {
        console.log(e);
    }
}

//Upload the news
const uploadNew = async () => {
    const title = uploadNewsForm.title.value,
        summary = uploadNewsForm.summary.value,
        description = uploadNewsForm.description.value,
        type = uploadNewsForm.type.value,
        image = uploadNewsForm.images.files,
        date = uploadNewsForm.date.value;

    if(title && summary && description && image && date){
        //It kind a feedback for me... I don't know if this function is ok or not
        feedback.innerText = "Tu noticia se esta publicando, espere un momento..."

        try{
            const urlImage = await uploadImage(image[0]);
            await addDoc(collection(db, "news"),{
                title,
                summary,
                description,
                type,
                date,
                image: urlImage,
            });
            feedback.innerText = "¡La noticia ha sido publicada exitosamente!";
        } catch(e) {
            feedback.innerText = "La noticia no se ha publicado exitosamente, vuelve a intentarlo";
        } 
    } else {
        alert("Completa los datos");
    }
}

uploadNewsForm.addEventListener("submit", e=> {
    e.preventDefault();
    uploadNew();
});