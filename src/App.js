import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Features />
      <Extension />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
