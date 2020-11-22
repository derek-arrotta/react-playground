import React from 'react';

class HelloWorld extends React.Component {
  
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { who: '' }
  }

  handleButtonClickFriend = () => {
    this.state.who = ''
    console.log(this.props.friend)
    this.setState({ who: this.state.who + this.props.friend })
  }
  handleButtonClickReact = () => {
    this.state.who = ''
    console.log(this.props.react)
    this.setState({ who: this.state.who + this.props.react })
  }
  handleButtonClickWorld = () => {
    this.state.who = ''
    console.log(this.props.world)
    this.setState({ who: this.state.who + this.props.world })
  }

  render() {
    return (
      <div>
        <p>
          Hello, {this.state.who}
        </p>
        <button onClick={() => this.handleButtonClickFriend()}>
          friend
        </button>
        <button onClick={() => this.handleButtonClickReact()}>
          react
        </button>
        <button onClick={() => this.handleButtonClickWorld()}>
          world
        </button>
      </div>
    )
  }

}

export default HelloWorld