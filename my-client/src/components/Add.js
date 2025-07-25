import { useState } from "react"
import '../style/Add.css';
import axios from "axios";
export function Add(){

    const[empNo,setEmpNo]     = useState("");
    const[empName,setEmpName] = useState("");
    const[empSal,setEmpSal]   = useState("");
    async function addHandler(e)
    {
        e.preventDefault();
          try
          {
const response = await axios.post('http://localhost:3001/api/employees',
                {empNo,empName,empSal});
alert(response.data.message);
        }
        catch(err)
        {
            alert(err);
        }
    }

    return(
         <div className="form-container">
            <h2>Add Record Screen</h2>
            <hr/>
            <form onSubmit={addHandler}>
                <input type="text" placeholder="Enter No"   value={empNo}   onChange={e => setEmpNo(e.target.value)}   required/><br/><br/>
                <input type="text" placeholder="Enter Name" value={empName} onChange={e => setEmpName(e.target.value)} required/><br/><br/>
                <input type="text" placeholder="Enter Sal"  value={empSal}  onChange={e => setEmpSal(e.target.value)}  required/><br/><br/>
                <button type="submit">Add Record</button>
            </form>
        </div>
    )
}