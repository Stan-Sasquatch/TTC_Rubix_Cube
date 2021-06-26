const ButtonPanel = (props) => {

    let buttons=[]

for (let i=0;i<props.panelArr.length;i++){

buttons.push(<button onClick={props.panelArr[i].onClick}>{props.panelArr[i].text}</button>)
}

    return ( <div className="button-panel">
{buttons}
    </div> );
}
 
export default ButtonPanel;