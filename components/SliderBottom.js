import {useState, useEffect} from 'react'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from "../styles/SlidersBottom.module.scss"
import WrapperImage from "./WrapperImage";
import WrapperText from "./WrapperText";
import Image from "next/image";
import WrapperContainer from "./WrapperContainer";
import Header from "./Header";

const SlidersBottom = () => {
    const [sliderRef, setSliderRef] = useState(null)
    const [sliderIndex, setSliderIndex] = useState(0)
    const [slidesShow, setSlidesShow] = useState(5)
    useEffect(() => {
        const width = (window.screen.width < 700) ? 1 : 5
        setSlidesShow(width)
    }, [])

    const sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesShow,
        speed: 500,
        arrows: false
    }

    const natureCards = [
        {
            imageSrc:
                '/img (3).svg',
            title: 'Save watter',
            description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        },
        {
            imageSrc:
                '/img (4).svg',
            title: 'Save watter',
            description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        },
        {
            imageSrc:
                '/img-main.svg',
            title: 'Save watter',
            description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        },
        {
            imageSrc:
                '/Vector (19).svg',
            title: 'Save watter',
            description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        },
        {
            imageSrc:
                '/img (5).svg',
            title: 'Save watter',
            description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        },
        {
            imageSrc:
                '/Vector (18).svg',
            title: 'Save watter',
            description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        }
    ]

    return (
        <WrapperContainer id="places" nameClass={styles.content}>

            <div className={styles.controlPr}>
                <button onClick={() => {
                    (sliderIndex <= 0) ?
                        setSliderIndex(natureCards.length - 1)
                        : setSliderIndex(sliderIndex - 1)
                    sliderRef?.slickPrev()
                }}>
                    <FaChevronLeft/>
                </button>
            </div>
            <WrapperText nameClass={styles.buttonText}>
                {sliderIndex+1}
            </WrapperText>
            <WrapperText nameClass={styles.buttonLastPageText}>
                / {natureCards.length}
            </WrapperText>
            <div className={styles.controlNext}>
                <button onClick={() => {
                    (sliderIndex > natureCards.length - 2 || sliderIndex < 0) ?
                        setSliderIndex(0)
                        : setSliderIndex(sliderIndex + 1)
                    sliderRef?.slickNext()
                }}>
                    <FaChevronRight/>
                </button>
            </div>

            <Slider ref={setSliderRef} {...sliderSettings} className={styles.slider}>
                {natureCards.map((card, index) => (
                    <WrapperContainer key={index + "index"} nameClass={styles.wrapper}>
                        {sliderIndex === index ?
                            (
                                <div className={styles.slidShow}>
                                    <div key={index} className={styles.cardShow}>
                                        <WrapperContainer nameClass={styles.cardImageShowWrap}>
                                            <WrapperImage nameClass={styles.cardImageShow}>
                                                <Image src={card.imageSrc} width={694} height={358} alt="slider"/>
                                            </WrapperImage>
                                        </WrapperContainer>
                                        <WrapperImage nameClass={styles.cardImageShowForText}>
                                            <Image src={"/Frame 3.svg"} width={305} height={255} alt="slider"/>
                                        </WrapperImage>
                                        <Header nameClass={styles.cardHeaderShow}>
                                            {card.title}
                                        </Header>
                                        <WrapperText nameClass={styles.textInfoShow}>
                                            {card.description}
                                        </WrapperText>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className={styles.slidNext}>
                                    <div key={index} className={styles.card}>
                                        <WrapperImage nameClass={styles.cardImage}>
                                            <Image src={card.imageSrc} width={694} height={358} alt="slider"/>
                                        </WrapperImage>
                                        <Header nameClass={styles.cardHeader}>
                                            {card.title}
                                        </Header>
                                    </div>
                                </div>
                            )}
                    </WrapperContainer>
                ))}
            </Slider>
        </WrapperContainer>
    )
}

export default SlidersBottom;
