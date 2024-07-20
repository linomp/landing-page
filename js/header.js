class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="w-full container mx-auto">
                <div class="flex flex-col items-center py-12">
                    <a class="text-medium  font-bold text-yellow-200 hover:text-yellow-50 text-5xl" href="#">
                        { }
                    </a>
                    <p class="text-small text-white mt-4">
                        Between two worlds
                    </p>
                </div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);
