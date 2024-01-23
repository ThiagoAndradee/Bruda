import React, { useEffect, useState } from 'react';
import Participants from './Participants';
import Tabs from './Tabs';
import Draw from './Draw';
import Features from './Features';
import PBNav from './PBNav';
import Footer from './Footer';
import HeaderSection from './HeaderSection';

const AdminPage = () => {
  const [currentTab, setCurrentTab] = useState('Participants');
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/auth/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPeople(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);


  // Certifique-se de implementar a lógica para determinar os usuários sorteados
  const [sortedUsers, setSortedUsers] = useState([]);

  // Você pode chamar esta função para sortear usuários
  const handleDraw = () => {
    const sampledUsers = randomSample(people, 8); // Sortear 8 usuários aleatórios
    setSortedUsers(sampledUsers);
  };

  const randomSample = (array, sampleSize) => {
    const result = [];
    const taken = new Array(array.length);
    while (result.length < sampleSize && result.length < array.length) {
      const index = Math.floor(Math.random() * array.length);
      if (!taken[index]) {
        result.push(array[index]);
        taken[index] = true;
      }
    }
    return result;
  };
  

  return (
    <>
    <PBNav></PBNav>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'Participants' && <Participants people={people} />}
      {currentTab === 'Draw' && (
        <> 
        <Draw sortedUsers={sortedUsers} people={people} handleDrawUsers={handleDraw} />
        </>
      )}
      <HeaderSection></HeaderSection>
      <Features></Features>
      <Footer></Footer>

    </>
  );
};

export default AdminPage;
