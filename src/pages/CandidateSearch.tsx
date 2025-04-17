import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState({
    name: '',
    username: '',
    location: '',
    email: '',
    company: '',
    html_url: '',
    avatar: ''
  });

  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    if (!refetch) {
      return;
    }
    searchGithub().then((response) => {
      console.log(response);
      searchGithubUser(response[0].login).then((response) => {
        console.log(response);
        setCurrentCandidate({
          name: response.name,
          username: response.login,
          location: response.location,
          email: response.email,
          company: response.company,
          html_url: response.html_url,
          avatar: response.avatar_url
        });
        setRefetch(false);
      });
    });
  }, [refetch]);
  
  return (
  <div>
  <h1>CandidateSearch</h1>
  <CandidateCard currentCandidate={currentCandidate} refetchData={setRefetch}/>
  </div>
  )
};

export default CandidateSearch;
