import Section from '../util/Section.js'
import DropDown from '../util/DropDown.js'

export default function Education() {
  let sectionProps = {
    title: 'Education',
    items: [
      {
        left: <p style={{paddingRight: '2em'}}><b>M.S.E University of Michigan-Ann Arbor, 
          Computer Science and Engineering </b></p>,
        right: <em>Jan 2022 - May 2023</em>
      },
      {
        left: <div><p style={{paddingRight: '2em'}}><b>B.S.E University of Michigan-Ann Arbor, 
          Computer Science and Engineering </b> &emsp;&emsp;&emsp;&emsp;</p>
          <p><b>GPA:</b> 3.95</p></div>,
        right: <em>Sept 2019 - Dec 2021</em>
      },
    ]
  };

  let awardsDropDownProps = {
      title: 'Awards',
      items: [
      {
        item: <p>James B. Angell Scholar (x3)</p>
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
        item: <p>Dean’s List (x3)</p>
      },
      {
        item: <p>Regents Merit Scholarship</p>
      },
    ],
    indent: true,
  };

  let classesDropDownProps = {
    title: 'Selected coursework',
    items: [
      {
        item: <p>Operating Systems</p>
      },
      {
        item: <p>Algorithms</p>
      },
      {
        item: <p>Search Engine Design</p>
      },
      {
        item: <p>Database Management Systems</p>
      },
      {
        item: <p>Machine Learning</p>
      },
      {
        item: <p>Adversarial Machine Learning</p>
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

  let certificatesDropDownProps = {
    title: 'Professional certificates',
    items: [
      {
        item: <p>Deep Learning Specialization from deeplearning.ai</p>
      },
      {
        item: <p>Machine Learning from Stanford University</p>
      },
      {
        item: <p>Django for Everybody from University of Michigan</p>
      },
      {
        item: <p>Distributed System Design Fundamentals from Particular Software</p>
      },
    ],
    indent: true,
  };
  
  return (
    <div>
      <Section props={sectionProps}/>
      <DropDown props={awardsDropDownProps}/>
      <DropDown props={classesDropDownProps}/>
      <DropDown props={certificatesDropDownProps}/>
    </div>
  );
}