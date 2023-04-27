class MyNavigation extends HTMLElement {
    constructor() {
        super();
        this.connectedCallback();
        this.attachShadow({ mode: 'open' });
        this.auth = firebaseApp.auth();
        this.db = firebaseApp.firestore();
        this.shadowRoot.innerHTML = `   
        <link rel="stylesheet" href="./CSS Responsive/global.css">
      <!--<button onclick=history.back()> < </button>-->
        <a href=javascript:history.back()><</a>
        <p>Menu</p>
        <ul class="menu__list">
            <li>Sobre tuBosque</li>
            <li>Preguntas frecuentes</li>
            <li>Ayuda</li>
            <li>
                <button id="signOut">Sign out!
            </li>
        </ul>
        
      `;
    }

    connectedCallback() {
        // Your Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAU2qqu0e8ZoQNqUxArGfQu0oOCkvFDVMw",
            authDomain: "pdg-2-634f3.firebaseapp.com",
            projectId: "pdg-2-634f3",
            storageBucket: "pdg-2-634f3.appspot.com",
            messagingSenderId: "783079782583",
            appId: "1:783079782583:web:156af0ef83a7c6ac97b532"
        };

        // Import Firebase SDKs
        const firebaseApp = document.createElement('script');
        firebaseApp.src = 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
        firebaseApp.onload = () => {
            const firebaseDatabase = document.createElement('script');
            firebaseDatabase.src = 'https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js';
            firebaseDatabase.onload = () => {
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);
                // Now you can start using Firebase in your component
            }
            document.head.appendChild(firebaseDatabase);
        }
        document.head.appendChild(firebaseApp);

    }
}
customElements.define('my-navigation', MyNavigation);