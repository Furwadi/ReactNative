import React, { Component } from 'react';
import { Container, Header, Title, Content, Card, CardItem, Button, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Row, Grid, Col } from 'react-native-easy-grid';

import {Actions} from 'react-native-router-flux';


export default class Transfer extends Component {

  goForm() {
    Actions.form()
  }

  goBack() {
    Actions.home()
  }
  
  render() {
    return (
      <Container>

        <Header>
          <Left>
            <Button transparent onPress={()=>this.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Transfer</Title>
          </Body>
          <Right>
            <Icon name='calendar' style={{ color:'white' }} />
            <Icon name='list-box' style={{ paddingLeft: 20, marginRight: 20, color:'white' }}/>
          </Right>
        </Header>

          <ScrollView style={{ paddingTop: 15 }}>
              <List>
                <Title style={{ color:'black', textAlign:'left', marginLeft: 10 }}>IENIS TRANSFER</Title>
                <ListItem selected>
                  <TouchableOpacity onPress={this.goForm}  style={{flexDirection:'row'}} >
                    <Left>
                      <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                      <Text>Ke Rekening Mandiri</Text>
                      </Left>
                    <Right><Icon name="arrow-dropright" style={{ marginRight: 15 }}/></Right>
                  </TouchableOpacity>
                </ListItem>
                <ListItem selected>
                  <Left>
                    <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                    <Text>Ke Bank Lain Dalam Negeri</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-dropright" style={{ paddingRight: 15 }}/>
                  </Right>
                </ListItem>
                <ListItem selected>
                  <Left>
                    <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                    <Text>Ke e-cash</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-dropright" style={{ paddingRight: 15 }}/>
                  </Right>
                </ListItem>
              </List>


              <View bordered style={{ paddingTop: 20, paddingBottom: 20  }}>
                  <List>
                    <Title style={{ color:'black', textAlign:'left', marginLeft: 10 }}>TRANSFER TERBARU</Title>
                    <ListItem selected>
                      <Left>
                        <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                        <Text>Furwadi</Text>
                      </Left>
                      <Right>
                        <Icon name="arrow-dropright" style={{ paddingRight: 15 }}/>
                      </Right>
                    </ListItem>
                    <ListItem selected>
                      <Left>
                        <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                        <Text>Pipi</Text>
                      </Left>
                      <Right>
                        <Icon name="arrow-dropright" style={{ paddingRight: 15 }}/>
                      </Right>
                    </ListItem>
                    <ListItem selected>
                      <Left>
                        <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                        <Text>Pupu</Text>
                      </Left>
                      <Right>
                        <Icon name="arrow-dropright" style={{ paddingRight: 15 }}/>
                      </Right>
                    </ListItem>
                    <ListItem selected>
                      <Left>
                        <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                        <Text>Incess</Text>
                      </Left>
                      <Right>
                        <Icon name="arrow-dropright" style={{ paddingRight: 15 }}/>
                      </Right>
                    </ListItem>
                    <ListItem selected>
                      <Left>
                        <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                        <Text>Afandi</Text>
                      </Left>
                      <Right>
                        <Icon name="arrow-dropright" style={{ paddingRight: 15 }}/>
                      </Right>
                    </ListItem>
                    <ListItem selected>
                      <Left>
                        <Image source={require('../images/itransfer.png')} style={{ marginRight: 10 }} />
                        <Text>Indah</Text>
                      </Left>
                      <Right>
                        <Icon name="arrow-dropright" style={{ paddingRight: 15 }}/>
                      </Right>
                    </ListItem>
                  </List>
              </View>

          </ScrollView>

      </Container>
    );
  }
}