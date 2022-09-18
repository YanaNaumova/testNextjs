import styles from "../styles/InputSearch.module.scss"
import WrapperImage from "./WrapperImage";
import Image from "next/image";

const InputSearch = () => {

    return <div className={styles.inputSearch}>

        <WrapperImage nameClass={styles.image}>
            <Image src="/Vector (5).svg" height={20} width={14}/>
        </WrapperImage>
        <form action="http://google.com/search" target="_blank">
            <input type="search" name="q" placeholder="Find the place to help" />
            <input type="hidden" name="as_sitesearch"/>
            <button type="submit">SEARCH
            </button>
        </form>
    </div>
}


// <form action="http://google.com/search" target="_blank">
//     <input type="search" name="q">
//         <input type="hidden" name="as_sitesearch" value="shpargalkablog.ru">  <!-- «shpargalkablog.ru» заменить на свой адрес сайта -->
//             <input type="submit" value="Найти">
// </form>
export default InputSearch;
