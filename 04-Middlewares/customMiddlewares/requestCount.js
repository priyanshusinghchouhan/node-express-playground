let countOfrequests = 0;

const requestCount = (req, res, next) =>{
    countOfrequests++;
    req.count = countOfrequests;
    next();
}


module.exports = requestCount;
