import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

// Datos de ejemplo para las tarjetas (Lugares mejores puntuados)
const topPlaces = [
    { 
        name: "Cerro de los Tres Cruces", 
        rating: 5, 
        imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Cerro" 
    },
    { 
        name: "Charcos de Melcocho", 
        rating: 4, 
        imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Charcos" 
    },
    { 
        name: "Loma del Asfixiadero", 
        rating: 5, 
        imageUrl: "https://placehold.co/150x150/000000/FFFFFF?text=Loma" 
    },
];

// -------------------------------------------------------------
// 1. COMPONENTE HERO HEADER
// -------------------------------------------------------------
function HeroHeader() {
    return (
        <div className="relative bg-gray-900 overflow-hidden">
            {/* Imagen de Fondo (Placeholder) */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{
                    backgroundImage: "url('https://placehold.co/1200x400/1e0a35/FFFFFF?text=Fondo+Naturaleza')",
                    backgroundColor: '#1e0a35'
                }}
            ></div>

            {/* Contenido (Overlay) */}
            <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32 flex items-center h-96">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-extrabold text-purple-200 sm:text-4xl">
                        Descubre hermosos lugares a descubrir del valle de aburra
                    </h2>
                    
                    <p className="mt-4 text-lg text-purple-300">
                        "Encuentra las joyas escondidas, los restaurantes mejor valorados y más."
                    </p>

                    <div className="mt-8">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-gray-200 transition duration-150 ease-in-out shadow-lg"
                        >
                            Explorar Lugares
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// -------------------------------------------------------------
// 2. COMPONENTE TARJETA DE LUGAR (PLACE CARD)
// -------------------------------------------------------------
const PlaceCard = ({ name, rating, imageUrl }) => {
    // Genera las estrellas de rating (llenas y vacías)
    const stars = Array(5).fill(0).map((_, index) => (
        <span 
            key={index}
            // Estrella llena (morada brillante) o vacía (gris claro)
            className={`text-2xl ${index < rating ? 'text-purple-500' : 'text-gray-600'}`}
        >
            ★
        </span>
    ));

    return (
        <div className="flex flex-col items-center p-4">
            {/* Imagen del Lugar (Circular con sombra) */}
            <div className="relative w-40 h-40">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover rounded-full shadow-lg border-4 border-purple-500 transform transition duration-300 hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/000000/FFFFFF?text=Lugar" }}
                />
            </div>
            
            {/* Nombre del Lugar */}
            <p className="mt-4 text-white text-center font-semibold uppercase text-sm tracking-wider">
                {name}
            </p>

            {/* Rating (Estrellas) */}
            <div className="flex justify-center mt-2">
                {stars}
            </div>
        </div>
    );
}

// -------------------------------------------------------------
// 3. COMPONENTE DE SECCIÓN (Dashboard)
// -------------------------------------------------------------
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={null} 
        >
            <Head title="Inicio" />

            {/* SECCIÓN PRINCIPAL HERO HEADER */}
            <HeroHeader />

            {/* SECCIÓN: LUGARES MEJORES PUNTUADOS */}
            <div className="bg-gray-900 py-12"> {/* Fondo oscuro para toda la sección */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Título de la Sección */}
                    <h3 className="text-3xl font-extrabold text-white text-center mb-10">
                        Lugares mejores puntuados
                    </h3>

                    {/* Contenedor de las Tarjetas (Grid Responsive) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {topPlaces.map((place, index) => (
                            <PlaceCard 
                                key={index}
                                name={place.name}
                                rating={place.rating}
                                imageUrl={place.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* SECCIÓN: RESTAURANTES MÁS BUSCADOS (Placeholder) */}
            <div className="bg-gray-900 py-12 border-t border-purple-800">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-extrabold text-white text-center mb-10">
                        Restaurantes mas buscados
                    </h3>
                    {/* Aquí irán las tarjetas de restaurantes */}
                    <p className="text-gray-500 text-center">Contenido de Restaurantes Pendiente</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
