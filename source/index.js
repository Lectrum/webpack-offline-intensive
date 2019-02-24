// import component from './simple-components/dom';
// import './theme/main.css';

// let demoComponent = component();

// document.body.appendChild(demoComponent);

// if (module.hot) {
//     module.hot.accept('./simple-components/dom', () => {
//         const nextComponent = component();

//         document.body.replaceChild(nextComponent, demoComponent);

//         demoComponent = nextComponent;
//     });
// }

// JavaScript
// import './simple-components/javascript';

// React
// import './theme/main.css';
// import './react-components/SkillMeter';

console.log('→ process.env.NODE_ENV', process.env.NODE_ENV);

// process.env.API_URI

const middleware = [];

console.log('→ TWO', TWO);
console.log('→ TWO_STRINGIFIED', TWO_STRINGIFIED);
console.log('→ TRUE_SIMPLE', TRUE_SIMPLE);
console.log('→ __FEATURE__', __FEATURE__);

if (process.env.NODE_ENV === 'development') {
    middleware.push('redux-logger');
}

// if (__DEV__) {
//     middleware.push('redux-logger');
// }

if (__FEATURE___) {
    middleware.push('redux-logger');
}
