import express, {NextFunction, Request, Response} from 'express'
import bodyParser from 'body-parser'
import {productsRoute} from "./routes/products_route";
import {allProductsRoute} from "./routes/prodAll-router";

const port: number = 3000
const parserMiddleWare = bodyParser({});
const exprApp = express();

exprApp.use(reqestCounterMidleware);
exprApp.use(authGuardMiddleware);
exprApp.use(myMiddleWare);

exprApp.use('/products', productsRoute);
exprApp.use('/productsAll', allProductsRoute);
export let counterRequests = 0;

function reqestCounterMidleware(req: Request, res: Response, next: NextFunction) {
    counterRequests++;
    next();
};

function myMiddleWare(req: Request, res: Response, next: NextFunction) {
    //@ts-ignore
    req.blabla = 'Hello';
    next();

};
function authGuardMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.query?.token === '123') {
        next();
    } else {
        res.send(401);
    }
};

/*start express App*/
exprApp.listen(port, () => {
    console.log(`Example MYapp listening on port ${port}`)
})