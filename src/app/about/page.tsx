"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeContext"; // context'ten alıyoruz
import Head from "next/head";

interface TeamMember {
    name: string;
    role: string;
    img: string;
    bio: string;
    languages: string[];
    Technology: string[];
    location: string;
}

const techLogos: Record<string, string> = {
    Html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    Css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sql/sql-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Adobe XD": "https://upload.wikimedia.org/wikipedia/commons/9/90/Adobe_XD_CC_icon.svg",
    Photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
    Illustrator: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg",
    AfterEffects: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-line.svg",
    Premiere: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premiere/premiere-line.svg",
    Adobe: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/250px-Adobe_Acrobat_DC_logo_2020.svg.png",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    default: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/file/file-original.svg",
};

const teamMembers: TeamMember[] = [
    {
        name: "Yunus Emre Yüksel",
        role: "Takım Lideri",
        img: "/images/emre.png",
        bio: "Web ve mobil uygulama geliştirme, robotik projeler ve takım koordinasyonu üzerine çalışıyor.",
        languages: ["Html", "Css", "JavaScript", "React"],
        Technology: [],
        location: "Ankara, Türkiye",
    },
    {
        name: "Can Akbulut",
        role: "Yazılım Geliştirici",
        img: "/images/can.png",
        bio: "Serçev MTAL Bilişim öğrencisi. 2023 yılında takıma katıldı. Web, mobil ve robotik alanlarında aktif olarak yer alıyor.",
        languages: ["Html", "Css", "JavaScript", "TypeScript", "React", "Php", "Python", "Sql", "MySQL", "C", "C#", "C++"],
        Technology: [],
        location: "Ankara, Türkiye",
    },
    {
        name: "Ömer Yiğit Yüksel",
        role: "Tasarımcı",
        img: "/images/ömer.png",
        bio: "UI/UX tasarım, kullanıcı deneyimi ve modern web arayüzleri üzerine yoğunlaşıyor.",
        languages: [],
        Technology: ["Figma", "Adobe", "Css"],
        location: "Ankara, Türkiye",
    },
    // diğer üyeleri aynı şekilde ekleyebilirsin
];

export default function About() {
    const { theme, toggleTheme } = useTheme();
    const [selectedMember, setSelectedMember] = useState<string | null>(null);
    const member = teamMembers.find((m) => m.name === selectedMember);

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-white"}`}>
            <Head>
                <title>Türkiye Robotics Community - Takım</title>
                <meta
                    name="description"
                    content="Türkiye Robotics Community ekibi olarak teknolojiyi, mühendisliği ve yaratıcılığı birleştiriyoruz."
                />
                <meta name="keywords" content="robotik, yazılım, tasarım, mühendislik, takım üyeleri" />
            </Head>

            <Header theme={theme} toggleTheme={toggleTheme} />

            <main className="flex-1 max-w-6xl mx-auto p-8">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                    Takım Üyeleri
                </h1>
                <p className="text-center mb-12 text-gray-600">
                    Türkiye Robotics Community ekibi olarak teknolojiyi, mühendisliği ve yaratıcılığı birleştiriyoruz.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            onClick={() => setSelectedMember(member.name)}
                            className="cursor-pointer group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-indigo-500"
                        >
                            <div className="flex flex-col items-center p-6">
                                <div className="relative">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-20 transition" />
                                </div>
                                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedMember && member && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
                        onClick={() => setSelectedMember(null)}
                    >
                        <div
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-lg w-full shadow-2xl relative animate-slideUp"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                            >
                                ×
                            </button>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-28 h-28 rounded-full border-4 border-indigo-500 mb-4"
                                    loading="lazy"
                                />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{member.role}</p>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{member.bio}</p>

                                <div className="w-full text-left">
                                    {member.languages.length > 0 && (
                                        <>
                                            <h3 className="font-semibold mb-2 text-indigo-600">Bildiği Yazılım Dilleri</h3>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {member.languages.map((lang) => (
                                                    <div
                                                        key={lang}
                                                        className="flex items-center gap-1 bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-indigo-300 px-2 py-1 rounded-full shadow-sm text-sm"
                                                    >
                                                        <img
                                                            src={techLogos[lang] || techLogos.default}
                                                            alt={lang}
                                                            className="w-4 h-4 object-contain"
                                                            loading="lazy"
                                                        />
                                                        <span>{lang}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {member.Technology.length > 0 && (
                                        <>
                                            <h3 className="font-semibold mb-2 text-indigo-600">Kullandığı Teknolojiler / Araçlar</h3>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {member.Technology.map((tech) => (
                                                    <div
                                                        key={tech}
                                                        className="flex items-center gap-1 bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-indigo-300 px-2 py-1 rounded-full shadow-sm text-sm"
                                                    >
                                                        <img
                                                            src={techLogos[tech] || techLogos.default}
                                                            alt={tech}
                                                            className="w-4 h-4 object-contain"
                                                            loading="lazy"
                                                        />
                                                        <span>{tech}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    <h3 className="font-semibold mb-1 text-indigo-600">Konum</h3>
                                    <p>{member.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer theme={theme} />
        </div>
    );
}
