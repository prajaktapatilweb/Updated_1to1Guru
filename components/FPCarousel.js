//  import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Carousel} from "react-bootstrap";
import c1 from '../public/carousel/1to1Guru-slideshow-1.webp'
import c2 from '../public/carousel/1to1Guru-slideshow-2.webp'
import c3 from '../public/carousel/1to1Guru-slideshow-3.webp'
import c4 from '../public/carousel/1to1Guru-slideshow-4.webp'
import c5 from '../public/carousel/1to1Guru-slideshow-5.webp'
import c6 from '../public/carousel/1to1Guru-slideshow-6.webp'
import c7 from '../public/carousel/1to1Guru-slideshow-7.webp'

import Image from 'next/image'

export default function FPCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image            
            src={c1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item>
          <Image            
            src={c2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image            
            src={c3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image            
            src={c4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image            
            src={c5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image            
            src={c6}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image            
            src={c7}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
