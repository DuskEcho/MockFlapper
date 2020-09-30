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
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
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
          pages.push(<FlowPage key={i} body={this.props.pages[i].body} goodButtonText={"Next"} prevClick={this.prevPage} nextClick={this.nextPage}/>)
        }
      }
    }
    this.setState({pages: pages})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  updatePage(){
  }

  nextPage(){
    let {currentPage} = this.state;
    let {pages} = this.props;
    this.props.addClick(pages[currentPage+1].title);
    this.setState({currentPage: this.state.currentPage +1})

  }

  prevPage(){
    this.setState({currentPage: Math.max(this.state.currentPage -1, 0)});
    this.props.removeClick();
  }


  render() {
    return (
        <div className="slide-flow">
          {this.state.pages[this.state.currentPage]}
        </div>
    );
  }

}

export default SlideFlow;
