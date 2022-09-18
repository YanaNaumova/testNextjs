import WrapperContainer from "./WrapperContainer";
import styles from "../styles/ContactUs.module.scss";
import Header from "./Header";
import WrapperText from "./WrapperText";


const ContactUs = (props) => {
    const {close} = props
    return (
        <WrapperContainer nameClass={styles.modal}>
            <WrapperContainer nameClass={styles.containerContacts}>
                <Header nameClass={styles.header}>
                    Our contact
                </Header>
                <WrapperText nameClass={styles.contactText}>
                    phone number: +38(096)-000-000
                    email: natureWorld@gmail.com
                </WrapperText>
                <textarea cols="25" rows="5" placeholder="send us an email">
                </textarea>
                <button onClick={close}>Send</button>
            </WrapperContainer>
        </WrapperContainer>
    )
}

export default ContactUs;
