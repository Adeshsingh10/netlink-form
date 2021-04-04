console.log("hello here");

// ---------------- validation start here -----------------
let vname = document.getElementById("nametext");
let vEmail = document.getElementById("exampleInputEmail1");
let vpassword = document.getElementById("exampleInputPassword1");
let vfile = document.getElementById("file1");
let valdemail = false;
let validpassword = false;
$('#success').hide();
$('#fail').hide();



vname.addEventListener("blur", () => {
  console.log("name is blurred");
  // validate here
  let regex = /^[a-zA-Z_ ]([a-zA-Z_ ]){2,20}$/;
  let str = vname.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid");
    vname.classList.remove("is-invalid");
  } else {
    console.log("Your name is not valid");
    vname.classList.add("is-invalid");
  }
});

vEmail.addEventListener("blur", () => {
  console.log("Email is blurred");
  // validate here
  // let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com*$/;
  let str = vEmail.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your Email is valid");
    vEmail.classList.remove("is-invalid");
    valdemail = true;
  } else {
    console.log("Your Email is not valid");
    vEmail.classList.add("is-invalid");
    valdemail = false;
  }
});

vpassword.addEventListener("blur", () => {
  console.log("password is blurred");
  // validate here
  let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let str = vpassword.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your password is valid");
    vpassword.classList.remove("is-invalid");
    validpassword = true;
  } else {
    console.log("Your password is not valid");
    vpassword.classList.add("is-invalid");
    validpassword = false;
  }
});

vfile.addEventListener("blur", () => {
  console.log("file is blurred");
  // validate here
  let regex = /^\.[a-zA-Z0-9]+$/;
  let str = vfile.value;
  // console.log(regex, str);
  if (regex.test(str)) {
    // alert("Your file extension is valid");
    vfile.classList.remove("is-invalid");
  } else {
    // alert("Your file extension is not valid");
    vfile.classList.add("is-invalid");
  }
});


$(document).ready(function () {
  var date_input = $("#date"); 
  var container =
    $(".bootstrap-iso form").length > 0
      ? $(".bootstrap-iso form").parent()
      : "body";
  var options = {
    multidate: true,
    format: "yyyy-mm-dd",
    selectMax : 2,
    container: container,
    todayHighlight: true,
    autoclose: false,
  };
  date_input.datepicker(options);
});

// ---------------- validation end here -----------------

// -------------------- Function which is call when user click submit button after filling the for-------------

// function sub() {
//   var name = document.getElementById("nametext").value;
//   var Email = document.getElementById("exampleInputEmail1").value;
//   var password = document.getElementById("exampleInputPassword1").value;
//   var pno = document.getElementById("pno").value;
//   var date = document.getElementById("date").value;
//   var br = document.getElementById("exampleFormControlSelect1").value;
//   fileName = document.querySelector("#file1").value;
//   extension = fileName.substring(fileName.lastIndexOf(".") + 1);
//   fake_path = document.getElementById("file1").value;
//   let filen = fake_path.split("\\").pop();

//   // ---Created array for select multiple value from dropdown and and from the selected item we can also created multiple objects---

//   var s = [];
//   const options = document.getElementById("subject").options;
//   const dates = date.split(",");
//   for (let index = 0; index < options.length; index++) {
//     if (options[index].selected) {
//       s.push({
//         Branch: br,
//         subject: options[index].value,
//         // subject: options[index]?options[index].value:"",
//         // Date: date.split(",")[index],
//         Date: dates.shift(),
//       });
//     }
//   }
//   // -----------------creating object and inserting key and value in the object --------------------
//   var obj = {
//     name: name,
//     Email: Email,
//     Password: password,
//     phone: pno,
//     Subject_Detail: s,
//     // [
//     //     {
//     //         Branch: br,
//     //         subject: s.toString(),
//     //         Date: date
//     //     }
//     // ],
//     Extension: extension,
//     FileName: filen,
//   };
//   // -----------------convert the jason object into String -------------------------------
//   var myJSON = JSON.stringify(obj);
//   console.log(myJSON);

//   // -----------------convert  --------------------
//   var obj = JSON.parse(myJSON);
//   console.log(obj);

//   // ------------------------to show the object converted in the form of text in the text area on html form --------------
//   document.getElementById("txtobj").innerHTML = myJSON;
// }


// import the sub function from fun.js file 
import { sub } from './fun.js';

let submit = document.getElementById("submit1");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(validpassword, valdemail);
  // submit your form here
  if (valdemail && validpassword) {
    console.log("Email and  password are valid submitting the form")
    let success = document.getElementById("success");
    success.classList.add("show");
    // fail.classList.remove("show");
    $('#fail').hide();
    $('#success').show();

  }
  else {
    console.log("one of email and password are not valid , hence not submitting the form")
    let fail = document.getElementById("fail");
    fail.classList.add("show");
    //  success.classList.remove("show");
    $('#success').hide();
    $('#fail').show();

  }


  sub();
});
