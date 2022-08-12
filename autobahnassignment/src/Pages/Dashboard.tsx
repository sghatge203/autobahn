import React from "react"
import HeaderComponent from "../Components/HeaderComponent"
import TableComponent from "../Components/TableComponent"
const Dashboard:React.FC =  (props)=>{

    const handleOnAdd = (evt:Event)=>{
        console.log('Add Event',evt)
    }
    const handleOnEdit = (evt:Event)=>{
        console.log('Edit Event',evt)
    }
    return(
        <div>
            <HeaderComponent />
            <TableComponent handleOnAdd={handleOnAdd} handleOnEdit={handleOnEdit} />
        </div>
    )
}

export default Dashboard