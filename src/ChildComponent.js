function ChildComponent(props){
    console.log(props)
       return<div style ={styles.container}>My name is {props.name} 
   <p>Privet</p>
       </div>
    }


    export default  ChildComponent

    const styles = {
        container :{
            height:100,
            width:100,
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            backgroundColor: "yellow"
           
        }
    }