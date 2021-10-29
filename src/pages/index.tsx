import Header from "../components/Header"
import ProfileContainer from "../components/ProfileContainer"
import TextContainer from "../components/TextContainer"
import {useRouter} from 'next/router';

import SEO from "src/components/SEO";
import SelfIntroduction from "src/components/SelfIntroduction";
import ScrollToTop from "src/components/ScrollToTop";
import Skill from "src/components/Skill";
import { useEffect, useState } from "react";
import Contact from "src/components/Contact";
import Project from "src/components/Project";
import Cursor from "src/components/Cursor";

function Index() {
  const [ScrollY, setScrollY] = useState(0);  
  const router = useRouter();
  const {locale, locales, defaultLocale} = router;

  return (
    <>
      <ScrollToTop/>
      <SEO/>
      <div>
        <Header/>
        <main >
          <TextContainer/>
          <ProfileContainer/>
        </main>
        <section>
          <SelfIntroduction/>
          <Skill/>
          {/* <Project/> */}
          <Cursor/>
          <Contact/>
        </section>
      </div>
    </>
  )
}

export default Index
