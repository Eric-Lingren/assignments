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
      dealerHandTotalPreAces: '',
      dealerHandTotalPostAces: '',
      playerHandTotalPreAces: '',
      playerHandTotalPostAces: '',
      playerHandImages: [],
      dealtCard: '',
      playerHasAce: false,
      dealerHasAce: false,
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
        //  Deales an even amount of cards to the dealer and player
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

  //  Deal card to player when they choose to hit
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
    console.log('Count Dealer Total ran')
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
      } else if (value === 'ACE'){
        value = 1
        numericalHand.push(value);
        this.setState({
          dealerHasAce: true
        })
      }else{
        const stringToNumberValue = parseInt(value)
        numericalHand.push(stringToNumberValue)
      }
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let dealerHandTotal = numericalHand.reduce(reducer);
    
    //  Sets the state for the count of dealer hand with aces only being worth 1
    this.setState(() => ({
      dealerHandTotalPreAces: dealerHandTotal 
    }), () => this.adjustDealerCountWithAces() );
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



//  Function adjusts the players total to refelct aces being either 1 or 11
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

  //  Function adjusts the dealer total to refelct aces being either 1 or 11
  adjustDealerCountWithAces = () => {
    console.log('Dealer adjust for aces count ran')
    // console.log('dealer has ace? ' + this.state.dealerHasAce)
    // console.log('dealer total PRE ace adjustment ' + this.state.dealerHandTotalPreAces)
    let dealerTotalPreAces = this.state.dealerHandTotalPreAces
      
    if (this.state.dealerHasAce === true && dealerTotalPreAces <= 11){
      let finalDealerTotal = dealerTotalPreAces + 10;
      // console.log( 'dealer total with ace Adjusted is ' + finalDealerTotal)
      this.setState(() => ({
        dealerHandTotalPostAces: finalDealerTotal 
      }), () =>  this.didDealerBust() 
      )

    } else {
      //console.log('dealer total without ace or with high ace is ' + dealerTotalPreAces)
      this.setState(() => ({
        dealerHandTotalPostAces: dealerTotalPreAces 
      }), () =>  this.didDealerBust() 
      )

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

  didDealerBust = () => {
    //  Dealer Busts.  Hands Reset.  Player Wins
    if (this.state.dealerHandTotalPostAces > 21){
      setTimeout(this.resetHand, 2000)
      // Player gets 21 and win.  hands reset
    } 
    //  else if (this.state.playerHandTotalPostAces === 21){
    //   setTimeout(this.resetHand, 2000)
    // }
  }

  resetHand = () => {
    console.log('reset hand function ran')
      this.setState({
        dealerHand: [],
        dealerHandValues: [],
        dealerHandTotal: '',
        dealerHandImages: [],
        playerHand: [],
        playerHandValues: [],
        playerHandTotal: '',
        playerHandImages: [],
        playerHasAce: false,
        dealerHasAce: false,
        dealerHandTotalPostAces: '',
        playerHandTotalPostAces: '',
      })
    
  }

  playerStands = () => {
    //  When player stands need to check the value of the dealer hand.  
    let dealerHas = this.state.dealerHandTotalPostAces
    //  If dealer is over 21, they bust and player wins. (i think this is already checked in other functions.  need to validate.)
    //  If dealer hand value is lower than 17, need to deal themself another card.

    if(this.state.dealerHandTotalPostAces < 17){
      console.log('dealer has less than 17')
      axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
        const oneCardDealt = response.data.cards[0].code;
        const remainingCards = response.data.remaining;
        const cardImage = response.data.cards[0].image
        const cardValue = response.data.cards[0].value

        this.setState(prevState => {
          return {
            remainingCards: remainingCards,
            dealerHand: [...prevState.dealerHand, oneCardDealt],
            dealerHandImages: [...prevState.dealerHandImages, cardImage],
            dealerHandValues: [...prevState.dealerHandValues, cardValue],
          }
        }, () => this.countDealerTotal())
        console.log('dealer hand total is ' + this.state.dealerHandTotalPostAces)
      })
    }

    
  //  If dealer card total is greater than player hand, player looses.
  //    If dealer card total is less than player hand total, player wins.
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
              playerStands={this.playerStands} 
              //countDealerTotal={this.state.dealerHandTotal}
              countPlayerTotal={this.state.playerHandTotal}
              dealerHandImages={this.state.dealerHandImages} 
              playerHandImages={this.state.playerHandImages} 
              dealerHandValues={this.state.dealerHandValues} 
              dealerHandTotal={this.state.dealerHandTotalPostAces} 
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