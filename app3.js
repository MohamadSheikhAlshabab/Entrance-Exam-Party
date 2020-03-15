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





var footer1=document.createElement('footer');
container1.appendChild(footer1);
footer1.setAttribute('id','footer');

var p4=document.createElement('p');
footer1.appendChild(p4);
p4.setAttribute('id','p4');
p4.textContent=`Copy Right 2020`;