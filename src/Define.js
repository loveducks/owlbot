import React, { Component } from 'react';
import Results from './Results';

class Define extends Component{
    constructor(props){
        super(props);
        const { URL } = this.props;
        this.state = {
            word: '',
            def: null
        }
    }

    fetchAPI(){
        fetch(this.getApiUrl())
            .then( resp => resp.json() )
            .then( resp => {
                this.setState({ def: resp });
                console.log(resp);
            })
            .catch( err => ( console.log('something went wrong... ' + err) ) 
            )
    }

    getApiUrl(){
        console.log(this.props.URL + '/' + this.state.word + '?format=json');
        return this.props.URL + '/' + this.state.word + '?format=json' ; 
    }

    handleSubmit(event){
        event.preventDefault();
        this.fetchAPI();
    }

    render(){
        return(
            <form className='form' onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' placeholder='Search...' 
                    value={this.state.word}
                    onChange = { (e) => this.setState({ word: e.target.value }) }
                />
                {/*<button onClick={this.fetchAPI.bind(this)}>Go.</button>*/}
                <input type='submit' value='Go.' />
                <Results def={this.state.def} />
            </form>
        );
    }
}

export default Define;
