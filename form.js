function SaveItem() {
			
	var name = document.forms.feedback.name.value;
	var skill = document.forms.feedback.skill.value;
	var level = document.forms.feedback.level.value;
	var object = {'name':name, 'skill':skill, 'level':level};
	var string = JSON.stringify(object);
	var obj = JSON.parse(string);
    localStorage.setItem(name, string);
	doShowAll();
	
}

function doShowAll() {
	
		var key = "";
		var list = "<tr><th>Name</th><th>Skill</th><th>Level</th></tr>\n";
		var i = 0;
		for (i = 0; i < localStorage.length ; i++) {
			key = localStorage.key(i);
			var retrievedstring = localStorage.getItem(key);
			var obj= JSON.parse(retrievedstring);
		//console.log(obj.name);
		//console.log(obj.skill);
		//console.log(obj.level);
		
			list += "<tr><td>" + obj.name + "</td>\n<td>"
					+ obj.skill + "</td><td>"+ obj.level + "</td></tr>\n";

		}


		if (list == "<tr><th>Name</th><th>Skill</th><th>Level</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	
}
//localStorage.removeItem('on_load_counter');

function like(){ 

n = localStorage.getItem('on_load_counter');
 
if (n === null) {
    n = 0;
}
 
n++;

localStorage.setItem("on_load_counter", n);
	 document.getElementById('text').innerHTML = "BuT OnLy FoR yOu ^_^";
	 document.getElementById('counter').innerHTML = n;

}


//localStorage.clear()

