import React, { useState }  from "react";
import logo from '../images/ailimitsblackfull.jpeg'
import logogrey from '../images/alimitsDark.png'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

export default function AILimitsLayout() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <div className="min-h-screen mainBackground text-white font-sans">
      {/* Navbar */}
      <header className="relative flex items-center justify-center px-20 py-5 bg-black border-b border-black-800">
        {/* Логотип по центру */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
            <img className="w-28 margin-top30" src={logogrey} alt="logo" />
        </div>

        {/* Бургер справа (на мобилках) */}
        <div className="ml-auto sm:hidden">
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-4xl focus:outline-none"
            >
            ☰
            </button>
        </div>

        {/* Навигация и языки для десктопа */}
        <div className="hidden sm:flex justify-between w-full items-center">
            {/* Навигация */}
            <nav className="space-x-6 text-gray-300 text-sm">
            <a href="#" className="hover:text-white">{t('header.about')}</a>
            <a href="/#/catalog" className="hover:text-white">{t('header.catalog')}</a>
            <a href="#" className="hover:text-white">{t('header.reviews')}</a>
            <a href="#" className="hover:text-white">{t('header.contact')}</a>
            </nav>

            {/* Языки */}
            <div className="space-x-2">
            <button onClick={() => i18n.changeLanguage('ru')} className="text-sm text-gray-400 hover:text-white">RU</button>
            <button onClick={() => i18n.changeLanguage('en')} className="text-sm text-gray-400 hover:text-white">EN</button>
            </div>
        </div>
        </header>

        {menuOpen && (
        <div className="sm:hidden px-4 py-4 bg-[#0e0e12] space-y-3 text-sm border-b border-gray-800">
            <a href="#" className="block text-gray-300 hover:text-white">{t('header.about')}</a>
            <a href="/#/catalog" className="block text-gray-300 hover:text-white">{t('header.catalog')}</a>
            <a href="#" className="block text-gray-300 hover:text-white">{t('header.reviews')}</a>
            <a href="#" className="block text-gray-300 hover:text-white">{t('header.contact')}</a>
            <div className="pt-2 space-x-4">
            <button onClick={() => i18n.changeLanguage('ru')} className="text-sm text-gray-400 hover:text-white">RU</button>
            <button onClick={() => i18n.changeLanguage('en')} className="text-sm text-gray-400 hover:text-white">EN</button>
            </div>
        </div>
        )}

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-start px-6 md:px-20 py-8 text-left max-w-3xl">
        <h1 className="text-5xl md:text-4xl font-bold leading-tight mb-6 bg-black">
          Empower Your <br /> Vision with AI
        </h1>
        <p className="text-3xl text-gray-300 mb-8">
          We provide cutting-edge AI solutions to help you see beyond limitations
          and achieve your goals.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 text-sm rounded-md shadow hover:bg-gray-200 transition">
          GET STARTED
        </button>
      </section>
    </div>
  );
}
