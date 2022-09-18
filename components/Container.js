import styles from '../styles/Container.module.scss';
import ContainerLeft from './ContainerLeft'
import ContainerRight from "./ContainerRight";
import WrapperContainer from "./WrapperContainer";

const Container = (props) => {
    const {
        children,
    } = props;

    return <div id="home" className={styles.container}>
        {children}
        <WrapperContainer nameClass ={styles.wrapperContainer}>
        <ContainerLeft/>
        <ContainerRight/>
        </WrapperContainer>
    </div>
}

export default Container;
