import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios'
import Navbar from './Navbar'
import Home from './Home'
import Play from './Play'
import Learn from './Learn'
import Train from './Train'

//  Neded to shuffle deck
//  Need to reduce bet size
//  need to choose play rules:
    // number of decks
    // hit or stand on soft 17
    // Cut point
    // surrender 




class App extends Component {
  constructor(){
    super()
    this.state = {
      deckCount: 2,
      deckID: '',
      cardsDealt: 0,
      decksPlayed: 0,
      remainingCards: 0,
      remainingDecks: 0,
      trueCount: 0,
      dealerHand: [],
      dealerHandValues: [],
      dealerHandTotal: '',
      dealerHandImages: [],
      playerHand: [],
      playerHandValues: [],
      playerNumericalHandValues: [],
      dealerHandTotalPreAces: '',
      dealerHandTotalPostAces: '',
      playerHandTotalPreAces: '',
      playerHandTotalPostAces: '',
      playerHandImages: [],
      dealtCard: '',
      playerHasAce: false,
      dealerHasAce: false,
      playerClickedStand: false,
      playerClickedDouble: false,
      playerClickedSplit: false,
      playerBet: 0,
      playerDoubleBet: 0,
      playerBankroll: 1000,
      dealerWins: false,
      playerWins: false,
      playerBust: false,
      dealerBust: false,
      count: 0,
      countArray: [],
      countArrayValues: [],
    }
  }
 
  componentDidMount(){
    axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${this.state.deckCount}`).then(response => {
      const deckID = response.data.deck_id;
      this.setState({
        deckID: deckID,
      })
    })
  }

  dealHand = (e) => {
    e.preventDefault();
    // console.log('Player bet is ' + this.state.playerBet)
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
              countArray: [...prevState.countArray, cardValue],
              cardsDealt: prevState.cardsDealt + 1,
              decksPlayed: ((this.state.cardsDealt / 52).toFixed(2) ),
              //remainingCards: ((this.state.deckCount * 52) - (this.state.cardsDealt)),
              remainingDecks: (this.state.deckCount - this.state.decksPlayed),
            }
          })
        } else {
          this.setState(prevState => {
            return {
              playerHand: [...prevState.playerHand, card],
              playerHandImages: [...prevState.playerHandImages, cardImage],
              playerHandValues: [...prevState.playerHandValues, cardValue],
              countArray: [...prevState.countArray, cardValue],
              cardsDealt: prevState.cardsDealt + 1,
              decksPlayed: ((this.state.cardsDealt / 52).toFixed(2) ),
              //remainingCards: ((this.state.deckCount * 52) - (this.state.cardsDealt)),
              remainingDecks: (this.state.deckCount - this.state.decksPlayed),
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
  
  if (this.state.dealerHandTotalPostAces === 21 &&  this.state.playerHandTotalPostAces === 21){
    //console.log('PUSH');
    this.checkWhoWon();
  //  if dealer starts with 21 and player does not, player looses
  } else if (this.state.dealerHandTotalPostAces === 21){
    //console.log('Dealer has Blackjack.  Player looses.');
    this.checkWhoWon();
  //  if player starts with 21 and dealer does not, player wins.
  } else if (this.state.playerHandTotalPostAces === 21){
    //console.log('Player has Blackjack.  Winner Winner Chicken Dinner!');
    //  increase bankroll by bet amount + 50%
    this.setState(prevState => {
      return {
        playerBankroll: prevState.playerBankroll + (this.state.playerBet * 1.5)
      }}, () => setTimeout(this.resetHand, 2000));
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
        this.state.playerNumericalHandValues.push(value)
  
      } else if (value === 'ACE'){
          value = 1
          numericalHand.push(value);
          this.state.playerNumericalHandValues.push(value)
    
          this.setState({
            playerHasAce: true
          })
      } else {
        const stringToNumberValue = parseInt(value)
        numericalHand.push(stringToNumberValue)
        this.state.playerNumericalHandValues.push(stringToNumberValue)
  
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
 dealOneCard = () => {
  //e.preventDefault();
  axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
    const oneCardDealt = response.data.cards[0].code;
    const remainingCards = response.data.remaining;
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
        countArray: [...prevState.countArray, cardValue],
        cardsDealt: prevState.cardsDealt + 1,
        decksPlayed: ((this.state.cardsDealt / 52).toFixed(2) ),
        remainingCards: remainingCards,
        remainingDecks: (this.state.deckCount - this.state.decksPlayed),
      }
      //  Once state is set from the new card, re-run the player hand total functions
    }, () => this.countPlayerTotal())
  })
}

//  Checks to see if the player went over 21
  didPlayerBust = () => {
    console.log('did player bust function ran')

    //console.log('COUNT ARRAY IS: ' + this.state.countArray)

    //  Check if both the dealer and player only have 2 cards.  if so, we need to check for initial blackjacks.
    if (this.state.dealerHand.length === 2 && this.state.playerHand.length === 2){
      this.initialBlackjack()
    }
    //  Player Busts.  Hands Reset
    else if (this.state.playerHandTotalPostAces > 21){
      //console.log('player busted.  you loose')
      this.setState(prevState => {
        return {
          playerBust: true,
          playerBankroll: prevState.playerBankroll - this.state.playerBet
        }}, () => setTimeout(this.resetHand, 2000));
      // Player chose to sand and didnt bust, check for game winner
    } else if (this.state.playerClickedStand === true){
      this.playerStands()
    } else if( this.state.playerClickedDouble === true ){
      this.playerStands()
    }
  }

  didDealerBust = () => {
    console.log('did dealer bust function ran');
   //console.log('COUNT ARRAY IS: ' + this.state.countArray)
    //  Dealer Busts.  Hands Reset.  Player Wins
    if (this.state.dealerHandTotalPostAces > 21){
      //console.log('dealer busted.  Player Wins!')
      //  Increase player bankroll by bet amount
      this.setState(prevState => {
        return {
          dealerBust: true,
          playerBankroll: prevState.playerBankroll + this.state.playerBet
        }}, () => setTimeout(this.resetHand, 2000));
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
          playerClickedDouble: false,
          playerClickedSplit: false,
          checkWhoWonFunctionRan: false,
          dealerWins: false,
          playerWins: false,
          playerBust: false,
          dealerBust: false,
          playerDoubleBet: 0,
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
          dealerHand: [...prevState.dealerHand, oneCardDealt],
          dealerHandImages: [...prevState.dealerHandImages, cardImage],
          dealerHandValues: [...prevState.dealerHandValues, cardValue],
          countArray: [...prevState.countArray, cardValue],
          cardsDealt: prevState.cardsDealt + 1,
          decksPlayed: ((this.state.cardsDealt / 52).toFixed(2) ),
          remainingCards: remainingCards,
          remainingDecks: (this.state.deckCount - this.state.decksPlayed),
        }
      }, () => this.countDealerTotal() )
    });
  }

  //  check the player total vs player totals
checkWhoWon = () => {
  console.log('check who won function ran')
 
    //  If Dealer Wins:
    if(this.state.dealerHandTotalPostAces > this.state.playerHandTotalPostAces){
      // console.log('DEALER WINS');
      //  reduce bankroll by bet amount
      // console.log( 'player bet this hand is :' + this.state.playerBet )
      // console.log( 'player bankroll this hand is :' +  this.state.playerBankroll )
      this.setState(prevState => {
        return {
          dealerWins: true,
          playerWins: false,
          playerBankroll: prevState.playerBankroll - (this.state.playerBet + this.state.playerDoubleBet)
        }}, () => setTimeout(this.resetHand, 2000));
    //  If it is a tie:
    } else if (this.state.dealerHandTotalPostAces === this.state.playerHandTotalPostAces){
      // console.log('PUSH')
      // console.log( 'player bet this hand is :' + this.state.playerBet )
      // console.log( 'player bankroll this hand is :' +  this.state.playerBankroll )
      //  Bankroll stays the same 
      this.setState(prevState => {
        return {
          playerBankroll: prevState.playerBankroll
        }}, () => setTimeout(this.resetHand, 2000));
    //  If Player wins
    } else {
      // console.log('PLAYER WINS')
      // console.log( 'player bet this hand is :' + this.state.playerBet )
      // console.log( 'player bankroll this hand is :' +   this.state.playerBankroll )
      //  increase bankroll by bet amount
      this.setState(prevState => {
        return {
          dealerWins: false,
          playerWins: true,
          playerBankroll: prevState.playerBankroll + (this.state.playerBet + this.state.playerDoubleBet)
        }}, () => setTimeout(this.resetHand, 2000));
    }
}

  playerStands = () => {
    //  When player stands need to check the value of the dealer hand.  
    this.setState({
      playerClickedStand: true
    });
    //  If dealer hand value is lower than 17, need to deal themself enough cards until they are over 17.
    //console.log(this.state.dealerHandTotalPostAces)
    if (this.state.dealerHandTotalPostAces < 17){
      //console.log('dealer has less than 17')
      setTimeout(this.dealerHits, 500)
    } else {
      this.checkWhoWon()
    }
}

playerDoubles = () => {
  console.log('Player choose to DOUBLE DOWN function ran')
  //  Need to check if player is on their first 2 cards.  Double is not allowed if they have more than 2 cards.
  //  If player chooses to double, they do not have the option to hit afterwards.  So we will need to set state of a varible //  to check if double has been set, and if so, disable the hit function for this hand.
  if (this.state.playerHand.length === 2){
    //console.log('you ARE alowed to double')
    //  Need to set state that the player chose to double so we can run a check on that in another function
    this.setState({
      playerClickedDouble: true,
      playerDoubleBet: this.state.playerBet,
    })
    //  Player gets dealt only one card.  then we need to run the stand function.
    this.dealOneCard()
  }else {
    alert('You are not alowed to double right now');
  }
}

playerSplits = () => {
  console.log('Player choose to SPLIT function ran');
  //console.log(this.state.playerNumericalHandValues)
  //  Need to check if player is on their first 2 cards.  Split is not allowed if they have more than 2 cards per hand. 
  if (this.state.playerHand.length === 2 && this.state.playerNumericalHandValues[0] === this.state.playerNumericalHandValues[1]){
    //console.log('you ARE alowed to split');
    //  Need to set state that the player chose to double so we can run a check on that in another function
    this.setState({
      playerClickedSplit: true,
    })
  }else {
    alert('You are not alowed to split right now');
  }
  //  Check if those 2 cards are the same value.  If they are, the player can split.
}


////////   Adding to player bets

bet1 = () => {
  //console.log('player wants to bet 1')
  this.setState(prevState => {
    return {
      playerBet: prevState.playerBet + 1
    }
  })
}
bet5 = () => {
  this.setState(prevState => {
    return {
      playerBet: prevState.playerBet + 5
    }
  })
}
bet25 = () => {
  this.setState(prevState => {
    return {
      playerBet: prevState.playerBet + 25
    }
  })
}
bet50 = () => {
  this.setState(prevState => {
    return {
      playerBet: prevState.playerBet + 50
    }
  })
}
bet100 = () => {
  this.setState(prevState => {
    return {
      playerBet: prevState.playerBet + 100
    }
  })
}
bet500 = () => {
  this.setState(prevState => {
    return {
      playerBet: prevState.playerBet + 500
    }
  })
}

clearBet = () => {
  this.setState({
      playerBet: 0
  })
}



whatsTheCountGame = () => {
  //  if card value is 10 or greater, count is subtracted by 1
  console.log('check the count function ran')
  let myCountingArray=[]
  this.state.countArray.forEach(element => {
    let numbericalElement = 0
    
    if (element === 'ACE' || element === 'KING' || element === 'QUEEN' ||element === 'JACK'){
      numbericalElement = 10
      myCountingArray.push(numbericalElement)
    } else{
      const numbericalElement = parseInt(element)
      myCountingArray.push(numbericalElement)
    }
  });
  let myConvertedCountArray = [];
  
  myCountingArray.forEach( number => {
    if (number < 7){
      let countNumber = 1
      myConvertedCountArray.push(countNumber)
    } else if(number >= 10){
      let countNumber = -1
      myConvertedCountArray.push(countNumber)
    } else{
      let countNumber = 0
      myConvertedCountArray.push(countNumber)
    }
  })
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let gameCount = myConvertedCountArray.reduce(reducer);  
    this.setState({
      count: gameCount
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
              playerStands={this.playerStands} 
              playerClickedStand={this.state.playerClickedStand} 
              playerDoubles={this.playerDoubles} 
              playerClickedDouble={this.state.playerClickedDouble} 
              playerDoubleBet={this.state.playerDoubleBet} 
              playerSplits={this.playerSplits} 
              clearBet={this.clearBet}
              //countDealerTotal={this.state.dealerHandTotal}
              countPlayerTotal={this.state.playerHandTotal}
              dealerHandImages={this.state.dealerHandImages} 
              playerHandImages={this.state.playerHandImages} 
              dealerHandValues={this.state.dealerHandValues} 
              dealerHandTotal={this.state.dealerHandTotalPostAces} 
              playerHandValues={this.state.playerHandValues}
              playerHandTotal={this.state.playerHandTotalPostAces} 
              playerBet={this.state.playerBet}
              playerBankroll={this.state.playerBankroll}
              bet1={this.bet1} 
              bet5={this.bet5} 
              bet25={this.bet25} 
              bet50={this.bet50} 
              bet100={this.bet100} 
              bet500={this.bet500}
              dealerWins={this.state.dealerWins}
              playerWins={this.state.playerWins}
              dealerBust={this.state.dealerBust}
              playerBust={this.state.playerBust}
              gameCount={this.state.count}
              whatsTheCountGame={this.whatsTheCountGame}
              cardsDealt={this.state.cardsDealt}
              decksPlayed={this.state.decksPlayed}
              remainingCards={this.state.remainingCards}
              remainingDecks={this.state.remainingDecks}
              />}/>
          <Route path="/train" component={Train}/>
          <Route path="/learn" component={Learn}/>
        </Switch>
       
        

      </div>
       
    );
  }
}

export default App;