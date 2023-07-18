import { StyledContacts } from "./style";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import mail from "../../assets/mail.svg";
import { userData } from "../../utils/userData";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export const Contacts = () => {
  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);
  return (
    <StyledContacts id="contacts">
      <div className="container">
        <motion.div style={{ scale }}>
          <div className="contact-infos">
            <h3>
              Vamos marcar uma conversa e desenvolver nossa criatividade juntos?
            </h3>
            <p>
              Advertise your brand organically within Dribbble’s design
              inspiration feed.
            </p>
          </div>
        </motion.div>
        <div className="my-contacts">
          <ul>
            <li>
              <img src={whatsapp} alt="" />
              <div className="my-contacts-text">
                <h4>My Phone</h4>
                <p>
                  Estou disponível para um bate-papo por whatsapp, vamos falar
                  sobre criatividade juntos?
                </p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  Chame agora
                </a>
              </div>
            </li>
            <li>
              <img src={mail} alt="" />
              <div className="my-contacts-text">
                <h4>My email</h4>
                <p>
                  Envie-me um e-mail relatando feedbacks, sugestões e ideias
                </p>
                <a href="">Enviar agora</a>
              </div>
            </li>
            <li>
              <img src={linkedin} alt="" />
              <div className="my-contacts-text">
                <h4>My LinkedIn</h4>
                <p>
                  Podemos criar interações mais constantes assim como uma rede
                  de compartilhamento
                </p>
                <a rel="noreferrer" target="_blank" href={linkedInUrl}>
                  Ir para o LinkedIn agora
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledContacts>
  );
};
