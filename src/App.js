// npm install --save react-navigation

import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
//  Button,
  View,
  Image,
  Dimensions,
  WebView,
  Navigator,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import {
  Button
} from 'react-native-elements';

// Get the width of the screen, use it for width and height to make a square
var { width} = Dimensions.get('window');
var box_count = 3;
var box_width = width / box_count - 30;

// Icon images 
const returnDistrict = ('../imgs/returnDistrict.png');
const myVote = require('../imgs/myVote.png');
const results = require('../imgs/results.png');
const currentElection = require('../imgs/current-election.png');
const needBallot = require('../imgs/needBallot.png');
const electionDates = require('../imgs/electionDates.png');
const distElect = require('../imgs/distElect.png');
const maps = require('../imgs/maps.png');
const cspan = require('../imgs/cspan.png');
const rockTheVote = require('../imgs/rockTheVote.png');
const military = require('../imgs/military.png');
const accessible = require('../imgs/accessible.png');
const ballotReceived = require('../imgs/ballotReceived.png');
const update = require('../imgs/update-cancel-reg.png');

// links as variabe for clarity
const eReturnDistrict = 'http://www.co.thurston.wa.us/auditor/Elections/redirects/br-redirect.htm'
const eMyVote = 'https://wei.sos.wa.gov/agency/osos/en/voters/Pages/register_to_vote.aspx'
const eResults = 'http://www.co.thurston.wa.us/auditor/Elections/history/archive.htm'
const eCurrentElection = 'http://www.co.thurston.wa.us/auditor/Elections/electns.htm'
const eNeedBallot= 'http://www.co.thurston.wa.us/auditor/elections/voter_reg/ballot.htm'
const eElectionDates = 'http://www.co.thurston.wa.us/auditor/Elections/election_dates.htm'
const eDistElect = 'http://www.co.thurston.wa.us/electiondatalookup/default.aspx'
const eMaps = 'http://www.co.thurston.wa.us/auditor/Elections/precinct_maps/maps.htm'
const eCspan = 'http://www.c-span.org/series/?campaign2016&nav=candidates'
const eRockTheVote = 'http://www.rockthevote.com/get-informed/elections/'
const eUpdate = 'http://www.co.thurston.wa.us/auditor/Elections/voter_reg/update.htm'

const eMilitary = 'https://thurstoncounty.everyonecounts.com/page/557/1075'
const eAccessible = 'http://www.co.thurston.wa.us/auditor/Elections/VAAC/accessible_current_election.htm'
const eBallotReceived = 'https://weiapplets.sos.wa.gov/MyVote/#/login'

// to display pdf, this bypass security set up of iOS
const gDoc = 'http://docs.google.com/gview?embedded=true&url='


// Tabbar icons
const face = require('../imgs/social/facebook.png');
const tweet = require('../imgs/social/twitter.png');
const insta = require('../imgs/social/instagram.png');
const utube = require('../imgs/social/youtube.png');
const site = require('../imgs/social/tc.png');

// TabBar URLs
const eFace = 'https://www.facebook.com/Thurston-County-Auditors-Office-328306377190679/'
const eTweet = 'https://twitter.com/TCAuditor'
const eInsta = 'https://www.instagram.com/thurstonauditor/'
const eUtube = 'https://www.youtube.com/channel/UCxORZbqlmF1kADpJAu9EIOg'
const eSite = 'http://www.co.thurston.wa.us/auditor/'



class App extends Component {
  // Create the state
  state = {
    links: [
      {title:'Votes', url: eAccessible, img: accessible, title: 'Accessible Voting' },
      {title:'Votes', url: eMyVote, img: myVote, title: 'Register To Vote' },
      {title:'Votes', url: eCurrentElection , img: currentElection, title: 'Current Elections'  },

      {title:'Votes', url: eDistElect, img: distElect, title: 'Election Dates' },
      {title:'Votes', url: eMilitary, img: military, title: 'Military Voting' },
      {title:'Votes', url: eMaps, img: maps, title: 'District Maps'},

      {title:'Votes', url: eCspan, img: cspan, title: 'C-SPAN' },
      {title:'Votes', url: eRockTheVote, img: rockTheVote, title: 'Rock To Vote' },
      {title:'Votes', url: eUpdate, img: update, title: 'Update or Cancel Registration'}

    ],
  };

//Initialize the social media icons and links
state2 = {
    links: [
      {title:'Votes', url: eFace, img: face, title: 'Facebook' },
      {title:'Votes', url: eInsta, img: insta, title: 'Instagram' },
      {title:'Votes', url: eTweet , img: tweet, title: 'Twitter'  },
      {title:'Votes', url: eUtube , img: utube, title: 'Youtube'  },
      {title:'Votes', url: eSite, img: site, title: 'Visit Our Website!' },
      
    ],

  };

// function to be called later
  onPressButton(url) {
    // Let
    const urls = Linking.openURL(url) 
    // onPressButton navigate to the url and push it to the view
    this.refs.navigator.push({ urls }); 
  }


// function to be called later
// EX5 arrow anonymous function assign it to renderButton variable
  renderButton = (btn, index) => {
    return (   
      <TouchableOpacity
        // each item in the object from the state has an 'index'
        key={index}
        // btn.url: just get the url from the state
        // btn.title: just get the title from the state
        onPress={() => this.onPressButton(btn.url)}
        style={styles.item}>
        <Image source={btn.img} style={styles.image}></Image>
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

  renderSocialButton = (btn, index) => {
    return (   
      <TouchableOpacity
        // each item in the object from the state has an 'index'
        key={index}
        // btn.url: just get the url from the state
        // btn.title: just get the title from the state
        onPress={() => this.onPressButton(btn.url)}
        style={styles.itemSocial}>
        <Image source={btn.img} style={styles.imageSocial}></Image>
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

// on website
// style={{marginTop: 20}}
// function to be called later
  renderScene = (route, navigator) => {
    if (route.url) {
      return (
        <Home url={route.url} navigator={navigator} />
      );
    }


// the main view display
    return (
      <View style={styles.box}>
          
      		
      		<View style={styles.box2}>
      			<Image source={require('../imgs/bg/header-home-crop.png')}
        			   style={styles.cover} />
      		</View> 

			  <View style={[styles.boxx, {justifyContent:'space-around'}]}>
						{this.state2.links.map(this.renderSocialButton)}
			  </View>
		      		<View style={styles.box3}>         
			 		<View style={[styles.container, {flexWrap:'wrap'}]}>  
			  			{this.state.links.map(this.renderButton)}
					</View> 
		      		</View>
      		

      </View>
    );
  }


// the render method of the class component
  render() {
    return (
      <Navigator
        ref="navigator"
        renderScene={this.renderScene}
        initialRoute={{}}
        configureScene={(route) => (
          Navigator.SceneConfigs.FloatFromBottom
        )}
      />
    );
  }
}


const styles = StyleSheet.create (
{
  container: {
    padding: 15,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  item:
  { width: box_width, 
    height: box_width, 
    marginBottom: 35, 
    marginTop: 10, 
  },
  text: {
    color: 'black',
    textAlign: 'center',
    paddingBottom: 15,

  },
  image: {
    width: box_width , 
    height: box_width ,
  },
  imageSocial: {
    width: 30 , 
    height: 30 ,
    //alignSelf: 'auto',
  },
    itemSocial: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    width: 30,
    height: 30,
    alignSelf: 'auto',
    //justifyContent: 'space-between'
    },
    box: {
      flex: 1,
      alignSelf: 'auto',
  },
  box1: 
    {
      flex: 2,
      backgroundColor: 'black',
  },
    box2: 
    {
      flex: 10,
      flexDirection: "row",
     // alignItems: "stretch",
  },
    cover: 
    {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'stretch'
  },
    box3: {
      width: width,
      backgroundColor: '#FFFFFF',
      height: width + 50,
      // paddingTop: 10,
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
 boxx:
  {
    flex: 4,
    flexDirection: "row",
    backgroundColor: 'blue',
 //   alignItems: "stretch",
    justifyContent: 'space-around',


},
});

// newly added for tabbar navigartions
App.navigationOptions = {
  tabBar: {
      icon: () => (
        <Image
          source={require('../imgs/social/tc.png')}
          style={[styles.tabIcon, {tintColor: 'rgb(255, 255, 255)'}]}
        />
  
    )
  }
};

export default App;


