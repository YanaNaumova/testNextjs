import WrapperImage from "./WrapperImage";
import styles from "../styles/Container.module.scss";
import Image from "next/image";
import style from "../styles/ContainerSide.module.scss";
import WrapperContainer from "./WrapperContainer";
import WrapperText from "./WrapperText";
import {useRef} from "react";
import {useParallax} from "react-scroll-parallax";

const ContainerRight = () => {
    const target = useRef(null);

    const rectangle = useParallax({
        speed: 500,
        targetElement: target.current,
    })

    const parrot = useParallax({
        speed: 200,
        targetElement: target.current,
    })

    return (
        <div ref={target} className={style.containerSide} style={{
            margin: '100px 0px 0px'
        }}>
            <WrapperContainer>
                <div ref={parrot.ref} style={{
                    height: '1px'
                }}>
                    <WrapperImage nameClass={styles.parrot}>
                        <Image src="/Parrot.svg" width={320} height={397} alt="parrot"/>
                    </WrapperImage>
                </div>
                <div ref={rectangle.ref} style={{
                    height: '1px'
                }}>
                    <WrapperImage nameClass={styles.rectangle}>
                        <Image src="/Group 29.svg" width={190} height={224} alt="rectangle"/>
                    </WrapperImage>
                    <WrapperImage nameClass={styles.avatar}>
                        <Image src="/Icon.svg" width={34} height={40} alt="avatar"/>
                    </WrapperImage>
                    <WrapperText nameClass={styles.members}>
                        Members
                    </WrapperText>
                    <WrapperText nameClass={styles.quantity}>
                        29 128
                    </WrapperText>
                </div>
            </WrapperContainer>
        </div>
    )
}

export default ContainerRight;
