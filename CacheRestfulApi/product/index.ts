import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Product } from "./Product"
import * as pdService from "./ProductService"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // context.log('HTTP trigger function processed a request.');
    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };

    let result = null;
    const method = req.method;
    switch(method) {
        case "GET":
            const id = req.query.id;
            result = await pdService.readProduct(id);
            break;
        case "POST":
            const newCar = req.body as Product;
            await pdService.createProduct(newCar);
            result = "Create new product Ok"
            break;
        case "PUT":
            const updCar = req.body as Product;
            await pdService.updateProduct(updCar);
            result = "Update product Ok";
            break;
        case "DELETE":
            const delCar = req.body as Product;
            await pdService.deleteProduct(delCar);
            result = "Delete product Ok";
            break;
    }

    context.res = {
        body: result
    }

};

export default httpTrigger;