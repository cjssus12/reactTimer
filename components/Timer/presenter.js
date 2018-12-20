
  //View 컴포넌트 사용 1개일때는 <View wddjwkldj >, react는 보여지는 구역으로 render() 필요, View와 View 사이에 속성 집어 넣을 것 

//onPress={()=>alert("IT's worked")} : 버튼이 눌러지면 alert 함수 실행
//<View style={styles.container}> = style={{flex: 1}}
//시간과 버튼을 timer라는 뷰 컴토넌트를 클래스를 이용하여 만듬
//만든 것을 app.js의 import를 timer로 시킴  
//const 변하지 않는 변수, 스타일시트에는 create 함수를 가짐 

//json파일 형태 컨테이너 프로포티, 프로포티들을 create
//class 명 Timer를 바깥에서도 쓸 수 있도록 함

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

import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);

    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
        ? `0${seconds}`
        : seconsds}`;

    
}

class Timer extends Component {
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if (!currentsProps.isPlaying && nextProps.isPlaying) {
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({
                interval: timerInterval
            });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            clearInterval(this.state.interval);
        }
    }
    render() {
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            restartTimer
        } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {formatTime(timerDuration - elapsedTime)}
                    </Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName={"play-circle"} onPress={startTimer} />
                    )}
                    {isPlaying && (
                        <Button iconName={"stop-circle"} onPress={restartTimer} />
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    lower: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingLeft: 25,
        paddingRight: 25
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});

export default Timer;

