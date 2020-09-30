import React, {Component} from 'react';
import './App.css';
import SlideFlow from "./components/SlideFlow";
import img from "./img/flappicus.jpg";
import './css/form.css'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            crumbs: ["Page 1"],
            pages: [
                {
                    title: "Page 1",
                    body: (<div>
                        <div className={"page-title-container"}>
                            <h3 className={"page-title"}>Your Product</h3>
                            <hr/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"product-descript"} className={"label"}>What needs moving?</label>
                            <input id={"product-descript"} placeholder={"Short description"}
                                   className={"form-huge form-control wrap-text"} type={"text"}/>
                            <label htmlFor={"product-descript"} className={"label"}>What kind of product is it?</label>
                            <select id={"productType"} className={"form form-control"}>
                                <option>Select something!</option>
                                <option>Durable goods</option>
                                <option>Electronics</option>
                            </select>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"package-descript"} className={"label"}>How is it packaged?</label>
                            <select id={"package-descript"} className={"form form-control"}>
                                <option>Boxes/Crates</option>
                                <option>Pallets</option>
                            </select>
                            <label htmlFor={"product-descript"} className={"label"}>How many can be stacked?</label>
                            <input type={"number"} min={"1"} className={"form-control form-small"}/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"package-width package-length package-height"} className={"label"}>How big
                                is it in
                                inches?</label>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Width"}/>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Length"}/>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Height"}/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"product-descript"} className={"label"}>How many pounds does each
                                weigh?</label>
                            <input type={"number"} min={"1"} className={"form-control form-tiny"}/>
                        </div>
                    </div>)
                },
                {
                    title: "Page 2",
                    body: (<div>
                        <div className={"page-title-container"}>
                            <h3 className={"page-title"}>Your Product</h3>
                            <hr/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"product-descript"} className={"label"}>What needs moving?</label>
                            <input id={"product-descript"} placeholder={"Short description"}
                                   className={"form-huge form-control wrap-text"} type={"text"}/>
                            <label htmlFor={"product-descript"} className={"label"}>What kind of product is it?</label>
                            <select id={"productType"} className={"form form-control"}>
                                <option>Select something!</option>
                                <option>Durable goods</option>
                                <option>Electronics</option>
                            </select>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"package-descript"} className={"label"}>How is it packaged?</label>
                            <select id={"package-descript"} className={"form form-control"}>
                                <option>Boxes/Crates</option>
                                <option>Pallets</option>
                            </select>
                            <label htmlFor={"product-descript"} className={"label"}>How many can be stacked?</label>
                            <input type={"number"} min={"1"} className={"form-control form-small"}/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"package-width package-length package-height"} className={"label"}>How big
                                is it in
                                inches?</label>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Width"}/>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Length"}/>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Height"}/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"product-descript"} className={"label"}>How many pounds does each
                                weigh?</label>
                            <input type={"number"} min={"1"} className={"form-control form-tiny"}/>
                        </div>
                    </div>)
                },
                {
                    title: "Page 3",
                    body: (<div>
                        <div className={"page-title-container"}>
                            <h3 className={"page-title"}>Your Product</h3>
                            <hr/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"product-descript"} className={"label"}>What needs moving?</label>
                            <input id={"product-descript"} placeholder={"Short description"}
                                   className={"form-huge form-control wrap-text"} type={"text"}/>
                            <label htmlFor={"product-descript"} className={"label"}>What kind of product is it?</label>
                            <select id={"productType"} className={"form form-control"}>
                                <option>Select something!</option>
                                <option>Durable goods</option>
                                <option>Electronics</option>
                            </select>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"package-descript"} className={"label"}>How is it packaged?</label>
                            <select id={"package-descript"} className={"form form-control"}>
                                <option>Boxes/Crates</option>
                                <option>Pallets</option>
                            </select>
                            <label htmlFor={"product-descript"} className={"label"}>How many can be stacked?</label>
                            <input type={"number"} min={"1"} className={"form-control form-small"}/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"package-width package-length package-height"} className={"label"}>How big
                                is it in
                                inches?</label>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Width"}/>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Length"}/>
                            <input type={"number"} className={"form-control form-tiny"} placeholder={"Height"}/>
                        </div>
                        <div className={"form-row"}>
                            <label htmlFor={"product-descript"} className={"label"}>How many pounds does each
                                weigh?</label>
                            <input type={"number"} min={"1"} className={"form-control form-tiny"}/>
                        </div>
                    </div>)
                }
            ]
        };
        this.addCrumb = this.addCrumb.bind(this);
        this.removeCrumb = this.removeCrumb.bind(this);
        this.getCrumbs = this.getCrumbs.bind(this);
    }

    getCrumbs(){
        let crumbsToGo = [];
        for (let crumb of this.state.crumbs){
            crumbsToGo.push(<li className="breadcrumb-item">{crumb}</li>)
        }
        return crumbsToGo;
    }

    addCrumb(title){
        let newCrumbs = this.state.crumbs;
        newCrumbs.push(title);
        this.setState({crumbs: newCrumbs});
    }

    removeCrumb(){
        let newCrumbs = this.state.crumbs.slice(0, Math.max(this.state.crumbs.length - 1, 0));
        this.setState({crumbs: newCrumbs});
    }



    render() {
        return (
            <div className="App">
                <nav className={"navbar navbar-light bg-light"} style={{"marginBottom": "20px"}}>
                    <a className={"navbar-brand"} href={"/"}><img src={img} style={{"width": "32px"}}
                                                                  alt={"A beautiful bird"}/></a>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item"}>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    {this.getCrumbs()}
                                </ol>
                            </nav>
                        </li>
                    </ul>
                </nav>
                <SlideFlow addClick={this.addCrumb} removeClick={this.removeCrumb} pages={this.state.pages}>
                </SlideFlow>
            </div>
        );
    }
}

export default App;
