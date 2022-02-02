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
}

export { CompetitionsController };