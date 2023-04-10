/* Create a custom web component */
class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
    <style>
    *{
        font-family: Poppins;
    }
            a {
                text-decoration: none; 
            }
    </style>

    <div class="footer__report">
            <a href="">
                <p>Reportar</p>
            </a>
        </div>

        <div class="footer__home">
            <a href="./home.html">
                <p>Inicio</p>
            </a>
        </div>
        
        <div class="footer__profile">
            <a href="./profile.html">
                <p>Perfil</p>
            </a>
        </div>
    `;
    }
}
customElements.define('my-footer', MyFooter);