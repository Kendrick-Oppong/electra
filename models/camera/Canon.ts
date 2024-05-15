import { models, model } from "mongoose";
import { cameraSchema } from "./cameraSchema";

const Canon = models.Canon || model("Canon", cameraSchema);
export default Canon;
