import Section from '../util/Section.js'
import DropDown from '../util/DropDown.js'

export default function Education() {
  let sectionProps = {
    title: 'Education',
    items: [
      {
        desc: <p>Prospective <b>M.S.E University of Michigan-Ann Arbor, 
          Computer Science and Engineering </b> <em>Jan 2022 - May 2023</em></p>,
        img: ''
      },
      {
        desc: <p><b>B.S.E University of Michigan-Ann Arbor, 
          Computer Science and Engineering </b> <em>Sept 2019 - Dec 2021</em></p>,
        img: ''
      },
    ]
  };

  let awardsDropDownProps = {
      title: 'Awards',
      items: [
      {
        desc: <p>James B. Angell Scholar</p>
      },
      {
        desc: <p>Charles Barth Jr. Prize finalist</p>
      },
      {
        desc: <p>EECS Scholar</p>
      },
      {
        desc: <p>William J. Branstrom Freshman Prize</p>
      },
      {
        desc: <p>University Honors (x5)</p>
      },
      {
        desc: <p>Dean’s List (x2)</p>
      },
      {
        desc: <p>Regents Merit Scholarship for academic merit</p>
      }
    ]
  };

  let classesDropDownProps = {
    title: 'Selected coursework',
    items: [
      {
        desc: <p>Operating Systems (currently taking)</p>
      },
      {
        desc: <p>Algorithms (currently taking)</p>
      },
      {
        desc: <p>Search Engine Design</p>
      },
      {
        desc: <p>Database Management Systems</p>
      },
      {
        desc: <p>Adversarial Machine Learning</p>
      },
      {
        desc: <p>Machine Learning</p>
      },
      {
        desc: <p>Data Structures and Algorithms</p>
      },
      {
        desc: <p>Foundations of Computer Science</p>
      },
      {
        desc: <p>Intro to Computer Organization</p>
      },
      {
        desc: <p>Computer Science Pragmatics</p>
      },
    ]
  };
  
  return (
    <div>
      <Section props={sectionProps}/>
      <DropDown props={awardsDropDownProps}/>
      <DropDown props={classesDropDownProps}/>
    </div>
  );
}