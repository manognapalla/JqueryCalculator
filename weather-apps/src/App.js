import './App.css';
import routes from './Routes/routeConfig';
import React, { Component } from 'react';
import {Banner, Search, WeatherCard, WeatherSkeleton, WeatherDetails} from './components';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {


  constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.getFormatedData = this.getFormatedData.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.getDay = this.getDay.bind(this);
    this.state = {
      loading:false,
      city:{},
      list:[],
      data:[],
      showDummy:false
    }
  }


  weatherCards = [];

  async fetchData(data){
    this.setState({...this.state,loading:true});
    let api_key = '7e645c5e4585ced4f48d0c5bcfc758c3';
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lng}&appid=${api_key}`;
    let response = await fetch(url);
  
    if (response.ok) { 
      let json = await response.json();
      let obj = await this.getFormatedData(json);
      
      this.setState({
        loading:true,
        city:obj.city,
        list:obj.list,
        showDummy:false,
        data:json.list
      });
      this.updateCard();
    } else {
      console.log("Error: " + response.status);
    }
  
  }
  
  getFormatedData(data){
    let obj={
      city:data.city,
      list:[]
    }
    
    let counter_date = new Date().getDate() +1 ;
    data.list.forEach(el => {
      if(new Date(el['dt_txt']).getDate() === counter_date){
        obj.list.push(el);
        counter_date++;
      }
    });
    return obj;
  }
  
  updateCard(){
    this.weatherCards = 
        this.state.list.map((el,i) => (
          <Link key={this.getDay(el.dt_txt)} to={`/weather/${this.getDay(el.dt_txt)}`}>
            <WeatherCard key={i} payload={el}/>
          </Link>
        ))

        setTimeout(()=>{
          this.setState({...this.state,loading:false});
        },2000);
        
  }

  getDay(dateString){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString) || new Date();
    var dayName = days[d.getDay()];
    return dayName;
  }


render(){
  return (
    <Router>
      <div className="App">
        <div className="banner-wrapper">
          <Banner onChange={this.fetchData} payload={this.state.data} location={this.state.city}/>
        </div>
        <Switch>
          <Route exact path='/'>
            <div>
       
            { !this.state.loading ? <div className="weather-cards">
                {this.weatherCards}
              </div> : ''}
              { this.state.loading ? <div className="weather-cards">
                  <WeatherSkeleton/>
                  <WeatherSkeleton/>
                  <WeatherSkeleton/>
                  <WeatherSkeleton/>
                  <WeatherSkeleton/>
              </div> : ''}
            </div>
          </Route>
          <Route path='/weather/:day'>
            <WeatherDetails payload={this.state.data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


}


export default App;