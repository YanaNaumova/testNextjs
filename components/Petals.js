import WrapperContainer from "./WrapperContainer";
import Petal from "./Petal";

const Petals = (props) => {
    const {
        nameClassPeals,
        nameClassTop, srcPetalTop, widthPetalTop, heightPetalTop,
        nameClassMiddle, srcPetalMiddle, widthPetalMiddle, heightPetalMiddle,
        nameClassBottom, srcPetalBottom, widthPetalBottom, heightPetalBottom
    } = props
    return (
        <WrapperContainer nameClass={nameClassPeals}>
            <Petal nameClass={nameClassTop} srcPetal={srcPetalTop} widthPetal={widthPetalTop}
                   heightPetal={heightPetalTop}/>
            <Petal nameClass={nameClassMiddle} srcPetal={srcPetalMiddle} widthPetal={widthPetalMiddle}
                   heightPetal={heightPetalMiddle}/>
            <Petal nameClass={nameClassBottom} srcPetal={srcPetalBottom} widthPetal={widthPetalBottom}
                   heightPetal={heightPetalBottom}/>
        </WrapperContainer>
    )
}

export default Petals
