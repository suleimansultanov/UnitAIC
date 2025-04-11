import { Star } from "lucide-react";
import React from "react";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function VRLandingPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0b0b0f] text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 bg-[#0e0e12] border-b border-black-800">
        <h1 className="text-xl font-bold text-white">UNIT AIC</h1>
        <nav className="space-x-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-white">{t('header.about')}</a>
          <a href="#" className="hover:text-white">{t('header.catalog')}</a>
          <a href="#" className="hover:text-white">{t('header.reviews')}</a>
          <a href="#" className="hover:text-white">{t('header.contact')}</a>
        </nav>
      
        <div className="space-x-2">
          <button onClick={() => i18n.changeLanguage('ru')} className="text-sm text-gray-400 hover:text-white">RU</button>
          <button onClick={() => i18n.changeLanguage('en')} className="text-sm text-gray-400 hover:text-white">EN</button>
        </div>

      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_30%] items-center gap-12 relative z-10">
    {/* Левая часть — текст */}
    <div className="mainImage">
      <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-wide mb-6">
        {t('mainscreentitle')}
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
        {t('mainscreensectitle')}
      </p>
      <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition">
        {t('hero.button')}
      </button>
    </div>

    {/* Правая часть — блоки устройств */}
    <div className="space-y-4 hidden lg:block">
      {[
        ['https://figmaelements.com/wp-content/uploads/2019/09/thanks-figma-elements-3.svg', 'Apple Vision Pro'],
        ['https://figmaelements.com/wp-content/uploads/2019/09/thanks-figma-elements-3.svg', 'HTC Vive Pro 2'],
        ['https://figmaelements.com/wp-content/uploads/2019/09/thanks-figma-elements-3.svg', 'Meta Quest 3']
      ].map(([img, name], idx) => (
        <div key={idx} className="bg-[#1a1a1a] flex items-center gap-4 p-4 rounded-xl shadow-lg hover:bg-[#222] transition">
          <img src={img} alt={name} className="w-14 h-14 object-contain" />
          <h4 className="text-sm font-medium">{name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Stats Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-6 py-16">
        {[
          ['30', 'сотрудников'],
          ['1000+', 'клиентов'],
          ['24/7', 'поддержка'],
          ['5 лет', 'на рынке'],
          ['2 часа', 'средняя доставка'],
          ['150+', 'товаров']
        ].map(([title, subtitle], i) => (
          <div key={i} className="bg-[#151515] border border-gray-800 rounded-xl p-5 text-center shadow-lg">
            <div className="text-2xl font-bold mb-1 text-white">{title}</div>
            <div className="text-sm text-gray-400">{subtitle}</div>
          </div>
        ))}
      </section>

      {/* Product Promo */}
      <section className="feelBlock px-6 py-20 text-center bg-gradient-to-r from-[#00083e] to-[#2a003f]">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">{t('promo.title')}</h3>
        <p className="text-lg text-white mb-6 bold">{t('promo.desc')}</p>

      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20">
        {[
          ['https://figmaelements.com/wp-content/uploads/2019/09/thanks-figma-elements-3.svg', 'HTC VIVE PRO 2', 'Система виртуальной реальности'],
          ['https://figmaelements.com/wp-content/uploads/2019/09/thanks-figma-elements-3.svg', 'PLAYSTATION VR2', 'Шлем виртуальной реальности']
        ].map(([img, title, desc], idx) => (
          <div key={idx} className="bg-[#151515] rounded-xl p-6 shadow-lg border border-gray-800 hover:scale-[1.02] transition">
            <img src={img} alt={title} className="h-40 object-contain mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
            <p className="text-gray-400 mb-4">{desc}</p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90">Подробнее</button>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">{t('header.reviews')}</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['Антон', 'Очень доволен покупкой! Быстро доставили и всё отлично работает.'],
            ['Татьяна', 'Качество на высоте, сервис приятно удивил. Рекомендую!'],
            ['София', 'Супер! Заказ пришел за 2 часа, и уже погружаюсь в VR-мир :)']
          ].map(([name, comment], i) => (
            <div key={i} className="bg-[#151515] p-6 rounded-xl shadow-lg border border-gray-800">
              <div className="flex gap-1 mb-2">
                {Array(5).fill(0).map((_, idx) => (
                  <Star key={idx} size={16} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm italic text-gray-300 mb-2">"{comment}"</p>
              <div className="text-sm text-gray-400 font-medium">{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#0d0d0d] py-12 px-6 text-center border-t border-gray-800">
        <h4 className="text-xl font-semibold mb-6">{t('partners')}</h4>
        <div className="flex flex-wrap justify-center gap-6 opacity-70">
          {["Nike", "Adobe", "Apple", "VALVE", "NBA", "Binance", "VK"].map((partner, i) => (
            <span key={i} className="text-gray-400 text-sm">{partner}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] text-gray-500 text-sm py-6 px-6 text-center border-t border-gray-800">
        <p>{t('footer')}</p>
      </footer>
    </div>
  );
}
