import React, {Component} from 'react';
import './Note.css';
import {Link} from 'react-router-dom';
import moment from 'moment';

// props
// id, name, modified, folderId, content

export default class Note extends Component {
  render() {
    return (
      <div className='note'>
        < Link to={`/notes/${this.props.id}`} >
            <h2>{this.props.name}</h2>
          </Link>
          <p className='modified'>Last edited: {moment(this.props.modified).format('MMMM Do YYYY, h:mm:ss a')}</p>
          <p className='content'>{this.props.content}</p>
      </div>
    )
  }
}