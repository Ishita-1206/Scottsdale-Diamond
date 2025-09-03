import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';
import featuredCollection from '@/assets/featured-collection.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Choosing the Perfect Engagement Ring',
      excerpt: 'Discover everything you need to know about selecting the ideal engagement ring, from diamond cuts to setting styles.',
      image: ringImage,
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Engagement',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Jewelry Care: How to Keep Your Precious Pieces Sparkling',
      excerpt: 'Learn professional tips and tricks to maintain your jewelry collection and keep it looking brand new for years to come.',
      image: necklaceImage,
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Care Tips',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Trending Jewelry Styles for 2024',
      excerpt: 'Explore the latest jewelry trends that are defining 2024, from minimalist designs to bold statement pieces.',
      image: featuredCollection,
      author: 'Emma Davis',
      date: '2024-01-10',
      category: 'Trends',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Understanding Diamond Quality: The 4 Cs Explained',
      excerpt: 'A comprehensive guide to diamond grading - Cut, Color, Clarity, and Carat weight - to help you make informed decisions.',
      image: ringImage,
      author: 'David Wilson',
      date: '2024-01-08',
      category: 'Education',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'The History of Fine Jewelry: From Ancient Times to Modern Day',
      excerpt: 'Take a journey through the fascinating evolution of jewelry design and craftsmanship across different cultures and eras.',
      image: necklaceImage,
      author: 'Lisa Thompson',
      date: '2024-01-05',
      category: 'History',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Sustainable Jewelry: Ethical Choices for Conscious Consumers',
      excerpt: 'Learn about sustainable and ethical jewelry practices, and how to make responsible choices when purchasing fine jewelry.',
      image: featuredCollection,
      author: 'James Rodriguez',
      date: '2024-01-03',
      category: 'Sustainability',
      readTime: '5 min read'
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
              Jewelry Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover expert insights, care tips, and the latest trends in the world of fine jewelry
            </p>
          </motion.div>
        </div>
      </section>



      {/* Blog Posts */}
      <section className="section-luxury">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 group cursor-pointer"
                >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-slate-800 dark:text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <User size={14} className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={14} className="mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-playfair font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-slate-800 dark:text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-luxury bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest jewelry insights, care tips, and exclusive offers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-luxury flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury text-black"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;