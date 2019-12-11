import React, { Component } from 'react'
import GitHubDataService from '../../api/gaugeservice/GitHubDataService.js'
import moment from 'moment'
import ls from 'local-storage'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AuthenticationService from './AuthenticationService.js'
import axios from 'axios'

class GitApiComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

            Team1Week1:[],
            Team1Week2:[],
            Team1Week3:[],
            Team2Week1:[],
            Team2Week2:[],
            Team2Week3:[],
            Team3Week1:[],
            Team3Week2:[],
            Team3Week3:[]



        }
        this.callGitBackEndAPI = this.callGitBackEndAPI.bind(this);
    }

    callGitBackEndAPI() {
        console.log("IN API")
        let username = AuthenticationService.getLoggedInUserName()
        let team1weekone = this.state.Team1Week1
        let team1weektwo = this.state.Team1Week2
        let team1weekthreee = this.state.Team1Week3
        console.log("TEAM!WEEK2",team1weektwo)
        console.log("TEAM!WEEK3",team1weekthreee)
        GitHubDataService.postTeam1Data(team1weekone,team1weektwo,team1weekthreee)
            .then(
                response => {
                    console.log("RESSPOONNSEE"+response);
                    //this.setState({ todos: response.data })
                }
            )
            .catch(err =>{
                console.log("Error" + err);
            });
            let team2weekone = this.state.Team2Week1
            let team2weektwo = this.state.Team2Week2
            let team2weekthreee = this.state.Team2Week3
        GitHubDataService.postTeam2Data(team2weekone,team2weektwo,team2weekthreee)
            .then(
                response => {
                    console.log("RESSPOONNSEE22"+response);
                    //this.setState({ todos: response.data })
                }
            )
            .catch(err =>{
                console.log("Error" + err);
            });
            let team3weekone = this.state.Team3Week1
            let team3weektwo = this.state.Team3Week2
            let team3weekthreee = this.state.Team3Week3
        GitHubDataService.postTeam3Data(team3weekone,team3weektwo,team3weekthreee)
            .then(
                response => {
                    console.log("RESSPOONNSEE22"+response);
                    //this.setState({ todos: response.data })
                }
            )
            .catch(err =>{
                console.log("Error" + err);
            });
    }

  
    async componentDidMount(){

        const urlTeam1 = "https://api.github.com/repos/fabpot/symfony/stats/contributors"
        const responseTeam1 = await fetch(urlTeam1)
        const dataTeam1 = await responseTeam1.json();
        console.log("****",dataTeam1[99].weeks)   
        var i=0
        for(i=0; i<dataTeam1[99].weeks.length; i++){//for github IU testing put 0 instead of 99
            if(i>=500){         
                if(i == 500){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam1[99].weeks[i])   
            temp.push(dataTeam1[99].weeks[i].c)
            temp.push(dataTeam1[99].weeks[i].a)
            temp.push(dataTeam1[99].weeks[i].d)
            this.setState({Team1Week1:temp}) 
                }
                if(i == 504){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam1[99].weeks[i])   
            temp.push(dataTeam1[99].weeks[i].c)
            temp.push(dataTeam1[99].weeks[i].a)
            temp.push(dataTeam1[99].weeks[i].d)
            this.setState({Team1Week2:temp}) 
                }
                if(i == 509){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam1[99].weeks[i])   
            temp.push(dataTeam1[99].weeks[i].c)
            temp.push(dataTeam1[99].weeks[i].a)
            temp.push(dataTeam1[99].weeks[i].d)
            this.setState({Team1Week3:temp}) 
                }
            }
        }

        const urlTeam2 = "https://api.github.com/repos/fabpot/symfony/stats/contributors"
        const responseTeam2 = await fetch(urlTeam2)
        const dataTeam2 = await responseTeam2.json();
        var i=0
        for(i=0; i<dataTeam2[99].weeks.length; i++){//for github IU testing put 0 instead of 99
            if(i>=400){         
                if(i == 417){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam2[99].weeks[i])   
            temp.push(dataTeam2[99].weeks[i].c)
            temp.push(dataTeam2[99].weeks[i].a)
            temp.push(dataTeam2[99].weeks[i].d)
            this.setState({Team2Week1:temp}) 
                }
                if(i == 435){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam1[99].weeks[i])   
            temp.push(dataTeam2[99].weeks[i].c)
            temp.push(dataTeam2[99].weeks[i].a)
            temp.push(dataTeam2[99].weeks[i].d)
            this.setState({Team2Week2:temp}) 
                }
                if(i == 499){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam1[99].weeks[i])   
            temp.push(dataTeam2[99].weeks[i].c)
            temp.push(dataTeam2[99].weeks[i].a)
            temp.push(dataTeam2[99].weeks[i].d)
            this.setState({Team2Week3:temp}) 
                }
            }
        }

        const urlTeam3 = "https://api.github.com/repos/fabpot/symfony/stats/contributors"
        const responseTeam3 = await fetch(urlTeam3)
        const dataTeam3 = await responseTeam3.json();
        var i=0
        for(i=0; i<dataTeam3[99].weeks.length; i++){//for github IU testing put 0 instead of 99
            if(i>=200){         
                if(i == 216){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam3[99].weeks[i])   
            temp.push(dataTeam3[99].weeks[i].c)
            temp.push(dataTeam3[99].weeks[i].a)
            temp.push(dataTeam3[99].weeks[i].d)
            this.setState({Team3Week1:temp}) 
                }
                if(i == 217){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam3[99].weeks[i])   
            temp.push(dataTeam3[99].weeks[i].c)
            temp.push(dataTeam3[99].weeks[i].a)
            temp.push(dataTeam3[99].weeks[i].d)
            this.setState({Team3Week2:temp}) 
                }
                if(i == 260){        
                    let temp= [];                    // Remove this if condition when testing for github iu
            console.log("***Inside",i,dataTeam3[99].weeks[i])   
            temp.push(dataTeam3[99].weeks[i].c)
            temp.push(dataTeam3[99].weeks[i].a)
            temp.push(dataTeam3[99].weeks[i].d)
            this.setState({Team3Week3:temp}) 
                }
            }
        }


    }
    

    render() {
        console.log('render')
        return (
            <div>
               <div> <h4 align = "center">GitHub Statistics</h4><br/></div>
            
            <button className="btn btn-success" onClick={this.callGitBackEndAPI}>GetStats</button>

            <div> Team1Week1 : {this.state.Team1Week1}</div>
            <div> Team1Week2 : {this.state.Team1Week2}</div>
            <div> Team1Week3 : {this.state.Team1Week3}</div>

            <div> Team2Week1 : {this.state.Team2Week1}</div>
            <div> Team2Week2 : {this.state.Team2Week2}</div>
            <div> Team2Week3 : {this.state.Team2Week3}</div>
            

           </div> 
        )
    }
}
export default GitApiComponent