import React, { Component } from 'react';
import FormEmployee from './FormEmployee'; /**เรียกใช้งาน class FormEmployee */
import EmployeeList from './EmployeeList'; /**เรียกใช้งาน class EmployeeList */
class App extends Component {
  constructor(props){
     super(props);
     this.state={
        employee:[
          {
            id:1,
            firstname:'demo1',
            lastname:'demo1',
            tel:'1029384938',
            salary:'10000'
          },
          {
            id:2,
            firstname:'demo2',
            lastname:'demo3',
            tel:'4449384938',
            salary:'15000'
          }
        ]
     };
  }
  handleSave=(data)=>{
    this.setState({
      employee: [...this.state.employee, data] /** เพิ่มค่าใน state employee  ...this.state.employee คือ เอาค่า state เดิมมาเทใส่*/
    })
  }
  render() {
    return (
      <div className="App">
          <FormEmployee handleSave={this.handleSave} /> {/*เรียก form  FormEmployee มาใช้งาน && handleSave คือ data ที่ได้จาก form FormEmployee แล้วส่ง data ไปให้ handleSave ทำงานต่อ*/}
          <ul>
            <EmployeeList employee={this.state.employee}/> {/*เรียก component EmployeeListItem มาใช้งาน*/}
          </ul>
      </div>
    );
  }
}

export default App;
