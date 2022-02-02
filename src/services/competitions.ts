const competitions = [  
  {
    id: 0,
    name: 'Copa do Mundoxx',
    quantity: '32',
    description: 'O maior campeonato de todos.'
  },
  {
    id: 1,
    name: 'Regional',
    quantity: '16',
    description: 'O campeonato raiz.'
  },
  {
    id: 2,
    name: 'Campeonato Brasileiro',
    quantity: '20',
    description: 'Sempre tem uma ajudinha externa.'
  }    
];

class CompetitionsService{
  async getAllCompetitions(){
    return competitions;
  };

  async getCompetition(id: number){
    let competition = competitions.find(competition => competition.id === id);
    return competition;
  }  
}

export { CompetitionsService }