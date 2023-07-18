import { ButtonPrimaryStyled, ButtonSocialMidia } from "../../styles/buttons";
import { Skills } from "../../utils/SkillsData";
import { Skill } from "../skills";
import { StyledBanner } from "./style";

export const Banner = () => {
  return (
    <StyledBanner id="home">
      <div className="container">
        <div className="content-about">
          <h2>
            Construindo <span>soluções digitais</span> excepcionais{" "}
          </h2>
          <p>
            Um desenvolvedor Web Full Stack, construindo sites e aplicativos da
            Web que leva ao sucesso do produto geral
          </p>
          <div className="container-submit">
            <ButtonPrimaryStyled>Ver Projetos</ButtonPrimaryStyled>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/lucascardoso07"
            >
              <ButtonSocialMidia className="fa-brands fa-github"></ButtonSocialMidia>
            </a>
          </div>
          <div className="container-skills">
            <ul>
              {Skills.map((skill, index) => (
                <Skill key={index} title={skill.title} icon={skill.icon} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledBanner>
  );
};
