import React from 'react';
import ShowContent from '../ShowContent/ShowContent.react';
import './Form.css';
import '../bootstrap-select/bootstrap-select/dist/css/bootstrap-select.css';
import Select from 'react-select';
import Navbar from 'react-bootstrap/Navbar'
import Spinner from '../../node_modules/react-bootstrap/Spinner';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
            language : '',
            //url : "https://api.github.com/search/repositories?q=language:&sort=stars&per_page=30"
            response : [],
            isLoaded : false
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

   
    // handleChange = (event) =>
    // {
    //     console.log(event.target.value);
    //     //this.state.language = event.target.value;
    //     this.language = event.target.value;
    //     let newUrl = "https://api.github.com/search/repositories?q=language:"+event.target.value+"&sort=stars&per_page=30";
    //     console.log(newUrl+"inside handle change");
    //      this.setState({ language: event.target.value,url : newUrl })


    // }

    // componentDidUpdate(){
    //     this.setState({ language: this.language });
    // }

    updateLanguage(stringValue)
    {
        console.log(stringValue);
        //this.state.language = event.target.value;
        this.language = stringValue;
        let newUrl = "https://api.github.com/search/repositories?q=language:"+stringValue+"&sort=stars&per_page=30";
        console.log(newUrl+"inside handle change");

        fetch(newUrl).then(data => data.json()).
        then(response => {
            this.setState({language : stringValue,response:response.items,isLoaded : true});
        });

        console.log(this.state.response);

         //this.setState({ language: stringValue,url : newUrl })

    }

    render() {

        if(!this.state.isLoaded)
        {
            
            return(
                <div className="col-sm-4 container" >
                        <br></br>
                    <Select options={this.optList} onChange={opt => {console.log(opt.label, opt.value);this.updateLanguage(opt.value)}} />
                    <br></br>
                    <Spinner animation="border" role="status" />
                    </div>
                
            );

        }
        else{
            return (
                <div className="bg">
                   
    
    
                    <div className="col-sm-4 container" >
                        <br></br>
                    <Select options={this.optList} onChange={opt => {console.log(opt.label, opt.value);this.updateLanguage(opt.value)}} />
                    <br></br>
                    </div>
                    
                    <ShowContent language = {this.state.language} response = {this.state.response}></ShowContent>
    
                </div>
            );

        }


        
    }
}

export default Form;