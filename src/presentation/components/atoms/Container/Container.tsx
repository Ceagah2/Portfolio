import { IContainer } from "./Container.interface";
import { MainContainer } from "./Container.styles";

export const Container = (props: IContainer) => { 
  return <MainContainer>{props.children}</MainContainer>;
}
