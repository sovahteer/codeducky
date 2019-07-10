import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Code extends Component {
  constructor(props){
    super(props);
  }
  
  // TODO: use filename to grab language
  render() {
    console.log('Code.render(): fileName:', this.props.fileName, 'File:', this.props.file);
    return (
      <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers={true}>
        {this.props.file}
      </SyntaxHighlighter>
    );
  }
}

export default Code;
