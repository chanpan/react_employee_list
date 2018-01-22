import React, { Component } from 'react';
export default class FormEmployee extends Component{
    constructor(props){
        super(props);
        this.state={
           employee:{
                id:Date.now(),
                firstname:'Nuttaphon',
                lastname:'Chanpan',
                tel:'0862229416',
                salary:'20000'
            },
        };
       
     }
    onChange=e=>{
        this.setState({employee:{...this.state.employee,[e.target.name]:e.target.value}});
    }
    onSubmit=(e)=>{
        this.setState({employee:{...this.state.employee,id:Date.now()}})
        this.props.handleSave(this.state.employee);
        e.preventDefault();
    }
    render(){
        let {employee} = this.state;
        return(    
        <div>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>ID: </label>
                    <input value={employee.id} onChange={this.onChange} type="text" name="id" placeholder="id" readOnly/>
                </div>
                <div>
                    <label>Firstnam: </label>
                    <input value={employee.firstname} onChange={this.onChange} type="text" name="firstname" placeholder="Firstnam"/>
                </div>
                <div>
                    <label>Lestname: </label>
                    <input value={employee.lastname} onChange={this.onChange} type="text" name="lastname" placeholder="Lestname"/>
                </div>
                <div>
                    <label>Tel: </label>
                    <input value={employee.tel} onChange={this.onChange} type="text" name="tel" placeholder="Tel"/>
                </div>  
                <div>
                    <label>Salary: </label>
                    <input value={employee.salary} onChange={this.onChange} type="text" name="salary" placeholder="Salary"/>
                </div>    
                <button >Add</button>
            </form>
        </div>
        );
    }
}