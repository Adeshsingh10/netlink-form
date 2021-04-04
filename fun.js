export function sub() {
  var name = document.getElementById("nametext").value;
  var Email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  var pno = document.getElementById("pno").value;
  var date = document.getElementById("date").value;
  var br = document.getElementById("exampleFormControlSelect1").value;
  // var fileName = document.querySelector("#file1").value;
  var Ext = document.getElementById("file1").value;
  var extension = Ext.substring(Ext.lastIndexOf(".") + 1);
  var fake_path = document.getElementById("file12").value;
  let filen = fake_path.split("\\").pop();
  let fmatch = filen.substring(filen.lastIndexOf(".")+1);

   console.log(extension);
   console.log(fmatch);
    if(!extension)
    {
      alert("file upload mismatch");
      return;
    }
   if(extension == fmatch)
   {
      alert("file matched");
      
   }
   else{
     alert("file not matched please choose the correct file extension");
     return;
   }

  // ---Created array for select multiple value from dropdown and and from the selected item we can also created multiple objects---

  var s = [];
  const options = document.getElementById("subject").options;
  const dates = date.split(",");
  for (let index = 0; index < options.length; index++) {
    if (options[index].selected) {
      s.push({
        Branch: br,
        subject: options[index].value,
        // subject: options[index]?options[index].value:"",
        // Date: date.split(",")[index],
        Date: dates.shift() || '',
      });
    }
  }
  // -----------------creating object and inserting key and value in the object --------------------
  var obj = {
    name: name,
    Email: Email,
    Password: password,
    phone: pno,
    Subject_Detail: s,
    // [
    //     {
    //         Branch: br,
    //         subject: s.toString(),
    //         Date: date
    //     }
    // ],
    Extension: extension,
    FileName: filen,
  };
  // -----------------convert the jason object into String -------------------------------
  var myJSON = JSON.stringify(obj);
  console.log(myJSON);

  // -----------------convert  --------------------
  var obj = JSON.parse(myJSON);
  console.log(obj);

  // ------------------------to show the object converted in the form of text in the text area on html form --------------
  document.getElementById("txtobj").innerHTML = myJSON;
}
