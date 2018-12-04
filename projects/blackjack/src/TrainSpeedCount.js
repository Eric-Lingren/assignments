import React, {Component} from 'react'
import axios from 'axios'

class TrainSpeedCount extends Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            cardsDealt: [],
            cardsDealtImages: 'none',
            cardsDealtValues: [],
            currentCardValue: 0,
            count: 0,
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
        //  if card value is 10 or greater, count is subtracted by 1
        if (this.state.currentCardValue === '10' || this.state.currentCardValue === 'JACK' || this.state.currentCardValue === 'QUEEN' || this.state.currentCardValue === 'KING' || this.state.currentCardValue === 'ACE'){
            this.setState(prevState => {
                return{
                    count: prevState.count -1
                }
            })
            //  if card value is 6 or less, count is added by 1
        } else if(this.state.currentCardValue < 7){
            this.setState(prevState => {
                return{
                    count: prevState.count +1
                }
            })
        }
      }
 
      
    render() {

        return ( 
            <div>
                <h2>Speed Count Training</h2>
                <div className='deckDisplay'>
                    <img src={this.state.cardsDealtImages} alt='card'></img>
                </div>
                <button onClick={this.dealCard}>start</button>
                <h2>The count is: {this.state.count}</h2>
            </div>
        )
    }


}

export default TrainSpeedCount