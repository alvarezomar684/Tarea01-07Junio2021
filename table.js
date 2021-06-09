


const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' }, //0
            { name: 'twitter', url: 'twitter/erik' } //1
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

// let array = [];
// for(let i = 0; i < users.length; i++ ) {
//     let search3 = users[i].email;
//     const search2 = search3.indexOf("@academlo.com");
//     const exist = search2 >= 0;
//     let searchName = users[i].name;
//     let searchEmail = users[i].email;
//     let searchAge = users[i].age;
//     let searchGender = users[i].gender;
//     let searchSocialFacebook = users[i].social[0].url;
//     let searchSocialTwitter = users[i].social[1].url;        
//         if(exist === true) {
//             //console.log(searchName,searchEmail,searchAge,searchGender);
//             array.push(searchName,searchEmail,searchAge,searchGender,searchSocialFacebook,searchSocialTwitter);
//         }

// }

// console.log(array);//Tengo todos los valores requeridos. Nombre, email, edad, sexo.
// console.log(array[0]); //Me dara Erik nombre
// console.log(array[1]); //Me dara Erik email
// console.log(array[2]); //Me dara Erik edad
// console.log(array[3]); //Me dara Erik sexo
// console.log(array[4]); //Me dara Erik facebook
// console.log(array[5]); //Me dara Erik twitter

// 6 valores para cada usuario   0-5 Erik   6-11 Georg     12-17 Oscar 

let array = [];
users.forEach((elemets,index) => {   

    if(elemets.email.endsWith("@academlo.com")) {      
        array.push(elemets.name,elemets.email,elemets.age,elemets.gender)
    }
    elemets.social.forEach((redesSociales) => { 
        
        if(elemets.email.endsWith("@academlo.com")) {       
            array.push(redesSociales.url);    
        }
        
    });
    
});

let containerBody = document.getElementById("container-body")//Enlace Body 
let containerTable = document.createElement("table");//Creacion de tabla
containerTable.setAttribute("id", "users-table");//Se agrega Id a tabla
containerTable.setAttribute("border", 2);//Se bordes a tabla
containerBody.appendChild(containerTable);// Se mete tabla a body





//USUARIO CERO


let containerUserCero = document.createElement("tr");//Contenido completo primer Usuario
containerTable.appendChild(containerUserCero);

let containerUserCeroName = document.createElement("th");//Nombre primer usuario
containerUserCeroName.innerText = "Name";
containerUserCero.appendChild(containerUserCeroName);

let containerUserCeroEmail = document.createElement("th");//Email primer usuario
containerUserCeroEmail.innerText = "Email";
containerUserCero.appendChild(containerUserCeroEmail);

let containerUserCeroAge = document.createElement("th");//Edad primer usuario
containerUserCeroAge.innerText = "Age";
containerUserCero.appendChild(containerUserCeroAge);

let containerUserCeroGender = document.createElement("th");//sexo primer usuario
containerUserCeroGender.innerText = "Gender";
containerUserCero.appendChild(containerUserCeroGender);

let containerUserCeroFacebook = document.createElement("th");//Facebook primer usuario
containerUserCeroFacebook.innerText = "Facebook";
containerUserCero.appendChild(containerUserCeroFacebook);

let containerUserCeroTwitter = document.createElement("th");//twitter primer usuario
containerUserCeroTwitter.innerText = "Twitter";
containerUserCero.appendChild(containerUserCeroTwitter);


//PRIMER USUARIO


let containerUserFirst = document.createElement("tr");//Contenido completo primer Usuario
containerTable.appendChild(containerUserFirst);

let containerUserFirstName = document.createElement("td");//Nombre primer usuario
containerUserFirstName.innerText = array[0];
containerUserFirst.appendChild(containerUserFirstName);

let containerUserFirstEmail = document.createElement("td");//Email primer usuario
containerUserFirstEmail.innerText = array[1];
containerUserFirst.appendChild(containerUserFirstEmail);

let containerUserFirstAge = document.createElement("td");//Edad primer usuario
containerUserFirstAge.innerText = array[2];
containerUserFirst.appendChild(containerUserFirstAge);

let containerUserFirstGender = document.createElement("td");//sexo primer usuario
containerUserFirstGender.innerText = array[3];
containerUserFirst.appendChild(containerUserFirstGender);

let containerUserFirstFacebook = document.createElement("td");//Facebook primer usuario
containerUserFirstFacebook.innerText = array[4];
containerUserFirst.appendChild(containerUserFirstFacebook);

let containerUserFirstTwitter = document.createElement("td");//twitter primer usuario
containerUserFirstTwitter.innerText = array[5];
containerUserFirst.appendChild(containerUserFirstTwitter);


//SEGUNDO USUARIO


let containerUserSecond = document.createElement("tr");//Contenido completo primer Usuario
containerTable.appendChild(containerUserSecond);

let containerUserSecondName = document.createElement("td");//Nombre primer usuario
containerUserSecondName.innerText = array[6];
containerUserSecond.appendChild(containerUserSecondName);

let containerUserSecondEmail = document.createElement("td");//Email primer usuario
containerUserSecondEmail.innerText = array[7];
containerUserSecond.appendChild(containerUserSecondEmail);

let containerUserSecondAge = document.createElement("td");//Edad primer usuario
containerUserSecondAge.innerText = array[8];
containerUserSecond.appendChild(containerUserSecondAge);

let containerUserSecondGender = document.createElement("td");//sexo primer usuario
containerUserSecondGender.innerText = array[9];
containerUserSecond.appendChild(containerUserSecondGender);

let containerUserSecondFacebook = document.createElement("td");//Facebook primer usuario
containerUserSecondFacebook.innerText = array[10];
containerUserSecond.appendChild(containerUserSecondFacebook);

let containerUserSecondTwitter = document.createElement("td");//twitter primer usuario
containerUserSecondTwitter.innerText = array[11];
containerUserSecond.appendChild(containerUserSecondTwitter);


//TERCER USUARIO


let containerUserThird = document.createElement("tr");//Contenido completo primer Usuario
containerTable.appendChild(containerUserThird);

let containerUserThirdName = document.createElement("td");//Nombre primer usuario
containerUserThirdName.innerText = array[12];
containerUserThird.appendChild(containerUserThirdName);

let containerUserThirdEmail = document.createElement("td");//Email primer usuario
containerUserThirdEmail.innerText = array[13];
containerUserThird.appendChild(containerUserThirdEmail);

let containerUserThirdAge = document.createElement("td");//Edad primer usuario
containerUserThirdAge.innerText = array[14];
containerUserThird.appendChild(containerUserThirdAge);

let containerUserThirdGender = document.createElement("td");//sexo primer usuario
containerUserThirdGender.innerText = array[15];
containerUserThird.appendChild(containerUserThirdGender);

let containerUserThirdFacebook = document.createElement("td");//Facebook primer usuario
containerUserThirdFacebook.innerText = array[16];
containerUserThird.appendChild(containerUserThirdFacebook);

let containerUserThirdTwitter = document.createElement("td");//twitter primer usuario
containerUserThirdTwitter.innerText = array[17];
containerUserThird.appendChild(containerUserThirdTwitter);





















































//console.log(users[0].email)

/*

const search = users[0].email;

console.log(search);

const search2 = search.indexOf("@academlo.com");
console.log(search2);
const exist = search2 >= 0;
console.log(exist);

*/

//necesito hacer un j que vaya del 0 al 1 para el social

/*

for(let j = 0; j <= 1; j++) {
    users[i].social[j].url;

}

console.log(users[0].social[0].url);

*/
