import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // La función handleImageError se mantiene, aunque hemos simplificado el fondo.
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Rame" />
            
            {/* Contenedor principal: color de fondo muy claro (típico de Facebook) */}
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                {/* Contenedor de la vista (simula el centro de la pantalla) */}
                <div className="w-full max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                        
                        {/* COLUMNA IZQUIERDA: Logo y mensaje */}
                        <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                            <h1 className="text-6xl font-bold text-purple-600 mb-4">
                                RAME
                            </h1>
                            <p className="text-2xl text-black">
                                Conoce luagres increibles atraves de Rame.
                            </p>
                        </div>
                        
                        {/* COLUMNA DERECHA: Formulario de Login/Registro */}
                        <div className="w-full max-w-sm">
                            <div className="bg-white p-6 rounded-lg shadow-lg">

                                {/* Botón de Login (simulando el diseño de Facebook) */}
                                <Link
                                    href={route('login')}
                                    className="w-full block text-center bg-blue-600 text-white py-3 rounded-md font-bold text-xl hover:bg-blue-700 transition"
                                >
                                    Log in
                                </Link>

                                <hr className="my-4" />

                                {/* Botón de Registro (color verde de Facebook) */}
                                <Link
                                    href={route('register')}
                                    className="block w-4/5 mx-auto text-center bg-green-500 text-white py-3 rounded-md font-bold text-lg hover:bg-green-600 transition"
                                >
                                    Crear cuenta nueva
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}