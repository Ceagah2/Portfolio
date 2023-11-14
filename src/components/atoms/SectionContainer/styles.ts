import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Container = styled(motion.section) <{ orientation?: 'start' | 'end' }>`
  width: 100%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  &:not(:first-child) {
    margin-top: 40px;
  }
  align-items: ${(props) => (props.orientation === 'start' ? 'flex-start' : 'flex-end')};
`;

Container.defaultProps = {
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

export const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  width: 50%;
`