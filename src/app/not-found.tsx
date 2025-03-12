import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <h1 className="text-2xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="mb-6">Lo sentimos, la página que buscas no existe.</p>
      <Link href="/">
        <button className="bg-[#91d9eb] text-white px-5 py-2.5 rounded-full hover:bg-[#7ac8db] transition-colors duration-300">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}