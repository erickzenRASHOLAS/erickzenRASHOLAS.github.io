function Body() {
    return (
        <main className="px-4 py-8">
            {/* Sección CV */}
            <section id="CV" className="max-w-4xl mx-auto mb-12 p-8 bg-white rounded-2xl shadow-lg border-t-4 border-sky-400">
                <h1 className="text-3xl font-bold text-sky-700 mb-4 border-b-2 border-sky-100 pb-2">CV</h1>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Actualmente soy estudiante de tiempo completo en la carrera de ingenieria en informatica
                    con mención en la especialidad de ciencia de datos, estudio en la insitución de DuocUC y resido en la comuna de Puente Alto.
                    poseo experiencia en multiples áreas laborales y capacidad de trabajar en grupo, adeás de ganas de nutrirme de conocimiento.
                </p>
                <dl className="space-y-4">
                    <div className="bg-sky-50 p-4 rounded-lg">
                        <dt className="font-bold text-sky-800 text-lg">Octubre-Diciembre 2024: Pizzero</dt>
                        <dd className="text-slate-600 mt-1">El trabajo consistia en realizar multiples tareas como grupo relacionadas a la preparación de los productos, tareas como preparar la materia prima, realizar inventario, limpieza de utencilios, desechar la merma entre otras actividades.</dd>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-lg">
                        <dt className="font-bold text-sky-800 text-lg">Junio-Julio 2022: Cencista</dt>
                        <dd className="text-slate-600 mt-1">Trabajo grupal en terreno para el cual pasabamos casa por casa o en puntos estrategicos realizando la encuesta del censo para todos los ciudadanos, este trabajo requeria de mucha pasciencia y calma con las personas.</dd>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-lg">
                        <dt className="font-bold text-sky-800 text-lg">Otros Trabajos</dt>
                        <dd className="text-slate-600 mt-1">He trabajado en muchos otros lugares de manera esporadica y/o informal, he realizado multiples tareas en un taller de termolaminado tambien he trabajado en almacenes y en la feria, estos son solo algunos de ejemplo, hay muchos mas lugares.</dd>
                    </div>
                </dl>
            </section>

            {/* Sección Portafolio */}
            <section id="Portafolio" className="max-w-4xl mx-auto mb-12 p-8 bg-white rounded-2xl shadow-lg border-t-4 border-sky-400">
                <h1 className="text-3xl font-bold text-sky-700 mb-4 border-b-2 border-sky-100 pb-2">Portafolio</h1>
                <dl className="space-y-6">
                    <div>
                        <dt className="font-bold text-sky-800 text-lg">Proyectos de Bases de datos</dt>
                        <dd className="text-slate-600 mt-1 mb-3">He trabajado en multiples proyectos de bases de datos asignados por los docentes, poseeo un mayor conociemnto en bases de datos relacionales con sql aunque tambien tengo algo de experiencia en bases de datos no relacionales con MongoDB aunque esta es muy miníma.</dd>
                        <a href="https://drive.google.com/drive/folders/1wTESuWi4yN8NNagKemdbcCPXelu1_oi-?usp=sharing" target="_blank" className="inline-block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors shadow">Link Con 2 proyectos</a>
                    </div>
                    <hr className="border-sky-100" />
                    <div>
                        <dt className="font-bold text-sky-800 text-lg">Machine Learning</dt>
                        <dd className="text-slate-600 mt-1 mb-3">Estoy aprendiendo machine learning, actualment mis conocimientos se centran mas en las bases y fundamos de este, además del preprocesamiento de los datos.</dd>
                        <a href="https://drive.google.com/drive/folders/1ghrL_OWeNLzfbfpVk7-UgeUQDjtYxK8D?usp=drive_link" target="_blank" className="inline-block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors shadow">Algunos trabajos realizados en el primer semestre</a>
                    </div>
                </dl>
            </section>

            {/* Sección Contacto */}
            <section id="Contacto" className="max-w-4xl mx-auto mb-12 bg-sky-100 rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12 border-2 border-sky-200">
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-black text-sky-900 tracking-tight mb-2">Contacto</h1>
                    <p className="text-lg text-sky-700 font-medium">Sitios para contactarme</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <a href="mailto:erickzen2006@gmail.com" className="group flex items-center justify-center gap-4 bg-white hover:bg-sky-50 text-sky-900 font-bold py-4 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 border border-sky-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500 group-hover:text-sky-600 transition-colors">
                            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>Primer Email</span>
                    </a>

                    <a href="mailto:erickb.rosalesparra@gmail.com" className="group flex items-center justify-center gap-4 bg-white hover:bg-sky-50 text-sky-900 font-bold py-4 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 border border-sky-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500 group-hover:text-sky-600 transition-colors">
                            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>Segundo Email</span>
                    </a>

                    <a href="https://www.linkedin.com/in/erick-rosales-34014b2aa" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 bg-white hover:bg-blue-600 hover:text-white text-sky-900 font-bold py-4 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 border border-sky-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500 group-hover:text-white transition-colors">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                        </svg>
                        <span>LinkedIn</span>
                    </a>

                    <a href="tel:+56931056468" className="group flex items-center justify-center gap-4 bg-white hover:bg-green-500 hover:text-white text-sky-900 font-bold py-4 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 border border-sky-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500 group-hover:text-white transition-colors">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Body;