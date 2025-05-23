
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.properties': 'Properties',
    'nav.vehicles': 'Vehicles',
    'nav.businesses': 'Businesses',
    'nav.favorites': 'Favorites',
    'nav.notifications': 'Notifications',
    'nav.dashboard': 'My Account',
    'search.placeholder': 'Search for properties, vehicles, businesses...',
    'search.mobile.placeholder': 'Search...',
    
    // Homepage
    'home.title': 'Find Your Perfect Asset',
    'home.subtitle': 'Browse through a wide selection of properties, vehicles, and ready-made businesses from Sberbank\'s marketplace.',
    'home.search.placeholder': 'What are you looking for? E.g., \'Apartment in Moscow with 2 bedrooms\'',
    'home.search.button': 'Search',
    
    // Categories
    'category.properties.title': 'Properties',
    'category.properties.description': 'Apartments, houses, and commercial spaces',
    'category.vehicles.title': 'Vehicles',
    'category.vehicles.description': 'Cars, trucks, and special purpose vehicles',
    'category.businesses.title': 'Businesses',
    'category.businesses.description': 'Ready-made businesses and commercial opportunities',
    
    // Promo banners
    'promo.property.title': 'Find Your Dream Property',
    'promo.property.subtitle': 'NEW FEATURE',
    'promo.property.description': 'Use our AI-powered search to find properties matching your exact requirements.',
    'promo.property.button': 'Try Smart Search',
    'promo.financing.title': 'Vehicle Financing Available',
    'promo.financing.subtitle': 'SPECIAL OFFER',
    'promo.financing.description': 'Get pre-approved for financing on any vehicle with rates starting at just 4.9%.',
    'promo.financing.button': 'Learn More',
    
    // Property Detail Page
    'property.details': 'Details',
    'property.features': 'Features',
    'property.map': 'Map',
    'property.description': 'Description',
    'property.specifications': 'Specifications',
    'property.features.title': 'Property Features',
    'property.location': 'Location',
    'property.similar': 'Similar Properties',
    'property.seller.info': 'Seller Information',
    'property.seller.call': 'Call Seller',
    'property.seller.email': 'Email Seller',
    'property.financing': 'Financing Options Available',
    'property.financing.description': 'Get pre-approved for a mortgage with Sberbank\'s special rates.',
    'property.financing.calculate': 'Calculate Mortgage',
    'property.listed': 'Listed on',
    'property.updated': 'Last updated',
    'property.viewed': 'Viewed',
    'property.times': 'times',
    'property.days.ago': 'days ago',
    'property.spec.area': 'Area',
    'property.spec.rooms': 'Rooms',
    'property.spec.bathrooms': 'Bathrooms',
    'property.spec.floor': 'Floor',
    'property.spec.built': 'Built',
    'property.spec.condition': 'Condition',
    'property.spec.parking': 'Parking',
    'property.spec.heating': 'Heating',
    'property.spec.balcony': 'Balcony',
    'property.spec.elevator': 'Elevator',
  },
  ru: {
    // Header
    'nav.properties': 'Недвижимость',
    'nav.vehicles': 'Транспорт',
    'nav.businesses': 'Бизнес',
    'nav.favorites': 'Избранное',
    'nav.notifications': 'Уведомления',
    'nav.dashboard': 'Личный кабинет',
    'search.placeholder': 'Поиск недвижимости, транспорта, бизнеса...',
    'search.mobile.placeholder': 'Поиск...',
    
    // Homepage
    'home.title': 'Найдите свой идеальный актив',
    'home.subtitle': 'Просматривайте широкий выбор недвижимости, транспорта и готового бизнеса на площадке Сбербанка.',
    'home.search.placeholder': 'Что вы ищете? Например, \'Квартира в Москве с 2 спальнями\'',
    'home.search.button': 'Найти',
    
    // Categories
    'category.properties.title': 'Недвижимость',
    'category.properties.description': 'Квартиры, дома и коммерческие помещения',
    'category.vehicles.title': 'Транспорт',
    'category.vehicles.description': 'Легковые автомобили, грузовики и спецтехника',
    'category.businesses.title': 'Бизнес',
    'category.businesses.description': 'Готовый бизнес и коммерческие возможности',
    
    // Promo banners
    'promo.property.title': 'Найдите недвижимость мечты',
    'promo.property.subtitle': 'НОВАЯ ФУНКЦИЯ',
    'promo.property.description': 'Используйте наш поиск с искусственным интеллектом для поиска недвижимости по вашим требованиям.',
    'promo.property.button': 'Попробовать умный поиск',
    'promo.financing.title': 'Доступно автокредитование',
    'promo.financing.subtitle': 'СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ',
    'promo.financing.description': 'Получите предварительное одобрение на финансирование любого автомобиля со ставкой от 4.9%.',
    'promo.financing.button': 'Узнать больше',
    
    // Property Detail Page
    'property.details': 'Характеристики',
    'property.features': 'Особенности',
    'property.map': 'Карта',
    'property.description': 'Описание',
    'property.specifications': 'Спецификации',
    'property.features.title': 'Особенности недвижимости',
    'property.location': 'Местоположение',
    'property.similar': 'Похожие объекты',
    'property.seller.info': 'Информация о продавце',
    'property.seller.call': 'Позвонить продавцу',
    'property.seller.email': 'Написать продавцу',
    'property.financing': 'Доступны варианты финансирования',
    'property.financing.description': 'Получите предварительное одобрение ипотеки по специальным ставкам Сбербанка.',
    'property.financing.calculate': 'Рассчитать ипотеку',
    'property.listed': 'Размещено',
    'property.updated': 'Обновлено',
    'property.viewed': 'Просмотрено',
    'property.times': 'раз',
    'property.days.ago': 'дней назад',
    'property.spec.area': 'Площадь',
    'property.spec.rooms': 'Комнаты',
    'property.spec.bathrooms': 'Санузлы',
    'property.spec.floor': 'Этаж',
    'property.spec.built': 'Год постройки',
    'property.spec.condition': 'Состояние',
    'property.spec.parking': 'Парковка',
    'property.spec.heating': 'Отопление',
    'property.spec.balcony': 'Балкон',
    'property.spec.elevator': 'Лифт',
  },
};

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ru')) {
    return 'ru';
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portalda-language');
    return (saved as Language) || detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('portalda-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
