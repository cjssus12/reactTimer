
//눌렀을때의 내용 = onPress, function쓰면 render 안쓴다.
//폰트컬러도 함수로 지정해서 긁어오는 연습해볼 것!

//아이콘 넣는 방법 : 1. import 라이브러리 불러오기, 함수 정의 후 <FontAwesome name={iconName} size={80} color="white"/> 정의
//3. export default Button : 다른 파일에서 쓰기 위하여 내보내기 

import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

function Button ({iconName, onPress}){
    return (
        <TouchableOpacity onPress = {onPress}>
            <FontAwesome name = {iconName} size={80} color="white"/>
        </TouchableOpacity>
    );
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

export default Button;

