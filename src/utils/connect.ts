import mongoose from "mongoose";
import config from "config";
import { connected } from "process";
import logger from "./logger"


async function connect(){
    const uriDb=config.get<string>("dbHost")

try{
    await mongoose.connect(uriDb);
    logger.info("DB connected")
    
}catch(err){
    logger.error("Connection to DB failed");
    process.exit(1);
}
}

export default connect;