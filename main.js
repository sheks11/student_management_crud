let form = document.getElementById("form");
let names = document.getElementById("nameInput");
let email = document.getElementById("emailInput");
let age = document.getElementById("ageInput");
let gpa = document.getElementById("gpaInput");
let degree = document.getElementById("degreeInput");
let btn=document.getElementById("btn_form");
let tableBody=document.getElementById("student_data");
let student_info=[];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    saveData();
    if(btn.textContent==="Edit Student"){
        btn.textContent="Add Student";
        btn.style="background-color:white;color:black;";
    }
})


function saveData(){
   student_info.push({
    Name:names.value,
    Email:email.value,
    Age:age.value,
    GPA:gpa.value,
    Degree:degree.value
   })
   localStorage.setItem("stud_data",JSON.stringify(student_info));
   addToTable()
}
function addToTable(){
   tableBody.innerHTML="";
   student_info.map((element,idx)=>{
    return (tableBody.innerHTML+=`<tr id=${idx}>
    <td class="column-1">${idx+1}</td>
    <td class="column-2">${element.Name}</td>
    <td class="column-3">${element.Email}</td>
    <td class="column-4">${element.Age}</td>
    <td class="column-5">${element.GPA}</td>
    <td class="column-6">
    <div class="column-body-6"> 
    <div>
    ${element.Degree}
    </div>
    <div>
    <span>
    <i onclick="editRow(this)" class="bi bi-pencil-square"></i>
    <i onclick="deleteRow(this)"class="bi bi-trash3"></i>
</span>
    </div>    
    </td>
    </tr>`)
   })
   resetForm();
}

function resetForm(){
    names.value="";
    email.value="";
    age.value="";
    gpa.value="";
    degree.value="";
}

function deleteRow(e){
    e.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    student_info.splice(e.parentElement.parentElement.parentElement.parentElement.parentElement.id,1);
    localStorage.setItem("stud_data",JSON.stringify(student_info));
    console.log(student_info);
}
function editRow(e){
   names.value=student_info[e.parentElement.parentElement.parentElement.parentElement.parentElement.id].Name;
   email.value=student_info[e.parentElement.parentElement.parentElement.parentElement.parentElement.id].Email;
   age.value=student_info[e.parentElement.parentElement.parentElement.parentElement.parentElement.id].Age;
   gpa.value=student_info[e.parentElement.parentElement.parentElement.parentElement.parentElement.id].GPA;
   degree.value=student_info[e.parentElement.parentElement.parentElement.parentElement.parentElement.id].Degree;
   btn.textContent="Edit Student";
   btn.style="background-color:black;color:grey;border:0.5px solid whitesmoke;";
   deleteRow(e);
   
}

function searchFunc(){
    var searchInput=document.getElementById("searchInput");
    var tbodyselect=document.getElementById("student_data");
    var trselect=tbodyselect.getElementsByTagName("tr");
    var tdname,tdem,tddeg,text;
    for(let i=0;i<trselect.length;i++){
        tdname=trselect[i].getElementsByTagName("td")[1];
        tdem=trselect[i].getElementsByTagName("td")[2];
        tddeg=trselect[i].getElementsByTagName("td")[5];
        // console.log(`${tdname.innerText } + ${tdem.innerText } + ${tddeg.innerText} `)
        text=tdname.innerText+tdem.innerText+tddeg.innerText;
        // console.log(text);
        if(text.toUpperCase().includes(searchInput.value.toUpperCase())){
            trselect[i].style.display="";
        }
        else{
            trselect[i].style.display="none";
        }

    }
    // var n=document.getElementById("student_data");
    // var tr=n.getElementsByTagName("tr");
    
}