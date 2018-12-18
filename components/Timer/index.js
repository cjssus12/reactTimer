import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../reducer';

function mapStateProps(state){
    const {isPlaying , elapsedTime, timeDuration} = state;

    return {
        isPlaying,
        elapsedTime,
        timeDuration
    }
}

function mapDispatchProps(dispatch){
    return{
        setTimer:bindActionCreators(actionCreators.startTimer, dispatch),
        restartTimer:bindActionCreators(actionCreators.restartTimer.restartTimer,dispatch),
        addSecond:bindActionCreators(actionCreators.addSecond, dispatch)
    }
}
//연결해서 뿌져준다.
export default connect(mapStateProps , mapDispatchProps)(Timer);