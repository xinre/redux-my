import {renderHeader} from './component/header.js';
import {renderContent} from './component/content.js';
import MyRedux from './myRedux.js';
let state = {
    header:{
        title:'i am header',
        color:'red'
    },
    content:{
        title:'i am content',
        color:'yellow'
    }
}
function main(state,oldstate={}){
    if(state===oldstate){
        return;
    }
    renderHeader(state.header,oldstate.header);
    renderContent(state.content,oldstate.header);
}
function reducer(state,action){
    switch(action.type){
        case 'UPDATA_HEADER_TITLE':
            return {
                ...state,
                header:{
                    ...state.header,
                    title:action.title
                }
            }
        case 'UODATA_CONTENT_COLOR':
            return {
                ...state,
                header:{
                    ...state.header,
                    color:action.color,
                }
            }
        default:
            return state
    }
}

const store = new MyRedux(state,reducer);
store.subObserve((that) => {
    that.state=store.getState();
    main(that.state,that.oldstate);
    that.oldstate=that.state;
})


main(store.getState());
store.dispatch({type:'UPDATA_HEADER_TITLE',title:'change'});
store.dispatch({type:'UODATA_CONTENT_COLOR',color:'blue'});
