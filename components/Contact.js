import WrapperContainer from "./WrapperContainer";
import Header from "./Header";
import WrapperText from "./WrapperText";
import WrapperImage from "./WrapperImage";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";

const Contact = () => {

    return (
            <WrapperContainer nameClass={styles.contactContainer}>

                <WrapperContainer nameClass={styles.leftContainer}>
                    <Header nameClass={styles.leftHeader}>
                        Get started today!
                    </Header>
                    <WrapperText nameClass={styles.leftText}>
                        Learn more about how you can save our
                        planet's nature. From smart consumption to
                        switching to renewable energy, each of
                        us can do our part to save the planet.
                    </WrapperText>
                </WrapperContainer>

                <WrapperContainer nameClass={styles.rightContainer}>
                    <WrapperContainer nameClass={styles.containerLogin}>
                        <WrapperImage nameClass={styles.firstPetal}>
                            <Image src="/Vector (15).svg" width={51} height={31}/>
                        </WrapperImage>
                        <WrapperImage nameClass={styles.secondPetal}>
                            <Image src="/Vector (16).svg" width={28} height={14}/>
                        </WrapperImage>
                        <Header nameClass={styles.rightHeader}>
                            Log in
                        </Header>
                        <input placeholder={"Name"}/>
                        <input placeholder={"Email"}/>
                        <button>Book a demo</button>
                    </WrapperContainer>
                </WrapperContainer>
            </WrapperContainer>
    )
}

export default Contact;
