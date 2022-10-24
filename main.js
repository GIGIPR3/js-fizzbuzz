let container = document.querySelector('.container');
console.log(container);

for (let i = 1; i <= 100; i++){

    if ( i % 3 == 0 && i % 5 == 0) {
        let variant = 'fizzbuzz';
        container.innerHTML += ` <div class="box box--${variant}">${variant}</div>`;
        console.log(variant);
    }

    else if ( i % 3 == 0 ) {
        let variant = 'fizz';
        container.innerHTML += ` <div class="box box--${variant}">${variant}</div>`;
        console.log(variant);
    }

    else if ( i % 5 == 0 ) {
        let variant = 'buzz';
        container.innerHTML += ` <div class="box box--${variant}">${variant}</div>`;
        console.log(variant);
    }

    else {
        container.innerHTML += `<div class="box">${i}</div>`;
        console.log(i)
    }


}