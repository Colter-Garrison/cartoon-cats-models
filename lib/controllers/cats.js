const { Router } = require('express');
const Cat = require('../models/Cats');

module.exports = Router()
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const cat = await Cat.getById(req.params.id);
    console.log(cat);
    res.json(cat);
  })
  .get('/')
