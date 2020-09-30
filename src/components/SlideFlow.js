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
      pages: [],
      isLoading: false
    };
    this.updatePage = this.updatePage.bind(this);
  }


  componentDidMount() {
    let pages = [];
    if (this.props.pages && this.props.pages.length) {
      for (let i = 0; i < this.props.pages.length; ++i) {
        if (i === this.props.pages.length - 1){
          pages.push(<FlowPage key={i} body={this.props.pages[i].body} goodButtonText={"Submit"}
                               leavingStyle={{"opacity": "0"}}
                               click={()=>{this.setState({currentPage: this.state.currentPage +1})}}/>)
        }
        else {
          pages.push(<FlowPage key={i} body={this.props.pages[i].body} goodButtonText={"Next"} click={()=>{this.setState({currentPage: this.state.currentPage +1})}}/>)
        }
      }
    }
    this.setState({pages: pages})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  updatePage(){

  }


  render() {
  console.log(this.state)

    return (
        <div className="slide-flow">
          {this.state.pages[this.state.currentPage]}
        </div>
    );
  }

}

export default SlideFlow;
