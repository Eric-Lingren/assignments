const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory')

//  Get all
inventoryRouter.get('/', (req, res) => {
    Inventory.find((err, data) => {
        if(err) {
            // handle our error
        }
        return res.status(200).send(data)
    })
})

//  Get One
inventoryRouter.get('/:id', (req, res) => {
    Inventory.findOne({_id: req.params.id}, (err, inventory) => {
        if (err) {
            // handle error
        }
        return res.status(200).send(inventory)
    })
})


// Post
inventoryRouter.post('/', (req, res) => {
    const newItem = new Inventory(req.body)

    newItem.save((err, inventory) =>{
        if (err){
            //  Do something with the error
        }
        return res.status(201).send(inventory)
    })
})

//  Delete
inventoryRouter.delete('/:id', (req, res) => {
    Inventory.findOneAndDelete({_id: req.params.id}, (err, inventory) => {
        if (err) {
            //  dumb errors!
        }
        return res.status(202).send('You removed something important!!!')
    })
})

//Put
inventoryRouter.put('/:id', (req, res) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedInventory) => {
            if(err) {
                //  Stop it with all the errors!!!
            }
            return res.status(201).send(updatedInventory)
        }

    )
})



module.exports = inventoryRouter