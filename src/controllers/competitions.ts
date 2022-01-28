import { Request, Response } from "express";
import { CompetitionsService } from "../services/competitions";

const competitionsService = new CompetitionsService();

class CompetitionsController{
    async getAllCompetitions(request: Request, response: Response){
        const allCompetitions = await competitionsService.getAllCompetitions();
        return response.json(allCompetitions);
    };

    async getCompetition(request: Request, response: Response){
        let id: string = request.params.id;
        const oneCompetition = await competitionsService.getCompetition(id);
        return response.json(oneCompetition);
    };    
}

export { CompetitionsController };