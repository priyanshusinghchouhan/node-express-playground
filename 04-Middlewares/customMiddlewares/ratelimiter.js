let numberOfRequest = {};

setInterval(()=>{
    numberOfRequest = {}
}, 10000)

const rateLimit = (req, res, next) => {
    const userId = req.ip;

    if(numberOfRequest[userId]){
         numberOfRequest[userId] = numberOfRequest[userId] + 1;
        if(numberOfRequest[userId] > 5){
            return res.status(429).json({
                message: "No Entry",
                attempts: numberOfRequest[userId]
            })
        }else{
            next();
        }
    }else{
        numberOfRequest[userId] = 1;
        next();
    }
    
}

module.exports = rateLimit;