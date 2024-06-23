import { models, model } from "mongoose";
import { cameraSchema } from "./cameraSchema";

const Sony = models.Sony || model("Sony", cameraSchema);
export default Sony;
