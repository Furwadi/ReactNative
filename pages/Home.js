import React, {Component} from 'react';
import {Container, Header, Left, Button, Icon, Content, Card, CardItem, Body, Title, Right, View} from 'native-base';
import {Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

import {Actions} from 'react-native-router-flux';


export default class Home extends Component {
  goTrans() {
    Actions.transfer()
  }
  
  render() {
    return (
      <Container>
        <Header hasSegment>
          <Left>
              <Button transparent>
                <Icon name="menu" style={{marginLeft: -15}}></Icon>
                <Icon name="person" style={{marginLeft: 10}}></Icon>
              </Button>
          </Left>
          <Body>
             <Title style={{textAlign:'center', marginLeft:50}}>Mandiri Online</Title>
          </Body>
          <Right>
              <Button transparent>
                  <Icon name="list-box"/>
              </Button>
          </Right>
        </Header>
        <Content>
          <ScrollView>
                  <Grid>
                      <Row style={{ position: 'relative', justifyContent: 'space-around' }} >
                          <TouchableOpacity onPress={this.goTrans} >
                            <Image source={require('../images/transfer.png')} style={{ margin: 5, height: 80, width:80 }}/>
                            <Text>Transfer</Text>
                            </TouchableOpacity>
                          <TouchableOpacity  >
                            <Image source={require('../images/bayar.png')} style={{ margin: 5, height: 80, width:80}}/>
                            <Text style={{ alignSelf: 'center' }}>Bayar</Text>
                          </TouchableOpacity>
                          <Image source={require('../images/beli.png')} style={{ margin: 5, height: 80, width:80 }}/>
                          <Image source={require('../images/ecash.png')} style={{ margin: 5, height: 80, width:80}}/>
                      </Row>
                      <Row style={{ position: 'relative', justifyContent: 'space-around' }}>
                          <Image source={require('../images/emoney.png')} style={{ margin: 5, height: 80, width:80 }}/>
                          <Image source={require('../images/transaksi.png')} style={{ margin: 5, height: 80, width:80}}/>
                          <Image source={require('../images/favoritku.png')} style={{ margin: 5, height: 80, width:80 }}/>
                          <View style={{ margin: 5, height: 80, width:80 }}></View>
                      </Row>
                      <Row>
                        <Content padder>
                          <Card>
                            <CardItem header bordered>
                              <Text>REKENING GIRO & TABUNGAN</Text>
                            </CardItem>
                            <CardItem bordered>
                              <Body>
                                <Grid>
                                  <Row>
                                    <Image source={require('../images/card.png')} style={{ marginRight: 30 }}/>
                                      <View style={{ marginRight: 150 }}>
                                        <Text>
                                          //Your Text
                                        </Text>
                                        <Text>
                                          //Your Text
                                        </Text>
                                      </View>
                                    <Icon name="more"/>
                                  </Row>
                                </Grid>
                              </Body>
                            </CardItem>
                            <CardItem bordered>
                              <Body>
                                <Grid>
                                    <Row>
                                      <Image source={require('../images/card.png')} style={{ marginRight: 30 }}/>
                                      <View style={{ marginRight: 150 }}>
                                        <Text>
                                          //Your Text
                                        </Text>
                                        <Text>
                                          //Your Text
                                        </Text>
                                      </View>
                                      <Icon name="more"/>
                                    </Row>
                                  </Grid>
                                </Body>
                            </CardItem>
                          </Card>
                        </Content>
                      </Row>
                      <Row>
                        <Content padder>
                          <Card>
                            <CardItem header bordered>
                              <Text>PEMBUKAAN REKENING BARU</Text>
                            </CardItem>
                            <CardItem bordered>
                              <Body>
                                <Grid>
                                  <Row>
                                    <Image source={require('../images/card.png')} style={{ marginRight: 30 }}/>
                                    <View style={{ marginRight: 150 }}>
                                        <Text>
                                          //Your Text
                                        </Text>
                                        <Text>
                                          //Your Text
                                        </Text>
                                      </View>
                                    <Icon name="more"/>
                                  </Row>
                                </Grid>
                              </Body>
                            </CardItem>
                          </Card>
                        </Content>
                      </Row>
                  </Grid>
          </ScrollView>
          </Content>

      </Container>
    );
  }
}

