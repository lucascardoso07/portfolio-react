import { Banner } from "../../components/banner";
import { Contacts } from "../../components/contacts";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Projects } from "../../components/projects";
import { StyledHome } from "./style";

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Banner />
      <Projects />
      <Contacts />
      <Footer />
    </StyledHome>
  );
};
