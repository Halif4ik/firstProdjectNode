import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-repository";
import {counterRequests} from "../index";

export const productsRoute = Router({})


productsRoute.get('/', (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + '-' + counterRequests})
});

productsRoute.get('/:ID', (req: Request, res: Response) => {
    //@ts-ignore
    const blabla = req.blabla;
    const products = productsRepository.getAllProd()
    res.send({value: blabla})
});


