import { Router, Request, Response } from "express";
import { TeamsController } from "../controllers/teams";

const teamsRouter = Router();

const teamsController = new TeamsController();

teamsRouter.get('/teams', teamsController.getAllTeams);
teamsRouter.get('/teams/:id', teamsController.getTeam);

export { teamsRouter };