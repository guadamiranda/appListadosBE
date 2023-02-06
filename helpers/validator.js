const { validationResult } = require("express-validator")

const validator = (req,res,next)=>
{
    const validatorResult = validationResult(req);
    if (!validatorResult.isEmpty()) 
        {
            return res.status(400).json({
                errors: validatorResult.errors, 
                success: false
            });
        }
    next()
}

module.exports = validator
