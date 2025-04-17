import { useEffect, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    const savedCandidates = JSON.parse(localStorage.getItem('acceptedCandidates') ?? '[]');
    setCandidates(savedCandidates);
  }, [refetch]);

  const handleDelete = (username: string) => {
    const updatedCandidates = candidates.filter(candidate => candidate.username !== username);
    setCandidates(updatedCandidates);
    localStorage.setItem('acceptedCandidates', JSON.stringify(updatedCandidates));
    setRefetch(!refetch);
  }


  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>GitHub</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr key={candidate.username}>
                <td>
                  <img src={candidate.avatar} alt={`${candidate.name}'s Avatar`} style={{ width: '100px', height: '100px' }} />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.username}</td>
                <td>{candidate.location}</td>
                <td>{candidate.email}</td>
                <td>{candidate.company}</td>
                <td>
                  <a href={candidate.html_url}>
                    Profile
                  </a>
                </td>
                <td>
                  <button onClick={() => handleDelete(candidate.username)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates available.</p>
      )}
    </>
  );
};

export default SavedCandidates;
