const { createLogger, transports, format } = require("winston");
const { combine, timestamp, simple, colorize, printf, label } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
  file: combine(
    label({
      label: "백엔드 맛보기",
    }),
    // format.colorize(),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    // 마지막 파라미터가 출력 포맷을 결정함. 여기선 print()를 사용. json, simple등이 있음.
    printFormat
  ),
  console: combine(colorize(), simple()),
};

const opts = {
  file: new transports.File({
    // Console이 아니라 File일 경우 filename과 dirname을 추가해야함.
    filename: "access.log",
    dirname: "./logs",
    // logger의 레벨은 하위 레벨은(레벨이 높은) 상위 레벨것까지 출력한다.
    // error:0, warn:1, info:2, http:3, verbose:4, debug:5, silly:6
    level: "info",
    //출력하고싶은 포맷. 색이 필요없으면 format: simple() 만 사용
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

module.exports = logger;
