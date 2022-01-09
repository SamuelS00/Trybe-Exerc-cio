import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Task from './Task';

class ListTask extends React.Component {
  render() {
    const { listTask } = this.props
    return(
      <div>
         {listTask.map((task, index) => <Task index={index} task={task} />)}
      </div> 
    )
  }
}

const mapStateToProps = state => ({
  listTask: state.reducerTask});  
  
ListTask.propTypes = {
  listTask: PropTypes.arrayOf(PropTypes.string).isRequired,
}
  
  
export default connect(mapStateToProps, null)(ListTask);
