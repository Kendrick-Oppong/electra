import { models, model } from "mongoose";
import { laptopSchema } from "./laptopSchema";

const Apple = models.Apple || model("Apple", laptopSchema);
export default Apple;
