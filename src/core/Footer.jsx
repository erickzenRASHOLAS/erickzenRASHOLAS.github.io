
function Footer() {
    return (
        <footer className="text-center pb-8 pt-4 flex flex-col items-center justify-center gap-4">
            <img
                className="rounded-full w-16 h-16 object-cover shadow-sm opacity-20"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsSSTwXYokGbjRsKtw4oEdNkq-EnkFtHip1ZOHGN6Gg&s=10"
                alt="Logo"
            />
            <p className="text-sky-800 font-medium text-sm">
                Erick Rosales © Todos los derechos reservados
            </p>
        </footer>
    );
}

export default Footer;