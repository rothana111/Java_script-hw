const form = document.getElementById("form");

const TeacherCode = document.getElementById("TeacherCode");
const FullName = document.getElementById("FullName");
const Contact = document.getElementById("Contact");
const BtCreate = document.getElementById("BtCreate");

BtCreate.addEventListener("click", e =>{
        const msg = document.getElementById("Msg");

    if (validateInputs() === true) {
        msg.textContent = "Teacher created successfully!";
        msg.className = "text-center";
    } else {
        msg.textContent = "Warning invalid input(s).";
        msg.className = "text-center";
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error-state');
    inputControl.classList.remove('success-state');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');  

    errorDisplay.innerText = '';
    inputControl.classList.add('success-state');
    inputControl.classList.remove('error-state');
}
const validateInputs = () => {
    const TeacherCodeValue = TeacherCode.value.trim();
    const FullNameValue = FullName.value.trim();
    const ContactValue = Contact.value.trim();
    
    var Result = false;
    var V1= false;
    var V2= false;
    var V3= false;

    if(TeacherCodeValue === '' ){
        setError(TeacherCode, 'Teacher code is required');
    }else{
        setSuccess(TeacherCode);
        V1=true;
    }

    if(FullNameValue === ''){
        setError(FullName, 'Full name is required');
    }else if (FullNameValue.length < 5 ){
        setError(FullName, 'Full name must be at least 5 characters');
    }
    else{
        setSuccess(FullName);
        V2=true;
    }   
    if(ContactValue === ''){
        setError(Contact, 'Contact is required');
    }
    else if(!/^[0-9]{8,15}$/.test(ContactValue)){
        setError(Contact, 'Invalid contact number(must be 8–15 digit)');
    }
    else{
        setSuccess(Contact);
        V3 = true;
    }
        
    
    if(V1===true && V2===true && V3===true){
        Result=true;
    }
    return Result;
}

