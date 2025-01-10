import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import Cvpath from '../../assets/Carlos Henrique CV - Front end.pdf';
import { colors } from "../../theme";

export const ENG_VIDEO_URL =
  "https://www.youtube.com/embed/62pFz52Yvo0?si=u9FwGMN17UAPlzKw";
export const PT_VIDEO_URL =
  "https://www.youtube.com/embed/pJClvwY7yfg?si=6JfZgDxaQkElCI_t";


export const SocialButtons = [
  {
    id: 1,
    text: "Linkedin",
    icon: FaLinkedinIn,
    color: colors.accent,
    textColor: colors.white,
    action: () =>
      window.open(
        "https://www.linkedin.com/in/carlosceagah",
        "_blank",
        "noopener noreferrer"
      ),
  },
  {
    id: 2,
    text: "Instagram",
    icon: FaInstagram,
    color: colors.radiantPink,
    textColor: colors.white,
    action: () =>
      window.open(
        "https://www.instagram.com/ceagah.dev",
        "_blank",
        "noopener noreferrer"
      ),
  },
  {
    id: 3,
    text: "CV",
    icon: TiDocumentText,
    color: colors.white,
    textColor: colors.secondaryBg,
    action: () => {
      const link = document.createElement("a");
      link.href = Cvpath;
      link.download = "Carlos_Henrique_Frontend_Resume.pdf";
      link.click();
    },
  },
];