function opennav()
{
	document.getElementsByClassName("sidenav")[0].style.width = "20%";

}
function closenav(){
	document.getElementsByClassName("sidenav")[0].style.width = "0";
}

function hover(id)
{
  document.getElementById(id).style.color="white";

}

function hover1(id){

document.getElementById(id).style.color="grey";
}
	var c=1;
function myFunction() {
	if(c==0)
  {
  	document.getElementsByName("demo")[0].src = 'images/build.png';
  	c+=1;
  }
  else if(c==1)
  {
  	document.getElementsByName("demo")[0].src = 'images/with.png';
  	c+=1;
  }
  else if(c==2)
  {
  	document.getElementsByName("demo")[0].src = 'images/love.jpg';
  	c+=1;
  }
  else if(c==3)
  {
  	document.getElementsByName("demo")[0].src = 'images/love2.jpg';
  	c+=1;
  }
  else if(c==4)
  {
  	document.getElementsByName("demo")[0].src = 'images/love3.jpeg';
  	c=0;
  }

}

var welcome = ["hello", "name", "shy", "bold"];
var welcome2=0;




