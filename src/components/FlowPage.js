import React, {Component} from 'react';
import '../css/flowPage.css'


class FlowPage extends Component{

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      pages: this.props.pages,
      isLoading: false
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }




  render() {

    return (
        <div className={"flow-page bg-light"}>
            {this.props.body}
        </div>
    );
  }

}

export default FlowPage;
