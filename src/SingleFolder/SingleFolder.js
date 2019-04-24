import React, {Component} from 'react';
import './SingleFolder.css';

export default class SingleFolder extends Component {
  render() {
    return (
      <div className='folder-wrapper'>
        <div className='folder'>
          {this.props.folder.name}
        </div>

        <button className='back-btn' onClick={() => this.props.routerProps.history.goBack()}>
          Back
        </button>
      </div>
    )
  }
}