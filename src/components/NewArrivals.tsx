import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';

const NewArrivals = () => {
  const newProducts = [
    {
      id: 1,
      name: 'Diamond Eternity Ring',
      image: ringImage,
      category: 'Rings',
      price: 1899,
    },
    {
      id: 2,
      name: 'Vintage Pearl Necklace',
      image: necklaceImage,
      category: 'Necklaces',
      price: 2299,
    },
    {
      id: 3,
      name: 'Sapphire Drop Earrings',
      image: ringImage,
      category: 'Earrings',
      price: 1599,
    },
    {
      id: 4,
      name: 'Gold Chain Bracelet',
      image: necklaceImage,
      category: 'Bracelets',
      price: 999,
    },
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
            New Arrivals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest collection of exquisite jewelry pieces, crafted with precision and elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center">
          {newProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="product-card group bg-slate-100 dark:bg-card rounded-2xl shadow-lg w-80 h-auto"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-64 object-cover"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-slate-800 px-3 py-1 rounded-full text-sm font-inter font-medium">
                    New
                  </span>
                </div>

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

                <div className="flex items-center justify-between">
                  <span className="text-xl font-inter font-bold text-primary">
                    ${product.price}
                  </span>
                  <Link to={`/product/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 text-sm font-inter font-medium text-slate-800 dark:text-primary border border-primary rounded-lg hover:bg-primary hover:text-black dark:hover:text-black transition-all duration-300"
                    >
                      View
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;