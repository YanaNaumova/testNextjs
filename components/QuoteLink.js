import WrapperImage from "./WrapperImage";
import WrapperText from "./WrapperText";
import WrapperContainer from "./WrapperContainer";
import Image from "next/image";
import styles from "../styles/QuoteLink.module.scss"

const QuoteLink = (props) => {
    const { srcQuoteLink, widthQuoteLink, heightQuoteLink, linkText} = props;
    return (
        <WrapperContainer nameClass={styles.quoteLinkContainer}>
            <WrapperImage nameClass={styles.icon}>
                <Image src={srcQuoteLink} width={widthQuoteLink} height={heightQuoteLink}/>
            </WrapperImage>
            <WrapperText nameClass={styles.quoteLinkText}>
                {linkText}
            </WrapperText>
        </WrapperContainer>
    )
}

export default QuoteLink;
