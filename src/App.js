import About from './about/About.js'
import Portfolio from './portfolio/Portfolio.js'
import NavigationBar from './navigationBar/NavigationBar.js'
import './App.css';
import getAboutProps from './about/getAboutProps.js';
import DropDown from './util/DropDown.js';

export default function App() {
  const NavigationBarProps = {
    numItems: 1,
    items: [
      'Portfolio'
    ]
  };
  
  const PortfolioProps = {
    sections: [
      {
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
        ],
        subsections: [
          {
            subsection: 
              // <ul>
              //   <li>
              //   <p>James B. Angell Scholar</p>
              //   </li>
              // <li>
              //   <p>Charles Barth Jr. Prize finalist</p>
              // </li>
              // <li>
              //   <p>EECS Scholar</p>
              // </li>
              // <li>
              //   <p>William J. Branstrom Freshman Prize</p>
              // </li>
              // <li>
              //   <p>University Honors</p>
              // </li>
              // <li>
              //   <p>Dean’s List</p>
              // </li>
              // <li>
              //   <p>Regents Merit Scholarship</p>
              // </li>
              // </ul>
            
              <div>
              <DropDown props={
                {
                  title: 'Awards (click to list)',
                  items: [
                  {
                    desc: <p>James B. Angell Scholar – all As for two academic years</p>
                  },
                  {
                    desc: <p>Charles Barth Jr. Prize – finalist</p>
                  },
                  {
                    desc: <p>EECS Scholar</p>
                  },
                  {
                    desc: <p>William J. Branstrom Freshman Prize –  top 5% in freshman class</p>
                  },
                  {
                    desc: <p>University Honors</p>
                  },
                  {
                    desc: <p>Dean’s List</p>
                  },
                  {
                    desc: <p>Regents Merit Scholarship for academic merit</p>
                  }
                ]}
              }/>
              <DropDown props={
                {
                  title: 'Selected coursework (click to list)',
                  items: [
                  {
                    desc: <p>Course</p>
                  },
                  ]
                }
              }/>
              </div>
              

            // title: 'Awards',
            // items: [
            //   {
            //     desc: <p>James B. Angell Scholar – all As for two academic years</p>
            //   },
            //   {
            //     desc: <p>Charles Barth Jr. Prize – finalist</p>
            //   },
            //   {
            //     desc: <p>EECS Scholar</p>
            //   },
            //   {
            //     desc: <p>William J. Branstrom Freshman Prize –  top 5% in freshman class</p>
            //   },
            //   {
            //     desc: <p>University Honors</p>
            //   },
            //   {
            //     desc: <p>Dean’s List</p>
            //   },
            //   {
            //     desc: <p>Regents Merit Scholarship for academic merit</p>
            //   }
            // ],
          },
          // {
          //   title: 'Selected Coursework',
          //   items: [
              
          //   ]
          // }
        ]
      },
      {
        title: 'Skillset',
        items: [
          {
            desc: <p><b>Fundamentals:</b> C++, Java, SQL, Javascript, HTMl/CSS, C, Python, SQL, MongoDB, distributed systems, databases</p>,
            img: ''
          },
          {
            desc: <p><b>Machine Learning:</b> Numpy, Scikit-Learn, PyTorch, TensorFlow, Keras</p>,
            img: ''
          },
          {
            desc: <p><b>Web Dev:</b> Mockito, Spring, Spring Boot, Kafka, React, JSX, Jest, Postman, REST APIs, Amazon Web Services</p>,
            img: ''
          },
          {
            desc: <p><b>Workflow:</b> Jira/Rally, agile development, Jenkins, Make, Linux, Git, GitHub, LaTeX</p>,
            img: ''
          }
        ],
        subsections: [

        ]
      },
      {
        title: 'Work experience',
        items: [
          {
            desc: <p>Software engineer, full stack -- Ford Autonomous Vehicles <em>May 2021 - August 2021</em></p>,
            img: ''
          },
          {
            desc: <p>Student researcher -- University of Michigan Transportation Research Institute <em>May 2020 - August 2020</em></p>,
            img: ''
          }
        ],
        subsections: [
          
        ]
      },
      {
        title: 'Projects',
        items: [
          {
            desc: <p>Search engine (senior design project)</p>,
            img: ''
          },
          {
            desc: <p>Personal website</p>,
            img: ''
          }
        ],
        subsections: [
          
        ]
      },
      {
        title: 'Fun facts',
        items: [
          {
            desc: <p>I started school as a clarinet performance major and did a semester at Michigan's School of Music, Theatre, and Dance</p>,
            img: ''
          },
          {
            desc: <p>I enjoy long-distance biking; the longest bike trip I've done lasted six days and 482 miles</p>,
            img: ''
          },
          {
            desc: <p>I'm using images from Flaticon, and you can see sources in the source code (Ctrl+Shift+C, then select an image) or by hovering over and reading alt text</p>,
            img: ''
          }
        ],
        subsections: [
          
        ]
      },
    ]
  }

// need LHS about me bar, RHS portfolio
// about me bar should be in em, not percent
// will need to make it responsive to be viewable on mobile
  return (
    // copy the styling for matUI card and use it here
    <div className='app-container'> 
      <div className='app-leftside-container'>
        <About props={getAboutProps()}/>
      </div>
      <div className='app-rightside-container'>
        <NavigationBar props={NavigationBarProps}/>
        <Portfolio props={PortfolioProps}/>
      </div>
    </div>
  );
}