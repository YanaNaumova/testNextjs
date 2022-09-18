import WrapperImage from "./WrapperImage";
import styles from "../styles/Container.module.scss";
import style from "../styles/ContainerSide.module.scss"
import Image from "next/image";
import WrapperText from "./WrapperText"
import WrapperContainer from "./WrapperContainer";
import InputSearch from "./InputSearch"

const ContainerLeft = () => {
    return (
        <WrapperContainer nameClass ={style.containerSide}>
            <WrapperImage nameClass={styles.nature}>
                <Image src="/Headline.svg" width={385} height={210}/>
            </WrapperImage>
            <WrapperText nameClass = {styles.containerText}>
                The scale of the challenges facing our planet can seem daunting, but we can all do something.
            </WrapperText>
            <InputSearch/>
        </WrapperContainer>
    )
}

export default ContainerLeft;
