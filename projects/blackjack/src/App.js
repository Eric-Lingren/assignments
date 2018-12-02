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
      playerClickedStand: false,
    }
  }
 
  componentDidMount(){
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => {
      const deckID = response.data.deck_id;
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
      dealtCards.forEach(pickACard => {
        let card = pickACard.code
        let cardImage = pickACard.image
        let cardValue = pickACard.value
        if (this.state.dealerHand.length <= this.state.playerHand.length){
          this.setState(prevState => {
            return {
              dealerHand: [...prevState.dealerHand, card],
              dealerHandImages: [...prevState.dealerHandImages, cardImage],
              dealerHandValues: [...prevState.dealerHandValues, cardValue],
            }
          })
        } else {
          this.setState(prevState => {
            return {
              playerHand: [...prevState.playerHand, card],
              playerHandImages: [...prevState.playerHandImages, cardImage],
              playerHandValues: [...prevState.playerHandValues, cardValue],
            }
          })
        }
      });
      this.setState({
        remainingCards: remainingCards
      })
      this.countDealerTotal()
      this.countPlayerTotal()
    })
  }

  //  Check if the dealer or player got a blackjack on the first 2 card
initialBlackjack = () => {
  console.log('checking for begining of game blackjacks')
  //  if both player and deal start with 21, it is a push.
  if (this.dealerHandTotalPostAces === 21 &&  this.playerHandTotalPostAces === 21){
    console.log('PUSH');
    this.checkWhoWon();
  //  if dealer starts with 21 and player does not, player looses
  } else if (this.dealerHandTotalPostAces === 21 &&  this.playerHandTotalPostAces !== 21){
    console.log('Dealer has Blackjack.  Player looses.');
    this.checkWhoWon();
  //  if player starts with 21 and dealer does not, player wins.
  } else if (this.dealerHandTotalPostAces !== 21 &&  this.playerHandTotalPostAces === 21){
    console.log('Player has Blackjack.  Winner Winner Chicken Dinner!');
    this.checkWhoWon();
  }
}

 //  Counts the dealers hand total with aces being valued at 1
  countDealerTotal = () => {
    console.log('Count Dealer Total ran')
    const hand = this.state.dealerHandValues
    const numericalHand = [];
    hand.forEach(value => {
      if (value === 'JACK' ||value === 'QUEEN' || value === 'KING' ){
        value = 10
       numericalHand.push(value)
      } else if (value === 'ACE'){
          value = 1
          numericalHand.push(value);
          this.setState({
            dealerHasAce: true
          })
      } else {
        const stringToNumberValue = parseInt(value)
        numericalHand.push(stringToNumberValue)
      } })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let dealerHandTotal = numericalHand.reduce(reducer);
    //  Sets the state for the count of dealer hand with aces only being worth 1
    this.setState(() => ({
      dealerHandTotalPreAces: dealerHandTotal 
    }), () => this.adjustDealerCountWithAces() );
  }

  //  Function that adjusts the dealer total to refelct aces being either 1 or 11
  adjustDealerCountWithAces = () => {
    console.log('Function for Dealer adjust for aces count ran')

    let dealerTotalPreAces = this.state.dealerHandTotalPreAces
    if (this.state.dealerHasAce === true && dealerTotalPreAces <= 11){
      let finalDealerTotal = dealerTotalPreAces + 10;
      this.setState(() => ({
        dealerHandTotalPostAces: finalDealerTotal 
      }), () =>  this.didDealerBust() )
    } else {
      this.setState(() => ({
        dealerHandTotalPostAces: dealerTotalPreAces 
      }), () =>  this.didDealerBust() 
      )
    }
  }
  
//  Counts the players hand total with aces being valued at 1
  countPlayerTotal = () => {
    console.log('count player total function ran');
    const hand = this.state.playerHandValues
    const numericalHand = [];
    hand.forEach(value => {
      if (value === 'JACK' ||value === 'QUEEN' || value === 'KING' ){
        value = 10
        numericalHand.push(value)
      } else if (value === 'ACE'){
          value = 1
          numericalHand.push(value);
          this.setState({
            playerHasAce: true
          })
      } else {
        const stringToNumberValue = parseInt(value)
        numericalHand.push(stringToNumberValue)
      } })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let playerHandTotal = numericalHand.reduce(reducer);  
    //  Sets the state for the count of that player hand with aces only being worth 1
    this.setState(() => ({
      playerHandTotalPreAces: playerHandTotal
    }), () => this.adjustPlayerCountWithAces() );
  }

//  Function adjusts the players total to refelct aces being either 1 or 11
  adjustPlayerCountWithAces = () => {
    console.log('adjust player count with aces function ran')
    let playerTotalPreAces = this.state.playerHandTotalPreAces  
    if (this.state.playerHasAce === true && playerTotalPreAces <= 11){
      let finalPlayerTotal = playerTotalPreAces + 10;
      this.setState(() => ({
        playerHandTotalPostAces: finalPlayerTotal 
      }), () =>  this.didPlayerBust() )
    } else {
      this.setState(() => ({
        playerHandTotalPostAces: playerTotalPreAces 
      }), () =>  this.didPlayerBust() )
    }
  }

  

 //  Deal card to player when they choose to hit
 dealOneCard = (e) => {
  e.preventDefault();
  axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
    const oneCardDealt = response.data.cards[0].code;
    //const remainingCards = response.data.remaining;
    const cardImage = response.data.cards[0].image
    const cardValue = response.data.cards[0].value
    // this.setState({
    //     remainingCards: remainingCards 
    // })
    this.setState(prevState => {
      return {
        playerHand: [...prevState.playerHand, oneCardDealt],
        playerHandImages: [...prevState.playerHandImages, cardImage],
        playerHandValues: [...prevState.playerHandValues, cardValue],
      }
      //  Once state is set from the new card, re-run the player hand total functions
    }, () => this.countPlayerTotal())
  })
}

//  Checks to see if the player went over 21
  didPlayerBust = () => {
    console.log('did player bust function ran')
    //  Check if both the dealer and player only have 2 cards.  if so, we need to check for initial blackjacks.
    if (this.state.dealerHand.length === 2 && this.state.playerHand.length === 2){
      this.initialBlackjack()
    }
    //  Player Busts.  Hands Reset
    else if (this.state.playerHandTotalPostAces > 21){
      console.log('player busted.  you loose')
      setTimeout(this.resetHand, 2000)
      // Player chose to sand and didnt bust, check for game winner
    } else if (this.state.playerClickedStand === true){
      this.playerStands()
    }
  }

  didDealerBust = () => {
    console.log('did dealer bust function ran');
   
    //  Dealer Busts.  Hands Reset.  Player Wins
    if (this.state.dealerHandTotalPostAces > 21){
      console.log('dealer busted.  Player Wins!')
      setTimeout(this.resetHand, 2000)
    } else if (this.state.playerClickedStand === true){
      this.playerStands()
    }
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
        playerClickedStand: false,
      })
  }

  dealerHits = () => {
    console.log('dealer hits function ran')
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
      }, () => this.countDealerTotal() )
    });
  }

checkWhoWon = () => {
  console.log('check who won function ran')
  
    //  check the player total vs player totals
    if(this.state.dealerHandTotalPostAces > this.state.playerHandTotalPostAces){
      console.log('DEALER WINS');
      setTimeout(this.resetHand, 2000)
    } else if (this.state.dealerHandTotalPostAces === this.state.playerHandTotalPostAces){
      console.log('PUSH')
      setTimeout(this.resetHand, 2000)
    } else {
      console.log('PLAYER WINS')
      setTimeout(this.resetHand, 2000)
    }
}

  playerStands = () => {
    //  When player stands need to check the value of the dealer hand.  
    this.setState({
      playerClickedStand: true
    });
    //  If dealer hand value is lower than 17, need to deal themself enough cards until they are over 17.
    console.log(this.state.dealerHandTotalPostAces)
    if (this.state.dealerHandTotalPostAces < 17){
      console.log('dealer has less than 17')
      setTimeout(this.dealerHits, 500)
    } else {
      this.checkWhoWon()
    }
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