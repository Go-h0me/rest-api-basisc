import  logger  from "pino";
import dayjs from "dayjs";

const log = logger({
  prettyPrint: true,
  //   transport: {  
  //       target: 'pino-pretty',
  //       options: {
  //           levelFirst: true,
  //           translateTime: true,
  //           colorize: true,
  //       },
  base: {
    pid: false
  },
// },
// const logger = pino({
//   transport: {
//     target: "pino-pretty",
  // },
  timestamp: () => `"time":"${dayjs().format()}"`,
});
// logger.info("hi")

export default log;
