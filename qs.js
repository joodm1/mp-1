function mypow(){

    let x= document.getElementById("first").value;
    let y= document.getElementById("second").value;

        if(isNaN(x) || isNaN(y)){

            document.getElementById("output").innerHTML=`<p> one or both of these inputs are not numbers</p>`;




        }else {

            x = Number(x)
            y = Number(y)
            let z = 1;
            for (let i = 0; i < y; i++) {


                z = z * x;
            }

            output.style.color="black";
            output.innerHTML = `<p>${z}</p>`;


        }








}

function add(){

    let x= document.getElementById("first").value;
    let y= document.getElementById("second").value;

    if(isNaN(x) || isNaN(y)){

        document.getElementById("output").innerHTML=`<p> one or both of these inputs are not numbers</p>`;




    }else if(x%1!==0||y%1!==0){
        document.getElementById("output").innerHTML=`<p> one or both of these inputs are not integers</p>`;



    }else{

        x = Number(x)
        y = Number(y)
        let z=x+y;

        output.style.color="black";
        output.innerHTML = `<p>${z}</p>`;


    }





}



function mult(){

    let x= document.getElementById("first").value;
    let y= document.getElementById("second").value;

    if(isNaN(x) || isNaN(y)){

        document.getElementById("output").innerHTML=`<p> one or both of these inputs are not numbers</p>`;




    }else if(x%1!==0||y%1!==0){
        document.getElementById("output").innerHTML=`<p> one or both of these inputs are not integers</p>`;



    }else{

        x = Number(x)
        y = Number(y)
        let z=x*y;
        output.style.color="black";
        output.innerHTML = `<p>${z}</p>`;


    }

}


function sub(){

    let x= document.getElementById("first").value;
    let y= document.getElementById("second").value;

    if(isNaN(x) || isNaN(y)){

        document.getElementById("output").innerHTML=`<p> one or both of these inputs are not numbers</p>`;




    }else if(x%1!==0||y%1!==0){
        document.getElementById("output").innerHTML=`<p> one or both of these inputs are not integers</p>`;



    }else{

        x = Number(x)
        y = Number(y)
        let z=x-y;

        if(z<0)
        {
            output.style.color="red";
        }
        else{
        output.style.color="black";}
        output.innerHTML = `<p>${z}</p>`;


    }

}


function clr(){
    document.getElementById("first").value = '' ; // Clear the first input field
    document.getElementById("second").value = ''; // Clear the second input field
    document.getElementById("output").innerHTML= ''; // Clear the output div

    //question: my clear doesn't work
}



