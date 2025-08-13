const {body, validationResult} = require("express-validator");

const validUser = [
    body("name")
      .trim()
      .notEmpty().withMessage("Name is required")
      .isLength({min: 3}).withMessage("Name must be greater than 3 characters"),

    body("email")
       .trim()
       .notEmpty().withMessage("Email is required")
       .isEmail().withMessage("Invalid email format"),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() });
        }
        next();
    }
];


module.exports = validUser;