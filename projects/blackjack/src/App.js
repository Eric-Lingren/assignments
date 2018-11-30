import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios'
import Navbar from './Navbar'
import Home from './Home'
import Play from './Play'
import Learn from './Learn'
import Train from './Train'


class App extends Component {
  constructor(){
    super()
    this.state = {
      deckCount: '',
      deckID: '',
      remainingCards: '',
      dealerHand: [],
      dealerHandImages: [],
      playerHand: [],
      playerHandImages: [],
      dealtCard: '',
    }
  }

  componentDidMount(){
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => {
      const deckID = response.data.deck_id;
      //const numberOfDecks = response.data;
      //console.log(deckID)
      this.setState({
        deckID: deckID,
      })
    })
    
  }

  dealHand = (e) => {
    e.preventDefault();
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=4`).then(response => {
      const dealtCards = response.data.cards;
      const remainingCards = response.data.remaining
    //console.log(response.data.cards[0].image)
      dealtCards.forEach(pickACard => {
        let card = pickACard.code
        let cardImage = pickACard.image
        // console.log('the card just dealt was ' + card)
        if (this.state.dealerHand.length <= this.state.playerHand.length){
          this.setState(prevState => {
            return {
              dealerHand: [...prevState.dealerHand, card],
              dealerHandImages: [...prevState.dealerHandImages, cardImage]
            }
          })
          // console.log('dealer hand images are' + this.state.dealerHandImages)
          // console.log('dealer hand is currently ' + this.state.dealerHand)
        } else {
            this.setState(prevState => {
              return {
                playerHand: [...prevState.playerHand, card],
                playerHandImages: [...prevState.playerHandImages, cardImage]
              }
            })
          // console.log('player hand is currently ' + this.state.playerHand)
          // console.log('player hand images are' + this.state.playerHandImages)
        }
      });
      this.setState({
        remainingCards: remainingCards
      })
      //console.log('there are cards left  ' + this.state.remainingCards)
    })
  }

  dealOneCard= (e) => {
    e.preventDefault();
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
      const oneCardDealt = response.data.cards[0].code;
      const remainingCards = response.data.remaining;
      const cardImage = response.data.cards[0].image
      
      this.setState({
          remainingCards: remainingCards 
      })
      this.setState(prevState => {
        return {
          playerHand: [...prevState.playerHand, oneCardDealt],
          playerHandImages: [...prevState.playerHandImages, cardImage]
        }
      })
      // console.log('player hand is currently ' + this.state.playerHand)
      // console.log('there are cards left  ' + this.state.remainingCards)
    })
  }



  render() {
    
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/play" render={props => 
              <Play {...props} 
              dealHand={this.dealHand}
              dealOneCard={this.dealOneCard} 
              dealerHandImages={this.state.dealerHandImages} 
              playerHandImages={this.state.playerHandImages} 
              />}/>
          <Route path="/train" component={Train}/>
          <Route path="/learn" component={Learn}/>
        </Switch>
       
        

      </div>
       
    );
  }
}

export default App;
