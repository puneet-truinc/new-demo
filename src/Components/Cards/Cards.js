import React, { Component, Fragment } from 'react'
import './Cards.css'


export default class Cards extends Component {
    /* constructor() {
        super();
        this.state = {
            card1Heading: 'Card 1',
            card1Txt: 'India',
            cardpara1: 'Lorem Ipsum Text',
            card2Heading: 'Card 2',
            card2Txt: 'Japan',
            cardpara2: 'Lorem Ipsum Text',
            card3Heading: 'Card 3',
            card3Txt: 'Switzerland',
            cardpara3: 'Lorem Ipsum Text',
        }
    } */
    render() {
        return (
            <Fragment>
            
                <div className='wrapper'>
                    <div className='card-col-left bg-col-one'>
                    <h1>{this.props.cardVal}</h1>
                    </div>
                    <div className='card-col-right'>
                        {/* <h3 className='color-white'>{this.props.values.title}</h3> */}
                    </div>
               
            </div>
            </Fragment>
        )
    }
}
