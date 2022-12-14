import Header from "./Header";
import WrapperText from "./WrapperText";
import WrapperImage from "./WrapperImage";
import Image from "next/image";
import WrapperContainer from "./WrapperContainer";
import styles from "../styles/OurTeam.module.scss"

const OurTeam = () => {
    const text = `Learn more about how you can save our planet's nature.`

    return (
        <WrapperContainer id="team" nameClass={styles.ourTeamContainer}>
            <Header nameClass={styles.ourTeamHead}>
                Our top team
            </Header>
            <WrapperText nameClass={styles.ourTeamText}>
                {text}
            </WrapperText>
            <WrapperContainer nameClass={styles.photoContainer}>
                <WrapperImage nameClass={styles.photoLeft}>
                    <Image src={"/img 1.svg"} width={226} height={191} alt="team"/>
                </WrapperImage>
                <WrapperImage nameClass={styles.photoVectorLeft}>
                    <Image src={"/Vector 1.svg"} width={264} height={143} alt="team"/>
                </WrapperImage>
                <WrapperImage nameClass={styles.photoCenter}>
                    <Image src={"/Vector (6).svg"} width={239} height={203} alt="team"/>
                </WrapperImage>
                <WrapperImage nameClass={styles.photoVectorRight}>
                    <Image src={"/Vector 2.svg"} width={264} height={143} alt="team"/>
                </WrapperImage>
                <WrapperImage nameClass={styles.photoRight}>
                    <Image src={"/img 3.svg"} width={193} height={218} alt="team"/>
                </WrapperImage>
            </WrapperContainer>
        </WrapperContainer>
    )
}

export default OurTeam;
