import { Request, Response } from "express";
import { TeamsService } from "../services/teams";

const teamsService = new TeamsService();

class TeamsController{
    async getAllTeams(request: Request, response: Response){
        const allTeams = await teamsService.getAllTeams();
        return response.json(allTeams);
    };

    async getTeam(request: Request, response: Response){
        let id: string = request.params.id;
        const oneTeam = await teamsService.getTeam(parseInt(id));
        return response.json(oneTeam);
    }; 
}

export { TeamsController };