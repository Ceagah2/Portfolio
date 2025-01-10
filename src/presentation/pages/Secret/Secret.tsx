import { useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { secretCodeAtom } from "../../../data/store/Atoms";
import { Container, Content } from "../../components/atoms";
import { Header } from "../../components/molecules";
import { ENG_VIDEO_URL, PT_VIDEO_URL, SocialButtons } from "./Secret.constants";



import * as S from './Secret.styles';

export default function Secret(){ 
  const [secretCode,] = useAtom(secretCodeAtom);
  const currentLanguage = localStorage.getItem("language") || "en";
  const navigation = useNavigate()

  useEffect(() => {
    if(!secretCode){
      navigation('/not-found')
    }
  },[navigation, secretCode])


  return (
    <Container>
      <Header />
      <Content>
        <S.SecretTitle></S.SecretTitle>
        <S.VideoContainer>
         {currentLanguage === 'en' ? (
           <iframe
            width="100%"
            height="100%"
            src={ENG_VIDEO_URL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
         ) : (
          <iframe
            width="100%"
            height="100%"
            src={PT_VIDEO_URL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         />
         )}
        </S.VideoContainer>
        <S.SocialMediaContainer>
         {SocialButtons.map((social) => 
          <S.SocialMediaButton 
            key={social.id} 
            backgroundColor={social.color} 
            color={social.textColor}
            onClick={social.action}
          >
            <social.icon size={30} color={social.textColor}/>
            <social.text />
          </S.SocialMediaButton>
        )}
        </S.SocialMediaContainer>
      </Content>
    </Container>
  );
}