/**
 * 从morgan copy了一部分代码
 */

function getip (req) {
  return req.ip ||
    req._remoteAddress ||
    (req.connection && req.connection.remoteAddress) ||
    undefined
}



async function middleware() {


  return function logger (req, res, next) {


    next()
  }
}