import React from 'react';
import CardTemplate from '../CardTemplate/CardTemplate.react';
import Table from '../../node_modules/react-bootstrap/Table';
import Spinner from '../../node_modules/react-bootstrap/Spinner';

import './ShowContent.css';

class ShowContent extends React.Component {

     
    constructor(props) {
        super(props);
        this.state = {
           // response : {"total_count":0,"incomplete_results":false,"items":[{}]},
            response : [],
            loaded : false,
            url : "https://api.github.com/search/repositories?q=language:"+this.props.language+"&sort=stars&per_page=30"
            
        }
    }
    //newResponse = {"total_count":0,"incomplete_results":false,"items":[]};
    //newResponse = {};
    // newurl = "https://api.github.com/search/repositories?q=language:"+this.props.language+"&sort=stars&per_page=30";

    numOfCards =20;

    componentDidMount()
    {
        console.log("did mount called");
        fetch(this.state.url).then(data => data.json()).
        then(response => {
            this.setState({response:response.items,loaded:true,url :"https://api.github.com/search/repositories?q=language:"+this.props.language+"&sort=stars&per_page=30"});
            console.log(response.items);     // this.setState({loaded:true})
           

        });
        //this.forceUpdate();
        
    }

    componentDidUpdate(){
        console.log("did update called");

        
       
        //this.forceUpdate();
        
    }

    shouldComponentUpdate(props,state)
    {
        console.log("should comp update called");
        let newurl = "https://api.github.com/search/repositories?q=language:"+props.language+"&sort=stars&per_page=30";
        console.log(props.language);
        console.log(newurl);
        fetch(newurl).then(response => response.json())
        .then(response => {
        
        //console.log(response.items);
        //console.log(newurl)
        state.response = response.items;
        //console.log(state.response);
        //force update here is important
        this.forceUpdate();
        });
        return true;
    }

    // componentDidUpdate(){
    //     console.log(fetch(this.state.url).then(data => data.json()).
    //     then(response => {response : response.items}));
    // }

    

   // list
    render() {
        console.log("render called");
        console.log(this.state.response);
        if(!this.state.loaded)
        {
            return(
                // <div className='showprofile_wrapper'>
                // <h1>{this.props.language}</h1>
                // <h1> Loading.... </h1>
                // </div>
                <Spinner animation="border" role="status" />
                   
                
            );

        }
        else
        {
            //const elements = ['one', 'two', 'three'];

            const items = []

           // for (const [index, value] of this.state.response.entries()) 
           for (var index=0;index<(this.state.response.length-4);index +=4)
            {
                items.push(
                    <Table borderless hover variant="dark" style={{marginBottom : 0 }}>
                    <tbody >
                       <tr>
                         <td><CardTemplate key={index} list={this.state.response[index]}></CardTemplate></td>
                         <td><CardTemplate key={index} list={this.state.response[index+1]}></CardTemplate></td>
                         <td><CardTemplate key={index} list={this.state.response[index+2]}></CardTemplate></td>
                         <td><CardTemplate key={index} list={this.state.response[index+3]}></CardTemplate></td>
                      </tr>
                    </tbody>
                   </Table>
                    );

            }     
            return(
                // <div className='showprofile_wrapper'>
                    /* <h1>Loaded!!</h1>
                    <h1>{this.props.language}</h1> */
                    /* <p>{JSON.stringify(this.state.response)}</p> */
                    /* <p>{JSON.stringify(this.state.response[0].id)}</p>
                    <p>{JSON.stringify(this.state.response[0].name)}</p>
                    <p>{JSON.stringify(this.state.response[0].owner.avatar_url)}</p>
                    <p>{JSON.stringify(this.state.response[0].owner.html_url)}</p>
                    <p>{JSON.stringify(this.state.response[0].stargazers_count)}</p> */

                    items
                    
           
                    /* <CardTemplate list={JSON.stringify(this.state.response[0])}></CardTemplate> */
                    
                    /* <img src={this.state.profile.avatar_url} alt="Profile pic"></img> */


                    /* <CardTemplate list={this.state.response[0]}></CardTemplate>
                    <CardTemplate list={this.state.response[1]}></CardTemplate> */

                // </div>
            );
        }





       
    }
}

export default ShowContent;