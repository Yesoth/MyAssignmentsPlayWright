launchBrowser("Edge")

function launchBrowser(browser) {
    if (browser==="Chrome") {
        console.log(`The ${browser} browser is Opened`)        
    }else{
        console.log("No browser is Opened")
    }
    
}

runTests("Functional")

function runTests(testType) {
    switch (testType) {
        case "Sanity":
            console.log("Sanity Testing")
            break;
        case "Regression":
            console.log("Regression Testing")
            break;
        case "Functional":
            console.log("Functional Testing")
            break;    
        default:
            console.log("Smoke Testing")
    }
}