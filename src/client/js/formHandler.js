
async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let validation = Client.checkForName(formText)
    if (validation) {
        alert("valid url!");
        console.log("::: Form Submitted :::")
        console.log("ADDING URL OPTION");
        let data = { url: formText };
        console.log("data", data);
        const options = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data),

        };
        const tryserver = await fetch('http://localhost:8080/send', options);

        console.log("before json", tryserver);
        const receivedData = await tryserver.json()
        console.log(" after json", receivedData);
        let start = '<ul>'
        let end = '</ul>'
        let elements = [];
        elements[0] = '<li>' + "agreement: " + receivedData.agreement + '</li>'
        elements[1] = '<li>' + "confidence: " + receivedData.confidence + '</li>'
        elements[2] = '<li>' + "irony: " + receivedData.irony + '</li>'
        elements[3] = '<li>' + "model: " + receivedData.model + '</li>'
        elements[4] = '<li>' + "score_tag: " + receivedData.score_tag + '</li>'
        document.getElementById('results').innerHTML = start + elements + end;
    }
    else {
        alert("invalid ");
        document.getElementById('results').innerHTML = "  ";
    }











}

export { handleSubmit }











