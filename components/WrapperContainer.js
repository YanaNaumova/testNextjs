const WrapperContainer = (props) => {
    const {nameClass, children, id, key, myRef} = props
    return <div id={id} key={key} className={nameClass} ref={myRef}>
        {children}
    </div>
}

export default WrapperContainer;
