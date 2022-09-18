import WrapperImage from "./WrapperImage";
import WrapperText from "./WrapperText";
import Image from "next/image";
import styles from "../styles/News.module.scss"

const WrapperNews = (props) => {
    const {imageSrc,imageWidth,imageHeight,textHashtag,textNews,newsLink}=props
    return (
        <div className={styles.newsWrapper}>
            <WrapperImage nameClass ={styles.newsImage}>
                <Image src={imageSrc} width={imageWidth} height={imageHeight}/>
            </WrapperImage>
            <div className={styles.news}>
            <WrapperText nameClass={styles.newsHashtag}>
                {textHashtag}
            </WrapperText>
            <WrapperText nameClass={styles.newsText}>
                {textNews}
            </WrapperText>
            <WrapperText nameClass={styles.newsLink}>
                <a href="#">{newsLink}</a>
            </WrapperText>
            </div>
        </div>
    )
}

export default WrapperNews;
