var passingArr = []
passingArr[0] = document.getElementById('namehere');
passingArr[1] = document.getElementById('emailhere');
passingArr[2] = document.getElementById('phonehere');
passingArr[3] = document.getElementById('nationalityhere');
passingArr[4] = document.getElementById('address1here');
passingArr[5] = document.getElementById('address2here');
passingArr[6] = document.getElementById('cnichere');
passingArr[7] = document.getElementById('statushere');
var nameArr = [];
var emailArr = [];
var numberArr = [];
var nationalityArr = [];
var addressArr = [];
var mailArr = [];
var cnicArr = [];
var employmentArr = [];

function show(event) {

    event.preventDefault();

    var input1 = document.getElementById('name1').value;
    var input2 = document.getElementById('email1').value;
    var input3 = document.getElementById('telphone').value;
    var input4 = document.getElementById('nationality').value;
    var input5 = document.getElementById('address').value;
    var input6 = document.getElementById('mail-address').value;
    var input7 = document.getElementById('cnic').value;
    var input8 = document.getElementById('employment-status').value;

    nameArr.push(input1);
    emailArr.push(input2);
    numberArr.push(input3);
    nationalityArr.push(input4);
    addressArr.push(input5);
    mailArr.push(input6);
    cnicArr.push(input7);
    employmentArr.push(input8);

    passingArr[0].innerHTML = nameArr;
    passingArr[1].innerHTML = emailArr;
    passingArr[2].innerHTML = numberArr;
    passingArr[3].innerHTML = nationalityArr;
    passingArr[4].innerHTML = addressArr;
    passingArr[5].innerHTML = mailArr;
    passingArr[6].innerHTML = cnicArr;
    passingArr[7].innerHTML = employmentArr;

}

function deleteStart() {
    nameArr.pop();
    emailArr.pop();
    numberArr.pop();
    nationalityArr.pop();
    addressArr.pop();
    mailArr.pop();
    cnicArr.pop();
    employmentArr.pop();

    document.getElementById('namehere') = nameArr;
    document.getElementById('emailhere') = emailArr;
    document.getElementById('phonehere') = numberArr;
    document.getElementById('nationalityhere') = nationalityArr;
    document.getElementById('address1here') = addressArr;
    document.getElementById('address2here') = mailArr;
    document.getElementById('cnichere') = cnicArr;
    document.getElementById('statushere') = employmentArr;
}