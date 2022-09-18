import WrapperImage from "./WrapperImage";
import WrapperText from "./WrapperText";
import WrapperContainer from "./WrapperContainer";
import Petals from "./Petals";
import QuoteLink from "./QuoteLink";
import Image from "next/image";
import styles from "../styles/Quote.module.scss";

const Quote = () => {
    return (
        <WrapperContainer nameClass={styles.quoteContainer}>
            <Petals nameClassPeals={styles.petalsContainer}
                    nameClassTop={styles.leftPealTop} srcPetalTop={"/Vector (7).svg"} widthPetalTop={71}
                    heightPetalTop={54}
                    nameClassMiddle={styles.leftPealMiddle} srcPetalMiddle={"/Vector (9).svg"} widthPetalMiddle={35}
                    heightPetalMiddle={19}
                    nameClassBottom={styles.leftPealBottom} srcPetalBottom={"/Vector (10).svg"} widthPetalBottom={46}
                    heightPetalBottom={26}
            />
            <WrapperContainer nameClass={styles.centerContainer}>
                <WrapperContainer nameClass={styles.header}>
                    <WrapperImage nameClass={styles.imageCenter}>
                        <Image src="/Ellipse.svg" width={280} height={280} alt="quote"/>
                    </WrapperImage>
                    <WrapperText nameClass={styles.textCenter}>
                        The scale of the challenges facing our planet can seem daunting, but we can all do something.
                    </WrapperText>
                </WrapperContainer>
                <hr className={styles.hr}/>
                <WrapperContainer nameClass={styles.iconContainer}>
                    <QuoteLink srcQuoteLink={"/Icon 1.svg"} widthQuoteLink={34} heightQuoteLink={34}
                               linkText={"Assets value COMPOSer"}/>
                    <QuoteLink srcQuoteLink={"/Icon 1 (1).svg"} widthQuoteLink={34} heightQuoteLink={34}
                               linkText={"GRAPH BUDGET ANALYZER"}/>
                    <QuoteLink srcQuoteLink={"/Icon 2.svg"} widthQuoteLink={34} heightQuoteLink={34}
                               linkText={"MONTHLY AVG. REVENUE"}/>
                </WrapperContainer>
            </WrapperContainer>
            <Petals nameClassPeals={styles.petalsContainer}
                    nameClassTop={styles.rightPealTop} srcPetalTop={"/Vector (11).svg"} widthPetalTop={113}
                    heightPetalTop={78}
                    nameClassMiddle={styles.rightPealMiddle} srcPetalMiddle={"/Vector (12).svg"} widthPetalMiddle={46}
                    heightPetalMiddle={22}
                    nameClassBottom={styles.rightPealBottom} srcPetalBottom={"/Vector (13).svg"} widthPetalBottom={57}
                    heightPetalBottom={35}
            />
        </WrapperContainer>
    )
}

export default Quote;
