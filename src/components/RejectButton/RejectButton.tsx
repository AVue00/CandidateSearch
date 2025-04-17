import React from 'react';

interface RejectButtonProps {
    onClick: () => void;
}

const RejectButton: React.FC<RejectButtonProps> = ({ onClick }) => {
    return(
        <button onClick={onClick}>
            -
        </button>
    )
};

export default RejectButton;