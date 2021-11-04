function submitForm(){


    

    console.log("debug")

    debugger;



    const namn = document.forms["guestBook"]["namn"].value;

    const epost = document.forms["guestBook"]["epost"].value;

    const telefon = document.forms["guestBook"]["telefon"].value;

    const meddelande = document.forms["guestBook"]["meddelande"].value;



    console.log(namn);

    console.log(epost);

    console.log(telefon);

    console.log(meddelande);

    //Date
    const date = Date.now();
    console.log(date);
    const today = new Date(date);
    console.log(today);

    //Posts
    var message = document.getElementById("message").innerHTML;

message += `
${namn}, (${epost})
<br>
${telefon}
<br>
${meddelande}
<br>
${today .toUTCString()}
<br>
<hr>
<h1>Tack för att du kontaktar oss. Vi återkommer så snart vi kan!</h1>
`;  

document.getElementById("message").innerHTML = message;





    return false;



}


