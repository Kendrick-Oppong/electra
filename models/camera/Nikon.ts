import { models,model } from "mongoose";
import { cameraSchema } from "./cameraSchema";

 const Nikon = models.Nikon || model("Nikon", cameraSchema);
 export default Nikon;