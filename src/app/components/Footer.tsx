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

                <div className="flex gap-4 items-center">
                    <a
                        href="https://www.instagram.com/turkiyeroboticscommunity?igsh=MmQ4Z2s3Z2pjaGVv"
                        className={`flex items-center transition ${theme === "light" ? "hover:text-gray-900" : "hover:text-white"}`}
                    >
                        {/* Instagram SVG ikonu */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 mr-2"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.415a4.92 4.92 0 011.675 1.093 4.92 4.92 0 011.093 1.675c.175.46.36 1.26.415 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.43a4.902 4.902 0 01-1.093 1.675 4.902 4.902 0 01-1.675 1.093c-.46.175-1.26.36-2.43.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.415a4.92 4.92 0 01-1.675-1.093 4.92 4.92 0 01-1.093-1.675c-.175-.46-.36-1.26-.415-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.43a4.902 4.902 0 011.093-1.675 4.902 4.902 0 011.675-1.093c.46-.175 1.26-.36 2.43-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.777.131 4.802.31 4.042.575a7.077 7.077 0 00-2.55 1.63A7.077 7.077 0 00.575 4.042c-.265.76-.444 1.735-.503 3.01C.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.059 1.275.238 2.25.503 3.01a7.077 7.077 0 001.63 2.55 7.077 7.077 0 002.55 1.63c.76.265 1.735.444 3.01.503 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.275-.059 2.25-.238 3.01-.503a7.077 7.077 0 002.55-1.63 7.077 7.077 0 001.63-2.55c.265-.76.444-1.735.503-3.01.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.275-.238-2.25-.503-3.01a7.077 7.077 0 00-1.63-2.55 7.077 7.077 0 00-2.55-1.63c-.76-.265-1.735-.444-3.01-.503C15.668.013 15.259 0 12 0z" />
                            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                        </svg>
                        Instagram
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
