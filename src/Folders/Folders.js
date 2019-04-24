import React, {Component} from 'react';
import './Folders.css';
import { NavLink } from 'react-router-dom';

export default class Folders extends Component {
  render() {
    const folders = this.props.folders.map(folder => {
      return (
        < NavLink to={`/folders/${folder.id}`} key={folder.id}>
          <li>{folder.name}</li>
        </NavLink>
      )
    })
    return (
      <div className='folders-wrapper'>
        <ul className='folders'>
          {folders}
        </ul>
      </div>
    )
  }
}