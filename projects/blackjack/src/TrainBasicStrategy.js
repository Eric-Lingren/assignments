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
            playerCard1IsAce : false,
            playerCard2IsAce : false,
            pCard1Number: '',
            pCard2Number: '',
            dHand: '',
            pHand: '',
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

    //  Sets the proper numberical values to dealer hand for future evaluation
    if (dCard === 'JACK' ||dCard === 'QUEEN' || dCard === 'KING' ){
        dCardNumber  = 10
        this.setState({
            dHand: dCardNumber
        })
    } else if (dCard === 'ACE') {
        dCardNumber  = 11
        this.setState({
            dhand: dCardNumber
        })
    } else {
        dCardNumber  = dCard
        this.setState({
            dhand: dCardNumber
        })
    }

    //  Sets the proper numberical values to player card 1 for future evaluation
    if (pCard1 === 'JACK' ||pCard1 === 'QUEEN' || pCard1 === 'KING' ){
        pCard1Number  = 10
    } else if (pCard1 === 'ACE' ) {
        pCard1Number  = 11
        this.setState({
            playerCard1IsAce: true,
        })
    } else {
        pCard1Number = pCard1 
    }

    //  Sets the proper numberical values to player card 2 for future evaluation
    if (pCard2 === 'JACK' ||pCard2 === 'QUEEN' || pCard2 === 'KING' ){
        pCard2Number  = 10
    } else if (pCard2 === 'ACE' ) {
        pCard2Number  = 11
        this.setState({
            playerCard2IsAce: true,
        })
    } else {
        pCard2Number = pCard2 
    }

    //  Sums the 2 player cards into 1 hand value
    const pHand = parseInt(pCard1Number) +  parseInt(pCard2Number)
    const dHand = dCardNumber

    //  Sets state of values parsed above for other functions to access.
    this.setState({
        pHand: pHand,
        dHand: dHand,
        pCard1Number: pCard1Number,
        pCard2Number: pCard2Number,
    }, () => this.whatCheckHandFunctionToRun() )
  }

  whatCheckHandFunctionToRun = () => {
    const pCard1Number = this.state.pCard1Number
    const pCard2Number = this.state.pCard2Number

    if (pCard1Number === pCard2Number ){
        //  run split check
        this.checkSplitHand()
    } else if (pCard1Number === 11 || pCard2Number === 11){
        //  Run soft hands check
        this.checkSoftHand()
    } else {
        //  Run hard hands check
        this.checkHardHand()
    }
  }


  checkHardHand = () => {
    console.log('check HARD hands function ran')
    const pHand = this.state.pHand;
    const dHand = this.state.dHand;

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

  checkSoftHand = () => {
    console.log('check Soft hands function ran')
    const pHand = this.state.pHand;
    const dHand = this.state.dHand;

    if (pHand >= 19){
        console.log('the correct play is STAND')
    } else if(pHand === 13 && dHand <= 4){
        console.log('the correct play is HIT')
    } else if (pHand === 13 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
    } else if(pHand === 13 && dHand <= 11){
        console.log('the correct play is HIT')
    } else if(pHand === 14 && dHand <= 4){
        console.log('the correct play is HIT')
    } else if (pHand === 14 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
    } else if(pHand === 14 && dHand <= 11){
        console.log('the correct play is HIT')
    } else if(pHand === 15 && dHand <= 3){
        console.log('the correct play is HIT')
    } else if (pHand === 15 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
    } else if(pHand === 15 && dHand <= 11){
        console.log('the correct play is HIT')
    }  else if(pHand === 16 && dHand <= 3){
        console.log('the correct play is HIT')
    } else if (pHand === 16 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
    } else if(pHand === 16 && dHand <= 11){
        console.log('the correct play is HIT')
    } else if(pHand === 17 && dHand === 2){
        console.log('the correct play is HIT')
    } else if (pHand === 17 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
    } else if(pHand === 17 && dHand <= 11){
        console.log('the correct play is HIT')
    } else if(pHand === 18 && dHand === 2){
        console.log('the correct play is STAND')
    } else if (pHand === 18 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Stand.')
    } else if(pHand === 18 && dHand <= 8){
        console.log('the correct play is STAND')
    } else if(pHand === 18 && dHand <= 11){
        console.log('the correct play is HIT')
    }
  }


  checkSplitHand = () => {
    console.log('check SPLIT hands function ran')
    const pHand = this.state.pHand;
    const dHand = this.state.dHand;

    if(pHand === 22){
        console.log('the correct play is SPLIT')
    } else if (pHand === 20){
        console.log('the correct play is STAND')
    } else if (pHand === 16){
        console.log('the correct play is SPLIT')
    } else if((pHand === 4 || pHand === 6) && dHand <= 7){
        console.log('the correct play is SPLIT')
    } else if((pHand === 4 || pHand === 6) && dHand <= 11){
        console.log('the correct play is HIT')
    } else if(pHand === 8 && dHand <= 4){
        console.log('the correct play is HIT')
    } else if (pHand === 8 && dHand <= 6){
        console.log('the correct play is SPLIT')
    } else if (pHand === 8 && dHand <= 11){
        console.log('the correct play is HIT')
    } else if (pHand === 12 && dHand <= 6){
        console.log('the correct play is SPLIT')
    } else if (pHand === 12 && dHand <= 11){
        console.log('the correct play is HIT')
    } else if (pHand === 14 && dHand <= 7){
        console.log('the correct play is SPLIT')
    } else if (pHand === 14 && dHand <= 11){
        console.log('the correct play is HIT')
    } else if (pHand === 18 & (dHand === 7 || dHand === 10 || dHand === 11 ) ){
        console.log('the correct play is STAND')
    }  else if (pHand === 18 && dHand <= 9 ){
        console.log('the correct play is SPLIT')
    }

}


    render() {

        return ( 
            <div className='trainingWrapper'>
                <div className='basicStrategyWrapper'>
                <h1>Train Basic Strategy</h1>
                <h3 className='handDescription'>Dealer Hand</h3>
                    <div className='dealerHandBS'>
                        
                       <img className='cardBS' src={this.state.dealerImages}></img>

                    </div>
                    <div className='playerHandBS'>
                    
                      <img  className='cardBS' src={this.state.playerImage1}></img>
                      <img  className='cardBS' src={this.state.playerImage2}></img>
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