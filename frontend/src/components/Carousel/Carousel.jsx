import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Carousel/ExampleCarouselImage';
import HospitalImg1 from  "../../assets/HospitalImage1.jpg";
import HospitalImg2 from  "../../assets/HospitalImage2.jpg";
import HospitalImg3 from  "../../assets/HospitalImage3.jpg";
import HospitalImg4 from  "../../assets/HospitalImage4.jpg";
import HospitalImg5 from  "../../assets/HospitalImage5.jpg";
import HospitalImg6 from  "../../assets/HospitalImage6.jpg";
function AutoSlideCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage src= {HospitalImg1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src= {HospitalImg2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src= {HospitalImg3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src= {HospitalImg4} />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src= {HospitalImg5} />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src= {HospitalImg6} />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AutoSlideCarousel;