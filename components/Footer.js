import WrapperContainer from "./WrapperContainer";
import Header from "./Header";
import WrapperText from "./WrapperText";
import WrapperImage from "./WrapperImage";
import styles from "../styles/Footer.module.scss";
import Image from "next/image";

const Footer = () => {
    return (
        <WrapperContainer id='team' nameClass={styles.footerContainer}>
            <WrapperContainer nameClass={styles.leftContainer}>
                <Header nameClass={styles.footerLeftHeader}>
                    Contacts
                </Header>
                <WrapperText nameClass={styles.footerLeftText}>
                    2019 Rootz Foundation All rights reserved
                </WrapperText>
            </WrapperContainer>
            <WrapperContainer nameClass={styles.footerWrapper}>
                <WrapperContainer nameClass={styles.middleContainer}>
                    <Header nameClass={styles.footerMiddleHeader}>
                        Headquarters
                    </Header>
                    <WrapperText nameClass={styles.footerMiddleText}>
                        1234 TalibanLos Angeles, La 1234567(123) 456-7890
                    </WrapperText>
                </WrapperContainer>
                <WrapperContainer nameClass={styles.rightContainer}>
                    <Header nameClass={styles.footerRightHeader}>
                        Social media
                    </Header>
                    <WrapperContainer nameClass={styles.imageContainer}>
                        <WrapperImage nameClass={styles.icon}>
                            <a href="https://mobile.twitter.com/World_Wildlife" target={"_blank"}>
                                <Image src="/Twitter.svg" width={22} height={22}/>
                            </a>
                        </WrapperImage>
                        <WrapperImage>
                            <a href="https://www.facebook.com/WWF/" target={"_blank"}>
                                <Image src="/Facebook.svg" width={22} height={22}/>
                            </a>
                        </WrapperImage>
                        <WrapperImage>
                            <a href="https://www.linkedin.com/company/wwf-international/" target={"_blank"}>
                                <Image src="/LinkedIn.svg" width={22} height={22}/>
                            </a>
                        </WrapperImage>
                    </WrapperContainer>
                </WrapperContainer>
            </WrapperContainer>
        </WrapperContainer>
    )
}

export default Footer;
