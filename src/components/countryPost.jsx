import React from 'react';
import '../post.css';
import axios from 'axios';
import {    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,} from 'react-router-dom';

class CountryPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: "",
            activeCountry: this.props.match.params.alpha2Code,
            activePost: "",
            activePictures: [],
            counter: 0,
            activeCountryName: "",
          
        }
    }
    componentDidMount() {
                axios.get(`https://api.storyblok.com/v1/cdn/stories/blocks/call-to-action?version=published&token=mnpokCr7eE0lnQleM9LWqwtt&cv=1540550225`)
        .then((res) => {
            const apiData = res.data.story.content.body;
            const filteredApiCode = apiData.filter((elem) =>{
                return (elem.headline === this.state.activeCountry);
            })

            this.setState({
                data: res.data.story.content.body,
                activePost: filteredApiCode[0].text,
                activePictures: [...this.state.activePictures, filteredApiCode[0].image,filteredApiCode[0].icon,filteredApiCode[0].logo,],
                activeCountryName: filteredApiCode[0].headline_2,
            })

        })  

        this.int = setInterval(() => {
            this.setState({ 
                counter: this.state.counter + 1 
            })

            if (this.state.counter === 3) {
                this.setState({
                     counter: 0,
                })
            }
        }, 6000)

    }
    
    render() {

        const bannerPictures = this.state.activePictures.map((e,i) => {
            const activeClass = this.state.counter == i ? "banner-slide banner-slide-active" : "banner-slide"
                return (
                    <div key={i} className = {activeClass} style={{backgroundImage: "url(" + e + ")"}}>
                    </div>
                )
        })

        const post2 = this.state.activePost.substr(1);
        
                
        
      return (
       
      
        <div className="mainPost"  >
            <section className="heading">              
                <h1> Welcome to  <span> {this.state.activeCountryName} </span> </h1>
                <h2> Discover the World </h2>
                <Link to="/"> Back to map </Link>

                <div className="banner-sliders">
                    {bannerPictures}            
                </div>
            </section>

            <div className="PostContainer">
                <p className='post'> 
                    <span> {this.state.activePost[0]}</span> 
                    {post2} 
                </p>
            </div>
                
        </div>);

    }
}

export default CountryPost;