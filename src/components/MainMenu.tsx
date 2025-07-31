'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface MenuItem {
  href: string;
  label: string;
}

interface MenuSection {
  label: string;
  href?: string;
  items?: MenuItem[];
}

const translations = {
  en: {
    home: 'Home', home1: 'home1', home2: 'home2',
    codices: 'Codices', codices1: 'codices1', codices2: 'codices2',
    resources: 'Resources', resources1: 'resources1', resources2: 'resources2',
    about: 'About', about1: 'about1', about2: 'about2',
  },
  es: {
    home: 'Inicio', home1: 'inicio1', home2: 'inicio2',
    codices: 'Códices', codices1: 'códices1', codices2: 'códices2',
    resources: 'Recursos', resources1: 'recursos1', resources2: 'recursos2',
    about: 'Acerca de', about1: 'acerca1', about2: 'acerca2',
  }
};

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

export default function MainMenu() {
  const searchParams = useSearchParams();
  const language = searchParams.get('lang') || 'en';
  
  const t = (key: string) => translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;

  const menuData: MenuSection[] = [
  {
    label: t('home'),
    href: "https://livinglang.com",
    items: [
      { href: "#", label: t('home1')},
      { href: "#", label: t('home2') }
    ]
  },
  {
    label: t('codices'),
    items: [
      { href: "#", label: t('codices1') },
      { href: "#", label: t('codices2') }
    ]
  },
  {
    label: t('resources'),
    items: [
      { href: "#", label: t('resources1') },
      { href: "#", label: t('resources2') }
    ]
  },
  {
    label: t('about'),
    items: [
      { href: "#", label: t('about1') },
      { href: "#", label: t('about2') }
    ]
  },
  {
    label: `${language.toUpperCase()}`,
    items: languages.map(lang => ({
      href: `?lang=${lang.code}`,
      label: lang.label
    }))
  }
];

  return (
    <nav className="main-menu">
      {menuData.map((section: MenuSection, index: number) => (
        <div key={index} className="menu-item">
          {section.href ? (
            <Link href={section.href}>{section.label}</Link>
          ) : (
            <span>{section.label}</span>
          )}
          {section.items && (
            <div className="dropdown">
              {section.items.map((item: MenuItem, itemIndex: number) => (
                <Link key={itemIndex} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}