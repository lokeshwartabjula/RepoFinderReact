import React from 'react';
import ShowContent from '../ShowContent/ShowContent.react';
import './Form.css';
import '../bootstrap-select/bootstrap-select/dist/css/bootstrap-select.css';
import Select from 'react-select';
import Navbar from 'react-bootstrap/Navbar'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
            language : ''
        }
    }

     optList = [
        
        { label: "Ruby", value: "Ruby" },
        { label: "Java", value: "Java" },
        { label: "CSS", value: "CSS" },
        { label: "Python", value: "Python" },
        { label: "C++", value: "C++" },
        { label: "All", value: "" },
        { label: "JavaScript", value: "JavaScript" },
      ];

   
    handleChange = (event) =>
    {
        console.log(event.target.value);
        //this.state.language = event.target.value;
        this.language = event.target.value;
         this.setState({ language: event.target.value })


    }

    // componentDidUpdate(){
    //     this.setState({ language: this.language });
    // }

    updateLanguage(stringValue)
    {
        console.log(stringValue);
        //this.state.language = event.target.value;
        this.language = stringValue;
         this.setState({ language: stringValue })

    }

    addOption(langValue)
    {
        this.optList.push({label : langValue,value : langValue});
        this.forceUpdate();
    }

    render() {
        return (
            <div className="bg">
                {/* <select className="selectpicker" id="dropdown" defaultValue={this.state.selectValue} onChange={this.handleChange} value={this.state.selectValue}>
                    <option value="">All</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Java">Java</option>
                    <option value="CSS">CSS</option>
                    <option value="Python">Python</option>
                    <option value="C++">C++</option>
                    
                </select> */}
                {/* <button onClick={this.getLanguage}>Find</button> */}


                <div className="col-sm-4 container" >
                    <br></br>
                <Select options={this.optList} onChange={opt => {console.log(opt.label, opt.value);this.updateLanguage(opt.value)}} />
                <br></br>
                </div>
                
                <ShowContent language = {this.state.language}></ShowContent>

            </div>
        );
    }
}

export default Form;