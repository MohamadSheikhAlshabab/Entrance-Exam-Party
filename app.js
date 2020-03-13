var container1 = document.getElementById('container');

var header1 =document.createElement('header');
container1.appendChild(header1);
header1.setAttribute('id','header');

var nav1 = document.createElement('nav');
header1.appendChild(nav1);

var div1 =document.createElement('div');
nav1.appendChild(div1);
div1.setAttribute('id','div1');

var logo1 =document.createElement('img');
div1.appendChild(logo1);
logo1.setAttribute('src','Untitled.png');
logo1.setAttribute('id','logo1');

var div2 =document.createElement('div');
nav1.appendChild(div2);
div2.setAttribute('id','div2');

var ul1 =document.createElement('ul');
div2.appendChild(ul1);
ul1.setAttribute('id','ul1');

var a1=document.createElement('a');
ul1.appendChild(a1);
a1.setAttribute('href','index.html');
a1.textContent=li1;
var li1=document.createElement('li');
a1.appendChild(li1);
li1.textContent='Home';
li1.setAttribute('id','li1');

var a2 = document.createElement('a');
ul1.appendChild(a2);
a2.setAttribute('href','contact.html');
a2.textContent=li2;
var li2=document.createElement('li');
a2.appendChild(li2);
li2.textContent='Contact';
li2.setAttribute('id','li2');

var a3=document.createElement('a');
ul1.appendChild(a3);
a3.setAttribute('href','about.html');
var li3=document.createElement('li');
a3.appendChild(li3);
li3.textContent='About';
li3.setAttribute('id','li3');

var main1 =document.createElement('main');
container1.appendChild(main1);

var div3 =document.createElement('div');
main1.appendChild(div3);
div3.setAttribute('id','div3');

var but1 =document.createElement('button');
div3.appendChild(but1);
but1.textContent='Go Down';
but1.setAttribute('id','but1');
but1.setAttribute('onclick',"location.href='#footer'");

var div4=document.createElement('div');
main1.appendChild(div4);
div4.setAttribute('id','div4');

var img2 =document.createElement('img');
div4.appendChild(img2);
img2.setAttribute('src','214-2148603_you-eat-ready-to-eat-food-icon.png');
img2.setAttribute('id','img2');

var div5=document.createElement('div');
main1.appendChild(div5);
div5.setAttribute('id','div5');

var p1=document.createElement('p');
div5.appendChild(p1);
p1.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!';
p1.setAttribute('id','p1');


// var p2=document.createElement('p');
// div5.appendChild(p2);
// p2.textContent='.em ipsa nemo totam, expedita rerum, ad, natus dolorem ';
// p2.setAttribute('id','p2');


// var p3=document.createElement('p');
// div5.appendChild(p3);
// p3.textContent=' qui laborum velitquo id impedit atque minima beatae blanditiis hic praesentium corrupti!';
// p3.setAttribute('id','p3');

var div6=document.createElement('div');
main1.appendChild(div6);
div6.setAttribute('id','div6');

var but2=document.createElement('button');
div6.appendChild(but2);
but2.textContent='Go Up';
but2.setAttribute('id','but2');
but2.setAttribute('onclick',"location.href='#header'");


var footer1=document.createElement('footer');
container1.appendChild(footer1);
footer1.setAttribute('id','footer');

var p4=document.createElement('p');
footer1.appendChild(p4);
p4.setAttribute('id','p4');
p4.textContent=`Copy Right 2020`;


// function sp(){
   
// }
