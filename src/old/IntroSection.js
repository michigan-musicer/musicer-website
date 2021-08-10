import "./IntroSection.css"
import ProfHeadshot from "./profHeadshot.jpg"

export default function IntroSection() {
  return (
    <div className="intro-section-container">
      <div>intro text</div>
      <div>
        <img src={ProfHeadshot} width="200px"/>
      </div>
    </div>
  );
}