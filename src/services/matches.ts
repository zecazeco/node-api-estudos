const matches = [  
  {
    id: 0,
    competition: 0,
    home: 3,
    away: 1
  },
  {
    id: 1,
    competition: 0,
    home: 1,
    away: 2
  },
  {
    id: 2,
    competition: 1,
    home: 0,
    away: 2
  },
  {
    id: 3,
    competition: 1,
    home: 0,
    away: 1
  },
  {
    id: 4,
    competition: 1,
    home: 2,
    away: 3
  },  
  {
    id: 5,
    competition: 2,
    home: 0,
    away: 3
  },  
];

class MatchesService{

  async getCompetitionMatches(compId: number){
    let compMatches = matches.filter(match => match.competition === compId);
    return compMatches;
  }  
}

export { MatchesService }