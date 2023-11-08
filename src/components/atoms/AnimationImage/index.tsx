import { motion } from 'framer-motion';
import GhostImage from '../../../assets/ghost.png'


export const AnimatedImage = () => {
  return (
    <motion.img
      initial={{ y: '99%' }}
      animate={{ y: '50px', rotate: [0, -10, 10, -10, 10, -10, 0], transition: { duration: 1 } }}
      exit={{ y: '-100vh' }}
      style={{ position: 'absolute', zIndex: 9 }}
      src={GhostImage}
      alt="Imagem Animada"
    />
  );
};