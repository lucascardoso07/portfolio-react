import { userData } from "../../utils/userData";
import { StyledFooter } from "./style";
import midiainstagram from "../../assets/midiainstagram.svg";
import midialinkedin from "../../assets/midialinkedin.svg";
import midiagithub from "../../assets/midiagithub.svg";

export const Footer = () => {
  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;
  const instagranUrl = `https://instagram.com/${userData.instagramUser}`;
  const gitHubUrl = `https://github.com/lucascardoso07`;
  return (
    <StyledFooter id="socialmidia">
      <div className="container">
        <div className="agradecimento">
          <img src={`https://github.com/${userData.githubUser}.png`} alt="" />
          <div>
            <p>Thank you!</p>
            <span>Me siga nas minhas redes sociais e vamos conversar!</span>
          </div>
        </div>
        <div className="social-midia">
          <a rel="noreferrer" target="_blank" href={instagranUrl}>
            <img src={midiainstagram} alt="" />
          </a>
          <a href={linkedInUrl} rel="noreferrer" target="_blank">
            <img src={midialinkedin} alt="" />
          </a>
          <a href={gitHubUrl} rel="noreferrer" target="_blank">
            <img src={midiagithub} alt="" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};
