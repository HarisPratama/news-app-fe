"use client"

import {ChevronDown, Check} from 'lucide-react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import { Accordion } from '@radix-ui/react-accordion';
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";

function LandingPage() {

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
        },
        {
            id: 5,
            title: "Mabes Polri Presisi 3",
            image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="hidden md:grid md:grid-cols-3 gap-1">
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
                        <div className="md:hidden">
                            <Drawer direction={"left"}>
                                <DrawerTrigger>
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
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>PT GRHA SINAR ARYA</DrawerTitle>
                                    </DrawerHeader>
                                    <div className="p-4 pb-0">
                                        <nav className="flex flex-col gap-8  text-sm font-medium">
                                            <a href="#beranda" className="hover:text-orange-500 transition">Beranda</a>
                                            <a href="#proyek" className="hover:text-orange-500 transition">Proyek</a>
                                            <a href="#produk" className="hover:text-orange-500 transition">Produk</a>
                                            <a href="#tentang" className="hover:text-orange-500 transition">Tentang Kami</a>
                                            <a href="#kontak" className="hover:text-orange-500 transition">Kontak</a>
                                        </nav>
                                    </div>
                                    <DrawerFooter>
                                        <div className="border-t pb-4 mt-12 pt-6 text-sm text-center">
                                            © All Rights Reserved GSA Indonesia 2026
                                        </div>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#beranda">Beranda</NavigationMenuLink>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#proyek">Proyek</NavigationMenuLink>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#produk">Produk</NavigationMenuLink>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#tentang">Tentang Kami</NavigationMenuLink>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#kontak">Kontak</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
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

                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="relative z-10 h-screen flex flex-col justify-center max-w-7xl mx-auto px-6">
                                <div className="max-w-2xl">
                                    <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                                        PT GRHA SINAR ARYA
                                    </h1>

                                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                        Official Distributor of Aluminium Composite Panels and Silicone Sealants, delivering trusted
                                        quality ACP and sealants at competitive prices.
                                    </p>

                                    <button
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 transition transform hover:scale-105">
                                        LEARN MORE
                                    </button>

                                    <div className="flex items-center gap-4 mt-12">
                                        <div className="w-8 h-1 bg-white"></div>
                                        <div className="w-16 h-1 bg-orange-500"></div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-orange-500"/>
                </div>

                <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-12 border-l-4 border-r-4 border-orange-500 border-b-4 opacity-30"></div>
            </section>

            {/* Recent Works Section */}
            <section id="proyek" className="h-screen overflow-hidden py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-orange-500 mb-4">
                        Our Recent Works
                    </h2>

                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                        Explore our latest projects in supplying and installing Aluminium Composite Panels for
                        commercial buildings, offices, and industrial facilities. Each project reflects our commitment
                        to quality, precision, and reliable results.
                    </p>

                    {/* Carousel */}
                    <div className="">

                        {/* Multi-card view */}
                        <Carousel
                            opts={{
                                align: "center",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {projects.map((project) => (
                                    <CarouselItem
                                        key={project.id}
                                        className="basis-1/1 lg:basis-1/4"
                                    >
                                        <div className="relative h-full w-[260px]">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                                                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </Carousel>

                        {/* Navigation Buttons */}
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="bg-gray-900 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-gray-300 text-xl mb-16">
                        Favored by forward-thinking companies
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
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
                    <div className="grid md:grid-cols-3 gap-12">
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
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl font-bold mb-12 leading-tight">
                                Our Products Offer<br/>Powerful Benefits That<br/>Make Your Projects Better
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
                                            <Check className="w-6 h-6 text-green-500"/>
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
                                <div key={index}
                                     className="relative group rounded-2xl overflow-hidden cursor-pointer h-64">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/*  Who we work sith  */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-center text-2xl font-semibold mb-12">
                        Who We Work With
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex items-center justify-center border bg-gray-100 h-40">
                            <img
                                src="https://proav.co.id/wp-content/uploads/2023/10/logo-MRT_Jakarta_vertical-x400.webp"
                                alt="MRT Jakarta" className="max-h-20 object-contain"/>
                        </div>

                        <div className="flex items-center justify-center border bg-gray-100 h-40">
                            <img
                                src="https://iconlogovector.com/uploads/images/2024/03/lg-65e38a127729f-LRT-Jakarta.webp"
                                alt="LRT Jakarta" className="max-h-16 object-contain"/>
                        </div>

                        <div className="flex items-center justify-center border bg-gray-100 h-40">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Sinar_Mas_Land_Logo.png"
                                 alt="Sinarmas Land" className="max-h-12 object-contain"/>
                        </div>

                        <div className="flex items-center justify-center border bg-gray-100 h-40">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/1280px-Bank_Syariah_Indonesia.svg.png"
                                alt="BSI" className="max-h-20 object-contain"/>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Our Happy Client  */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-center text-2xl font-semibold mb-12">
                        Our Happy Clients
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black text-white rounded-2xl p-6">
                            <div className="flex text-orange-400 mb-4">
                                ★★★★★
                            </div>

                            <p className="text-sm leading-relaxed mb-6 text-gray-200">
                                Tidak digarukan lagi, kualitas ACP Goodsense sangat cocok
                                untuk bangunan yang sedang kami kerjakan, sukses selalu...
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                                    alt="Evelin Bie"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold">Evelin Bie</p>
                                    <p className="text-xs text-gray-400">Full-Time Traveler</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black text-white rounded-2xl p-6">
                            <div className="flex text-orange-400 mb-4">★★★★★</div>
                            <p className="text-sm leading-relaxed mb-6 text-gray-200">
                                Price was too low yet luxury.
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                                    className="w-10 h-10 rounded-full"/>
                                <div>
                                    <p className="text-sm font-semibold">Evelin Bie</p>
                                    <p className="text-xs text-gray-400">Full-Time Traveler</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black text-white rounded-2xl p-6">
                            <div className="flex text-orange-400 mb-4">★★★★★</div>
                            <p className="text-sm leading-relaxed mb-6 text-gray-200">
                                It’s just amazing, will be back.
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                                    className="w-10 h-10 rounded-full"/>
                                <div>
                                    <p className="text-sm font-semibold">Evelin Bie</p>
                                    <p className="text-xs text-gray-400">Full-Time Traveler</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black text-white rounded-2xl p-6">
                            <div className="flex text-orange-400 mb-4">★★★★★</div>
                            <p className="text-sm leading-relaxed mb-6 text-gray-200">
                                It’s just amazing, will be back.
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                                    className="w-10 h-10 rounded-full"/>
                                <div>
                                    <p className="text-sm font-semibold">Evelin Bie</p>
                                    <p className="text-xs text-gray-400">Full-Time Traveler</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black text-white rounded-2xl p-6">
                            <div className="flex text-orange-400 mb-4">
                                ★★★★★
                            </div>

                            <p className="text-sm leading-relaxed mb-6 text-gray-200">
                                Tidak digarukan lagi, kualitas ACP Goodsense sangat cocok
                                untuk bangunan yang sedang kami kerjakan, sukses selalu...
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                                    alt="Evelin Bie"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold">Evelin Bie</p>
                                    <p className="text-xs text-gray-400">Full-Time Traveler</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black text-white rounded-2xl p-6">
                            <div className="flex text-orange-400 mb-4">
                                ★★★★★
                            </div>

                            <p className="text-sm leading-relaxed mb-6 text-gray-200">
                                Tidak digarukan lagi, kualitas ACP Goodsense sangat cocok
                                untuk bangunan yang sedang kami kerjakan, sukses selalu...
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                                    alt="Evelin Bie"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold">Evelin Bie</p>
                                    <p className="text-xs text-gray-400">Full-Time Traveler</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*  Support / FAQ Section  */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold mb-10">Support</h2>

                    <div className="space-y-6">
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="shipping"
                            className="max-w-lg"
                        >
                            <AccordionItem value="shipping">
                                <AccordionTrigger>
                                    What is Aluminium Composite Panel (ACP)?
                                </AccordionTrigger>
                                <AccordionContent></AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="returns">
                                <AccordionTrigger>
                                    What are ACP panels commonly used for?
                                </AccordionTrigger>
                                <AccordionContent></AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="suport">
                                <AccordionTrigger>
                                    What are the advantages of using ACP compared to other materials?
                                </AccordionTrigger>
                                <AccordionContent></AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="question">
                                <AccordionTrigger>
                                    What ACP thickness options do you provide?
                                </AccordionTrigger>
                                <AccordionContent></AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/*  Footer Section  */}
            <footer className="bg-black text-gray-400 pt-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

                        <div>
                            <h4 className="text-white font-semibold mb-4">Solutions</h4>
                            <ul className="space-y-2 text-sm">
                                <li>Credit Rewards</li>
                                <li>Open for Listing</li>
                                <li>AI Automation</li>
                                <li>APIs Developer</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li>Featured House</li>
                                <li>Browse Categories</li>
                                <li className="text-orange-500 font-medium">Special Awards</li>
                                <li>Made-in Bandung</li>
                                <li>Exclusive Style</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li>About Us</li>
                                <li>Our Investors</li>
                                <li>Careers</li>
                                <li>Media Press</li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <h4 className="text-white font-semibold mb-4">NEWSLETTER</h4>

                            <div className="flex bg-white rounded-full overflow-hidden mb-6">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-1 px-5 py-3 text-sm text-black outline-none"
                                />
                                <button className="bg-orange-500 text-black px-6 font-semibold">
                                    Subscribe
                                </button>
                            </div>

                            <p className="text-sm text-white mb-2">Choose Language</p>
                            <div className="flex items-center gap-2 text-sm">
                                <span>🇬🇧</span>
                                <span className="text-white">English (UK)</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pb-4 mt-12 pt-6 text-sm text-center">
                        © All Rights Reserved GSA Indonesia 2026
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;