import { models, model } from "mongoose";
import { monitorSchema } from "./monitorSchema";

const Samsung = models.Samsung || model("Samsung", monitorSchema);
export default Samsung;
