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
      dealerHandValues: [],
      dealerHandTotal: '',
      dealerHandImages: [],
      playerHand: [],
      playerHandValues: [],
      playerHandTotalPreAces: '',
      playerHandTotalPostAces: '',
      playerHandImages: [],
      dealtCard: '',
      playerHasAce: false,
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
    //console.log(response.data.cards[0].value)
      dealtCards.forEach(pickACard => {
        let card = pickACard.code
        let cardImage = pickACard.image
        let cardValue = pickACard.value
        // console.log('the card just dealt was ' + card)
        // console.log('the card value is ' + cardValue)
        if (this.state.dealerHand.length <= this.state.playerHand.length){
          this.setState(prevState => {
            return {
              dealerHand: [...prevState.dealerHand, card],
              dealerHandImages: [...prevState.dealerHandImages, cardImage],
              dealerHandValues: [...prevState.dealerHandValues, cardValue],
            }
          })
          // console.log('dealer hand images are' + this.state.dealerHandImages)
          // console.log('dealer hand is currently ' + this.state.dealerHand)
          //console.log('dealer hand values are currently ' + this.state.dealerHandValues)
        } else {
            this.setState(prevState => {
              return {
                playerHand: [...prevState.playerHand, card],
                playerHandImages: [...prevState.playerHandImages, cardImage],
                playerHandValues: [...prevState.playerHandValues, cardValue],
              }
            })
          // console.log('player hand is currently ' + this.state.playerHand)
          // console.log('player hand values are ' + this.state.playerHandValues)
        }
      });
      this.setState({
        remainingCards: remainingCards
      })
      
      //console.log('there are cards left  ' + this.state.remainingCards)
      
      this.countDealerTotal()
      this.countPlayerTotal()
    })
    
  }

  dealOneCard = (e) => {
    e.preventDefault();
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
      const oneCardDealt = response.data.cards[0].code;
      const remainingCards = response.data.remaining;
      const cardImage = response.data.cards[0].image
      const cardValue = response.data.cards[0].value
      //console.log(cardValue)
      // this.setState({
      //     remainingCards: remainingCards 
      // })
      this.setState(prevState => {
        return {
          playerHand: [...prevState.playerHand, oneCardDealt],
          playerHandImages: [...prevState.playerHandImages, cardImage],
          playerHandValues: [...prevState.playerHandValues, cardValue],
        }
      }, () => this.countPlayerTotal())
      
    })
  }

  countDealerTotal = () => {
    const hand = this.state.dealerHandValues
    const numericalHand = [];
    //console.log(hand)
    hand.forEach(value => {
      //console.log(value)
      if (value === 'JACK' ||value === 'QUEEN' || value === 'KING' ){
        //console.log(value)
        value = 10
        //console.log(value)
       numericalHand.push(value)
      } else{
        const stringToNumberValue = parseInt(value)
        numericalHand.push(stringToNumberValue)
      }
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let dealerHandTotal = numericalHand.reduce(reducer);

    this.setState({
      dealerHandTotal: dealerHandTotal 
    })
  }
  
  countPlayerTotal = () => {
    const hand = this.state.playerHandValues
    const numericalHand = [];
    //console.log(hand)
    hand.forEach(value => {
      //console.log(value)
      if (value === 'JACK' ||value === 'QUEEN' || value === 'KING' ){
        //console.log(value)
        value = 10
        //console.log(value)
       numericalHand.push(value)
      } else if (value === 'ACE'){
        value = 1
        numericalHand.push(value);
        this.setState({
          playerHasAce: true
        })
      }else{
        const stringToNumberValue = parseInt(value)
        numericalHand.push(stringToNumberValue)
      }
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let playerHandTotal = numericalHand.reduce(reducer);  

    //  Sets the state for the count of that player hand with aces only being worth 1
    this.setState(() => ({
      playerHandTotalPreAces: playerHandTotal
    }), () => this.adjustPlayerCountWithAces() );
  }



//  Function adjusts the players total to refelc aces being either 1 or 11
  adjustPlayerCountWithAces = () => {
    //console.log('player has ace? ' + this.state.playerHasAce)
    //console.log('player total PRE ace adjustment ' + this.state.playerHandTotalPreAces)
    let playerTotalPreAces = this.state.playerHandTotalPreAces
      
    if (this.state.playerHasAce === true && playerTotalPreAces <= 11){
      let finalPlayerTotal = playerTotalPreAces + 10;
      //console.log( 'player total with ace Adjusted is ' + finalPlayerTotal)
      this.setState(() => ({
        playerHandTotalPostAces: finalPlayerTotal 
      }), () =>  this.didPlayerBust() )

    } else {
      //console.log('player total without ace or with high ace is ' + playerTotalPreAces)
      this.setState(() => ({
        playerHandTotalPostAces: playerTotalPreAces 
      }), () =>  this.didPlayerBust() )

    }
  }


  didPlayerBust = () => {
    //  Player Busts.  Hands Reset
    if (this.state.playerHandTotalPostAces > 21){
      setTimeout(this.resetHand, 2000)
      // Player gets 21 and win.  hands reset
    } else if (this.state.playerHandTotalPostAces === 21){
      setTimeout(this.resetHand, 2000)
    }
  }

  resetHand = () => {
      this.setState({
        dealerHand: [],
        dealerHandValues: [],
        dealerHandTotal: '',
        dealerHandImages: [],
        playerHand: [],
        playerHandValues: [],
        playerHandTotal: '',
        playerHandImages: [],
        playerHasAce: false
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
              countDealerTotal={this.state.dealerHandTotal}
              countPlayerTotal={this.state.playerHandTotal}
              dealerHandImages={this.state.dealerHandImages} 
              playerHandImages={this.state.playerHandImages} 
              dealerHandValues={this.state.dealerHandValues} 
              playerHandValues={this.state.playerHandValues}
              playerHandTotal={this.state.playerHandTotalPostAces} 
              />}/>
          <Route path="/train" component={Train}/>
          <Route path="/learn" component={Learn}/>
        </Switch>
       
        

      </div>
       
    );
  }
}

export default App;