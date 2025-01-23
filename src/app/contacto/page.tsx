"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Home, Calculator } from 'lucide-react';
import { Header } from '@/components/Header'

function App() {
  const [activeForm, setActiveForm] = useState<'contact' | 'valuation'>('contact');

  const inputClasses = "mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3";
  const selectClasses = "mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <Header/>
        <div className="inset-0 bg-opacity-50 flex items-center justify-center">
          <p className="text-4xl font-bold text-gray-600 text-center">
            Contactanos
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Forms */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Form Selector */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveForm('contact')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                  activeForm === 'contact'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Home className="inline-block w-5 h-5 mr-2" />
                Contacto
              </button>
              <button
                onClick={() => setActiveForm('valuation')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                  activeForm === 'valuation'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Calculator className="inline-block w-5 h-5 mr-2" />
                Tasación
              </button>
            </div>

            {/* Contact Form */}
            {activeForm === 'contact' && (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                  <input
                    type="text"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="tel"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea
                    rows={4}
                    className={inputClasses}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}

            {/* Valuation Form */}
            {activeForm === 'valuation' && (
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tipo de Propiedad</label>
                    <select className={selectClasses}>
                      <option>Casa</option>
                      <option>Departamento</option>
                      <option>Terreno</option>
                      <option>Campo</option>
                      <option>Local Comercial</option>
                      <option>Oficina</option>
                      <option>Galpón</option>
                      <option>Cochera</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Operación</label>
                    <select className={selectClasses}>
                      <option>Vender</option>
                      <option>Alquilar</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Provincia</label>
                    <select className={selectClasses}>
                      <option>Río Negro</option>
                      <option>Neuquén</option>
                      <option>Chubut</option>
                      <option>Santa Cruz</option>
                      <option>Tierra del Fuego</option>
                      <option>La Pampa</option>
                      <option>Buenos Aires (Sur)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Localidad</label>
                    <input
                      type="text"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Dirección</label>
                  <input
                    type="text"
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Superficie Cubierta (m²)</label>
                    <input
                      type="number"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Superficie Total (m²)</label>
                    <input
                      type="number"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Datos de Contacto</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nombre Completo"
                      className={inputClasses}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className={inputClasses}
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Solicitar Tasación
                </button>
              </form>
            )}
          </div>

          {/* Right Column - Map and Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span>Onelli 2747, R8430 El Bolsón, Río Negro</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <span>+54 9 294 430-4851</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <span>igrouppatagonia@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Nuestra Ubicación</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2966.671173216947!2d-71.5378725!3d-41.9643975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961bbf6349ea8599%3A0xbdf86978f9c47c39!2sInmobiliaria%20Igroup%20patagonia!5e0!3m2!1ses-419!2sar!4v1736795534044!5m2!1ses-419!2sar"
                  className="w-full h-[400px] rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;