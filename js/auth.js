
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

//Firebase createuser
const createUser = async (email, password, userFields) => {
    try{
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const userId = user.uid;

        await setDoc(doc(db, "users", userId), userFields);

        alert("Has registrado "+ email);

        window.location ="./home.html";

    }catch{
        alert("Este correo ya existe");
    }
}

const registerBtn = document.getElementById("register");
//Function of the register page
if(registerBtn !== null){
    registerBtn.addEventListener("submit", e => {
        e.preventDefault(); //cancel de reload.
        const names = registerBtn.name.value;
        const email = registerBtn.email.value;
        const password = registerBtn.password.value;
    
        if(email && password){
            createUser(email,password,{
                names,
                email,
                password,
                isAdmin: false,
            });
        } else {
            alert("Completa todos los campos porfavor");
        }
    });
}


//Firebase Login
const logIn = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);

        alert("Gracias por Ingresar de nuevo!");

        window.location = "./home.html";

    } catch (e) {
        console.log(e);
        if (e.code === "auth/wrong-password") {
            alert("La contraseña no coinciden");
        } else if (e.code === "auth/user-not-found") {
            alert("El usuario no existe");
        }
    }
}

//Function of the login page
const loginBtn = document.getElementById("logIn");
if(loginBtn !== null){
    loginBtn.addEventListener("submit", e => {
        e.preventDefault(); //cancel de reload.
        const email = loginBtn.email.value;
        const password = loginBtn.password.value;
    
        if (email && password) {
            logIn(email, password);
        } else {
            alert("completa todos los campos");
        }
    })
}



