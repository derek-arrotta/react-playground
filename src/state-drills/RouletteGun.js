import React from 'react';

class RouletteGun extends React.Component {
  
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { chamber: 0, spinningTheChamber: false }
  }

  handleButtonClick = () => {
    //console.log(this.state.chamber)
    //console.log(this.state.spinningTheChamber)
    this.setState({ spinningTheChamber: true })
    setTimeout(() => {
      //const max = 8
      //let randNum = Math.floor(Math.random() * Math.floor(max))
      let randNum = Math.ceil(Math.random() * 8)
      console.log(randNum)
      this.setState({ chamber: randNum })
      this.setState({ spinningTheChamber: false})
    }, 2000);
    //clearTimeout(timeout)
  }

  renderDisplay() {
    if (this.state.spinningTheChamber === true) {
      return 'spinning the chamber and pulling the trigger!'
    }
    else if (this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!!!!'
    }
    else {
      return `you're safe!`
    }
  }

  render() {
    return (
      <div>
        <p>
          {this.renderDisplay()}
        </p>
        <button onClick={() => this.handleButtonClick()}>
          pull the trigger!
        </button>
      </div>
    )
  }

}
//
export default RouletteGun