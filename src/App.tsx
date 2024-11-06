import Navigation from './components/Navigation';
import Section from './components/Section';
import VideoPlayer from './components/VideoPlayer';
import ProductsSection from './components/ProductsSection';
import texts from './content/texts.json';

function App() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section с навигацией */}
      <section className="w-full min-h-screen relative">
        {/* Фоновое изображение с градиентом */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(245, 230, 211, 0.1) 5%,
                rgba(270, 230, 211, 1) 95%
              ),
              url('/f_sect_image.png')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            height: 'calc(100% - 0rem)'
          }}
        />

        {/* Контент секции */}
        <div className="relative z-10">
          <Navigation links={texts.navigation.links} title={texts.hero.title} />
          
          {/* Видео */}
          <div className="max-w-6xl mx-auto px-8 mb-12">
            <div className="aspect-video rounded-3xl overflow-hidden">
              <VideoPlayer 
                src={`https://www.youtube.com/watch?v=${texts.hero.youtube_id}`}
                isYouTube={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="font-mono bg-beige py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-medium mb-8">{texts.mission.title}</h2>
          <div className="max-w-7xl mb-12">
            {texts.mission.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-xl mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Плейсхолдеры для изображений */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square bg-[#C5B488] rounded-2xl"></div>
            <div className="aspect-square bg-[#C5B488] rounded-2xl"></div>
            <div className="aspect-square bg-[#C5B488] rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Meditation Section */}
      <section id="meditation" className="font-mono py-16 scroll-mt-24 relative">
        {/* Фоновое изображение с градиентом */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(245, 230, 211, 0.4) 5%,
                rgba(245, 230, 211, 0) 95%
              ),
              url('/f_meditation_image.png')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            height: '100%'
          }}
        />

        {/* Контент секции */}
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-medium mb-12">{texts.meditation.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
          {texts.meditation.youtube_ids.map((id, index) => (
              <VideoPlayer 
              src={`https://www.youtube.com/watch?v=${id}`} 
              isYouTube={true}
            />
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="text-gray-700">
              {texts.meditation.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="font-mono bg-hack py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-medium mb-12">{texts.products.title}</h2>
          <ProductsSection products={texts.products.items} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-teal py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-medium mb-4">{texts.contact.title}</h2>
          <p className="text-gray-700">email: {texts.contact.email}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
