import React, { Component } from 'react';
import Code from './Code.js';

class Files extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    const files = this.props.files;
    const fileNames = Object.keys(files);
    let fileList = [];
    let output = (<p>No files found.</p>);
    console.log('Files.render(): files:', files, 'fileNames:', fileNames);
    if(fileNames.length > 0){
      for(let file in fileNames){
        const name = fileNames[file];
        fileList.push(<li className={file === 0? 'selected': ''} key={name}>{name}</li>);
      }
      return (
        <>
          <div id='fileList' className={fileNames.length <= 1? ' collapsed': ''}>
            <ul>
              {fileList}
            </ul>
          </div>
          <div id='fileView'>
            <Code file={files[fileNames[0]]} fileName={fileNames[0]}/>
          </div>
        </>
      );
    }
    else{
      return (<div>Loading files</div>);
    }
  }
}

export default Files;
