import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: 'Elegant Rings',
      image: 'data:image/jpeg;base64,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',
      href: '/shop?collection=rings'
    },
    {
      id: 2,
      name: 'Luxury Necklaces',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRrqtD76oM1sHb0pTShNJ-YZ_b-e4VDXW-qgproCR_QL0QNRNHpO0nOn756UFb3_U4mhn8mDd-SpuJbcljVQANh0xwujBD7DyTBqmsGKvK7',
      href: '/shop?collection=necklaces'
    },
    {
      id: 3,
      name: 'Premium Earrings',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVivTvJOiq6B0joa8qo6o7fMrlIcXSnqWI5QePS5aHYYQCOFZAZtifQ4_HcRvbQ1zorKCGgk2uOFK4exHKV6qnB92Jtknbtcz2BB5VX3LB',
      href: '/shop?collection=earrings'
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            COLLECTIONS
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Find your style. Explore our diverse collections!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link to={collection.href}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-center">
                      <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white">
                        {collection.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Collections;