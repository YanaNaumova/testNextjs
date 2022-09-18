import WrapperContainer from "./WrapperContainer";
import Header from "./Header";
import WrapperImage from "./WrapperImage";
import Image from "next/image";
import WrapperText from "./WrapperText";
import styles from "../styles/FAQsList.module.scss"
import {useState} from "react";

const FAQsList = (props) => {
    const {headerText, text} = props
    const [isShow, setIsShow] = useState(false)
    const photoName = isShow ? "/Btn-close.svg" : "/Btn-open.svg";

    return (
        <>
            <WrapperContainer nameClass={styles.faqsRightHeaderContainer}>
                <WrapperContainer nameClass={styles.faqsWrapper}>
                <Header nameClass={styles.faqsRightHeader}>
                    {headerText}
                </Header>
            </WrapperContainer>
            <WrapperImage nameClass={styles.faqsBtn}>
                <Image src={photoName} width={28} height={28} onClick={() => {
                    isShow === true ? setIsShow(false) : setIsShow(true)
                }}/>
            </WrapperImage>
            </WrapperContainer>
            {isShow === true ?
                (
                    <WrapperText nameClass={styles.faqsRightText}>
                        {text}
                    </WrapperText>
                ) : null
            }
            <hr/>
        </>
    )
}

export default FAQsList;


