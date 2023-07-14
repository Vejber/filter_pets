let array_label = document.querySelectorAll('label');
let array_input = document.querySelectorAll('input');
// console.log(array_input);
let array_filter = new Array(); //сюда добавлять или удалять родительский класс[1] у лейбла по клику
let nodeList_pets = document.querySelectorAll('.card'); //ok but need only classnames???
let array_pets = Array.from(nodeList_pets);
console.log(array_pets);

// array_pets.style = 'display: block';
for (element of array_input) {
    element.addEventListener('click', function (event) {
        array_pets.forEach((item_pets) => {
            item_pets.style = 'display: block';
        })
        // добавляет в массив значение если оно чекед и удалает если оно нечекед:
        let delete_maybe = event.target.parentNode.getAttribute("class");
        if (event.target.checked) {
            array_filter.push(event.target.parentNode.getAttribute("class"));
            // console.log("element is checked: " + event.target);
            console.log(array_filter);
        } else if (!(event.target.checked)) {
            array_filter.forEach((item, index, array) => {
                if (item === delete_maybe) {
                    array_filter.splice(index, 1); //создает параметры фильтрации
                }
            })
        };
        console.log(array_filter + ' unique');
        showFilteredPets(array_filter, array_pets);
    }
    );
}

function showFilteredPets(array_filter, array_pets) {
    //нужно сравнить каждый элемент фильтра с каждым классом массива карточек (array-pets)
    let array_show_pets = new Array();
    let include = false;
    array_pets.forEach((item_pets, index_pets) => {
        item_pets.style = 'display: none';
        let array_item_pets = item_pets.className.split(' '); //ok
        array_filter.forEach((item_filter, index_filter) => {
            if (array_item_pets.includes(item_filter)) {
                include = true;
                console.log(include);
                item_pets.style = 'display: block';
                // return;
            }
        });
        if (include == false) {
            item_pets.style = 'display: none';
            console.log(include);
        }
    });
}


// showFilteredPets(array_filter, array_pets);

// function showFilteredPets(array_filter, array_pets) {
//     //нужно сравнить каждый элемент фильтра с каждым классом массива карточек (array-pets)
//     let array_show_pets = new Array();

//     array_filter.forEach((item_filter, index_filter) => {
//         console.log('FIRST CYCLE BEGIN');
//         console.log('item_filter is ');
//         console.log(item_filter);
//         array_pets.forEach((item_pets, index_pets) => {
//             console.log('SECOND CYCLE BEGIN');
//             console.log('item_pets is ');
//             console.log(item_pets);
//             let array_item_pets = item_pets.className.split(' '); //ok
//             console.log('array_item_pets is ');
//             console.log(array_item_pets);

//             if (array_item_pets.includes(item_filter)) {
//                 // console.log(array_item_pets + 'does not include' + item_filter);
//                 // array_pets.splice(item_pets, 1); не нада
//                 // console.log('we deleted the item_pets');
//                 item_pets.style = 'display: block';

//             }
//             else if (!(array_item_pets.includes(item_filter))) {
//                 item_pets.style = 'display: none';
//             }
//         })
//     })

//     console.log("FILTERED PETS ARE IN ARRAY_PETS");
//     console.log(array_pets);
//     console.log("ARRAY_FILTER IS");
//     console.log(array_filter);
// }



//     array_filter.forEach((item_filter, index_filter) => {
//         console.log('FIRST CYCLE BEGIN');
//         console.log('item_filter is ');
//         console.log(item_filter);
//         array_pets.forEach((item_pets, index_pets) => {
//             console.log('SECOND CYCLE BEGIN');
//             console.log('item_pets is ');
//             console.log(item_pets);
//             let array_item_pets = item_pets.className.split(' '); //ok
//             console.log('array_item_pets is ');
//             console.log(array_item_pets);

//             if (array_item_pets.includes(item_filter)) {
//                 // console.log(array_item_pets + 'does not include' + item_filter);
//                 // array_pets.splice(item_pets, 1); не нада
//                 // console.log('we deleted the item_pets');
//                 // item_pets.style = 'display: block';
//                 include = true;
//                 // continue;

//             }
//             // else if (!(array_item_pets.includes(item_filter))) {
//             //     item_pets.style = 'display: none';
//             // }
//         })
//     })

//     console.log("FILTERED PETS ARE IN ARRAY_PETS");
//     console.log(array_pets);
//     console.log("ARRAY_FILTER IS");
//     console.log(array_filter);
// }



