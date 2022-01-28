const competitions = [  
  {
    id: 0,
    name: 'Copa do Mundo',
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

  async getCompetition(id: string){
    let competition = competitions.find(competition => competition.id === parseInt(id));
    return competition;
  }  
}

export { CompetitionsService }