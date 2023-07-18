import { useEffect, useState } from "react";
import { StyledProjects } from "./style";
import { userData } from "../../utils/userData";
import { Project } from "./project";

export const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <StyledProjects id="projects">
      <div className="container">
        <div className="title-contaier">
          <h2>Meus Projetos</h2>
          <p>
            Projetos Criado na{" "}
            <a target="_blank" href="https://kenzie.com.br/" rel="noreferrer">
              {" "}
              Kenzie Academy
            </a>
          </p>
        </div>
        <ul>
          {repositories.map((repository) => (
            <Project repository={repository} key={repository.id} />
          ))}
        </ul>
      </div>
    </StyledProjects>
  );
};
