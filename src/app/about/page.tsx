"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const teamMembers = [
    {
        name: "Yunus Emre Yüksel",
        role: "Takım Lideri",
        img: "/images/yazilim.jpg",
        bio: "Web ve mobil uygulama geliştirme, robotik projeler...",
        languages: ["Html"],
        location: "Ankara, Türkiye"
    },
    {
        name: "Can Akbulut",
        role: "Yazılım Geliştirici",
        img: "/images/yazilim.jpg",
        bio: "Serçev Mesleki ve Teknik Anadolu Lisesi Bilişim Öğrencisi. 2023 yılında takıma katıldı. Web ve mobil projeler ile robotik yarışmalarda (VEX V5 Over Under) mekanik ve yazılım alanında başarılar elde etti. TÜBİTAK 4006 gibi bilimsel organizasyonlarda yer aldı. Görevlerini özveriyle tamamlayan, çözüm odaklı bir takım oyuncusudur.",
        languages: ["Html", "Css", "JavaScript", "TypeScript", "React", "Php", "Python", "Sql", "MySQL", "C", "C#", "C++"],
        location: "Ankara, Türkiye"
    },
    {
        name: "Arda Şengül",
        role: "Tasarımcı",
        img: "/images/yazilim.jpg",
        bio: "UI/UX ve modern tasarım konularında çalışıyor.",
        languages: ["Figma", "Adobe XD", "CSS"],
        location: "İzmir, Türkiye"
    },
];


export default function About() {
    const [selectedMember, setSelectedMember] = useState<string | null>(null);

    const member = teamMembers.find(m => m.name === selectedMember);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
            <Header />

            <main className="flex-1 max-w-6xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Hakkımızda</h1>
                <p className="text-center mb-12">
                    Biz, teknoloji ve yaratıcılığı birleştiren bir ekibiz. Web, mobil ve robotik projelerde birlikte çalışıyoruz.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => setSelectedMember(member.name)}
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedMember && member && (
                    <div
                        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
                        onClick={() => setSelectedMember(null)}
                    >
                        <div
                            className="bg-white p-8 rounded-lg max-w-lg max-h-[80vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
                                onClick={() => setSelectedMember(null)}
                            >
                                X
                            </button>
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h2 className="text-2xl font-bold text-center">{member.name}</h2>
                            <p className="text-center text-gray-600">{member.role}</p>

                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">Bildiği Diller / Teknolojiler:</h3>
                                <div className="grid grid-cols-3 gap-2 text-center">
                                    {member.languages.map((lang) => (
                                        <div
                                            key={lang}
                                            className="bg-gray-100 rounded px-2 py-1 text-sm shadow-sm"
                                        >
                                            {lang}
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-4">
                                <h3 className="font-semibold mb-1">Hakkında:</h3>
                                <p>{member.bio}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold mb-1">Konum:</h3>
                                <p>{member.location}</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
