import React, {Component} from 'react';
import { Container, Header, Icon, Left, Button, Body, Title, Content, Footer, FooterTab, Text, Right, View, Card, CardItem, Form, Picker } from 'native-base';
import { TextInput, Image, TouchableOpacity } from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {TextInputLayout} from 'rn-textinputlayout';
import { Actions } from 'react-native-router-flux';

export default class Formtrans extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange( string ) {
    this.setState({
      selected: value
    });
  }

  goBack() {
    Actions.transfer()
  }

  render() {

    return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={()=>this.goBack()}>
                <Icon name='arrow-back'/>
              </Button>
            </Left>
              <Title style={{ marginTop: 15 }}>Ke Rekening Mandiri</Title>
            <Right style={{ width: 5 }}></Right>
          </Header>
          <Content>
            <Card>
              <CardItem header>
                <Grid>
                  <Col>
                    <Image source={require('../images/card.png')}></Image>
                  </Col>
                  <Col>
                    <Text>FURWADI</Text>
                    <Text>1234567890</Text>
                  </Col>
                </Grid>
              </CardItem>
              <CardItem footer>
                <Grid>
                  <Col><Text>SALDO</Text></Col>
                  <Col><Text style={{ textAlign: "right" }}>1.123.456</Text></Col>
                </Grid>
              </CardItem>
            </Card>

            <View style={{ paddingTop: 15 }}>
              <Text style={{marginHorizontal: 25, marginBottom: -15 }}>Rekening Tujuan</Text>
              <TextInputLayout style={{ marginHorizontal: 25 , marginBottom: 20}}>
                <TextInput style={{fontSize: 16, height: 25}}>

                </TextInput>
              </TextInputLayout>
              <Text style={{marginHorizontal: 25, marginBottom: -15 }}>Jumlah</Text>
              <TextInputLayout style={{ marginHorizontal: 25 , marginBottom: 20}}>
                <TextInput style={{fontSize: 16, height: 25}} >

                </TextInput>
              </TextInputLayout>
              <Text style={{marginHorizontal: 25, marginBottom: -15 }}>Deskripsi (opsional)</Text>
              <TextInputLayout style={{ marginHorizontal: 25, marginBottom: 20}}>
                <TextInput style={{fontSize: 16, height: 25}} >

                </TextInput>
              </TextInputLayout>
              <Text style={{marginHorizontal: 25, marginBottom: -5 }}>Kapan?</Text>
              
              <Form style={{ marginHorizontal: 25, marginBottom: 20}}>
                <Picker
                  mode="dropdown"
                  placeholder="Select One"
                  placeholderStyle={{ color: "#2874F0" }}
                  note={false}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Sekarang" value="key0" />
                  <Picker.Item label="Pada Tanggal Tertentu" value="key1" />
                  <Picker.Item label="Setip Minggu" value="key2" />
                  <Picker.Item label="Setiap Bulan" value="key3" />
                </Picker>
              </Form>
              
            </View>

          </Content>

          <Footer>
          <FooterTab>
            <Button full onPress={() => alert('Lanjut ditekan !')}>
              <Text style={{ fontSize:17, fontWeight:'bold', color:'white' }}>Lanjut</Text>
            </Button>
          </FooterTab>
        </Footer>
        
        
      </Container>
 

    
    );


  }

}