import React , {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Button from '../Button';

class Timer extends Component {
  //View 컴포넌트 사용 1개일때는 <View wddjwkldj >, react는 보여지는 구역으로 render() 필요, View와 View 사이에 속성 집어 넣을 것 
  render(){
    return(
      <View style={styles.container}> 
      <View style={styles.upper}>
        <Text style={styles.time}>25:00</Text>
      </View> 
      <View style={styles.lower}> 
        <Button iconName="play-circle"/>
        <Button iconName="stop-circle"/>
      </View>
      </View>
    );
  }
}
//시간과 버튼을 timer라는 뷰 컴토넌트를 클래스를 이용하여 만듬
//만든 것을 app.js의 import를 timer로 시킴  
//const 변하지 않도록 함, 스타일시트에는 create 함수를 가짐 
const styles = StyleSheet.create(
{

  container:{
    flex: 1,
    backgroundColor:"#c8c8c8",
  },  
  upper:{
    flex: 2,
    justifyContent:"center",
    alignItems:"center",
  },
  lower:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  time:{
    color:"white",
    fontSize: 120,
    fontWeight:"200",
  }
 }
)
//json파일 형태 컨테이너 프로포티, 프로포티들을 create
//class 명 Timer를 바깥에서도 쓸 수 있도록 함
export default Timer;







//app.js로 옮기기위한 과정 

/* import React from 'react';

//extend : 상속
class Timer extends React.Component{}*/
//calss class명 상속 컴포넌트 {} 무조건 쓰는 구조
//render(){} 무조건 쓰는 구조, 안에 return 쓰기
//View 쓰려면 import view 필수
//react, react-native package.json에 expo-cli에 깔림
//react-native는 view 컴포넌트 안에 전체를 감쌀 것 

//StyleSheet 안에 create 함수 사용, create안에 다른 프로포티
//