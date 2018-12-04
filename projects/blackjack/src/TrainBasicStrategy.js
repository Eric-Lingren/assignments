import React, {Component} from 'react'
import axios from 'axios'

class TrainBasicStrategy extends Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            dealerHand: '',
            dealerImages: '',
            playerCard1: '',
            playerCard2: '',
            playerImage1: '',
            playerImage2: '',
        }
    }
    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
          const deckID = response.data.deck_id;
          this.setState({
            deckID: deckID,
          })
        })
    }

dealCard = () => {
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=3`).then(response => {
    const dealerCardValue = response.data.cards[0].value  
    const playerCardValue1 = response.data.cards[1].value  
    const playerCardValue2 = response.data.cards[2].value  
    const dealerCardImage = response.data.cards[0].image
    const playerCardImage1 = response.data.cards[1].image
    const playerCardImage2 = response.data.cards[2].image
      
      console.log(dealerCardValue)
    //   console.log(playerCardValue1 )
    //   console.log(playerCardValue2)

      this.setState({
          dealerHand: dealerCardValue,
          dealerImages: dealerCardImage,
          playerCard1: playerCardValue1, 
          playerCard2: playerCardValue2,
          playerImage1: playerCardImage1, 
          playerImage2: playerCardImage2,
        }, () => this.showData() )
    })
  }

  showData = () => {
    
    const dCard = this.state.dealerHand;
    let dCardNumber = 0
    const pCard1 = this.state.playerCard1;
    let pCard1Number = 0
    const pCard2 = this.state.playerCard2;
    let pCard2Number = 0
    
    console.log('Dealer Card Value: ' + dCard)
    console.log('Player card 1 value: ' + pCard1)
    console.log('Player Card 2 Value: ' + pCard2)
    if (dCard === 'JACK' ||dCard === 'QUEEN' || dCard === 'KING' ){
        dCardNumber  = 10
    } else if (dCard === 'ACE') {
        dCardNumber  = 11
    } else {
        dCardNumber  = dCard
    }

    if (pCard1 === 'JACK' ||pCard1 === 'QUEEN' || pCard1 === 'KING' ){
        pCard1Number  = 10
    } else {
        pCard1Number = pCard1 
    }

    if (pCard2 === 'JACK' ||pCard2 === 'QUEEN' || pCard2 === 'KING' ){
        pCard2Number  = 10
    } else {
        pCard2Number = pCard2 
    }
    console.log('adjusted Card 1 value is ' + pCard1Number)
    console.log('adjusted Card 2 value is ' + pCard2Number)
    const pHand = parseInt(pCard1Number) +  parseInt(pCard2Number)
    console.log('Player HAND Value: ' + pHand)

    const dHand = dCardNumber
    console.log('Dealer HAND Value: ' + dHand)

    if (pHand <= 8 ){
        console.log('the correct Play is HIT')
    } else if (pHand >= 17) {
        console.log('the correct Play is STAND')
    }else if (pHand === 9 && dHand === 2){
        console.log('the correct Play is HIT')
    } else if(pHand <= 9 && dHand <= 6){
        console.log('the correct Play is DOUBLE')
    } else if(pHand === 9 && dHand <= 11){
        console.log('the correct Play is HIT')
    } else if(pHand === 10 && dHand <= 9){
        console.log('the correct Play is DOUBLE')
    } else if (pHand === 10 && dHand <= 11){
        console.log('the correct Play is HIT')
    } else if (pHand === 11 && dHand <= 10){
        console.log('the correct Play is DOUBLE')
    } else if (pHand === 11 && dHand === 11){
        console.log('the correct Play is HIT')
    } else if (pHand === 12 && dHand <= 3){
        console.log('the correct Play is HIT')
    } else if (pHand === 12 && dHand <= 6){
        console.log('the correct Play is STAND')
    } else if(pHand === 12 && dHand <= 11){
        console.log('the correct Play is HIT')
    } else if (pHand === 13 && dHand <= 6){
        console.log('the correct Play is STAND')
    } else if (pHand === 13 && dHand <= 11){
        console.log('the correct Play is HIT')
    } else if (pHand === 14 && dHand <= 6){
        console.log('the correct Play is STAND')
    } else if (pHand === 14 && dHand <= 11){
        console.log('the correct Play is HIT')
    } else if (pHand === 15 && dHand <= 6){
        console.log('the correct Play is STAND')
    } else if (pHand === 15 && dHand <= 9){
        console.log('the correct Play is HIT')
    } else if (pHand === 15 && dHand === 10){
        console.log('the correct Play is SURRENDER (else hit)')
    } else if (pHand === 15 && dHand === 11){
        console.log('the correct Play is HIT')
    } else if (pHand === 16 && dHand <= 6){
        console.log('the correct Play is STAND')
    } else if (pHand === 16 && dHand <= 8){
        console.log('the correct Play is HIT')
    }  else if (pHand === 16 && dHand <= 11){
        console.log('the correct Play is SURRENDER (else hit)')
    }

  }

    render() {

        return ( 
            <div className='trainingWrapper'>
                <div className='basicStrategyWrapper'>
                <h1>Train Basic Strategy</h1>
                <h3 className='handDescription'>Dealer Hand</h3>
                    <div className='dealerHand'>
                        
                       <img src={this.state.dealerImages}></img>

                    </div>
                    <div className='playerHand'>
                    
                      <img src={this.state.playerImage1}></img>
                      <img src={this.state.playerImage2}></img>
                    </div>
                    <h3 className='handDescription'>Player Hand</h3>
                    <div className='basicStrategyButtonWrapper'>
                        <h2>Choose the correct play:</h2>
                        <button className='checkButton'>Hit</button>
                        <button className='checkButton'>Stand</button>
                        <button className='checkButton'>Double</button>
                        <button className='checkButton'>Split</button>
                        <button className='checkButton'>Surrender</button> <br></br>
                        <button className='dealBSButton' onClick={this.dealCard}>Deal</button>
                        
                    </div>
                    
                </div>
            </div>
        )
    }


}

export default TrainBasicStrategy