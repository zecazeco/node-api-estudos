import { Router, Request, Response } from "express";

const competitionsRouter = Router();

competitionsRouter.get('/competitions', (request: Request, response: Response) => {
    return response.json({message: 'competições'});
})

export { competitionsRouter };