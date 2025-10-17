"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface TeamMember {
    name: string;
    role: string;
    img: string;
    bio: string;
    languages: string[];
    location: string;
}

const techLogos: Record<string, string> = {
    // Yazılım dilleri
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

    // Tasarım araçları
    Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    Adobe: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/250px-Adobe_Acrobat_DC_logo_2020.svg.png",
    Photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
    Illustrator: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg",
    AfterEffects: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-line.svg",
    Premiere: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premiere/premiere-line.svg",

    // Diğer araçlar ve platformlar
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",

    // Default logo
    default: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/file/file-original.svg",
};

const teamMembers: TeamMember[] = [
    {
        name: "Yunus Emre Yüksel",
        role: "Takım Lideri",
        img: "/images/emre.png",
        bio: "Web ve mobil uygulama geliştirme, robotik projeler ve takım koordinasyonu üzerine çalışıyor.",
        languages: ["Html", "Css", "JavaScript", "React"],
        location: "Ankara, Türkiye",
    },
    {
        name: "Can Akbulut",
        role: "Yazılım Geliştirici",
        img: "/images/can.png",
        bio: "Serçev MTAL Bilişim öğrencisi. 2023 yılında takıma katıldı. Web, mobil ve robotik alanlarında aktif olarak yer alıyor. TÜBİTAK 4006 gibi projelerde deneyim kazandı.",
        languages: ["Html", "Css", "JavaScript", "TypeScript", "React", "Php", "Python", "Sql", "MySQL", "C", "C#", "C++"],
        location: "Ankara, Türkiye",
    },
    {
        name: "Ömer Yiğit Yüksel",
        role: "Tasarımcı",
        img: "/images/ömer.png",
        bio: "UI/UX tasarım, kullanıcı deneyimi ve modern web arayüzleri üzerine yoğunlaşıyor.",
        languages: ["Figma", "Adobe", "Css"],
        location: "İzmir, Türkiye",
    },
    {
        name: "Arda Şengül",
        role: "Tasarımcı",
        img: "/images/arda.png",
        bio: "UI/UX tasarım, kullanıcı deneyimi ve modern web arayüzleri üzerine yoğunlaşıyor.",
        languages: ["Figma", "Adobe XD", "Css"],
        location: "İzmir, Türkiye",
    },
    {
        name: "Caner İlçe",
        role: "Tasarımcı",
        img: "/images/canoz.png",
        bio: "UI/UX tasarım, kullanıcı deneyimi ve modern web arayüzleri üzerine yoğunlaşıyor.",
        languages: ["Figma", "Adobe XD", "Css"],
        location: "İzmir, Türkiye",
    },
    {
        name: "Batuhan Çelik",
        role: "Tasarımcı",
        img: "/images/batu.png",
        bio: "UI/UX tasarım, kullanıcı deneyimi ve modern web arayüzleri üzerine yoğunlaşıyor.",
        languages: ["Figma", "Adobe XD", "Css"],
        location: "İzmir, Türkiye",
    },
];

export default function About() {
    const [selectedMember, setSelectedMember] = useState<string | null>(null);
    const member = teamMembers.find((m) => m.name === selectedMember);

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900">
            <Header />

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
                            className="cursor-pointer group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-indigo-500"
                        >
                            <div className="flex flex-col items-center p-6">
                                <div className="relative">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 group-hover:scale-105 transition-transform duration-300"
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
                            className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-2xl relative animate-slideUp"
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
                                />
                                <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                                <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                                <p className="text-gray-700 mb-4">{member.bio}</p>

                                <div className="w-full text-left">
                                    <h3 className="font-semibold mb-2 text-indigo-600">Bildiği Diller / Teknolojiler</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {member.languages.map((lang) => (
                                            <div
                                                key={lang}
                                                className="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full shadow-sm text-sm"
                                            >
                                                <img
                                                    src={techLogos[lang] || "/logos/default.png"}
                                                    alt={lang}
                                                    className="w-4 h-4 object-contain"
                                                />
                                                <span>{lang}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <h3 className="font-semibold mb-1 text-indigo-600">Konum</h3>
                                    <p>{member.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
