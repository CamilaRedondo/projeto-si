import { Router } from "express";
import updateAddress from "./update-address.case";

const address_router: Router = Router();

address_router.put('/update/:id', updateAddress);

export default address_router;