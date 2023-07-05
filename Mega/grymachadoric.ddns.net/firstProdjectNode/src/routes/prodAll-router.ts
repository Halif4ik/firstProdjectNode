import {NextFunction, Request, Response, Router} from "express";

export const allProductsRoute = Router({})


allProductsRoute.get('/', (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla})
})