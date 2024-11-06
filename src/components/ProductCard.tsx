import { useState } from 'react';
import ImageModal from './ImageModal';

interface ProductCardProps {
  title: string;
  images: string[];
  description: string;
  amazonLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  images,
  description,
  amazonLink,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col p-4">
      {/* Основное изображение */}
      <div 
        className="w-full aspect-square mb-4 cursor-pointer"
        onClick={() => setSelectedImage(mainImage)}
      >
        <img 
          src={mainImage} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Миниатюры */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden
              ${mainImage === img ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => {
              setMainImage(img);
              setSelectedImage(img);
            }}
          >
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Информация о продукте */}
      <h3 className="font-mono text-xl font-medium mb-2">{title}</h3>
      <p className="font-mono text-gray-600 mb-4 flex-grow">{description}</p>
      
      {/* Кнопка Amazon */}
      <a
        href={amazonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FF9900] text-mono text-white py-2 px-4 rounded-full text-center hover:bg-[#FF9900]/90 transition-colors"
      >
        Buy on Amazon
      </a>

      {/* Модальное окно с увеличенным изображением */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
        altText={title}
      />
    </div>
  );
};

export default ProductCard; 