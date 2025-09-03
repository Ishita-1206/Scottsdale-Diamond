import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, Search, Heart, ShoppingBag, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  // Mock product data
  const products = [
    {
      id: 1,
      name: 'Eternal Diamond Ring',
      price: 2499,
      originalPrice: 2999,
      image: ringImage,
      category: 'rings',
      material: 'gold',
      rating: 5,
      reviews: 124,
      isNew: true,
    },
    {
      id: 2,
      name: 'Golden Grace Necklace',
      price: 1899,
      image: necklaceImage,
      category: 'necklaces',
      material: 'gold',
      rating: 5,
      reviews: 89,
      isBestseller: true,
    },
    {
      id: 3,
      name: 'Pearl Elegance Earrings',
      price: 899,
      image: ringImage,
      category: 'earrings',
      material: 'pearl',
      rating: 4,
      reviews: 56,
    },
    {
      id: 4,
      name: 'Royal Sapphire Bracelet',
      price: 3299,
      originalPrice: 3799,
      image: necklaceImage,
      category: 'bracelets',
      material: 'platinum',
      rating: 5,
      reviews: 78,
      isNew: true,
    },
    {
      id: 5,
      name: 'Classic Diamond Studs',
      price: 1299,
      image: ringImage,
      category: 'earrings',
      material: 'diamond',
      rating: 5,
      reviews: 156,
      isBestseller: true,
    },
    {
      id: 6,
      name: 'Vintage Gold Chain',
      price: 799,
      image: necklaceImage,
      category: 'necklaces',
      material: 'gold',
      rating: 4,
      reviews: 92,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: products.length },
    { id: 'rings', name: 'Rings', count: products.filter(p => p.category === 'rings').length },
    { id: 'necklaces', name: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
    { id: 'earrings', name: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
    { id: 'bracelets', name: 'Bracelets', count: products.filter(p => p.category === 'bracelets').length },
  ];

  const materials = ['gold', 'silver', 'diamond', 'platinum', 'pearl'];
  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="pt-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
              Jewelry Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of handcrafted jewelry pieces, each telling its own story of elegance.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Navbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-inter font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-luxury'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-slate-300 dark:border-border'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-6">
                Filters
              </h3>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-inter font-medium text-foreground mb-4">Price Range</h4>
                <div className="space-y-4">
                  {/* Predefined Price Ranges */}
                  <div className="space-y-2">
                    {[
                      { label: 'Under $500', min: 0, max: 500 },
                      { label: '$500 - $1000', min: 500, max: 1000 },
                      { label: '$1000 - $2000', min: 1000, max: 2000 },
                      { label: '$2000 - $3000', min: 2000, max: 3000 },
                      { label: 'Over $3000', min: 3000, max: 5000 },
                    ].map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setPriceRange([range.min, range.max])}
                        className={`w-full text-left py-2 px-3 rounded-lg transition-colors text-sm ${
                          priceRange[0] === range.min && priceRange[1] === range.max
                            ? 'bg-primary text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div className="mb-8">
                <h4 className="font-inter font-medium text-foreground mb-4">Materials</h4>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary/20"
                      />
                      <span className="text-muted-foreground hover:text-foreground transition-colors capitalize">
                        {material}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mb-6 sm:mb-8 gap-4"
            >
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden btn-outline-luxury px-4 py-2 text-sm w-full sm:w-auto flex items-center justify-center"
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                </button>

              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-luxury text-sm py-2 w-full sm:w-auto min-w-[160px]"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>


              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-stretch'
                  : 'space-y-6'
              }
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`product-card group bg-slate-100 dark:bg-card rounded-2xl shadow-lg w-full h-full flex flex-col ${
                    viewMode === 'list' ? 'flex items-center space-x-6' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 h-32 rounded-2xl flex-shrink-0' : 'rounded-t-2xl'
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`product-image object-cover ${
                        viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                      }`}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-primary text-slate-800 px-3 py-1 rounded-full text-sm font-inter font-medium">
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

                  <div className={`p-6 flex-1 flex flex-col justify-between ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="mb-2">
                      <span className="text-sm text-muted-foreground font-inter capitalize">
                        {product.category.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-inter font-bold text-primary">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
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
            </motion.div>


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;