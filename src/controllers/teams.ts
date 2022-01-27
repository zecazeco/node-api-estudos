import { Request, Response } from "express";
//import { TeamsService } from "../services/teamsService";

class TeamsController{
    async getTeam(request: Request, response: Response){
        //const { id, name } = request.body;

        //const teamsService = new TeamsService();

        //const newMessage = await createMessageService.execute({ email, message});

        return response.json({'nome': 'juventude'});
    }
}

export { TeamsController }