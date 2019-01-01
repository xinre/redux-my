function renderHeader(stateHeader,oldstateHeader={}){
    if(stateHeader===oldstateHeader){
        return;
    }
    const titleDOM = document.getElementById('header')
    titleDOM.innerHTML = stateHeader.title
    titleDOM.style.color = stateHeader.color
}

export {renderHeader};