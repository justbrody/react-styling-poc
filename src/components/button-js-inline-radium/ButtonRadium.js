import React, { Component } from 'react';
import Radium from 'radium';

class Button extends Component {

    screens = {
        small: "@media (max-width:1024px)",
        large: "@media (min-width:1024px)"
    }

    styles = {
        button: {
            height: "50px",
            width: "180px",
            ":hover": {
                backgroundColor: "yellow",
                color: "red"
            },
            [this.screens.small]: {
                fontSize: "small"
            },
            [this.screens.large]: {
                fontSize: "large"
            }
        }
    }

    render() {
        return (<button style={this.styles.button} >Radium button</button>
        );
    }
}

export default Radium(Button);
