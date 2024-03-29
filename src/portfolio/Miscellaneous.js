import Section from '../util/Section';

export default function Activities() {
  let sectionProps = {
    title: 'Miscellanea', 
    items: [
      {
        left: 
          <p>I started university as a clarinet performance major and did a semester at Michigan's School of Music, Theatre, and Dance.</p>, 
      },
      {
        left: 
          <p>I enjoy biking long distances! The longest I've ridden is 482 miles over six days.</p>, 
      },
      {
        left: 
          <p>I'm a decent cook. If I'm going to a party where I'm meeting new people, I'll usually make and bring along scallion pancakes.</p>, 
      },
      {
        left:
          <div>
            <p>I'm aiming to start blogging on Medium. School will be keeping me busy, but I'm hoping to get out one post each Sunday :)</p>
          </div>
      }
      // {
      //   left: 
      //     <p>I will be using images from Flaticon, and you'll be able to see sources in the source code (Ctrl+Shift+C, then select an image) or by hovering over the images and reading the alt text.</p>, 
      // },
      // {
      //   left: 
      //     <p>The first improvement I'm going to make after publishing this website is adding responsiveness. If you shrink your window, you'll see that the website does not adjust to the smaller window - this will change!</p>, 
      // },
    ],
  };
  
  return (
    <Section props={sectionProps}/>
  );
}