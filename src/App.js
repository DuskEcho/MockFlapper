import React from 'react';
import './App.css';
import SlideFlow from "./components/SlideFlow";
import img from "./img/flappicus.jpg";
import './css/form.css'


function App() {
    let pages = [
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
                <label htmlFor={"package-width package-length package-height"} className={"label"}>How big is it in
                    inches?</label>
                <input type={"number"} className={"form-control form-tiny"} placeholder={"Width"}/>
                <input type={"number"} className={"form-control form-tiny"} placeholder={"Length"}/>
                <input type={"number"} className={"form-control form-tiny"} placeholder={"Height"}/>
            </div>
            <div className={"form-row"}>
                <label htmlFor={"product-descript"} className={"label"}>How many pounds does each weigh?</label>
                <input type={"number"} min={"1"} className={"form-control form-tiny"}/>
            </div>
        </div>)},
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
                    <label htmlFor={"package-width package-length package-height"} className={"label"}>How big is it in
                        inches?</label>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Width"}/>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Length"}/>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Height"}/>
                </div>
                <div className={"form-row"}>
                    <label htmlFor={"product-descript"} className={"label"}>How many pounds does each weigh?</label>
                    <input type={"number"} min={"1"} className={"form-control form-tiny"}/>
                </div>
            </div>)},
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
                    <label htmlFor={"package-width package-length package-height"} className={"label"}>How big is it in
                        inches?</label>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Width"}/>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Length"}/>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Height"}/>
                </div>
                <div className={"form-row"}>
                    <label htmlFor={"product-descript"} className={"label"}>How many pounds does each weigh?</label>
                    <input type={"number"} min={"1"} className={"form-control form-tiny"}/>
                </div>
            </div>)},
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
                    <label htmlFor={"package-width package-length package-height"} className={"label"}>How big is it in
                        inches?</label>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Width"}/>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Length"}/>
                    <input type={"number"} className={"form-control form-tiny"} placeholder={"Height"}/>
                </div>
                <div className={"form-row"}>
                    <label htmlFor={"product-descript"} className={"label"}>How many pounds does each weigh?</label>
                    <input type={"number"} min={"1"} className={"form-control form-tiny"}/>
                </div>
            </div>)}
    ];

    return (
        <div className="App">
            <nav className={"navbar navbar-light bg-light"} style={{"marginBottom": "20px"}}>
                <a className={"navbar-brand"} href={"/"}><img src={img} style={{"width": "32px"}}
                                                              alt={"A beautiful bird"}/></a>
            </nav>
            <SlideFlow pages={pages} className="App-header">
            </SlideFlow>
        </div>
    );
}

export default App;
