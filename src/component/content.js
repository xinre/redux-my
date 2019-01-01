function renderContent(stateContent,oldstateContent={}){
    if(stateContent===oldstateContent){
        return;
    }
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = stateContent.title
    contentDOM.style.color = stateContent.color
}

export {renderContent};