import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';

const ShopByCategory = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  
  const categories = [
    { name: 'Rings', image: ringImage, hoverImage: necklaceImage, href: '/shop?category=rings' },
    { name: 'Necklaces', image: necklaceImage, hoverImage: ringImage, href: '/shop?category=necklaces' },
    { name: 'Earrings', image: ringImage, hoverImage: necklaceImage, href: '/shop?category=earrings' },
    { name: 'Bracelets', image: necklaceImage, hoverImage: ringImage, href: '/shop?category=bracelets' },
  ];

  return (
    <section className="section-luxury bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            SHOP BY CATEGORY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of fine jewelry, each category crafted with precision and elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={category.href}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <motion.img
                      key={hoveredIndex === index ? 'hover' : 'normal'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={hoveredIndex === index ? category.hoverImage : category.image}
                      alt={category.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-foreground text-center group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;