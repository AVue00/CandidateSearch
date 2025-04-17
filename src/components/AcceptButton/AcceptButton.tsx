import React from 'react';

interface AcceptButtonProps {
    onClick: () => void;
}

const AcceptButton: React.FC<AcceptButtonProps> = ({ onClick }) => {
    return(
        <button onClick={onClick}>
            +
        </button>
    )
};

export default AcceptButton;