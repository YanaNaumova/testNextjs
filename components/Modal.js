import React from 'react';
import WrapperContainer from "./WrapperContainer";
import Popup from "reactjs-popup";


const Modal = (props) => {
    const {trigger, children} = props
    return (
        <WrapperContainer>
            <Popup modal trigger={trigger}>
                {children}
            </Popup>
        </WrapperContainer>
    );
};

export default Modal;
