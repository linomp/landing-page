const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
        @import url("../css/output.css");
    </style>
    <footer class="w-full border-t bg-black pb-12 text-white">
        <div class="w-full container mx-auto flex flex-col items-center">
            <div class="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
                <a href="/index.html" class="uppercase px-3">About me</a>
                <a href="https://www.youtube.com/@thisaintmyrealname1/featured" class="uppercase px-3"
                    target="_blank">videos</a>
                <a href="#" class="uppercase px-3">Contact</a>
            </div>
            <div class="lowercase pb-6">&copy; 2024 // p o i n t l e s s</div>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('footer-component', Footer);
