import './Home.css'
import NavigationBar from "./NavigationBar"
import Section from "./Section"
import IntroSection from "./IntroSection"
import Divider from "./Divider"

export default function Home() {
  return (
    <div className="home">
      <header>
        <NavigationBar/>
        <div>
          <h1>Kevin technically has a website now</h1>
        </div>
      </header>
      <body>
        <div className="home-body-container">
          <div className="home-body-content">
            <IntroSection/>
            <Divider/>
            <Section title="Germ" text="any" />
            <Divider/>
            <Section title="Germ" text="any" />
            <Divider/>
            <Section title="Germ" text="any" />
            <Divider/>
            <Section title="Germ" text="any" />

          </div>
        </div>
      </body>
    </div>
  );
}