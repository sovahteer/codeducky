import React, { Component } from 'react';
import Code from './Code.js';

class Files extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    const files = this.props.files;
    const list = Object.keys(files);
    let fileList = [];
    for(let file in files)
      fileList.push(<li key={file}>{file}</li>);
    return (
      <>
        <div className={list.length <= 1? 'collapsed': ''}>
          <ul>
            {fileList}
          </ul>
        </div>
        <div>
          <Code file={files[list[0]]}/>
        </div>
      </>
    );
  }
}

export default Files;
