import React, {Component} from 'react';
import {  View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card } from '@rneui/themed';

class RandomUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:[],
      loading:false
    }
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=50')
    .then((Response) => Response.json())
    .then((Response) => {
      this.setState({
        items:Response.results,
        loading:true
      })
    })
  }

  render(){
    var {items,loading} = this.state
        if(!loading){
            return(
            <View><Text>loading.......</Text></View>
            )
        }
        else{
            return(
                <ScrollView>
                {
                  items.map(item => (
                    <View style={styles.box}>
                      <Card>
                        <Card.Title>{item.name.first} {item.name.last}</Card.Title>
                        <Card.Divider />
                        <Card.Image
                          style={{ padding: 0 }}
                          source={{ uri: item.picture.medium }}
                        />
                        <Text style={{ marginBottom: 10 }}>
                        Jalan {item.location.street.number} {item.location.street.name}
                        {item.location.city} {item.location.country} {item.location.postcode}
                        </Text>
                        <Text style={{ marginBottom: 10 }}>
                        Email: {item.email}
                        </Text>
                      </Card>
                    </View>
                  ))
                }
                
            </ScrollView>
            )
        }
  }
  
}
export default RandomUser;

const styles = StyleSheet.create({
    list: {
      width: '100%',
      backgroundColor: '#000',
    },
    item: {
      aspectRatio: 1,
      width: '100%',
      flex: 1,
    },
    box:{
      backgroundColor:'#FEF7DC',
      marginBottom: 10,
      padding: 10
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    });