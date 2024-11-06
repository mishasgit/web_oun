import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  title: string;
  images: string[];
  description: string;
  amazonLink: string;
}

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          // >= 1024px (desktop)
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          // >= 768px (tablet)
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        }}
        className="products-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              title={product.title}
              images={product.images}
              description={product.description}
              amazonLink={product.amazonLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSection; 