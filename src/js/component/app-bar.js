class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav role="navigation" class="blue darken-4">
                <div class="nav-wrapper container">
                    <img src="../../images/logo.png" class="brand-logo" id="logo-container" alt="logo" style="width:150px; height: 80px; margin-top:-10px;">
                    <a href="#" class="sidenav-trigger" data-target="nav-mobile">&#9776;</a>
                    <ul class="topnav right hide-on-med-and-down"></ul>
                    <ul class="sidenav" id="nav-mobile"></ul>
                </div>
            </nav>
        `;
    }
}
customElements.define("app-bar", AppBar);