'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
  { id: 1, image: '/images/Prod-Hellfirev1.webp' },
  { id: 2, image: '/images/Prod-digitaltrainer.webp' }, // Digital Trainer
  { id: 3, image: '/images/Prod-Mysticone.webp' },
  { id: 4, image: '/images/Prod-Hellfirev2.webp' },
  { id: 5, image: '/images/Prod-HellRampage.webp' },
  { id: 6, image: '/images/Prod-Hellsentinental.webp' },
];

const variants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -150 : 150,
    filter: 'blur(4px)',
  }),
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const MotionLink = motion(Link);

export default function ProductSection() {
  return (
    <section className="w-full h-screen okay">
      <div className="grid grid-cols-2 grid-rows-3 w-full h-full sec">
        {products.map((product, index) => {
          const isDigital = index === 1;
          return (
            <motion.div
              key={product.id}
              className="relative w-full h-full"
              custom={index % 2 === 0 ? 'left' : 'right'}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={variants}
            >
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-full h-full object-cover"
              />

              <MotionLink
                href="/products"
                className={`absolute left-[20%] bottom-[20%]
                  px-6 py-2 rounded-full text-sm md:text-base
                  transition-all duration-300 discover${isDigital ? ' digital' : ''}`}
                style={isDigital ? { color: '#000', borderColor: '#000' } : undefined}
                whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 250, damping: 18 } }}
                whileTap={{ scale: 0.95 }}
              >
                DISCOVER ➔
              </MotionLink>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
