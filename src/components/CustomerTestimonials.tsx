import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      review: "Absolutely stunning pieces! The quality is exceptional and the customer service is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      review: "My wife loves her new necklace. The craftsmanship is incredible and it arrived beautifully packaged.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      review: "Best jewelry shopping experience ever! Fast shipping and gorgeous products.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Wilson",
      review: "Amazing quality and beautiful designs. Highly recommend to anyone looking for luxury jewelry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Brown",
      review: "The ring I ordered exceeded my expectations. Perfect for my engagement!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "James Miller",
      review: "Excellent customer service and fast delivery. The earrings are gorgeous!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Anna Taylor",
      review: "Beautiful craftsmanship and attention to detail. Will definitely shop here again.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Robert Garcia",
      review: "Premium quality jewelry at reasonable prices. Very satisfied with my purchase.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="section-luxury bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Our Customers  Us
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-100 p-6 rounded-xl shadow-lg text-center flex flex-col justify-between mx-auto"
                className="bg-gray-100 p-4 sm:p-6 rounded-xl shadow-lg border-2 text-center flex flex-col justify-between mx-auto w-full max-w-sm"
                style={{ borderColor: '#deab1233', height: '350px', minHeight: '350px', maxHeight: '350px' }}
                style={{ height: '350px', minHeight: '350px', maxHeight: '350px' }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-800 mb-6 text-sm leading-relaxed">
                  ⭐ {testimonial.review}
                </p>
                <div className="flex justify-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>
                <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">Customer</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #d1d5db;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #6366f1;
        }
      `}</style>
    </section>
  );
};

export default CustomerTestimonials;