import {Component} from "react";
import heart from './heart.jpeg';
import heartTwo from './heart2.jpeg';

export class Like extends Component{
    state = {
        CTA: "Like us!",
        image:heart
    }

    heartClicked = () =>{
        this.setState({
            CTA:"Thank you! We like you too!",
            image:heartTwo
        })
    }

    render(){
        return <div>
            <div className = "container">
            <h1>{this.state.CTA}</h1>
            </div>
            <div className = "container">
                <img onClick={this.heartClicked} src = {this.state.image} width="120px" alt="heart"/> 
            </div>
            </div>
    }

}