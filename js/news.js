import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, doc, collection, getDoc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

let newsArray = [];
let userLogged = null;

//const spinner = document.getElementById("spinner");

//Firebase reader
const getAllNews = async () => {
    const collectionRef = collection(db, "news");
    const { docs } = await getDocs(collectionRef);

    newsArray = docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    });
    // Reload
    newsArray.forEach(news => {
        // Llamo la funcion productTemplate para cada product.
        newsTemplate(news);
    });
    return newsArray;
};

// Añadir cada producto a un elemento contenedor
const newsSectionPriority = document.getElementById("priority");
const newsSectionNormal = document.getElementById("normals");

const newsTemplate = (item) => {
    if (item.type == "priority") {
        //console.log("funciono porque hay " + item.type);
        // Making the user go to the new to see it more.
        const news = document.createElement("a");
        news.className = "news"; //CSS!
    
        // create a new href with the id, this make the user read the news and without me coding every news html.
        news.setAttribute("href", `./home-clicknews.html?id=${item.id}`);
    
        //A don't think it is necesary but it is here for some reasons
        const thumbnail = 'https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png';
    
        // in the "Div" section... It will be write like this the HTML.
        news.innerHTML = `
        <div class="news__description">
            <h2 class="news__title">${item.title}</h2>
            <figure>
                <img src="${item.image !== '' ? item.image : thumbnail}" alt="${item.title}" class="news__image">
                    <div class="news__summary">
                        <p>${item.summary}</p>
                    </div>
                    <div class="news__date">
                        <p>${item.date}</p>
                    </div>
            </figure>
        </div>
        `;
    
        // Agregar cada newso a nuestro contenedor
        newsSectionPriority.appendChild(news);
    } else {
        console.log("funciono porque hay " + item.type);
        // Making the user go to the new to see it more.
        const news = document.createElement("a");
        news.className = "news"; //CSS!
    
        // create a new href with the id, this make the user read the news and without me coding every news html.
        news.setAttribute("href", `./news.html?id=${item.id}`);
    
        //A don't think it is necesary but it is here for some reasons
        const thumbnail = 'https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png';
    
        // in the "Div" section... It will be write like this the HTML.
        news.innerHTML = `
        <div class="news__description">
            <h2 class="news__title">${item.title}</h2>
            <figure>
                <img src="${item.image !== '' ? item.image : thumbnail}" alt="${item.title}" class="news__image">
                    <div class="news__summary">
                        <p>${item.summary}</p>
                    </div>
                    <div class="news__date">
                        <p>${item.date}</p>
                    </div>
            </figure>
        </div>
        `;
    
        // Agregar cada newso a nuestro contenedor
        newsSectionNormal.appendChild(news);
    }
};

getAllNews();

/*const filterByCategory = document.getElementById("categories");
const orderBySelect = document.getElementById("orderBy");

const loadProducts = () => {
    const category = filterByCategory.value || "";
    const order = orderBySelect.value || "";

    //Borra los productos de antes
    productsSection.innerHTML = "";

    let filteredProductsByCategory;

    if (category !== "") {
        filteredProductsByCategory = products.filter((product) => product.type === category);
    } else {
        filteredProductsByCategory = products;
    }

    if (order === "asc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => a.price - b.price);
    }
    if (order === "desc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => b.price - a.price);
    }

    filteredProductsByCategory.forEach(product => {
        productTemplate(product);
    });
}

filterByCategory.addEventListener("change", e => {
    loadProducts();
});

orderBySelect.addEventListener("change", e => {
    loadProducts();
});*/


