import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Head from 'next/head';
import OurTeam from "../components/OurTeam";
import Contact from "../components/Contact";
import WrapperContainer from "../components/WrapperContainer";
import styles from "../styles/Main.module.scss"
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import SlidersBottom from "../components/SliderBottom";
import { ParallaxProvider } from 'react-scroll-parallax'

const Home = () => (
    <ParallaxProvider scrollAxis='vertical'>
        <Head>
            <title>Home App</title>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
                  rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>

        </Head>
        <WrapperContainer nameClass={styles.mainContainer}>
            <Container>
                <NavBar/>
            </Container>
            <OurTeam/>
            <Contact/>
            <FAQs/>
            <SlidersBottom/>
            <Footer/>
        </WrapperContainer>
    </ParallaxProvider>

);

export default Home;
