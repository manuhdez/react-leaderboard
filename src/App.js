import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Table from './components/table'
import Footer from './components/footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTimeUsers: [],
      recentUsers: [],
      output: [],
      recentActive: ' ▼',
      allTimeActive: ''
    }
  }

  componentDidMount() {
    const allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'
    const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'

    fetch(allTimeUrl).then( res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then( jsonResponse => {
      let allTimeData = jsonResponse;
      allTimeData.sort((a,b) => b.alltime - a.alltime);
      this.setState({allTimeUsers: allTimeData})
    })

    fetch(recentUrl).then( res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then( jsonResponse => {
      let recentData = jsonResponse;
      recentData.sort((a,b) => b.recent - a.recent);
      this.setState({
        recentUsers: recentData,
        output: recentData
      });
    })
  }

  handleClick(event) {
    if (event.target.name === 'recent') {
      this.setState({
        output: this.state.recentUsers,
        recentActive: ' ▼',
        allTimeActive: ''
      })
    } else if (event.target.name === 'allTime' ) {
      this.setState({
        output: this.state.allTimeUsers,
        allTimeActive: ' ▼',
        recentActive: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table userData={this.state.output}
          recentStyle={this.state.recentStyle}
          allTimeStyle={this.state.allTimeStyle}
          handleClick = {this.handleClick.bind(this)}
          recentMark={this.state.recentActive}
          allTimeMark={this.state.allTimeActive}
           />
        <Footer />
      </div>
    );
  }
}

export default App;
