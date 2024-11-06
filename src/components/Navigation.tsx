import { useState } from 'react';
import texts from '../content/texts.json';

interface NavigationProps {
  links: {
    id: string;
    text: string;
  }[];
  title: string;
}

const Navigation: React.FC<NavigationProps> = ({ links, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Верхняя панель с логотипом и гамбургером */}
      <div className="max-w-7xl mx-auto px-8 w-full pt-8">
        <div className="flex items-center justify-between md:justify-start">
          {/* Логотип - центрируем на мобильном */}
          <img 
            src={texts.hero.logo}
            alt="Ounest" 
            className="h-8 md:h-14 mx-auto md:mx-0" 
          />
          
          {/* Гамбургер кнопка - справа на мобильном */}
          <button 
            className="md:hidden absolute right-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <img 
                src="/close_icon.svg"
                alt="Close menu"
                className="w-4 h-4"
              />
            ) : (
              <img 
                src="/menu_icon.svg"
                alt="Open menu"
                className="w-4 h-4"
              />
            )}
          </button>
        </div>
      </div>

      {/* Слоган */}
      <h1 className={`font-acentica hidden md:block text-4xl md:text-5xl text-center mt-8 mb-5 ${texts.hero.slogan_color}`}>
        {title}
      </h1>

      {/* Навигация */}
      <nav className="font-acentica w-full mb-8 mt-10">
        <div className="max-w-7xl mx-auto px-8">
          {/* Десктопное меню */}
          <div className="hidden md:flex justify-center space-x-12">
            {links.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-20 bg-cream/50 backdrop-blur-sm shadow-lg z-50">
              <div className="flex flex-col p-4 max-w-7xl mx-auto">
                {links.map(link => (
                  <a 
                    key={link.id}
                    href={`#${link.id}`}
                    className="py-3 px-4 text-gray-700 hover:bg-cream/50 rounded-lg transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;