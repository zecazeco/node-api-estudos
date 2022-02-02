import { Request, Response } from "express";
import { CompetitionsService } from "../services/competitions";
import { MatchesService } from "../services/matches";

const competitionsService = new CompetitionsService();
const matchesService = new MatchesService();

class CompetitionsController{
    async getAllCompetitions(request: Request, response: Response){
        const allCompetitions = await competitionsService.getAllCompetitions();
        return response.json(allCompetitions);
    };

    async getCompetition(request: Request, response: Response){
        let id: string = request.params.id;
        const oneCompetition = await competitionsService.getCompetition(parseInt(id));
        return response.json(oneCompetition);
    };

    async getCompetitionMatches(request: Request, response: Response){
        let compId: string = request.params.id;
        const compMatches = await matchesService.getCompetitionMatches(parseInt(compId));
        return response.json(compMatches);
    };   
    
    async getCompetitionTeams(request: Request, response: Response){
        let compId: string = request.params.id;
        const compMatches = await matchesService.getCompetitionMatches(parseInt(compId));

        let taux: number[] = []; 
        compMatches.forEach(option => {
            taux.push(option.home);
            taux.push(option.away);
        })
        let aux = taux.filter((value, index) => taux.indexOf(value) === index);

        aux.sort((a, b) => a - b);

        let teams: any[] = []; 
        let cid: number = 0;

        aux.forEach(value => {
            teams.push({
                id: cid,
                team: value
            },);
            cid++;           
        })

        return response.json(teams);
/*         const teste = [  
            {
                id: 0,
                team: 1
            },
            {
                id: 1,
                team: 2
            },
            {
                id: 2,
                team: 4
            },            
        ];   */  
        //remove repetidos    
        //let x = teams.filter((value, index) => teams.indexOf(value) === index);

        //const obj = x.reduce((o, key) => ({ ...o, [key]: key}), {})
        //const obj = x.reduce((o, key) => Object.assign(o, {[key]: key}), {});
    };      
}

export { CompetitionsController };