import React, { Component } from 'react';
import axios from 'axios';

import '../index.css'
import {paths} from './elements/path.jsx';
import CountryInfo from './countryInfo';
import { greenBright } from 'ansi-colors';
import Plane from './animatedPlane';

class SimpleMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            capital: '',
            data: '',
            isShown: false,
            countriesNames: '',
            markedCountry: -1,
            alphaCode: '',
            countriesWithPost: [],
            // hover: false,
            // hoverCountry: '',
        }
    }

    handleClick = (e, i ) => {
        axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${e.currentTarget.id}`)
        .then((res) => {

            this.setState({
                capital: res.data[0].capital,
                data: res.data[0],
                isShown: true,
                countriesNames: res.data[0].name,
                markedCountry: i,
                alphaCode: res.data[0].alpha2Code,

            })
            
        })  

    }

    // toggleHover = (e, i) => {
    //     // console.log(e.currentTarget)
    //     // console.log(i)
    //     this.setState({
    //         hover: !this.state.hover,
    //         hoverCountry: e.currentTarget,
    //     })
    // }

    componentDidMount() {
        axios.get(`https://api.storyblok.com/v1/cdn/stories/blocks/call-to-action?version=published&token=mnpokCr7eE0lnQleM9LWqwtt&cv=1540550225`)
.then((res) => {
        const apiData = res.data.story.content.body;
        //console.log(apiData)

        const countriesWithPost = apiData.map((e,i) => {
            return e.headline
        })
        this.setState({
            countriesWithPost: countriesWithPost,
        })
        
        })  
    }
   

    render() {
        // console.log(this.state.hoverCountry)
        const countryMap = paths.map((elem, i) => {

            // let colorStyle = ''
            // if (this.state.hover) {
            //     colorStyle = {fill: "rgb(53,151,143)"}
            // } else if (this.state.countriesWithPost.indexOf( elem.id ) != -1 ){
            //     colorStyle = {fill: "rgb(126, 25, 25)"}
            // } else {
            //     colorStyle = {fill: "brown"}
            // }
            const colorStyle = (this.state.countriesWithPost.indexOf( elem.id ) != -1 
            ? {fill: "rgb(126, 25, 25)"}  
            : {fill: "brown"}) 

            return  <g position = "relative">
                        
                        <path id={elem.id}
                         title={elem.title}
                         className={elem.className}
                         d={elem.d}
                         key= {i}
                         onClick = {e => this.handleClick(e, i)}
                         style = {colorStyle}
                        //  style={hoverStyle}
                        //  onMouseEnter = {e => this.toggleHover(e,i)}
                        //  onMouseLeave = {e => this.toggleHover(e,i)}
                    /> 
                    {/* <text className= "countryName"
                       x= "0"
                       y= "0"
                       textAnchor= "center"  
                       startOffset= "50" 
                       position = "absolute"
                       top= "200"
                    > 
              
                   {this.state.markedCountry === i ? this.state.alphaCode : ''}
                  
                    </text>  */}
                    </g>
                    
        })

        // var hoverStyle;
        // if (this.state.hover) {
        //     hoverStyle = {fill: "rgb(53,151,143)"}
        // } 

        // console.log(hoverStyle)
        return (
            
                <div className="mapBackground">
                    <header>
                        <h1> World map</h1>
                        <h2> Interactive world map with countries</h2>
                    </header>
                    <div className="animatedPlane"> <Plane /> </ div>
                    <div className="container">
                        <div className="map">
                            <svg
                                height="100%"
                                width="80vw"
                                viewBox="-80 -30 1100 680"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                className="svg"
                            >
                            <g>{countryMap}</g>
                            </svg>
                        </  div>
                        
                            <CountryInfo data={this.state.data} 
                                isShown={this.state.isShown}/>
                        
                    </div>
                
                </div>
            
            
        );
    }
}







export default SimpleMap;
