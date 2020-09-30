import React, {Component} from 'react';
import '../css/flowPage.css'


class FlowPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            pages: this.props.pages,
            style: {marginLeft: "2000px"},
            isLoading: true
        };
        this.buttonClick = this.buttonClick.bind(this);
    }


    componentDidMount() {
        this.setState({
            style: {"marginLeft":"2000px"},
        })
        setTimeout(()=>{
            this.setState({
                style: {"marginLeft":"15vw"},
            })
        }, 1)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }


    buttonClick() {
        this.setState({
            style: {"marginLeft":"-2000px"},
        });
        setTimeout(()=>{
            this.props.click();
        }, 1000);
    }


    render() {

        return (
            <div className={"flow-page bg-light"} style={this.state.style}>
                {this.props.body}

                <div style={{"width": "100%"}}>
                    <button type={"button"} className={"btn btn-primary next-button"}
                            onClick={this.buttonClick}>{this.props.goodButtonText}</button>
                </div>
            </div>
        );
    }

}

export default FlowPage;
