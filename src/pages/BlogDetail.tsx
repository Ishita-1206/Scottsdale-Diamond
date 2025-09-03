import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';
import featuredCollection from '@/assets/featured-collection.jpg';

const BlogDetail = () => {
  const { id } = useParams();

  const blogPosts = {
    '1': {
      title: 'The Ultimate Guide to Choosing the Perfect Engagement Ring',
      content: `Choosing an engagement ring is one of the most important purchases you'll ever make. It's a symbol of your love and commitment, and it should reflect your partner's unique style and personality.

## Understanding the 4 Cs

When selecting a diamond, it's essential to understand the 4 Cs: Cut, Color, Clarity, and Carat weight. Each of these factors affects the diamond's beauty and value.

### Cut
The cut determines how well the diamond reflects light. A well-cut diamond will sparkle brilliantly, while a poorly cut diamond may appear dull.

### Color
Diamonds are graded on a color scale from D (colorless) to Z (light yellow). The less color a diamond has, the more valuable it is.

### Clarity
Clarity refers to the presence of inclusions or blemishes in the diamond. The fewer inclusions, the higher the clarity grade.

### Carat Weight
Carat weight measures the size of the diamond. Larger diamonds are rarer and more valuable.

## Choosing the Right Setting

The setting is just as important as the diamond itself. Popular settings include:

- **Solitaire**: A classic single diamond setting
- **Halo**: A center diamond surrounded by smaller diamonds
- **Three-stone**: Represents past, present, and future
- **Vintage**: Intricate designs with antique appeal

## Budget Considerations

Set a realistic budget before you start shopping. Remember, the most expensive ring isn't necessarily the best choice. Focus on finding a ring that your partner will love and treasure forever.`,
      image: ringImage,
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Engagement',
      readTime: '5 min read'
    },
    '2': {
      title: 'Jewelry Care: How to Keep Your Precious Pieces Sparkling',
      content: `Proper jewelry care is essential to maintain the beauty and longevity of your precious pieces. With the right techniques and regular maintenance, your jewelry can look stunning for generations.

## Daily Care Tips

### Remove Before Activities
Always remove your jewelry before:
- Swimming or bathing
- Exercising or sports
- Cleaning with chemicals
- Gardening or manual work

### Proper Storage
Store each piece separately to prevent scratching. Use soft pouches or lined jewelry boxes with individual compartments.

## Cleaning Methods by Metal Type

### Gold Jewelry
Clean gold jewelry with warm soapy water and a soft brush. Rinse thoroughly and dry with a soft cloth.

### Silver Jewelry
Use a silver polishing cloth to remove tarnish. For heavily tarnished pieces, use a silver cleaning solution.

### Platinum Jewelry
Platinum is durable but can develop a patina over time. Professional cleaning can restore its original luster.

## Gemstone Care

Different gemstones require different care approaches:

- **Diamonds**: Very durable, can be cleaned with most methods
- **Pearls**: Delicate, clean only with damp cloth
- **Emeralds**: Avoid ultrasonic cleaners
- **Opals**: Keep away from extreme temperatures

## Professional Maintenance

Schedule professional cleanings and inspections annually to ensure your jewelry remains in perfect condition.`,
      image: necklaceImage,
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Care Tips',
      readTime: '3 min read'
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts] || blogPosts['1'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/blog">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </motion.button>
        </Link>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div className="flex items-center text-sm text-muted-foreground">
              <User size={16} className="mr-2" />
              <span className="mr-6">{post.author}</span>
              <Calendar size={16} className="mr-2" />
              <span className="mr-6">{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Share2 size={16} className="mr-2" />
              Share
            </motion.button>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-luxury"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/1" className="group">
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-luxury transition-all duration-300">
                <h4 className="font-playfair font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Understanding Diamond Quality
                </h4>
                <p className="text-sm text-muted-foreground">
                  Learn about the 4 Cs and how to choose the perfect diamond...
                </p>
              </div>
            </Link>
            <Link to="/blog/2" className="group">
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-luxury transition-all duration-300">
                <h4 className="font-playfair font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  Trending Jewelry Styles
                </h4>
                <p className="text-sm text-muted-foreground">
                  Discover the latest jewelry trends that are defining 2024...
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;