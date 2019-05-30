const dns = require('dns');
const util = require('util');
const promiseResolve = util.promisify(dns.resolve4);

async function ipAddress() {
    const ipadd = await promiseResolve('www.mum.edu');
    console.log(ipadd);
}
ipAddress();
