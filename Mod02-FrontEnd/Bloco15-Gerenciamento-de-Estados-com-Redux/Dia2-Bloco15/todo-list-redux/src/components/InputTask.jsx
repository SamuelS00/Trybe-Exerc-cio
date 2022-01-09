import React from 'react'
import { newAction } from '../redux/actions'
import { connect } from 'react-redux';

class InputTask extends React.Component {
   constructor() {
     super();
     this.state = {
       input: ''
     }

   }
   render() {
    const { input } = this.state;
    return (
      <div>
        <input 
          placeholder='digite uma tarefa'
          onChange={ (event) => this.setState({ input: event.target.value }) }
        />
        
        <button 
          type="button"
          onClick={ () => this.props.myFirstDispatch(input) }
        > 
          Click 
        </button>
      </div>
    )
   }
}

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(newAction(state))
})

export default connect(null, mapDispatchToProps)(InputTask);
