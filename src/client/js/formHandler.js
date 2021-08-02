async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    let data = new FormData();
    data.set('key', "02c9dc63ce00adaf91ac4e4fbf65c872");
    data.set('txt', formText);
    data.set('lang', "en");
    console.log(data.values());
    let url = "https://api.meaningcloud.com/sentiment-2.1";
    const requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow'

    }
    const response = await fetch(url, requestOptions);
    console.log("res before .json use", response);
    const objdata = await response.json();
    console.log("after json use", objdata);
    console.log("agreement needed", objdata.agreement);
    document.getElementById('results').innerHTML = "this paragraph shows " + objdata.agreement;




}


export { handleSubmit }











