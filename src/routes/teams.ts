import { Router, Request, Response } from "express";
import { TeamsController } from "../controllers/teams";

const teamsRouter = Router();

const teamsController = new TeamsController();

/* teamsRouter.get('/teams', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API do zeco - teams'});
}) */

teamsRouter.get('/teams', teamsController.getTeam);

export { teamsRouter };