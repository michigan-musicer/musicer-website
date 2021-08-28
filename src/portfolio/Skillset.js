import './Skillset.css';
import Section from '../util/Section.js';
import SkillCard from './SkillCard.js';

export default function Skillset() {
  let sectionProps = {
    title: 'Skillset',
    items: [],
    subsections: []
  }

  let skillCard1Props = {
    title: 'FUNDAMENTALS',
    // cardColor: 'rgb(211, 88, 69, 1)',
    items: [
      'Java', 
      'C++', 
      'C',
      'Python',
      'SQL',
      'MongoDB',
      'REST APIs', 
      'Distributed systems', 
      'Amazon Web Services (Lambda, DynamoDB, Elastic Container Service, API Gateway, Cloudwatch, CloudFormation)'

    ],
  }

  let skillCard2Props = {
    title: 'MACHINE LEARNING',
    // cardColor: 'rgb(235, 134, 71, 1)',
    items: [
      'Numpy', 
      'Scikit-Learn', 
      'PyTorch', 
      'TensorFlow', 
      'Keras'
    ],
  }

  let skillCard3Props = {
    title: 'WEB DEV',
    // cardColor: 'rgb(0, 178, 169, 1)',
    items: [
      'Mockito', 
      'Spring/Spring Boot', 
      'Kafka',
      'React/JSX', 
      'Jest', 
      'Django',
      'Javascript', 
      'HTML/CSS'
    ],
  }

  let skillCard4Props = {
    title: 'WORKFLOW',
    // cardColor: 'rgb(117, 152, 141, 1)',
    items: [
      'Agile development',
      'Postman',
      'Jira/Rally',
      'Jenkins',
      'Make',
      'Linux',
      'Git/GitHub',
      'Microsoft Office/Google Suite/LaTeX',
    ],
  }

  return (
    <div>
      <Section props={sectionProps}/>
      <div className='skillset-container'>
        <SkillCard props={skillCard1Props} />
        <SkillCard props={skillCard2Props}/>
        <SkillCard props={skillCard3Props}/>
        <SkillCard props={skillCard4Props}/>
      </div>
    </div>
  );
}