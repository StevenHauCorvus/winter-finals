import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid'
import React, {useState, useEffect} from 'react';
import './poop.css';
import AddStudent from './Components/AddStudent';
import _ from 'lodash';
import Student from './Components/Student';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './Components/Student.css'

function App() {
  
  const[allStudents, setAllStudents] = useState(null);
 const[searchResults, setSearchResults]= useState(null);
 const[keywords, setKeywords]= useState("");
 const[gradYear, setGradYear] = useState("");


useEffect(() =>{
  saveStudents(students);
}, []);


 const saveStudents = (students) => {
  setAllStudents(students);
  setSearchResults(students);
 }

 const addStudent = (newStudent) => {
  const updatedStudents = [...allStudents,newStudent]
  saveStudents(updatedStudents)
  }


 const searchStudents = () => {
 
let keywordsArray = [];

if(keywords) {
  keywordsArray = keywords.toLowerCase().split(' ');
}

if(gradYear){
  keywordsArray.push(gradYear.toString());
}





if (keywordsArray.length > 0) {
  const searchResults = allStudents.filter(student => {
    for(const word of keywordsArray){
      if(student.firstName.toLowerCase().includes(word) ||
      student.lastName.toLowerCase().includes(word) || 
      student.gradYear === parseInt(word)){
        return true;
      }
    }
    return false;
  }); 
setSearchResults(searchResults);
}else {
  setSearchResults(allStudents)
}


 }



 const removeStudent = (studentToDelete) => {
console.table(studentToDelete);
const UpdatedStudentsArray = allStudents.filter(student => student.id !== studentToDelete.id);
saveStudents(UpdatedStudentsArray);
 }


 const updateStudent = (updatedStudent) => {
// console.table(updatedStudent);
const UpdatedStudentsArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updatedStudent} : student)
 saveStudents(UpdatedStudentsArray);
}
  
 
 const students = [{
    id:nanoid(),
    firstName: "Trell",
    lastName: "Lovitt",
    email: "jlovitt0@storify.com",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2000
    
 
  }, {
    id:nanoid(),
    firstName: "Nathan",
    lastName: "Serraillier",
    email: "mserraillier1@mashable.com",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2010
  }, {
    id:nanoid(),
    firstName: "Beckie",
    lastName: "Clemencet",
    email: "bclemencet2@jimdo.com",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2002
  }, {
    id:nanoid(),
    firstName: "Brit",
    lastName: "Inch",
    email: "binch3@mac.com",
     image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
     gradYear: 2009
    
  }, {
    id:nanoid(),
    firstName: "Blinny",
    lastName: "Gannan",
    email: "bgannan4@chron.com",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2000
  }, {
    id:nanoid(),
    firstName: "Massimo",
    lastName: "Meletti",
    email: "mmeletti5@arstechnica.com",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2008
  }, {
    id:nanoid(),
    firstName: "Travus",
    lastName: "Joppich",
    email: "tjoppich6@eventbrite.com",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2003
  }, {
    id:nanoid(),
    firstName: "Cortney",
    lastName: "Flicker",
    email: "cflicker7@biglobe.ne.jp",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2005
  }, {
    id:nanoid(),
    firstName: "Shoshanna",
    lastName: "Bucknall",
    email: "sbucknall8@usda.gov",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2001
  }, {
    id:nanoid(),
    firstName: "Caron",
    lastName: "Gelling",
    email: "cgelling9@google.pl",
    image:"https://media.giphy.com/media/XzXBaoauGcLHCCWvlA/giphy.gif",
    gradYear: 2002
   
  }];



  return (
   <div className='container'>
    
  
   <AddStudent addStudent={addStudent} />

   <div className='row mt-4' id='searchStudents'>
   <h3 className='text-white'>Search Convict</h3>
    
    <div className='text-white col-md-4'>
      <label htmlFor="txtKeyWords">Student Search</label>
      <input type="text" className='form-control' placeholder='Search... ' onChange={evt => setKeywords(evt.currentTarget.value)} value={keywords} />
    </div>
    
    <div className='text-white col-md-4'>
      <select value={gradYear} onChange={evt => setGradYear(evt.currentTarget.value)} className='form-select'><option value="">Selecy Prisoner number</option>
      {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
      </select>
      </div>
    
    <div className='text-white col-md-4'><button type='button' className='btn btn-danger' onClick={searchStudents}>Search Prisoner <FontAwesomeIcon icon={faMagnifyingGlass}/></button></div>

   </div>
   
    <div className='row' id='allStudent'>
      <h3 className='text-white'>Convicts</h3>
      {searchResults && searchResults.map((student) => 
      (   
      <div className='col-md-2 mt-2' key={student.id}>
       
       <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent} />
      
      </div>)
      )}
    
    
    </div>
    {/* {!allStudents && <button type='button' className='btn btn-lg btn-danger' onClick={() => saveStudents(students)}>Open Casket</button>} */}
    
   </div>
  );
}

export default App;
