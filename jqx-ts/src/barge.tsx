import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
const JqxBarGauge = require('../node_modules/jqwidgets-framework/jqwidgets-react/react_jqxbargauge');
 
export default class App extends React.Component<{}, {}> {
  render () {
    return (
        <JqxBarGauge.JqxBarGauge 
            width={600} height={600} max={150}
            colorScheme={'scheme02'} values={[102, 115, 130, 137]} 
        />
    )
  }
}