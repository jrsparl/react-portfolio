import image from '../../assets/johnProfile.png';
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap'
function About() {
  return (
    <section className="bg-light variant-light p-5" id="about">
      <Container className="text-center">


        <Image src={image} fluid roundedCircle className="box-shadow" width="50%" height="50%" alt="cover" />
        <h1 className="pt-3">About The Developer</h1>
        <div className="my-2 p-3">
          <p>
            John Sparling has over a decade of process engineering, warehousing, distribution and leadership experience. In his time developing all systems and processes for a small retail company in New England he began earning his developer stripes designing a UI from the backend of excel for a complete warehousing, location based inventory and distribution application. This application was the foundation for the company's distribution operations to grow from five stores to twenty in the matter of a few years with only nominal increases in labor force. John has since entered into University of Central Florida's Full Stack Developer Bootcamp to be a competitive force in efficiency building applications.  John's vast experience in data management, inventory, process engineering and leadership provide him with a unique and important expertice to couple with his skills as a full stack developer.  You won't be able to find an individual that will be able to provide a more thoughtful product and technical insight to your business needs.
            </p>
        </div>
      </Container>
    </section>
  );
}


export default About;