import React, {Component} from 'react';

class Meaning extends Component{
    constructor(props){
        super(props);
        const { definition, type, example } = this.props;
    }

    render(){
        return(
            <div className='meaning'>
                <span className='noun'>
                    { this.props.type && this.props.type + '.'}
                </span>
                <h4>
                    {this.props.definition}
                </h4>
                <span className='example'>
                    { this.props.example && 'example: ' + this.props.example}
                </span>
            </div>
        );
    }
}

export default Meaning;
