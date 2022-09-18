const Header = (props) => {
    const {children, nameClass} = props
    return <h2 className={nameClass}>{children}</h2>
}

export default Header;
