import React from "react";
import { WithCarouselStyle } from "./WithCarouselStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";

//adjust properties of EffectCoverflow
EffectCoverflow.params.coverflowEffect = {
  ...EffectCoverflow.params.coverflowEffect,
  depth: 500,
  rotate: 60,
};
SwiperCore.use([EffectCoverflow, Pagination]);

export default function WithCarouselDriver(Component) {
  return function (props) {
    const classes = WithCarouselStyle();
    const { listDriver } = props;
    if (listDriver && listDriver.length > 0) {
      return (
        <div id="carousel__driver">
          <Swiper
            effect="coverflow"
            slidesPerView="auto"
            pagination={{ clickable: true }}
            centeredSlides="true"
            loop="true"
          >
            {listDriver.map((item, index) => {
              return (
                <SwiperSlide key={index} className={classes.root}>
                  <Component item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      );
    }
    return <div id="carousel__driver"></div>;
  };
}
