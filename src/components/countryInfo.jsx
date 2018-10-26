import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';


class CountryInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
    }
    
    render() {
        
        const styleRightBox = {
            opacity: this.props.isShown ? "1" : "0"
        }
        
        // const languages = this.props.data.languages.map((e,i) => {
        //         return( <span key={i}> {e}  </span>)
        // })
        // const languages = this.props.data.languages.name
        // console.log(languages)

        const currenciesName = this.props.data !== "" ? this.props.data.currencies.map((e,i)=>e.name) : '';
        const currenciesCode = this.props.data !== "" ? this.props.data.currencies.map((e,i)=>e.code) : '';
        const currenciesSymbol = this.props.data !== "" ? this.props.data.currencies.map((e,i)=>e.symbol) : '';
        const languages = this.props.data !== "" ? this.props.data.languages.map((e,i)=>e.name) : '';
        
        return (
      
        <div className="boxInfo" style={styleRightBox} >
             <div className="boxContent" >              
                <h2> Country: </h2>
                <h1> {this.props.data.name} </h1>
                <h1> {this.props.data.nativeName}</h1>
                <img src={this.props.data.flag} />
                <h2> Capital: <span> {this.props.data.capital} </span> </h2>
                <h2> Language: 
                        <span> {languages}  </span>
                </h2>
                <h2> Currencies: 
                    <span> {currenciesName} {'  '}
                        {/* {currenciesCode}{'  '} */}
                        {currenciesSymbol} 
                    </span>
                </h2>


                <Link to={"/moreInfo/"+this.props.data.alpha2Code}>
                <button > Read more </button>
                </Link>
            </div>

        </div>);



    }
}

export default CountryInfo;
