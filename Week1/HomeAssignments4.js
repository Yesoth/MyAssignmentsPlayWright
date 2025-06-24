let Grade=83.4

    switch (true) {
        case (Grade>85 && Grade<=100):
            console.log(`The Student aqquired A-Grade with ${Grade} marks`)
            break;
        case (Grade>70 && Grade<=84):
            console.log(`The Student aqquired B-Grade with ${Grade} marks`)
            break;
        case (Grade>50 && Grade<=69):
            console.log(`The Student aqquired C-Grade with ${Grade} marks`)
            break;
        case (Grade>35 && Grade<=49):
            console.log(`The Student aqquired D-Grade with ${Grade} marks`)
            break;
        default:
            console.log("The Student has failed")
    }