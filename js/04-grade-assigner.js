let userNumber = prompt('Choose a number between 1 and 100');

if (userNumber >= 1 && userNumber <= 100) {
    switch (true) {
        case (userNumber >= 60 && userNumber <= 69):
            console.log('You received a D');
            break;
        case (userNumber >= 70 && userNumber <= 79):
            console.log('You received a C');
            break;
        case (userNumber >= 80 && userNumber <= 89):
            console.log('You received a B');
            break;
        case (userNumber >= 90 && userNumber <= 100):
            console.log('You received an A');
            break;
        case (userNumber < 60):
            console.log('You received an F')
            break;
        }

    } else {
        console.log('Sorry, you must enter a number between 1 and 100. Try again!');
    };
