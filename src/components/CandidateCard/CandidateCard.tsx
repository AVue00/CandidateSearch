import React from 'react';
import Candidate from '../../interfaces/Candidate.interface';
import RejectButton from '../RejectButton/RejectButton';
import AcceptButton from '../AcceptButton/AcceptButton';
import './CandidateCard.css';

interface CandidateCardProps {
    currentCandidate: Candidate;
    refetchData: (value: boolean) => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ currentCandidate, refetchData }) => {
    const handleReject = () => {
        console.log('Rejected');
        refetchData(true);
    }

    const handleAccept = () => {
        console.log('Accepted');
        const acceptedCandidate = JSON.parse(localStorage.getItem('acceptedCandidates')??'[]');
        acceptedCandidate.push(currentCandidate);
        localStorage.setItem('acceptedCandidates', JSON.stringify(acceptedCandidate));
        refetchData(true);
    }
    
    return(
        <div className="CandidateCard.css">
            <img src={currentCandidate.avatar} alt={`${currentCandidate.name}'s Avatar`}>
            </img>
            <h2>{currentCandidate.name} ({currentCandidate.username})</h2>
            <p>Location: {currentCandidate.location}</p>
            <p>Email: {currentCandidate.email}</p>
            <p>Company: {currentCandidate.company}</p>
            <p>GitHub: {currentCandidate.html_url}</p>
            <RejectButton onClick={handleReject}/>
            <AcceptButton onClick={handleAccept} />
        </div>
    )
}

export default CandidateCard;