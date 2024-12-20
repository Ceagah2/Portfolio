import { fetchAllGitHubData } from "../../../data/github/githubService";


export interface BadgeData {
  id: string;
  name: string;
  description: string;
  icon: string;
}
const githubData = await fetchAllGitHubData();
export const badges: BadgeData[] = [
        {
          id: "yolo",
          name: "YOLO",
          description:
            "Você só vive uma vez! Por contribuições ousadas e criativas.",
          icon: `./YOLO.png`,
        },
        {
          id: "star-struck",
          name: "Star Struck",
          description: "Concedido por receber estrelas nos seus repositórios.",
          icon: `./StarStruck.png`,
        },
        {
          id: "pull-shark",
          name: "Pull Shark",
          description: "Reconhecimento por um alto número de Pull Requests.",
          icon: `./PullShark.png`,
        },
        {
          id: "heart-on-sleeve",
          name: "Heart on Sleeve",
          description: "Por compartilhar emoções genuínas em contribuições.",
          icon: `./HeartOnSleeve.png`,
        },
        {
          id: "galaxy-brain",
          name: "Galaxy Brain",
          description: "Concedido por ideias brilhantes e inovação.",
          icon: `./GalaxyBrain-${githubData.isGalaxyBrain}.png`,
        },
      ];