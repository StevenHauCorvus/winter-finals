import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPencil} from '@fortawesome/free-solid-svg-icons';


function Student(props){
  const[editMode,setEditMode] = useState(false);
  const[firstName,setFirstName] = useState("");
const[lastName,setLastName] = useState("");
const[email,setEmail] = useState("");
const [gradYear,setGradYear] = useState("");

useEffect(() =>{
setFirstName(props.student.firstName);
setLastName(props.student.lastName);
setEmail(props.student.email);
setGradYear(props.student.gradYear);
}, []);


const saveStudent = () => {
  setEditMode(false);
  const updatedStudent = {firstName:firstName, lastName:lastName, email:email, gradYear:gradYear, id:props.student.id, image:props.student.image}
  props.updateStudent(updatedStudent);
}
 
return(

    <div className='card bg-danger bg-opacity-10 border-danger border border-2'>
    <img src={props.student.image} alt="poop" className='card-img-top mx-auto' />
      {!editMode && <ul  className='list-group list-group-flush'>
        <li className='list-group-item bg-danger bg-opacity-50 text-white text-center'><i className="fs-5 text-info fa-solid fa-fingerprint"></i>  {props.student.firstName}</li>
        <li className='list-group-item bg-danger bg-opacity-25 text-white text-center'>{props.student.lastName}</li>
        <li className='list-group-item bg-danger bg-opacity-25 text-white text-center'>{props.student.email}</li>
        <li className='list-group-item bg-danger bg-opacity-25 text-white text-center'>{props.student.gradYear}</li>
        <li className='list-group-item bg-danger bg-opacity-25 text-center'><i className="text-white fs-1 fa-solid fa-barcode"></i></li>
        <button type="button" className="btn btn-outline-warning btn-sm" onClick={() => props.removeStudent(props.student)}><FontAwesomeIcon icon={faXmark}/></button>
        <button type="button" className="btn btn-outline-info btn-sm" onClick={() => setEditMode(true)}>Edit <FontAwesomeIcon icon={faPencil}/></button>
      </ul>
}
{editMode &&
<ul  className='list-group list-group-flush'>
        <li className='list-group-item bg-danger bg-opacity-25 text-white text-center'><input type="text" className="form-control" value={firstName} onChange={(evt) => setFirstName(evt.currentTarget.value)} /></li>
        <li className='list-group-item bg-danger bg-opacity-50 text-white text-center'><i className="fs-5 text-info fa-solid fa-fingerprint"></i>  <input type="text" className="form-control" value={lastName} onChange={(evt) => setLastName(evt.currentTarget.value)} /></li>
        <li className='list-group-item bg-danger bg-opacity-25 text-white text-center'><input type="text" className="form-control" value={email} onChange={(evt) => setEmail(evt.currentTarget.value)} /></li>
        <li className='list-group-item bg-danger bg-opacity-25 text-white text-center'><input type="text" className="form-control" value={gradYear} onChange={(evt) => setGradYear(evt.currentTarget.value)} /></li>
        <li className='list-group-item bg-danger bg-opacity-25 text-center'><i className="text-white fs-1 fa-solid fa-barcode"></i></li>
        <li className='list-group-item bg-danger bg-opacity-25 text-white text-center'><button id="btnSave" className="btn btn-outline-info btn-sm" onClick={saveStudent}>Save</button></li>
      </ul>
}
    </div>
  )
};

  export default Student;
