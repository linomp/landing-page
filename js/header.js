const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    @import url("../css/output.css");
  </style>
  <header class="w-full container mx-auto">
    <div class="flex flex-col items-center py-12">
      <a class="text-medium font-bold text-yellow-200 hover:text-yellow-50 text-5xl" href="/index.html">
        { }
      </a>
      <p class="text-small text-white mt-4">
        Between two worlds
      </p>
    </div>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

customElements.define('header-component', Header);
