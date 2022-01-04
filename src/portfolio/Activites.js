import Section from '../util/Section';
import DropDown from '../util/DropDown';

export default function Activities() {
  let sectionProps = {
    title: 'Academic Activities', 
    items: [
      {
        left: 
          // <div style={{width: '100%'}}>
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{paddingRight: '2em'}}><b>DEVIATE (Data Elements from Video using Impartial Algorithm Tools for Extraction)</b> - Research team leader</p>
              <em>Jan 2020 - Dec 2021</em>
            </div>
            <DropDown props={
              {
                title: 'Details', 
                items: [
                  // turn these into items with left and rights -- use icons on the right to indicate what tools you used / worked with
                  {item: <p>Spearheaded research in a lab at UMTRI (University of Michigan Transportation Research Institute) by providing technical and logistical leadership on machine learning problems to inform, direct, and assist team members.</p>},
                  {item: <p>Investigated contrastive learning to learn embeddings of image spaces to facilitate sampling a dataset with a balanced number of image class instances.</p>},
                  {item: <p>Wrote up technical justification and implementation plans for using a generative adversarial network-based architecture as the basis for defining images in a latent variable space and sampling based on that variable space.</p>},
                  {item: <p>Received and accepted offer to continue research work over the summer (see "Work Experience" above).</p>},
                ], 
                indent: false
              }
            }/>
          </div>
      },
      {
        left: 
          <div style={{width: '100%'}}>
             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{paddingRight: '2em'}}><b>MSAIL (Michigan Student Artificial Intelligence Lab)</b> - Education admin</p>
              <em>May 2020 - August 2020</em>
            </div>
            <DropDown props={
              {
                title: 'Details', 
                items: [
                  {item: <p>Created material for and taught over half of MSAIL’s first ever education curriculum, teaching fundamental concepts in machine learning to incoming members of MSAIL and making the organization more welcoming for those with less AI / ML background.</p>},
                  {item: <p>Acted as individual lead on the education team in the winter 2021 term, creating new educational materials based on feedback from the pilot semester and presenting introductions to areas of AI at virtual education sessions.</p>},
                  {item: <p>Wrote the pilot article for MSAIL’s new blog initiative and worked with blog admins to experiment with and eventually define a process for creating and publishing posts.</p>},
                ],
                indent: false
              }
            }/>
          </div> 
      }
    ],
  };
  
  return (
    <Section props={sectionProps}/>
  );
}