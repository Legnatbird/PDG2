class MyFooter extends HTMLElement {
    constructor() {
      super();

      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          button {
            background-color: blue;
            color: white;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
        <button>Hello, World!</button>
        <div>Why I cant appear like a normal</div>
      `;

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }