import Section from '../util/Section.js'
import DropDown from '../util/DropDown.js'

export default function Education() {
  let sectionProps = {
    title: 'Education',
    items: [
      {
        left: <p style={{paddingRight: '2em'}}>Prospective <b>M.S.E University of Michigan-Ann Arbor, 
          Computer Science and Engineering </b></p>,
        right: <em>Jan 2022 - May 2023</em>
      },
      {
        left: <p style={{paddingRight: '2em'}}><b>B.S.E University of Michigan-Ann Arbor, 
          Computer Science and Engineering </b> &emsp;&emsp;&emsp;&emsp;<u>GPA: 3.98</u></p>,
        right: <em>Sept 2019 - Dec 2021</em>
      },
    ]
  };

  let awardsDropDownProps = {
      title: 'Awards',
      items: [
      {
        item: <p>James B. Angell Scholar</p>
      },
      {
        item: <p>Charles Barth Jr. Prize finalist</p>
      },
      {
        item: <p>EECS Scholar</p>
      },
      {
        item: <p>William J. Branstrom Freshman Prize</p>
      },
      {
        item: <p>University Honors (x5)</p>
      },
      {
        item: <p>Dean’s List (x2)</p>
      },
      {
        item: <p>Regents Merit Scholarship for academic merit</p>
      },
    ],
    indent: true,
  };

  let classesDropDownProps = {
    title: 'Selected coursework',
    items: [
      {
        item: <p>Operating Systems (currently taking)</p>
      },
      {
        item: <p>Algorithms (currently taking)</p>
      },
      {
        item: <p>Search Engine Design</p>
      },
      {
        item: <p>Database Management Systems</p>
      },
      {
        item: <p>Adversarial Machine Learning</p>
      },
      {
        item: <p>Machine Learning</p>
      },
      {
        item: <p>Data Structures and Algorithms</p>
      },
      {
        item: <p>Foundations of Computer Science</p>
      },
      {
        item: <p>Intro to Computer Organization</p>
      },
      {
        item: <p>Computer Science Pragmatics</p>
      },
    ],
    indent: true,
  };
  
  return (
    <div>
      <Section props={sectionProps}/>
      <DropDown props={awardsDropDownProps}/>
      <DropDown props={classesDropDownProps}/>
    </div>
  );
}