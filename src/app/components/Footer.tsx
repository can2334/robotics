"use client";

export default function Footer({ theme }: { theme: "light" | "dark" }) {
    return (
        <footer
            className={`w-full py-6 mt-6 transition-colors duration-300 ${theme === "light" ? "bg-gray-100 text-gray-700" : "bg-gray-800 text-gray-200"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-center">
                    <h2 className="font-bold text-lg">Türkiye Robotics Community</h2>
                    <p className="text-sm mt-1">Ankara, Türkiye</p>
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://www.instagram.com/turkiyeroboticscommunity?igsh=MmQ4Z2s3Z2pjaGVv"
                        className={`transition ${theme === "light" ? "hover:text-gray-900" : "hover:text-white"
                            }`}
                    >
                        Instagram
                    </a>
                    <a
                        href="#"
                        className={`transition ${theme === "light" ? "hover:text-gray-900" : "hover:text-white"
                            }`}
                    >
                        Facebook
                    </a>
                    <a
                        href="#"
                        className={`transition ${theme === "light" ? "hover:text-gray-900" : "hover:text-white"
                            }`}
                    >
                        Twitter
                    </a>
                </div>

                <div className="text-center md:text-right text-sm">
                    <p>turkiyeroboticscommunity@gmail.com</p>
                    <p>+90 555 555 55 55</p>
                </div>
            </div>

            <div className={`mt-4 text-center text-xs transition-colors duration-300 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                &copy; 2025 Türkiye Robotics Community. Tüm hakları saklıdır.
            </div>
        </footer>
    );
}
