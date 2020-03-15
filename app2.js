var container1 = document.getElementById('container');

var header1 = document.createElement('header');
container1.appendChild(header1);
header1.setAttribute('id', 'header');

var nav1 = document.createElement('nav');
header1.appendChild(nav1);

var div1 = document.createElement('div');
nav1.appendChild(div1);
div1.setAttribute('id', 'div1');

var logo1 = document.createElement('img');
div1.appendChild(logo1);
logo1.setAttribute('src', 'Untitled.png');
logo1.setAttribute('id', 'logo1');

var div2 = document.createElement('div');
nav1.appendChild(div2);
div2.setAttribute('id', 'div2');

var ul1 = document.createElement('ul');
div2.appendChild(ul1);
ul1.setAttribute('id', 'ul1');

var a1 = document.createElement('a');
ul1.appendChild(a1);
a1.setAttribute('href', 'index.html');
a1.textContent = li1;
var li1 = document.createElement('li');
a1.appendChild(li1);
li1.textContent = 'Home';
li1.setAttribute('id', 'li1');

var a2 = document.createElement('a');
ul1.appendChild(a2);
a2.setAttribute('href', 'contact.html');
a2.textContent = li2;
var li2 = document.createElement('li');
a2.appendChild(li2);
li2.textContent = 'Contact';
li2.setAttribute('id', 'li2');

var a3 = document.createElement('a');
ul1.appendChild(a3);
a3.setAttribute('href', 'about.html');
var li3 = document.createElement('li');
a3.appendChild(li3);
li3.textContent = 'About';
li3.setAttribute('id', 'li3');

var main1 = document.createElement('main');
container1.appendChild(main1);


var div1 = document.createElement('div');
main1.appendChild(div1);
div1.setAttribute('id', 'div1');

var img1 = document.createElement('img');
div1.appendChild(img1);
img1.setAttribute('src', '117-1174234_png-file-svg-food-png-icon-doodle-clipart.png');
img1.setAttribute('id', 'img1');
img1.setAttribute('onclick', "changeImage1()");

var img2 = document.createElement('img');
div1.appendChild(img2);
img2.setAttribute('id', 'img2');
img2.setAttribute('src', '214-2148603_you-eat-ready-to-eat-food-icon.png');
img2.setAttribute('onclick', "changeImage2()");

var img3 = document.createElement('img');
div1.appendChild(img3);
img3.setAttribute('id', 'img3');
img3.setAttribute('src', 'Untitled.png');
img3.setAttribute('onclick', "changeImage3()");



var arr = ['117-1174234_png-file-svg-food-png-icon-doodle-clipart.png', '214-2148603_you-eat-ready-to-eat-food-icon.png', 'Untitled.png'];
// var arr = [];
var imgg = [img1, img2, img3];

console.log(arr);

console.log(imgg);

var arr2 = [];
for (var i = 4; i < 9; i++) {

    var img4 = document.createElement('img');
    div1.appendChild(img4);
    img4.setAttribute('id', `img${[i]}`);
    img4.setAttribute('src', 'Untitled.png');
    // arr.push(arr2[i]);
}

// if (MouseEvent==img1 ||MouseEvent==img3 || MouseEvent==img3){
//     img4.setAttribute('src',MouseEvent);
// }



function setToLocal(arr2) {
    var mm = JSON.stringify(arr2);
    localStorage.setItem('bla', mm);
}

setToLocal();

// function getFromLocal(){
//    var mmm= localStorage.getItem('bla');
//     var d=JSON.parse(mmm);

// }
// getFromLocal();

// var arr = ['117-1174234_png-file-svg-food-png-icon-doodle-clipart.png', '214-2148603_you-eat-ready-to-eat-food-icon.png', 'Untitled.png'];
// function storeIn() {
//     // for (var i = 0; i < 3; i++) {
//     if (imgg[i] == arr[i]) {

//         // arr2.push(arr[i]);
//         //         }
//         //     }
//         function changed(e) {
//             img4.setAttribute('src');
//         }
//         changed();
//     }
// }
// storeIn();




var footer1 = document.createElement('footer');
container1.appendChild(footer1);
footer1.setAttribute('id', 'footer');

var p4 = document.createElement('p');
footer1.appendChild(p4);
p4.setAttribute('id', 'p4');
p4.textContent = `Copy Right 2020`;



function changeImage1() {

    // if (document.getElementById("img1").src == "http://www.userinterfaceicons.com/80x80/minimize.png") 
    // {
        for (var i = 4; i < 9; i++) {
            // console.log(imgg[i]);
            // img4.setAttribute('src', `${document.getElementById(imgg[i])}`);
            img4.setAttribute('src', `${document.getElementById("img1").src}`);
            img5.setAttribute('src', `${document.getElementById("img1").src}`);
            img6.setAttribute('src', `${document.getElementById("img1").src}`);
            img7.setAttribute('src', `${document.getElementById("img1").src}`);
            img8.setAttribute('src', `${document.getElementById("img1").src}`);
            
            // arr2.push(img4);
            // arr.push(arr2[i]);
        // document.getElementById("`img${[i]}`").src =img3.setAttribute('src', `${document.getElementById("img1").src}`);
        // }
    }
    // else 
    // {
    //     document.getElementById("img3").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
    // }
}

function changeImage2() {

    img4.setAttribute('src', `${document.getElementById("img2").src}`);
    img5.setAttribute('src', `${document.getElementById("img2").src}`);
    img6.setAttribute('src', `${document.getElementById("img2").src}`);
    img7.setAttribute('src', `${document.getElementById("img2").src}`);
    img8.setAttribute('src', `${document.getElementById("img2").src}`);
}

function changeImage3() {
  
    img4.setAttribute('src', `${document.getElementById("img3").src}`);
    img5.setAttribute('src', `${document.getElementById("img3").src}`);
    img6.setAttribute('src', `${document.getElementById("img3").src}`);
    img7.setAttribute('src', `${document.getElementById("img3").src}`);
    img8.setAttribute('src', `${document.getElementById("img3").src}`);
}