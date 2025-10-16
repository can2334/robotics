"use client";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 text-gray-700 py-6 mt-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <h2 className="font-bold text-lg">Türkiye Robotics Community</h2>
                    <p className="text-sm mt-1">Ankara, Türkiye</p>
                </div>

                <div className="flex gap-4">
                    <a href="https://www.instagram.com/turkiyeroboticscommunity?igsh=MmQ4Z2s3Z2pjaGVv" className="hover:text-gray-900 transition">Instagram</a>
                    <a href="#" className="hover:text-gray-900 transition">Facebook</a>
                    <a href="#" className="hover:text-gray-900 transition">Twitter</a>
                </div>

                <div className="text-center md:text-right text-sm">
                    <p>info@dernek.com</p>
                    <p>+90 555 555 55 55</p>
                </div>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
                &copy; 2025 Türkiye Robotics Community. Tüm hakları saklıdır.
            </div>
        </footer>
    );
}
