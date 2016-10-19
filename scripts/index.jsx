import React from 'react';
import ReactDom from 'react-dom';
import Main from './main.jsx';
import {ReactGridLayout, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(ReactGridLayout);


ReactDom.render(<Main/>, document.getElementById('main'));