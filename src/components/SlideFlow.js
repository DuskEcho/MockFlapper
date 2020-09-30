import React, {Component} from 'react';
import FlowPage from "./FlowPage";
import '../css/slideFlow.css'

/**
 * Requires a pages array with pages in form:
 * {
 *     title: page title,
 *     contents: html contents
 * }
 */
class SlideFlow extends Component{

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      pages: this.props.pages,
      isLoading: false
    };
    this.updatePage = this.updatePage.bind(this);
  }


  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  updatePage(){

  }


  render() {


    return (
        <div className="slide-flow">
          <FlowPage body={this.state.pages[this.state.currentPage]}>

          </FlowPage>
        </div>
    );
  }

}

export default SlideFlow;
