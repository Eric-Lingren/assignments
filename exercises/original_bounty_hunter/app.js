const express = require('express')
const app = express()
const uuid = require('uuid/v4')

// simulated database

const bountiesCollection = [
    {
        firstName: 'Yoda',
        lastName: 'Unknown',
        living: true,
        bountyAmount: 50000,
        type: 'Jedi',
        _id: uuid(), 
    },{
        firstName: 'Darth',
        lastName: 'Vader',
        living: false,
        bountyAmount: 10000,
        type: 'Sith',
        _id: uuid(), 
    },{
        "First Name": "Han",
        "Last Name": "Solo",
        "Living": true,
        "Bounty Amount": 3000,
        "Type": "Jedi"
    }
]

// Middleware
app.use(express.json())



// Get All
app.get('/bounties/', (req, res) => {
    res.status(200)
    res.send(bountiesCollection)
})

//  Get One 
app.get('/bounties/:_id', (req, res) => {
    const bountyId = req.params._id
    const foundBounty = bountiesCollection.find(bounty => bounty._id === bountyId)
    
    res.send(foundBounty)

})

//  post request 
app.post('/bounties/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bountiesCollection.push(newBounty)
    res.send(bountiesCollection)
    
})

// delete request
app.delete('/bounties/:_id', (req, res) => {
    // get id
    const deletedBountyId = req.params._id;
    
    // Create new aray without the deleted item
    const newBountyCollection = bountiesCollection.filter(bounty => bounty._id !== deletedBountyId)

    res.send(newBountyCollection)
})

//  Put request
app.put('/bounties/:_id', (req, res) => {
    // get id
    const bountyId = req.params._id;
    
    //  get bodty from the user update request
    const newBounty = req.body;

    // Create new aray without the updated item object
    const updatedBountyCollection = bountiesCollection.map(bounty => bounty._id === bountyId ? {...bounty, ...newBounty} : bounty)

    res.send(updatedBountyCollection)
})

// Server
app.listen(4000, () => {
    console.log('Listening on port 4000')
})

