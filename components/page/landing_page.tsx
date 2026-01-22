"use client"

import {ChevronLeft, ChevronRight, ChevronDown, Check} from 'lucide-react';
import { useState } from 'react';

function LandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Ibu Kota Nusantara",
            image: "https://images.pexels.com/photos/3862639/pexels-photo-3862639.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id: 2,
            title: "Mabes Polri Presisi 1",
            image: "https://images.pexels.com/photos/3862639/pexels-photo-3862639.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id: 3,
            title: "Mabes Polri Presisi 2",
            image: "https://images.pexels.com/photos/3357933/pexels-photo-3357933.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id: 4,
            title: "Mabes Polri Presisi 3",
            image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>

                    <nav className="flex gap-8 text-white text-sm font-medium">
                        <a href="#beranda" className="hover:text-orange-500 transition">Beranda</a>
                        <a href="#proyek" className="hover:text-orange-500 transition">Proyek</a>
                        <a href="#produk" className="hover:text-orange-500 transition">Produk</a>
                        <a href="#tentang" className="hover:text-orange-500 transition">Tentang Kami</a>
                        <a href="#kontak" className="hover:text-orange-500 transition">Kontak</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="beranda" className="relative w-full h-screen overflow-hidden pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/img/modern-architecture-shapes-futuristic.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl">
                        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                            PT GRHA SINAR ARYA
                        </h1>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Official Distributor of Aluminium Composite Panels and Silicone Sealants, delivering trusted quality ACP and sealants at competitive prices.
                        </p>

                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 transition transform hover:scale-105">
                            LEARN MORE
                        </button>

                        <div className="flex items-center gap-4 mt-12">
                            <div className="w-8 h-1 bg-white"></div>
                            <div className="w-16 h-1 bg-orange-500"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-orange-500" />
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-12 border-l-4 border-r-4 border-orange-500 border-b-4 opacity-30"></div>
            </section>

            {/* Recent Works Section */}
            <section id="proyek" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-orange-500 mb-4">
                        Our Recent Works
                    </h2>

                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                        Explore our latest projects in supplying and installing Aluminium Composite Panels for commercial buildings, offices, and industrial facilities. Each project reflects our commitment to quality, precision, and reliable results.
                    </p>

                    {/* Carousel */}
                    <div className="relative">
                        {/*<div className="grid grid-cols-4 gap-6 overflow-hidden">*/}
                        {/*    {projects.map((project, index) => {*/}
                        {/*        const displayIndex = (index - currentSlide + projects.length) % projects.length;*/}
                        {/*        const isActive = displayIndex === 0;*/}

                        {/*        if (displayIndex > 0) return null;*/}

                        {/*        return (*/}
                        {/*            <div*/}
                        {/*                key={project.id}*/}
                        {/*                className={`rounded-xl overflow-hidden transition-all duration-300 ${*/}
                        {/*                    isActive ? 'col-span-1' : 'hidden'*/}
                        {/*                }`}*/}
                        {/*            >*/}
                        {/*                <div className="relative h-64 group">*/}
                        {/*                    <img*/}
                        {/*                        src={project.image}*/}
                        {/*                        alt={project.title}*/}
                        {/*                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"*/}
                        {/*                    />*/}
                        {/*                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">*/}
                        {/*                        <h3 className="text-white font-bold text-lg">{project.title}</h3>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        );*/}
                        {/*    })}*/}
                        {/*</div>*/}

                        {/* Multi-card view */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-0">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="rounded-2xl overflow-hidden group cursor-pointer"
                                >
                                    <div className="relative h-72">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                                            <h3 className="text-white font-bold text-xl">{project.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 z-20 bg-black hover:bg-orange-500 text-white rounded-full p-3 transition"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 z-20 bg-black hover:bg-orange-500 text-white rounded-full p-3 transition"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="bg-gray-900 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-gray-300 text-xl mb-16">
                        Favored by forward-thinking companies
                    </h2>

                    <div className="grid grid-cols-5 gap-8 items-center justify-items-center">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-gray-400">
                                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                <span className="font-medium">Logolpsum</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="produk" className="bg-gray-900 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-3 gap-12">
                        {[
                            {
                                title: "ACP GOODSENSE",
                                desc: "High-quality Aluminium Composite Panel designed for durability and aesthetic appeal. ACP Goodsense offers excellent weather resistance, a smooth surface finish, and a wide range of colors, making it ideal for both exterior and interior architectural applications."
                            },
                            {
                                title: "ACP GRH",
                                desc: "Reliable Aluminium Composite Panel engineered for strength and versatility. ACP GRH provides consistent quality, ease of fabrication, and dependability, making it a practical solution for commercial and industrial building projects."
                            },
                            {
                                title: "SILICONE SEALANT GRH",
                                desc: "Premium silicone sealant formulated for strong adhesion and long-lasting flexibility. Silicone Sealant GRH ensures excellent sealing performance, weather resistance, and durability, ideal for ACP installation, glass, and construction applications."
                            }
                        ].map((product, index) => (
                            <div key={index}>
                                <h3 className="text-white text-lg font-bold mb-4">{product.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{product.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl font-bold mb-12 leading-tight">
                                Our Products Offer<br />Powerful Benefits That<br />Make Your Projects Better
                            </h2>

                            <div className="space-y-6">
                                {[
                                    "High durability against various weather and climate conditions",
                                    "Ideal for both exterior and interior decorative applications",
                                    "Available in a wide range of colors and patterns",
                                    "Smooth and flat surface finish",
                                    "Easy to fabricate: can be cut, folded, drilled, and curved to match surface contours"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <Check className="w-6 h-6 text-green-500" />
                                        </div>
                                        <span className="text-gray-800 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                {
                                    title: "ACP White",
                                    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800"
                                },
                                {
                                    title: "House Nearby with Mall",
                                    image: "https://images.pexels.com/photos/3873201/pexels-photo-3873201.jpeg?auto=compress&cs=tinysrgb&w=800"
                                },
                                {
                                    title: "House Historical Building",
                                    image: "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=800"
                                },
                                {
                                    title: "Landed House with Park",
                                    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative group rounded-2xl overflow-hidden cursor-pointer h-64">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;