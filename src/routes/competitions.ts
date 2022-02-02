import { Router, Request, Response } from "express";
import { CompetitionsController } from "../controllers/competitions";

const competitionsRouter = Router();

const competitionsController = new CompetitionsController();

/* competitionsRouter.get('/competitions', (request: Request, response: Response) => {
    return response.json({message: 'competições'});
}) */

competitionsRouter.get('/competitions', competitionsController.getAllCompetitions);
competitionsRouter.get('/competitions/:id/matches', competitionsController.getCompetitionMatches);
competitionsRouter.get('/competitions/:id/teams', competitionsController.getCompetitionTeams);
competitionsRouter.get('/competitions/:id', competitionsController.getCompetition);

export { competitionsRouter };