import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-col items-center justify-center space-x-2 mb-4">
            <Image
              alt="Kailash Mansarovar Logo"
              src="/logo.svg"
              width={120}
              height={120}
            />
            <span className="text-lg font-bold">Kailash Mansarovar UK</span>
          </div>
          <p className="text-gray-400 mb-4">
            Your trusted partner for the spiritual journey of a lifetime
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 kailashmansarovar.co.uk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
