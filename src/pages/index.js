import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import EmiCalculator from "./EmiCalculator/EmiCalculator"
import { useState } from "react";
import HomeLoan from "./HomeLoan/HomeLoan";


export default function Home() {
  const [showNav, setShowNav] = useState(false);

  
  const onMoboClicks = () => {
    setShowNav(!showNav);
  };

  return (
<>
<Header  

showNav={showNav}
        setShowNav={setShowNav}
        onMoboClicks={onMoboClicks}/>
<EmiCalculator/>
<HomeLoan/>
<Footer/>

</>
  );
}
