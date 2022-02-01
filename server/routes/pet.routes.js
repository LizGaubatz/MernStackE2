const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    // app.get('/api', petController.index);
    app.post('/api/pet/new', PetController.addPet)
    app.get('/api/pet', PetController.allPets)
    app.get('/api/pet/:id', PetController.onePet)
    app.put('/api/pet/edit/:id', PetController.updatePet)
    app.delete('/api/pet/delete/:id', PetController.deletePet)
}