export default class MyRedux{
    constructor(state,reducer){
        this.state=state;
        this.oldstate=state;
        this.reducer=reducer;
        this.observe=[];
    }
    subObserve(observeFun){
        this.observe.push(observeFun);
    }
    getState(){
        return this.state;
    }
    dispatch(action){
        this.state = this.reducer(this.state,action);
        this.observe.forEach((item) => item(this));
    }
}