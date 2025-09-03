import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const getProductImage = (id: number) => {
    return id === 1 || id === 3 || id === 5 ? ringImage : necklaceImage;
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-8">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-playfair font-semibold text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Add some beautiful jewelry to get started
              </p>
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-luxury"
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-card rounded-2xl p-6 shadow-card"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <img
                          src={getProductImage(item.id)}
                          alt={item.name}
                          className="w-20 sm:w-24 h-20 sm:h-24 object-cover rounded-xl"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-playfair font-semibold text-foreground mb-2">
                            {item.name}
                          </h3>
                          {item.size && (
                            <p className="text-sm text-muted-foreground mb-2">
                              Size: {item.size}
                            </p>
                          )}
                          <p className="text-lg sm:text-xl font-inter font-bold text-primary">
                            ${item.price}
                          </p>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto space-x-4">
                          <div className="flex items-center border border-border rounded-lg bg-background">
                            <motion.button
                              whileTap={{ scale: 0.95 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 sm:p-3 hover:bg-secondary transition-colors min-w-[40px] flex items-center justify-center"
                            >
                              <Minus size={14} />
                            </motion.button>
                            <span className="px-3 sm:px-4 py-2 font-inter font-medium min-w-[50px] text-center">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.95 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 sm:p-3 hover:bg-secondary transition-colors min-w-[40px] flex items-center justify-center"
                            >
                              <Plus size={14} />
                            </motion.button>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                          >
                            <Trash2 size={20} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-card rounded-2xl p-6 shadow-card sticky top-24"
                >
                  <h2 className="text-xl font-playfair font-semibold text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-inter font-medium">${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-inter font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping}`}
                      </span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-playfair font-semibold">Total</span>
                        <span className="text-lg font-inter font-bold text-primary">
                          ${total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-luxury w-full mb-4 text-slate-800"
                  >
                    Proceed to Checkout
                  </motion.button>

                  <Link to="/shop">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-outline-luxury w-full"
                    >
                      Continue Shopping
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;