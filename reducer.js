
//import

//Actions 정의
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

//Actions's Creators
function startTimer(){
    return {
        type:START_TIMER
    }
}

function restartTimer(){
    return {
        type:RESTART_TIMER
    }
}
//호출시 restartTimer.RESTART_TIMER, function은 , 없다
function addSecond(){
    return {
        type:ADD_SECOND
    }
}
//Reducer 초기값

const TIMER_DURATION = 1500;
//const 직접바꾸지는 못하나 const 프로포티를 다른곳에서 호출하면 바꿀 수 있다. 
const initialState ={
    isPlaying:false,
    elapsedTime:0,
    timeDuration: TIMER_DURATION

}
//Reducer's Functions

function reducer(state=initialState , auction){
    switch (auction.type){
        case START_TIMER :
            return applyStartTimer(state, auction);
        case RESTART_TIMER :
            return applyRestartTimer(state, auction);
        case ADD_SECOND :
            return applyAddSecond(state, auction);
        default :
            return state;
    }
}



//Export Action's Creators
//applyStartTimer 함수, 초기 값의 상태를 가져오는 함수 
//...state : 원래 값으로 돌아간다. - 단추를 누르면 0으로 간다. 
function applyStartTimer(state, auction){
    return{
        ...state, 
        isPlaying:true,
        elapsedTime:0
    }
}
function applyRestartTimer(state, auction){
    return{
        ...state, 
        isPlaying:false,
        elapsedTime:0
    }
}
function applyAddSecond(state, auction){
    const {elapsedTime} = state;

    if(elapsedTime < TIMER_DURATION){
        return{
            ...state,
            elapsedTime: elapsedTime + 1
            //작다면 elapseTime 1추가 
        };
    }
    else {
        return{
            ...state, //elapseTime를 0으로 바꿈 
            isPlaying:false
        }
    }
}
//여태까지 함수를 모아서
const auctionCreator = {
    startTimer,
    restartTimer,
    addSecond,
}
//모은 것을 보낸다 
export {auctionCreator};
export default reducer;

//