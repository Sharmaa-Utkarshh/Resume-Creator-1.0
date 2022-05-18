function addNewWEField(){
    // console.log("KK");

    let newNOde= document.createElement('textarea');
    newNOde.classList.add('form-control');
    newNOde.classList.add('weField')
    newNOde.classList.add('mt-2')

    newNOde.setAttribute('rows',3);
    newNOde.setAttribute('placeholder','Enter Here');



    let weAddButtonOb= document.getElementById('weAddButton');
    let weOb= document.getElementById('we');

    weOb.insertBefore(newNOde, weAddButtonOb);
}


function addNewAQField(){
    let newNOde= document.createElement('textarea');
    newNOde.classList.add('form-control');
    newNOde.classList.add('eqField')
    newNOde.classList.add('mt-2')

    newNOde.setAttribute('rows',3);
    newNOde.setAttribute('placeholder','Enter Here');



    let aqAddButtonOb= document.getElementById('aqAddButton');
    let aqOb= document.getElementById('aq');

    aqOb.insertBefore(newNOde, aqAddButtonOb);
}


//Generating CV 
function generateCV(){
    document.getElementById('nameT1').innerHTML= document.getElementById('nameField').value;
    document.getElementById('nameT2').innerHTML= document.getElementById('nameField').value;
    document.getElementById('contactT').innerHTML= document.getElementById('contactField').value;
    document.getElementById('addressT').innerHTML= document.getElementById('addressField').value;


    document.getElementById('fbT').innerHTML= document.getElementById('fbfield').value;
    document.getElementById('instaT').innerHTML= document.getElementById('instafield').value;
    document.getElementById('linkedT').innerHTML= document.getElementById('linkedfield').value;


    //Set Objective
    document.getElementById('objectiveT').innerHTML= document.getElementById('objectiveField').value;


    //For Work Experience

    let WEs= document.getElementsByClassName('weField');
    //This will give an array of all with classname wefield

    let str= '';

    for(let e of WEs){
        str += `<li>${e.value}</li>`
    }
    document.getElementById('weT').innerHTML= str;



    //For Academic Qualification
    let AQs= document.getElementsByClassName('eqField');
    //This will give an array of all with classname eqfield

    let str1= '';

    for(let e of AQs){
        str1 += `<li>${e.value}</li>`
    }
    document.getElementById('aqT').innerHTML= str1;


    //Code For Image setting

    let file= document.getElementById('imgField').files[0];
    
    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //Setting the image to tempelate
    reader.onloadend= function() {
        document.getElementById('imgTempelate').src= reader.result;
    }

    document.getElementById('cv-form').style.display= 'none';
    document.getElementById('cv-tempelate').style.display= 'block';


}

function printCV(){
    window.print();
    document.getElementById('prntbtn').style.display='none';
}


