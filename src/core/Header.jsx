function Header() {
    return (
        <header className="bg-sky-600 shadow-md sticky top-0 z-50">
            <nav className="flex justify-center gap-8 py-4">
                <a href="#CV" className="text-white font-semibold hover:text-sky-200 transition-colors">Cv</a>
                <a href="#Portafolio" className="text-white font-semibold hover:text-sky-200 transition-colors">Portafolio</a>
                <a href="#Contacto" className="text-white font-semibold hover:text-sky-200 transition-colors">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;