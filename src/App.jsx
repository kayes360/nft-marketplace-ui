 

import Header from "/src/components/Header.jsx";
import Hero from "/src/components/Hero.jsx";
import AmazeNFT from "/src/components/AmazeNFT.jsx";
import CollectionNFT from "/src/components/CollectionNFT.jsx";
import CollectionOver from "/src/components/CollectionOver.jsx";
import DiscoverNFT from "/src/components/DiscoverNFT.jsx";
import SignUpNFT from "/src/components/SignUpNFT.jsx";
import Footer from "/src/components/Footer.jsx";

import SubFooter from "/src/components/SubFooter.jsx";

function App() {
  return (
    <div className="">
      <Header />  
      <Hero />
      <AmazeNFT />
      <CollectionOver />
      <CollectionNFT />
      <SignUpNFT />
      <DiscoverNFT />
      <Footer />
      <SubFooter /> 
    </div>
  );
}

export default App;
