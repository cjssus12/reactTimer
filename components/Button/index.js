import React ,{Component} from 'react';
//내가 빠트린게 있을 때 자동으로 작성하도록 팝업창을 띄워 알려주도록 함, 
//import PropTypes from 'prop-type';
//터치시 눌리는 효과를 주는 컴포넌트 
import {TouchableOpacity} from 'react-native';
import {FontAwesome, Ionicons} from '@expo/vector-icons';


//눌렀을때의 내용 = onPress, function쓰면 render 안쓴다.
//폰트컬러도 함수로 지정해서 긁어오는 연습해볼 것!

//아이콘 넣는 방법 : 1. import 라이브러리 불러오기, 함수 정의 후 <FontAwesome name={iconName} size={80} color="white"/> 정의
//3. export default Button : 다른 파일에서 쓰기 위하여 내보내기 

function Button({iconName , onPress}){
    return(
        <TouchableOpacity>
            <FontAwesome name={iconName} size={80} color="white"/>
        </TouchableOpacity>
    )
}

export default Button;