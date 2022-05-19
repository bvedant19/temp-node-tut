const os = require("os");
//info about current user
const user = os.userInfo();
//console.log(user);

//method returns the system uptime
const time1 = os.uptime();
console.log(time1);

const currentOS = {
  name: os.type(),
  release: os.release,
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOS);
