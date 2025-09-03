import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Eternal Diamond Ring',
      price: 2499,
      originalPrice: 2999,
      image: ringImage,
      category: 'Rings',
      isNew: true,
      rating: 5,
    },
    {
      id: 2,
      name: 'Golden Grace Necklace',
      price: 1899,
      image: necklaceImage,
      category: 'Necklaces',
      isBestseller: true,
      rating: 5,
    },
    {
      id: 3,
      name: 'Pearl Elegance Earrings',
      price: 899,
      image: ringImage, // Placeholder - you can generate earring image later
      category: 'Earrings',
      rating: 4,
    },
    {
      id: 4,
      name: 'Royal Sapphire Bracelet',
      price: 3299,
      originalPrice: 3799,
      image: necklaceImage, // Placeholder
      category: 'Bracelets',
      isNew: true,
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section-luxury bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that embody our commitment to exceptional craftsmanship and timeless beauty.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card group"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-64 object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-foreground px-3 py-1 rounded-full text-sm font-inter font-medium">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-foreground text-background px-3 py-1 rounded-full text-sm font-inter font-medium">
                      Bestseller
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-destructive text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                      Sale
                    </span>
                  )}
                </div>

                {/* Like Button - Top Right */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <Heart size={18} />
                </motion.button>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground font-inter">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline-luxury"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;