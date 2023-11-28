import { useAtom } from 'jotai';
import { languageAtom } from '../../../store';
import { motion, useAnimation } from 'framer-motion';
import { Container } from './styles';
import USA from '../../../assets/usa.svg';
import Brasil from '../../../assets/brasil.svg';

export const LanguageButton = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const controls = useAnimation();

  const changeLanguage = async () => {
    controls.start({ y: 20, scaleY: 0 }); // Move a bandeira atual para baixo
    await new Promise((resolve) => setTimeout(resolve, 300)); // Aguarda um pouco

    language === 'en-us' ? setLanguage('pt-br') : setLanguage('en-us');

    controls.start({ y: 0, scaleY: 1 }); // Move a nova bandeira de cima para baixo
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <Container
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      onClick={() => changeLanguage()}
    >
      {language === 'en-us' ? (
        <motion.img
          key="en-us"
          src={USA}
          alt="Flag USA"
          style={{ width: '24px', height: '24px' }}
          animate={controls}
        />
      ) : (
        <motion.img
          key="pt-br"
          src={Brasil}
          alt="Flag Brazil"
          style={{ width: '24px', height: '24px' }}
          animate={controls}
        />
      )}
    </Container>
  );
};
