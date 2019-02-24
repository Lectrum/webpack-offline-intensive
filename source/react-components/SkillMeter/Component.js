// Core
import React, { Component } from 'react';

import { hot } from 'react-hot-loader/root';
// Styles
import Styles from './styles.css';
// import './styles.css';
// import cat from '../../theme/assets/images/cat.jpg';

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

        throw new Error('boom')

        return (
            <section
                className = { Styles.skillMeter }
                style = {{
                    '--heading-font-size': `${skill}px`,
                }}>
                <h1>My Webpack skill: {skill}</h1>
                {/* <img src = { cat } /> */}
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
