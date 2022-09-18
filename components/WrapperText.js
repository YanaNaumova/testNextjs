const WrapperText =(props) =>{
    const {children,nameClass} = props;

    return <div className={nameClass}>
        {children}
    </div>
}

export default WrapperText;
