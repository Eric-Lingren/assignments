import React, { Component } from 'react'
import axios from 'axios'

// const myPromise = new Promise((resolve, reject) => reject(err))
// {
//     "characters": "https://rickandmortyapi.com/api/character",
//     "locations": "https://rickandmortyapi.com/api/location",
//     "episodes": "https://rickandmortyapi.com/api/episode"
// }

class App extends Component {
    constructor(){
        super()
        this.state = {
            characters: [],
            locations: [],
            episodes: []
        }
    }

    // declare a function as asynchronous with 'async'
    async componentDidMount(){
        // Tell the function which operations are ansynchronous using 'await'
        const characters = await axios.get("https://rickandmortyapi.com/api/character")
        const locations = await axios.get("https://rickandmortyapi.com/api/location")
        const episodes = await axios.get("https://rickandmortyapi.com/api/episode")
        this.setState({
            characters: characters.data.results,
            locations: locations.data.results,
            episodes: episodes.data.results
        })
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default App


// Promise Chaining ( what async-await does in a cleaner syntax)
    //  axios.get("https://rickandmortyapi.com/api/character").then(res => {
    //         const characters = res.data.results
    //         return characters
    //     }).then(characters => {
    //         const locationData =  axios.get("https://rickandmortyapi.com/api/location")
    //         return { characters, locationData }
    //     }).then(rickAndMortyObj => {
    //         const episodeData = axios.get("https://rickandmortyapi.com/api/episode")
    //         return {}
    //     })





// Using async - await on the backend to batch fetches:
    // authRouter.post('/login', async (req, res, next) => {
    //    try { 
    //     const user = await User.findOne({id: req.user._id})
    //     const user1 = await User.findOne({id: req.user._id})
    //     const user2 = await User.findOne({id: req.user._id})
    //     const user3 = await User.findOne({id: req.user._id})
    //     const user4 = await User.findOne({id: req.user._id})
    //     return res.status(200).send({user, user1, user2, user3, user4})
    //    }
    //    catch(err){
    //        res.status(500)
    //        return next(err)
    //    }
    // })