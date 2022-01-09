import React from 'react';
import { removeAction } from '../redux/actions';
import { connect } from 'react-redux';

class Task extends React.Component {
  render() {
    const { index, task } = this.props;
    return(
       <div>
           <p key={ index }>{ task } </p>
           <button 
              type="button" 
              onClick={ () => this.props.myFirstDispatch(task) }
            > x
            </button>
       </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
 myFirstDispatch: (state) => dispatch(removeAction(state))
})
  
export default connect(null, mapDispatchToProps)(Task);
  