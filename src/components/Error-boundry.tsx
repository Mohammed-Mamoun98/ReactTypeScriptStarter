import React, { Component } from "react";

interface IError {
  fallback: any;
  children: any;
}

export default class ErrorBoundry extends Component<IError, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.error("invoked in get derived", error);

    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidMount() {
    console.log("error", this.state.hasError);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>this is a fallback ui</p>
        </>
      );
    } else {
      return <>{this.props.fallback}</>;
    }

    //   try {
    //     console.log("childrena are rendered");

    //     return <>{this.props.children}</>;
    //   } catch (error) {
    //     return (
    //       <>
    //         <p>this is a fallback ui {error}</p>
    //       </>
    //     );
    //   }
  }
}
