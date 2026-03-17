import { consImage } from "../../../public/constImage";

export default function Header() {
  return (
    <nav className="bg-red-900 border-b-4 border-gray-200 print:hidden">
      
      <div className="relative flex items-center py-4 px-6">

        {/* Logo Left */}
        <div className="absolute left-6 print:hidden">
          <img
            src={`${consImage.baseURL}${consImage.logo}`}
            alt="Logo"
            className="h-14 w-14 bg-white p-1"
          />
        </div>

        {/* Center Title */}
        <div className="w-full text-center print:hidden">
          <h1 className="text-white text-4xl font-bold tracking-wide">
            Manorama Charitable Trust
          </h1>
        </div>

      </div>

    </nav>
  );
}