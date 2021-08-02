function checkForName(inputText) {
    let found = 0;
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if (names.includes(inputText)) {
        alert("Welcome, Captain!")

    }
    return found;
}

export { checkForName }
