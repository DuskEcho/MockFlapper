import React, {Component} from 'react';
import '../css/flowPage.css'


class FlowPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            pages: this.props.pages,
            entering: this.props.enteringStyle ? this.props.enteringStyle : {marginLeft: "2000px"},
            entered: this.props.enteredStyle ? this.props.enteredStyle : {marginLeft: "15vw"},
            leaving: this.props.leavingStyle ? this.props.leavingStyle : {marginLeft: "-2000px"},
            _mounted: false,
            style: {}
        };
        this.buttonClick = this.buttonClick.bind(this);
    }


    componentDidMount() {
        this.setState({
            style: this.state.entering,
            _mounted: true
        });
        setTimeout(()=>{
            this.setState({
                style: this.state.entered,
            })
        }, 1)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
        this.setState({
            _mounted: false
        })
    }

    buttonClick() {
        this.setState({
            style: this.state.leaving,
        });
        setTimeout(()=>{
            if (this.state._mounted){
                this.props.click();
            }
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
