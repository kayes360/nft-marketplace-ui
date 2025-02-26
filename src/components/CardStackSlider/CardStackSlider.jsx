import React from "react";
import Card from "./Card";
const heroCards = [
  {
    id: 1,
    title: "Abstr Gradient NFT",
    profileImage: "/images/hero-card-profile.png",
    profileName: "Arkhan17",
    currentBid: "0.25 ETH",
    endTime: "12h 43m 42s",
    backgroundImage: "/images/hero-card-one.png",
  },
  {
    id: 2,
    title: "Abstr Gradient NFT",
    profileImage: "/images/hero-card-profile.png",
    profileName: "Arkhan17",
    currentBid: "0.25 ETH",
    endTime: "12h 43m 42s",
    backgroundImage: "/images/hero-card-two.png",
  },
  {
    id: 3,
    title: "Abstr Gradient NFT",
    profileImage: "/images/hero-card-profile.png",
    profileName: "Arkhan17",
    currentBid: "0.25 ETH",
    endTime: "12h 43m 42s",
    backgroundImage: "/images/hero-card-three.png",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
 

// import required modules
import { EffectCards } from "swiper/modules";

export default function CardStackSlider() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      className="mySwiper"
    >
      {[...heroCards, ...heroCards].map((card, index) => (
        <SwiperSlide key={`${card.id}-${index}`}> {/* Unique key */}
          <Card card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
