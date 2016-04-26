/* eslint-disable react/no-danger */

import React from "react";
import BindComponent from "./bindcomponent";

import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

export default class Preview extends BindComponent{
  mapState(state){
    return {editor: state.editor};
  }

  render(){
    const __html = markdown.render(this.state.editor.text);
    return (
      <div className="preview">
        <h2>preview</h2>
        <div dangerouslySetInnerHTML={{__html}}></div>
      </div>
    );
  }
}
