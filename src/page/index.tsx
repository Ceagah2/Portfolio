import { useEffect, useState } from "react"
import { Header } from "../components/organisms/Header"
import { Container } from "./styles"

const Home = () => {
  const [code, setCode] = useState<boolean>(false)

  useEffect(() => {
    let index = 0;
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === konamiCode[index]) {
        index++;
        if (index === konamiCode.length) {
          setCode(true)
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener('keydown', keydownHandler);
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [])


  return(
    <Container>
      <Header code={code}/>
    </Container>
  )
}

export default Home