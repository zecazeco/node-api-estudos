const competitions = [  
  {
    id: 0,
    name: 'Copa do Mundoxx',
    quantity: '32'
  },
  {
    id: 1,
    name: 'Regional',
    quantity: '16'
  },
  {
    id: 2,
    name: 'Campeonato Brasileiro',
    quantity: '20'
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