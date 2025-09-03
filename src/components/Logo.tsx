import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ duration: 0.3 }}
        className={`${sizeClasses[size]} text-primary flex-shrink-0`}
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M15 25 Q25 10 35 25 Q25 40 15 25" fill="currentColor" opacity="0.7"/>
          <path d="M35 25 Q25 10 15 25 Q25 40 35 25" fill="currentColor" opacity="0.3"/>
          <circle cx="25" cy="25" r="6" fill="currentColor"/>
          <circle cx="25" cy="25" r="3" fill="white"/>
          <path d="M25 8 L30 16 L20 16 Z" fill="currentColor"/>
          <path d="M25 42 L30 34 L20 34 Z" fill="currentColor"/>
          <path d="M8 25 L16 20 L16 30 Z" fill="currentColor"/>
          <path d="M42 25 L34 20 L34 30 Z" fill="currentColor"/>
        </svg>
      </motion.div>
      {showText && (
        <motion.span
          whileHover={{ scale: 1.02 }}
          className={`${textSizeClasses[size]} font-playfair font-bold text-primary whitespace-nowrap`}
        >
          Elegant Jewels
        </motion.span>
      )}
    </div>
  );
};

export default Logo;