import './About.css'

export default function About(props) {
  return (
    <div className='about-container'>
      <div className='about-title'>
        <title>${props.title}</title>
      </div>
      <div className='about-body'>
        <img src='{props.img}'/>
        <p>${props.desc}</p>
      </div>
    </div>
  );
}