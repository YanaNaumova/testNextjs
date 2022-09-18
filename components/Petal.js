import Image from "next/image";
import WrapperImage from "./WrapperImage";

const Petal = (props) => {
    const {nameClass, srcPetal, widthPetal, heightPetal} = props
    return (
        <WrapperImage nameClass={nameClass}>
            <Image src={srcPetal} width={widthPetal} height={heightPetal}/>
        </WrapperImage>
    )
}

export default Petal;
