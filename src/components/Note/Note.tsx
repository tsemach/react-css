import * as React from 'react';

import Coder from '../../components/Coder'

import './Note.scss';

import NoteStateType from './types/NoteState.type';
import NotePropsType from './types/NoteProps.type';

class Note extends React.Component<NotePropsType, NoteStateType> {
  
  constructor(props: NotePropsType) {
    super(props);
  }

  render() {
const code = `
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook' 
  };
}
`;        
    return (
      <React.Fragment>
        <div className="note">
          <Coder code={code} language="language-javascript"/>
        </div>

      </React.Fragment>
    )}
}
export default Note;

