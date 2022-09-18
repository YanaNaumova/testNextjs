import WrapperNews from "./WrapperNews";
import styles from "../styles/News.module.scss"

const News = () => {
    return (
        <div className={styles.newsContainer}>
            <WrapperNews imageSrc={"/Pic (2).svg"}
                         imageWidth={90}
                         imageHeight={90}
                         textHashtag={"# Stories"}
                         textNews={"Travel In Japan: The True Experience"}
                         newsLink={"see more"}/>
            <WrapperNews imageSrc={"/Group 28.svg"}
                         imageWidth={123}
                         imageHeight={90}
                         textHashtag={"# VideoTutor"}
                         textNews={"Helping Wild Turtles"}
                         newsLink={"see more"}/>
            <WrapperNews imageSrc={"/Pic (3).svg"}
                         imageWidth={90}
                         imageHeight={90}
                         textHashtag={"# Photostory"}
                         textNews={"Threats of Indusrial World "}
                         newsLink={"see more"}/>
        </div>
    )
}

export default News;


