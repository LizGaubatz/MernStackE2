const {Pet} = require("../models/pet.model")


// SHOW ALL
module.exports.allPets = (req, res) =>{
    Pet.find().sort({type: 1})
        .then(jobs => res.json(jobs))
        .catch(err=> res.status(400).json(err))
}

// SHOW ONE
module.exports.onePet = (req, res) =>{
    Pet.findOne({_id: req.params.id})
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}

// CREATE
module.exports.addPet = (req, res) =>{
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err=> res.status(400).json(err))
}

// UPDATE
module.exports.updatePet = (req, res) =>{
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(job => res.json(job))
        .catch(err=> res.status(400).json(err))
}


// DELETE
module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err=> res.status(400).json(err))
}