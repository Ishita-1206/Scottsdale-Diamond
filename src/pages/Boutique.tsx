import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageCircle, Video, MapPin, Send, X, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ringImage from '@/assets/ring-product.jpg';
import necklaceImage from '@/assets/necklace-product.jpg';
import featuredCollection from '@/assets/featured-collection.jpg';

const Boutique = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hello! Welcome to our Boutique. How can I help you today?', sender: 'bot', time: new Date() }
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const getBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good evening')) {
      return 'Hello! Welcome to our luxury boutique! I\'m here to help you find the perfect jewelry piece or book a consultation. What can I assist you with today?';
    }
    
    // Appointments & Booking
    if (message.includes('appointment') || message.includes('book') || message.includes('schedule') || message.includes('visit') || message.includes('consultation')) {
      return 'Perfect! I can help you book an appointment. We\'re available Monday-Saturday, 10 AM to 8 PM. What date and time works best for you?';
    }
    
    // Jewelry Categories
    if (message.includes('ring') || message.includes('engagement') || message.includes('wedding')) {
      return 'Our ring collection is absolutely stunning! We have diamond, gold, platinum, and custom rings starting from $1200. Our engagement rings are especially popular. Would you like to see our collection?';
    }
    if (message.includes('necklace') || message.includes('chain') || message.includes('pendant')) {
      return 'We have exquisite necklaces in gold, silver, platinum, and diamond. Our signature pieces start from $800. From delicate chains to statement pieces - what style interests you?';
    }
    if (message.includes('earring') || message.includes('stud') || message.includes('drop')) {
      return 'Our earring collection features studs, drops, hoops, and chandelier styles. We have pieces from $300 to $3000. Are you looking for everyday wear or special occasions?';
    }
    if (message.includes('bracelet') || message.includes('bangle') || message.includes('tennis')) {
      return 'Our bracelet collection includes tennis bracelets, bangles, and charm bracelets. Prices range from $400 to $2500. What style are you considering?';
    }
    
    // Pricing & Value
    if (message.includes('price') || message.includes('cost') || message.includes('expensive') || message.includes('cheap') || message.includes('budget')) {
      return 'Our jewelry ranges from $300 to $5000+, with most pieces between $500-$2000. Each piece includes lifetime warranty, certificate of authenticity, and free maintenance. What\'s your budget range?';
    }
    
    // Services & Policies
    if (message.includes('warranty') || message.includes('guarantee') || message.includes('repair') || message.includes('maintenance')) {
      return 'All our jewelry comes with lifetime warranty! We provide free cleaning, maintenance, and repair services for life. We also offer resizing and custom modifications.';
    }
    if (message.includes('return') || message.includes('exchange') || message.includes('refund')) {
      return 'We offer 30-day returns and exchanges on all items. Custom pieces have a 14-day return policy. All items must be in original condition with certificate.';
    }
    
    // Location & Contact
    if (message.includes('location') || message.includes('address') || message.includes('where') || message.includes('directions')) {
      return 'Our boutique is located in the heart of the city at 123 Luxury Lane. We offer both in-store visits and virtual consultations. Which would you prefer?';
    }
    if (message.includes('hours') || message.includes('open') || message.includes('closed') || message.includes('time')) {
      return 'We\'re open Monday through Saturday, 10 AM to 8 PM. Closed on Sundays. We also offer after-hours appointments for VIP clients. Would you like to schedule one?';
    }
    
    // Materials & Quality
    if (message.includes('gold') || message.includes('silver') || message.includes('platinum')) {
      return 'We work with 14k, 18k, and 24k gold, sterling silver, and platinum. All metals are ethically sourced and certified. What metal preference do you have?';
    }
    if (message.includes('diamond') || message.includes('gem') || message.includes('stone')) {
      return 'Our diamonds are GIA certified and conflict-free. We also feature sapphires, emeralds, rubies, and other precious stones. All gems come with authenticity certificates.';
    }
    
    // Custom & Special Services
    if (message.includes('custom') || message.includes('design') || message.includes('personalize')) {
      return 'We offer custom jewelry design services! Our master jewelers can create unique pieces based on your vision. The process takes 4-6 weeks. Would you like to discuss your ideas?';
    }
    if (message.includes('gift') || message.includes('present') || message.includes('surprise')) {
      return 'We\'re experts at helping choose the perfect gift! We offer gift wrapping, gift certificates, and can help you surprise someone special. What\'s the occasion?';
    }
    
    // Gratitude
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return 'You\'re very welcome! I\'m here to help anytime. Is there anything else about our jewelry collection or services I can assist you with?';
    }
    
    // General inquiries
    if (message.includes('help') || message.includes('question') || message.includes('info') || message.includes('tell me')) {
      return 'I\'m here to help! I can assist with jewelry selection, pricing, appointments, custom designs, or any questions about our services. What would you like to know?';
    }
    
    // Default responses for any other message
    const responses = [
      'That\'s interesting! I\'d love to help you with that. Our jewelry experts can provide detailed information about anything you need. Would you like to schedule a consultation?',
      'Great question! Our master jewelers would be happy to discuss that with you in detail. Shall we book you a personal appointment?',
      'I understand what you\'re looking for. Our boutique specializes in luxury jewelry with exceptional craftsmanship. Would you like to learn more about our collections?',
      'Thank you for reaching out! We pride ourselves on personalized service. Let me connect you with our experts who can help you find exactly what you need.',
      'That sounds wonderful! Our team would love to assist you with that. We offer both in-store consultations and virtual appointments. Which would work better for you?',
      'I\'m here to help with anything jewelry-related! From engagement rings to custom designs, we\'ve got you covered. What specific area interests you most?'
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatMessage,
        sender: 'user',
        time: new Date()
      };
      setChatMessages([...chatMessages, newMessage]);
      const userMsg = chatMessage;
      setChatMessage('');
      
      setTimeout(() => {
        const botResponse = {
          id: chatMessages.length + 2,
          text: getBotResponse(userMsg),
          sender: 'bot',
          time: new Date()
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const galleryImages = [
    { src: ringImage, caption: 'Exquisite Diamond Rings' },
    { src: necklaceImage, caption: 'Elegant Necklace Collection' },
    { src: featuredCollection, caption: 'Featured Luxury Pieces' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Image Gallery */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
              Welcome to Our Boutique
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience luxury jewelry craftsmanship in our exclusive collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-luxury"
                onMouseEnter={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-playfair font-semibold">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-luxury bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
              Book an Appointment
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a personalized consultation with our jewelry experts
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                  placeholder="Enter your phone"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="input-luxury w-full"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="input-luxury w-full resize-none"
                placeholder="Tell us about your jewelry preferences or any specific requirements"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-luxury w-full text-slate-800"
            >
              Schedule Appointment
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Chat & Meeting Options */}
      <section className="section-luxury">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your preferred way to connect with our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-card text-center group hover:shadow-luxury transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                Live Chat
              </h3>
              <p className="text-muted-foreground mb-6">
                Get instant answers to your questions from our jewelry experts
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-luxury w-full"
              >
                Start Chat
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card text-center group hover:shadow-luxury transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Video size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                Virtual Consultation
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a video call to view our collection from home
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-luxury w-full"
              >
                Book Video Call
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-card text-center group hover:shadow-luxury transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
                In-Store Visit
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience our jewelry collection in person at our boutique
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-luxury w-full"
              >
                Visit Store
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="mb-4 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border-0 overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-playfair font-semibold">Boutique Assistant</h3>
                  <p className="text-sm opacity-90">Online now</p>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="hover:bg-white/20 p-1 rounded transition-colors">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {message.sender === 'bot' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle size={14} className="text-white" />
                        </div>
                      )}
                      <div
                        className={`px-3 py-2 rounded-lg text-sm ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-br-md'
                            : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm'
                        }`}
                      >
                        {message.text}
                      </div>
                      {message.sender === 'user' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-white border-t border-gray-100">
                <div className="flex items-center space-x-2 bg-gray-50 rounded-full p-1">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 bg-transparent text-sm focus:outline-none placeholder-gray-500 text-gray-800"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSendMessage}
                    disabled={!chatMessage.trim()}
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white p-2 rounded-full hover:from-amber-600 hover:to-yellow-700 transition-all duration-200 disabled:opacity-50 shadow-md"
                  >
                    <Send size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isChatOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsChatOpen(true)}
            className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:from-amber-600 hover:to-yellow-700 transition-all duration-300"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Boutique;