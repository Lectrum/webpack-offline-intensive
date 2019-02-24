import component from './simple-components/dom';
import './theme/main.css';

let demoComponent = component();

document.body.appendChild(demoComponent);

// if (module.hot) {
//     module.hot.accept('./simple-components/dom', () => {
//         const nextComponent = component();

//         document.body.replaceChild(nextComponent, demoComponent);

//         demoComponent = nextComponent;
//     });
// }

// JavaScript
// import { a } from './simple-components/javascript';
// console.log(a);

// React
// import './theme/main.css';
// import './react-components/SkillMeter';

// console.log('→ __ENV__', __ENV__);
// console.log('→ __DEV__', __DEV__);
// console.log('→ __STAGE__', __STAGE__);
// console.log('→ __PROD__', __PROD__);

// if (__DEV__) {
//     console.log('→ development code');
// }
// if (__PROD__) {
//     console.log('→ production code');
// }

// import * as l from 'lodash-es';

// console.log(l.trim);
