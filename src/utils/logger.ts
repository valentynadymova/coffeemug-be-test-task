import pino from "pino";
import pretty from "pino-pretty";

// const log=logger({
//     prettyPrint: true,
//     base:{
//         pid:false
//     },
//     timestamp: ()=>`,"time":"${dayjs().format()}"`,
// });



const logger = pino(pretty());

// logger.info('hi');

export default logger;
