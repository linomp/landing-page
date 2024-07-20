class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="w-full py-4 bg-black shadow">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
                    <nav>
                        <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                            <li><a href="/index.html" class="uppercase px-3">home</a></li>
                            <li><a href="#" class="uppercase px-3">code</a></li>
                            <li><a onmousedown="playClip()" href="#" class="uppercase px-3">music</a></li>
                            <li><a href="/gallery.html" class="uppercase px-3">gallery</a></li>
                        </ul>
                    </nav>
                    <div class="flex items-center text-lg no-underline text-white pr-6">
                        <a class="" href="https://github.com/linomp" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <a class="pl-6" href="https://www.linkedin.com/in/lino-mp/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-component', Nav);
