import { models, model } from "mongoose";
import { laptopSchema } from "./laptopSchema";

const Dell = models.Dell || model("Dell", laptopSchema);
export default Dell;
