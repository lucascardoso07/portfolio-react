import { userData } from "../../utils/userData";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="container-user">
          <img src={`https://github.com/${userData.githubUser}.png`} alt="" />
          <p>{userData.nameUser}</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contacts">Contato</a>
            </li>
            <li>
              <a href="#socialmidia">Midias Sociais</a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};
