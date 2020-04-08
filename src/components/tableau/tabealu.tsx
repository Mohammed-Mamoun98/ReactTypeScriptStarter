import React, { Component } from "react";
// import TableauReport from 'tableau-react';
class Tableau extends Component {
  vizContainer: any = null;
  componentDidMount() {
    this.initViz();
  }

  initViz() {
    // const window :any = window

    const vizUrl = "url";
    const vizContainer = this.vizContainer;
    // const window :any =
    // let viz :any= new window.tableau.Viz(vizContainer, vizUrl)
  }

  render() {
    return (
      <div
        ref={(div) => {
          this.vizContainer = div;
        }}
      ></div>
    );
  }
}

export default Tableau;
