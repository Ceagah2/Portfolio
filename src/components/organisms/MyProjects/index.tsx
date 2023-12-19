import {useState, useEffect} from 'react'
import { IProjectCard } from '../../../@types/types'
import { USER_NAME } from '../../../utils/constants'
import { ProjectCard } from '../../../components/atoms/ProjectCard'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../store'
import * as S from './styles'
export const MyProjects = () => {
  const [projects, setProjects] = useState<IProjectCard[]>()
  const [language] = useAtom(languageAtom)


  
  useEffect(() => {
    const fetchProjects = () => {
      const desiredRepos = ['Portfolio', 'wise-task', 'vv-view',];

      fetch(`https://api.github.com/users/${USER_NAME}/repos`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro ao buscar repositórios: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const filteredRepos = data.filter(repo => desiredRepos.includes(repo.name));

          const formattedData = filteredRepos.map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || '',
            owner: {
              avatar_url: repo.owner.avatar_url,
            },
            html_url: repo.html_url,
          }));

          setProjects(formattedData);
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    };

    fetchProjects();
  },[])

  return(
    <S.Container>
      <S.ProjectsHeader>
        <S.ProjectText>
          {language === "en-us" ? `Below you'll find my most relevant projects, created for personal purposes. In this section, you won't find any project I've worked on, but rather the projects I've developed to launch and host on stores.`
           :
            `Abaixo você encontrará os meus projetos mais relevantes, criados para fins pessoais. Nesta seção, você não encontrará projetos nos quais trabalhei, mas sim os projetos que desenvolvi para lançar e hospedar em lojas.`}
        </S.ProjectText>
      </S.ProjectsHeader>
      {projects && projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </S.Container>
  )
}