function Header() {
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");

    header.appendChild(headerTitle);

    return header;
}

export default Header;