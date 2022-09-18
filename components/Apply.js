import WrapperContainer from "./WrapperContainer";
import styles from "../styles/Apply.module.scss";
import Header from "./Header";


const Apply = (props) => {
    const {close} = props;
    return (
        <WrapperContainer nameClass={styles.modal}>
            <WrapperContainer nameClass={styles.containerContacts}>
                <Header nameClass={styles.header}>
                    We will contact you as soon as possible
                </Header>
                <input placeholder={"Name"}/>
                <input placeholder={"Phone number"}/>
                <button onClick={close}>submit your application</button>
            </WrapperContainer>
        </WrapperContainer>
    )
}

export default Apply;
