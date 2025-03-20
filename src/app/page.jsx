import Layout from "@/layout/Layout";
import AboutMe from "@/src/components/home/AboutMe";
import ContactMe from "@/src/components/home/ContactMe";
import Hero from "@/src/components/home/Hero";
import Resume from "@/src/components/home/Resume";
import Service from "@/src/components/home/Service";
import Skills from "@/src/components/home/Skills";
import Footer from "@/src/components/shared/Footer";

export default async function Home() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Service />
      <Skills />
      <Resume />
      {/* <Portfolio /> */}
      <ContactMe />
      <Footer />
    </Layout>
  );
}
