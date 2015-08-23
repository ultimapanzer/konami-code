import React from 'react';
import Konami from './konami';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: "A",
      revealed: false
    };
  }
  componentWillMount() {
    this.Konami = new Konami(this.theTruth);
  }
  theTruth = () => {
    console.log("coincidence?");
    this.setState({secret: <img src="http://i.imgur.com/HSfdfmu.png" style={styles.secret}/>,
                   revealed: true});
  }
  render() {
    let secretSound = this.state.revealed ? <audio src="spooky.mp3" type="audio/mpeg" autoPlay="autoplay" /> : null;
    return (
      <div style={styles.container}>
        <div>
          <h1>THE KON<span>{this.state.secret}</span>MI CODE</h1>
          <h2>{this.state.revealed ? <em> ...Coincidence? </em> : "will lead you to"} <span style={this.state.revealed ? styles.truth : null}>THE TRUTH</span></h2>
          {secretSound}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
  },
  secret: {
    height: "32px",
    width: "32px"
  },
  truth: {
    color: "red"
  }
};

React.render(<App />, document.body);
