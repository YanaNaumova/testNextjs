import {useState} from 'react'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from "../styles/Sliders.module.scss"
import WrapperImage from "./WrapperImage";
import WrapperText from "./WrapperText";
import Header from "./Header";
import Image from "next/image";

const Sliders = () => {
    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    }

    const hotelCards = [
        {
            imageSrc:
                '/Slider.svg',
            title: 'Travel In Japan: The True Experience1',
            description: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
        },
        {
            imageSrc:
                '/Slider.svg',
            title: 'Travel In Japan: The True Experience2',
            description: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
        },
        {
            imageSrc:
                '/Slider.svg',
            title: 'Travel In Japan: The True Experience3',
            description: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
        }
    ]

    return (
        <div className={styles.content}>
            <div className={styles.controlPr}>
                <button onClick={sliderRef?.slickPrev}>
                    <FaChevronLeft/>
                </button>
            </div>
            <div className={styles.controlNext}>
                <button onClick={sliderRef?.slickNext}>
                    <FaChevronRight/>
                </button>
            </div>
            <Slider ref={setSliderRef} {...sliderSettings} className={styles.slider}>
                {hotelCards.map((card, index) => (
                    <div key={index + "index"} className={styles.slidNext}>
                        <div key={index} className={styles.card}>
                            <WrapperImage nameClass={styles.cardImage}>
                                <Image src={card.imageSrc} width={694} height={358} alt="slider"/>
                            </WrapperImage>
                            <Header nameClass={styles.cardHeaderShow}>
                                {card.title}
                            </Header>
                            <WrapperText nameClass={styles.textInfo}>
                                {card.description}
                            </WrapperText>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Sliders;
