import React from 'react';
class HelloMessage extends React.Component{
    constructor(props){
       super(props); 
       this.name = 'chan';
    }
    
    render(){
        return(
            <div >
                Hello {this.props.name}
            </div>
            );
    }
}

export default HelloMessage;