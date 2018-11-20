import React, { Component } from 'react';
import Code from './Code.js';

class Files extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    const files = this.props.files;
    let list = [];
    let fileList = [];
    for(let file in files){
      list.push(file);
      fileList.push(<li className={file === list[0]? 'selected': ''} key={file}>{file}</li>);
    }
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
