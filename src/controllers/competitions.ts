import { Request, Response } from "express";


class CompetitionsController{
    async getCompetitions(request: Request, response: Response){

        return response.json({'nome': 'copa do mundo'});
    }
}

export { CompetitionsController };