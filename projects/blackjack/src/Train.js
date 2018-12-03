import React, {Component} from 'react'
import './css/train.css'
import axios from 'axios'

class Train extends Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            cardsDealt: [],
            cardsDealtImages: 'none',
            cardsDealtValues: [],
            currentCardValue: 0,
            count: 0,

            cardsDealt2: [],
            cardsDealtImages2: 'none',
            cardsDealtValues2: [],
            currentCardValue2: 0,
            count2: 0,
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
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
      const oneCardDealt = response.data.cards[0].code;
      const cardImage = response.data.cards[0].image
      const cardValue = response.data.cards[0].value
      this.setState(prevState => {
        return {
          cardsDealt: [...prevState.cardsDealt, oneCardDealt],
          cardsDealtImages: cardImage,
          cardsDealtValues: [...prevState.cardsDealtValues, cardValue],
          currentCardValue: cardValue,
        }
        //  Once state is set from the new card, re-run the player hand total functions
      }, () => this.whatsTheCount() )
    })
  }

  whatsTheCount = () => {

    if (this.state.currentCardValue === '10' || this.state.currentCardValue === 'JACK' || this.state.currentCardValue === 'QUEEN' || this.state.currentCardValue === 'KING' || this.state.currentCardValue === 'ACE'){
        this.setState(prevState => {
            return{
                count: prevState.count -1
            }
        })
    } else if(this.state.currentCardValue < 7){
        this.setState(prevState => {
            return{
                count: prevState.count +1
            }
        })
    }
    //  if card value is 6 or less, count is added by 1
  }
 
  
  speedCount = () => {
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
      const oneCardDealt2 = response.data.cards[0].code;
      const cardImage2 = response.data.cards[0].image
      const cardValue2 = response.data.cards[0].value
      this.setState(prevState => {
        return {
          cardsDealt2: [...prevState.cardsDealt, oneCardDealt2],
          cardsDealtImages2: cardImage2,
          cardsDealtValues2: [...prevState.cardsDealtValues, cardValue2],
          currentCardValue2: cardValue2,
        }
        //  Once state is set from the new card, re-run the player hand total functions
      }, () => this.whatsTheCount2() )
    })
  }

  

  whatsTheCount2 = () => {
    if (this.state.currentCardValue2 === '10' || this.state.currentCardValue2 === 'JACK' || this.state.currentCardValue2 === 'QUEEN' || this.state.currentCardValue2 === 'KING' || this.state.currentCardValue2 === 'ACE'){
        this.setState(prevState => {
            return{
                count2: prevState.count2 -1
            }
        })
    } else if(this.state.currentCardValue2 < 7){
        this.setState(prevState => {
            return{
                count2: prevState.count2 +1
            }
        })
    }
    //  if card value is 6 or less, count is added by 1
  }



    render() {

        return (
            <div className='trainingWrapper'>
                <h1>Training page</h1>
                <h2>Self Paced Count</h2>
                <div className='deckDisplay'>
                    <img src={this.state.cardsDealtImages}></img>
                </div>
                <button onClick={this.dealCard}>start</button>
                <h2>The count is: {this.state.count}</h2>


                <h2>SpeedCount</h2>
                <div className='deckDisplay'>
                    <img src={this.state.cardsDealtImages2}></img>
                </div>
                <button onClick={this.speedCount}>start</button>
                <h2>The count is: {this.state.count2}</h2>
            </div>
        )
    }
}

export default Train