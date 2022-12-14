import styles from '../styles/BurgerMenu.module.scss'
import WrapperContainer from "./WrapperContainer";
import {useState} from "react";
import Image from "next/image";
import WrapperImage from "./WrapperImage";
import Line from "../components/Line"
import Modal from "./Modal";
import Apply from "./Apply";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const className = isOpen ? styles.active : styles.menu;

    return (
        <WrapperContainer nameClass={styles.main}>
            {isOpen === false ?
                (
                    <>
                        <WrapperContainer nameClass={styles.header}>
                            <WrapperImage nameClass={styles.logo}>
                                <Image src="/Logo.svg" width={100} height={30} alt="Logo"/>
                            </WrapperImage>
                            <div className={styles.menuBtn} onClick={() => {
                                setIsOpen(isOpen === false)
                            }}>
                                <span/>
                                <span/>
                                <span/>
                            </div>
                        </WrapperContainer>
                        <Line/>
                    </>
                ) : (
                    <>
                        <WrapperContainer nameClass={styles.headerBurgerMenu}>
                            <WrapperImage nameClass={styles.logo}>
                                <Image src="/Logo.svg" width={100} height={30} alt="Logo"/>
                            </WrapperImage>
                            <button onClick={() => {
                                setIsOpen(isOpen !== true)
                            }}>x
                            </button>
                        </WrapperContainer>
                        <Line/>
                        <div className={className}>
                            <nav>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#mission">Our mission</a></li>
                                    <li><a href="#places">Places</a></li>
                                    <li><a href="#team">Team</a></li>
                                </ul>
                                <Modal trigger={<button>Apply</button>}>
                                    {close => <Apply close={close}/>}
                                </Modal>
                            </nav>
                        </div>
                    </>
                )}
        </WrapperContainer>
    )
}

export default BurgerMenu;
