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
    title: 'SOFTWARE ENGINEERING',
    // cardColor: 'rgb(211, 88, 69, 1)',
    items: [
      'C++', 
      'Python',
      'Java', 
      'JavaScript',
      'C',
      'Distributed systems',
      'REST',
      'Multithreading', 
      'SQL',
      'NoSQL',
    ],
  }

  let skillCard2Props = {
    title: 'MACHINE LEARNING',
    // cardColor: 'rgb(235, 134, 71, 1)',
    items: [
      'PyTorch', 
      'TensorFlow 1/2', 
      'Numpy', 
      'Scikit-Learn', 
      'Keras'
    ],
  }

  let skillCard3Props = {
    title: 'CLOUD TECHNOLOGIES',
    // cardColor: 'rgb(235, 134, 71, 1)',
    items: [
      'AWS Lambda', 
      'AWS CloudFront', 
      'AWS DynamoDB', 
      'AWS API Gateway', 
      'AWS Elastic Container Service', 
      'AWS CloudWatch', 
      'AWS CloudFormation',
      'AWS Amplify',
      'Google Cloud Compute Engine'
    ],
  }

  let skillCard4Props = {
    title: 'FRONTEND AND BACKEND',
    // cardColor: 'rgb(0, 178, 169, 1)',
    items: [
      'React',
      'Spring/Spring Boot', 
      'Kafka',
      'Mockito',
      'Jest'
    ],
  }

  let skillCard5Props = {
    title: 'WORKFLOW',
    // cardColor: 'rgb(117, 152, 141, 1)',
    items: [
      'Agile development',
      'CI/CD',
      'Git/GitHub',
      'Jira/Rally',
      'Jenkins',
      'SonarQube',
      'Make',
      'Postman',
      'Linux',
      'Microsoft Office/Google Suite',
      'LaTeX',
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
        <SkillCard props={skillCard5Props}/>
      </div>
    </div>
  );
}