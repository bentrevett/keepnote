document.addEventListener('DOMContentLoaded', function(){

		document.getElementById('submit_form').addEventListener("submit", function() {
    	var list = document.getElementById('notes');
    	var content = document.getElementById('submit_text').value;
    	var entry = document.createElement('li');
    	entry.appendChild(document.createTextNode(content));
    	entry.onclick = function() {this.parentNode.removeChild(this);}
    	list.appendChild(entry);
	});
});