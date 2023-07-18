import { StyledProject } from "./style";

export const Project = ({ repository }) => {
  return (
    <StyledProject>
      <h2>{repository.name}</h2>
      <div className="langague-container">
        <p>Primary Language: </p>
        {repository.language ? (
          <p className="language">{repository.language}</p>
        ) : (
          <p>Primary language not identified</p>
        )}
      </div>
      <span>{repository.description?.substring(0, 129)}</span>
      <div className="git-buttons">
        <a rel="noreferrer" target="_blank" href={repository.html_url}>
          <i className="fa-brands fa-github"></i>
          <p className="title-git-card"> git hub code</p>
        </a>
        {repository.homepage && (
          <a rel="noreferrer" target="_blank" href={repository.homepage}>
            <i className="fa-solid fa-share"></i>
            <p className="title-git-card">Aplicação</p>
          </a>
        )}
      </div>
    </StyledProject>
  );
};
