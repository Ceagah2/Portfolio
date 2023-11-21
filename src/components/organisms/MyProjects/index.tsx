import {useState, useEffect} from 'react'
import { IProjectCard } from '../../../@types/types'
import { USER_NAME } from '../../../utils/constants'
import { ProjectCard } from '../../../components/atoms/ProjectCard'
import * as S from './styles'
export const MyProjects = () => {
  const [projects, setProjects] = useState<IProjectCard[]>()

  
  useEffect(() => {
    const fetchProjects = () => {
      fetch(`https://api.github.com/users/${USER_NAME}/repos`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro ao buscar repositórios: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const filteredRepos = data.filter((repo: any) => {
            return repo.name === 'Portfolio' || repo.name === 'wise-task';
          });

          const formattedData: IProjectCard[] = filteredRepos.map((repo: any) => ({
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
    fetchProjects()
  },[])

  return(
    <S.Container>
      <S.ProjectsHeader>
        <S.ProjectText>Below you'll find my most relevant projects, created for personal purposes. In this section, you won't find any project I've worked on, but rather the projects I've developed to launch and host on stores.</S.ProjectText>
      </S.ProjectsHeader>
      {projects && projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </S.Container>
  )
}