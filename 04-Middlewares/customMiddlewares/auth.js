const isOldEnough = ( req, res, next) =>{
    const year = Number(req.params.age);

    if(year >= 18){
        next();
    }
    else{
        res.json({
            message: "You are ineligible for driving",
            data: req.count
        })
    }
}

module.exports = isOldEnough;