import { IContent } from "./Content.interface";
import { Container } from "./Content.styles";

export const Content = ( props : IContent) => {
  return(
    <Container>
      {props.children}
    </Container>
  )
}