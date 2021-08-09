function checkForName(inputText) {
    //this function should check if the input url is valid or not
    //if not valid it should not proceed with the call and should alert that this is invalid url
    let valid = 0;
    console.log("::: Running checkForName :::", inputText);


    if (inputText.match(/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {

        valid = 1;

    } else {


        valid = 0;
    }
    return valid;
}

export { checkForName }
