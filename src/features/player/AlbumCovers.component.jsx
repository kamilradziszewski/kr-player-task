import React from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const AlbumCovers = ({ currentTrack, tracksCount }) => {
  const slides = [];

  for (let i = 0; i < tracksCount; i++) {
    slides.push(
      <Slide index={i} key={i}>
        <div className="album-covers__wrapper">
          <img
            src={require(`../../assets/images/cover-${i}.png`)}
            alt="Album Cover"
            className="album-covers__image"
          />
        </div>
      </Slide>
    );
  }

  return (
    <div className="album-covers">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={tracksCount}
        visibleSlides={1}
        currentSlide={currentTrack}
        touchEnabled={false}
        dragEnabled={false}
      >
        <Slider>{slides}</Slider>
      </CarouselProvider>
    </div>
  );
};

export default AlbumCovers;
