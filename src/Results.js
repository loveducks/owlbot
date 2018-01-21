import React, { Component } from 'react';
import Meaning from './Meaning';

class Results extends Component{
    constructor(props){
        super(props);
        const {def} = this.props;
    }

    render(){
        return(
            <div className='results'>
                {
                    this.props.def &&
                    this.props.def.map( (def) => 
                        <Meaning definition={def.definition} type={def.type} example={def.example} />
                    )
                }
            </div>
        );
    }
}

export default Results;

