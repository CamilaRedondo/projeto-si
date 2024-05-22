import { Router } from "express";
import updateTerms from "./update-terms.case";

const terms_router: Router = Router();

terms_router.put('/update/:id', updateTerms);

export default terms_router;