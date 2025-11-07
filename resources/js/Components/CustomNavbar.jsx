// resources/js/Components/CustomNavbar.jsx

import React from 'react';
import { Link } from '@inertiajs/react';

// 👈 MUEVE ESTE COMPONENTE AUXILIAR AL INICIO
const NavLink = ({ href, active, children }) => {
    const classes = active 
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-white text-sm font-medium leading-5 text-white focus:outline-none focus:border-white transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-300 hover:text-white hover:border-gray-300 focus:outline-none focus:text-white transition duration-150 ease-in-out';

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
};
// -----------------------------------------------------

export default function CustomNavbar({ user }) {
    return (
        <nav className="bg-purple-900 border-b border-purple-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo/Nombre de la Marca */}
                    <div className="flex">
                        <Link href="/">
                            <h1 className="text-white text-2xl font-bold self-center">R E</h1>
                        </Link>
                    </div>

                    {/* Menú de Navegación Principal */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {/* NavLink ahora está definido y puede ser usado */}
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Inicio
                        </NavLink>
                        <NavLink href={route('acerca-de')} active={route().current('acerca-de')}>
                            Lugares
                        </NavLink>
                        {/* Puedes agregar más enlaces aquí */}
                    </div>

                    {/* Botón de Cuenta/Registro */}
                    <div className="flex items-center">
                        {user ? (
                            <Link href={route('profile.edit')} className="text-white hover:text-purple-300">
                                {user.name}
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-white hover:text-purple-300 mr-4">
                                    Login
                                </Link>
                                <Link href={route('register')} className="bg-white text-purple-900 font-bold py-1.5 px-3 rounded-md hover:bg-gray-200">
                                    Registro
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}