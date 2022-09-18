const WrapperImage = (props) => {
    const {
        nameClass,
        children,
        ref
    } = props;
    return <div className={nameClass} ref={ref}>{children}</div>
}

export default WrapperImage;
