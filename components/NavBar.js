import styles from '../styles/Navbar.module.scss';
import Image from "next/image";
import Apply from "./Apply";
import Modal from "../components/Modal"
import {useEffect, useState} from "react";
import BurgerMenu from "./BurgerMenu";
import Line from "./Line";
import WrapperImage from "./WrapperImage";
import WrapperContainer from "./WrapperContainer";

const NavBar = () => {
    const [navbarShow, setNavbarShow] = useState(true);
    useEffect(() => {
        const width = (window.screen.width > 700)
        setNavbarShow(width)
    }, [])

    return (
        navbarShow === true ? (
                <WrapperContainer>
                    <WrapperContainer nameClass={styles.groot}>
                        <WrapperImage nameClass ={styles.logo}>
                            <Image src="/Logo.svg" width={100} height={30}/>
                        </WrapperImage>
                        <nav className={styles.navBar}>
                            <a href='#home'>Home</a>
                            <a href="#mission">Our mission</a>
                            <a href="#places">Places</a>
                            <a href="#team">Team</a>
                        </nav>
                        <Modal trigger={<button>Apply</button>}>
                            {close => <Apply close={close}/>}
                        </Modal>
                    </WrapperContainer>
                    <Line/>
                </WrapperContainer>
            ) :
            (
                <BurgerMenu/>
            )
    )
}

export default NavBar;
