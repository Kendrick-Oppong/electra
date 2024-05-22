import { models, model } from "mongoose";
import { laptopSchema } from "./laptopSchema";

const Hp = models.Hp || model("Hp", laptopSchema);
export default Hp;
