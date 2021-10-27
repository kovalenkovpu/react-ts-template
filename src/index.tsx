// eslint-disable-next-line import/order
import './polyfills';

// eslint-disable-next-line import/order
import * as momentRange from 'moment-range';
// eslint-disable-next-line import/order
import moment from 'moment';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window['moment-range'] = momentRange;
window['moment'] = moment;

import '@pearson-ux/pearson-web-components';
import '@pearson-ux/pso-design';
import { render } from 'react-dom';

import { App } from './components/App';

const container = document.getElementById('main');

render(<App />, container);
