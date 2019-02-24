// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

// Styles
import Styles from './styles.css';
import cat from '../../theme/assets/images/cat.jpg';
import reactLogo, { ReactComponent as ReactLogo } from '../../theme/assets/images/react.svg';
console.log('→ cat', cat);
console.log('→ reactLogo', reactLogo);
console.log('→ ReactLogo', ReactLogo);

// Components
import { Button } from '../Button';

class SkillMeter extends Component {
    state = {
        skill: 35,
    };

    inc = () => this.setState(({ skill }) => ({ skill: skill + 1 }));
    dec = () => this.setState(({ skill }) => ({ skill: skill - 1 }));

    render() {
        const { skill } = this.state;

        return (
            <section
                className = { Styles.skillMeter }
                style = {{
                    '--heading-font-size': `${skill}px`,
                }}>
                <h1>My Webpack skill: {skill}</h1>
                <img src = { cat } />
                <div>
                    <Button
                        text = 'Increment'
                        onClick = { this.inc }
                    />
                    <Button
                        text = 'Decrement'
                        onClick = { this.dec }
                    />
                </div>
            </section>
        );
    }
}

export default hot(SkillMeter);
