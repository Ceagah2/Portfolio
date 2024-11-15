import { IKonami } from '../validation/@types/types';

export const KonamiCode = ({ setSecretCode, startAnimation }: IKonami) => {
  let index = 0;
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const keydownHandler = (e: KeyboardEvent) => {
    if (e.key === konamiCode[index]) {
      index++;
      if (index === konamiCode.length) {
        setSecretCode(true)
        startAnimation()
        index = 0;
      }
    } else {
      index = 0;
    }
  };

  window.addEventListener('keydown', keydownHandler);
  return () => {
    window.removeEventListener('keydown', keydownHandler);
  }
}