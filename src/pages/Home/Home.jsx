import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import InstagramSection from "../../components/Instagram/Instagram";
import Packages from "../../components/Packages/Packages";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <InstagramSection />
      <Packages />
      <Footer />
    </Layout>
  );
}

export default Home;