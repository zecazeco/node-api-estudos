const teams = [  
  {
    id: 0,
    name: 'Esporte Clube Nova',
    city: 'Nova Petrópolis'
  },
  {
    id: 1,
    name: 'Linha Olinda Kiwiks',
    city: 'Nova Petrópolis'
  },
  {
    id: 2,
    name: 'Pirajá Stinktiers',
    city: 'Nova Petrópolis'
  },
  {
    id: 3,
    name: 'Pinhal Alto Tiltabas',
    city: 'Nova Petrópolis'
  }   
];

class TeamsService{
  async getAllTeams(){
    return teams;
  };

  async getTeam(id: string){
    let team = teams.find(team => team.id === parseInt(id));
    return team;
  }  
}

export { TeamsService }