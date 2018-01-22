import React,{Component} from 'react';
class EmployeeList extends Component{
    render(){
        let employee = this.props.employee.map((value,index)=>{ /* ลูปเอาค่า array ใหม่*/
            return(<li key={value.id}>ชื่อ-นามสกุล: {value.firstname} {value.lastname} เงือนเดือน: {value.salary}</li>);
            /*สั่ง return  list จะได้ข้อมูลแบบเป็น list key คือ index ต้องใส่  */
        });
        return(
            <div>{employee}</div>
        );
    }
}
export default EmployeeList;