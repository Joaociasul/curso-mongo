const TaskModel = require('../model/taskmodel')
const {isPast}  = require('date-fns')

const TaskValidation = async(req,res,next) => {
    const {macAddress, type, title, description, when} = req.body;
    if (! macAddress)
        return res.status(400).json({error:"Mac é obrigatório"})
    if (! type)
        return res.status(400).json({error:"type é obrigatório"})
    if (! title)
        return res.status(400).json({error:"title é obrigatório"})
    if (! description)
        return res.status(400).json({error:"description é obrigatório"})
    if (! when)
        return res.status(400).json({error:"when é obrigatório"})
    if (isPast(new Date (when)))
        return res.status(400).json({error:"Cadastre uma Data futura"})

    next()

}
module.exports =  TaskValidation