import * as dotenv from "dotenv";

dotenv.config();

export default {
  token: process.env.TOKEN || require("../token").token,
};
