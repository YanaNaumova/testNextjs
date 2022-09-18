import WrapperContainer from "./WrapperContainer";
import Header from "./Header";
import WrapperText from "./WrapperText";
import styles from "../styles/FAQs.module.scss";
import FAQsList from "./FAQsList"
import ContactUs from "./ContactUs";
import Modal from "./Modal";

const FAQs = () => {
    return (
        <WrapperContainer id="mission" nameClass={styles.faqsContainer}>
            <WrapperContainer nameClass={styles.leftContainer}>
                <Header nameClass={styles.faqsLeftHeader}>
                    Ready to Get started?
                </Header>
                <WrapperText nameClass={styles.faqsLeftText}>
                    When pattern is mentioned in interior design,
                    it is easy to asso- ciate it with a geometric
                    patterned wallpaper or colourful prints on interior fabrics.
                </WrapperText>
                <Modal trigger={<button>Contact us</button>}>
                    {close => <ContactUs close={close}/>}
                </Modal>
            </WrapperContainer>
            <WrapperContainer nameClass={styles.rightContainer}>
                <FAQsList headerText={"What can I do to protect our planet?"}
                          text={"Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"}/>
                <FAQsList headerText={"How to save nature ecology?"}
                          text={"Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"}/>
                <FAQsList headerText={"What is nature conservation?"}
                          text={"Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"}/>
            </WrapperContainer>
        </WrapperContainer>
    )
}

export default FAQs;
