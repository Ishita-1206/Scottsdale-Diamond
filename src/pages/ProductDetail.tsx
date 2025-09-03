import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Truck, Shield, RotateCcw, Share, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  // Product data based on ID
  const getProductData = (productId: string) => {
    const products = {
      '1': {
        id: 1,
        name: 'Eternal Diamond Ring',
        price: 2499,
        originalPrice: 2999,
        images: [ringImage, ringImage, ringImage, ringImage],
        category: 'Rings',
        material: 'Gold',
        rating: 5,
        reviews: 124,
        inStock: true,
        description: 'This stunning Eternal Diamond Ring represents the perfect union of classic elegance and modern sophistication. Crafted from the finest 18k gold and featuring a brilliant cut diamond of exceptional clarity.',
        features: ['18K Gold Band', 'Brilliant Cut Diamond', 'Conflict-Free Gemstones', 'Lifetime Warranty', 'Free Resizing'],
        sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9'],
        specifications: { 'Metal': '18K Yellow Gold', 'Gemstone': 'Diamond', 'Carat Weight': '1.2ct', 'Clarity': 'VVS1', 'Color': 'D (Colorless)', 'Cut': 'Brilliant Round', 'Setting': 'Prong Setting' }
      },
      '2': {
        id: 2,
        name: 'Golden Grace Necklace',
        price: 1899,
        images: [necklaceImage, necklaceImage, necklaceImage, necklaceImage],
        category: 'Necklaces',
        material: 'Gold',
        rating: 5,
        reviews: 89,
        inStock: true,
        description: 'An exquisite golden necklace that embodies grace and sophistication. This handcrafted piece features intricate detailing and premium gold construction.',
        features: ['18K Gold Chain', 'Handcrafted Design', 'Adjustable Length', 'Lifetime Warranty', 'Gift Box Included'],
        specifications: { 'Metal': '18K Yellow Gold', 'Length': '18 inches', 'Weight': '15.2g', 'Clasp': 'Lobster Clasp', 'Chain Type': 'Cable Chain' }
      },
      '3': {
        id: 3,
        name: 'Pearl Elegance Earrings',
        price: 899,
        images: [ringImage, ringImage, ringImage, ringImage],
        category: 'Earrings',
        material: 'Pearl',
        rating: 4,
        reviews: 56,
        inStock: true,
        description: 'Elegant pearl earrings that add a touch of sophistication to any outfit. Features lustrous pearls set in premium gold settings.',
        features: ['Cultured Pearls', 'Gold Settings', 'Hypoallergenic', 'Secure Backing', 'Gift Box Included'],
        specifications: { 'Pearl Type': 'Cultured Freshwater', 'Pearl Size': '8mm', 'Metal': '14K Gold', 'Setting': 'Stud Setting' }
      },
      '4': {
        id: 4,
        name: 'Royal Sapphire Bracelet',
        price: 3299,
        originalPrice: 3799,
        images: [necklaceImage, necklaceImage, necklaceImage, necklaceImage],
        category: 'Bracelets',
        material: 'Platinum',
        rating: 5,
        reviews: 78,
        inStock: true,
        description: 'A magnificent sapphire bracelet featuring royal blue sapphires set in platinum. This luxury piece represents the pinnacle of fine jewelry craftsmanship.',
        features: ['Platinum Setting', 'Natural Sapphires', 'Secure Clasp', 'Lifetime Warranty', 'Certificate of Authenticity'],
        specifications: { 'Metal': 'Platinum 950', 'Gemstone': 'Blue Sapphire', 'Total Carat Weight': '5.8ct', 'Length': '7.5 inches', 'Clasp': 'Box Clasp with Safety' }
      },
      '5': {
        id: 5,
        name: 'Classic Diamond Studs',
        price: 1299,
        images: [ringImage, ringImage, ringImage, ringImage],
        category: 'Earrings',
        material: 'Diamond',
        rating: 5,
        reviews: 156,
        inStock: true,
        description: 'Timeless diamond stud earrings that are perfect for everyday elegance. Features brilliant cut diamonds in secure gold settings.',
        features: ['Brilliant Cut Diamonds', '14K Gold Settings', 'Secure Backings', 'Conflict-Free Diamonds', 'Certificate Included'],
        specifications: { 'Metal': '14K White Gold', 'Diamond Weight': '1.0ct total', 'Clarity': 'VS1', 'Color': 'G', 'Cut': 'Brilliant Round' }
      },
      '6': {
        id: 6,
        name: 'Vintage Gold Chain',
        price: 799,
        images: [necklaceImage, necklaceImage, necklaceImage, necklaceImage],
        category: 'Necklaces',
        material: 'Gold',
        rating: 4,
        reviews: 92,
        inStock: true,
        description: 'A beautiful vintage-inspired gold chain that combines classic design with modern craftsmanship. Perfect for layering or wearing alone.',
        features: ['Vintage Design', '14K Gold', 'Durable Construction', 'Adjustable Length', 'Lifetime Warranty'],
        specifications: { 'Metal': '14K Yellow Gold', 'Length': '20 inches', 'Weight': '12.5g', 'Chain Type': 'Figaro Chain', 'Clasp': 'Spring Ring' }
      }
    };
    return products[productId as keyof typeof products] || products['1'];
  };

  const product = getProductData(id || '1');



  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2024-01-15',
      comment: 'Absolutely stunning! The quality is exceptional and it exceeded my expectations. Perfect for my engagement.',
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      date: '2024-01-10',
      comment: 'Beautiful craftsmanship and excellent service. My wife loves it! Highly recommended.',
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="mb-6">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-luxury"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-inter">{product.category}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < product.rating ? 'text-primary fill-current' : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
              <button className="text-sm text-primary hover:underline">
                Write a review
              </button>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-3xl font-inter font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-destructive text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-6">
                <h3 className="font-inter font-medium text-foreground mb-3">
                  Ring Size
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg font-inter font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
                <button className="text-sm text-primary hover:underline mt-2">
                  Size Guide
                </button>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-inter font-medium text-foreground mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-border rounded-lg">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus size={16} />
                  </motion.button>
                  <span className="px-4 py-3 font-inter font-medium">{quantity}</span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity
                  });
                  navigate('/cart');
                }}
                className="btn-luxury flex-1 flex items-center justify-center space-x-2 text-white"
                disabled={!product.inStock}
              >
                <ShoppingBag size={20} />
                <span className="text-slate-800">Add to Cart</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-foreground transition-colors"
              >
                <Heart size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-2 border-border text-muted-foreground rounded-xl hover:border-primary hover:text-primary transition-colors"
              >
                <Share size={20} />
              </motion.button>
            </div>



            {/* Product Features */}
            <div className="mb-8">
              <h3 className="font-playfair font-semibold text-foreground mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-inter text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="border-b border-border mb-8">
            <div className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 font-inter font-medium capitalize transition-colors relative ${
                    activeTab === tab
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[300px]">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground font-inter leading-relaxed text-lg">
                  {product.description}
                </p>
              </motion.div>
            )}

            {activeTab === 'specifications' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-border">
                    <span className="font-inter font-medium text-foreground">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-border pb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="font-inter font-medium text-foreground">
                          {review.name}
                        </span>
                        {review.verified && (
                          <span className="text-xs bg-primary text-foreground px-2 py-1 rounded-full">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < review.rating ? 'text-primary fill-current' : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>


      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;