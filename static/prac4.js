var url = document.URL;
// window.onload = function() { 
//     getTasks();
//      add_row();
// };

$('#submit-btn').click(function(){
   location.reload();
});

function add_row() {
	// body...
	var node = document.createElement("tr");
	node.innerHTML =
	`
        <td><input name="source" type="text" class="form-control" placeholder="source"></td>
        <td><input name="description" type="text" class="form-control" placeholder="Description"></td>
        <td><input name="reportto" type="text" class="form-control" placeholder="Reported To"></td>
        <td><input name="duration" type="text" class="form-control" placeholder="Duration" ></td>
        <td><input name="weightage" type="text" class="form-control" placeholder="Weightage" ></td>
        <td><input name="rating" type="text" class="form-control" placeholder="Rating" ></td>
              `;
    document.getElementById('task_row').appendChild(node);
}

function getData(id){
	//call the database with ID and update the html with data
	
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);e
}

$(document).ready(function() {
    // var id= window.location.search;
    // id= id.slice(3);
    // console.log(id);
    // var url = "/prac4?id="+id;
    // var request = $.ajax({
    //     type: "GET",
    //     url: url,
    //     dataType: "html"
    // });

    // request.done(function(JSON_array) {
    //     array_data = JSON.parse(JSON_array)["array"]
    //     //from here you have your array to play with
    // });
});

function getTasks() {
    var tasks = $("#myTask").attr("data");
    console.log(tasks);
    //var a = JSON.parse(tasks);
    var out = "";
    console.log("tasks"+tasks.length);
    for(var i=0;i<tasks.length;i++){
        var taskRow = tasks[i];
        for(var j=0;j<taskRow.length;j++){
            var source = taskRow[0];
            var reportedTo = taskRow[1];
            var description = taskRow[2];
            var weightage = taskRow[3];
            var duration = taskRow[4];
            var rating = taskRow[5];
            out += '<tr>'+
                '<td><input name="source" type="text" class="form-control" value="'+source+'" readonly="true"></td>'+
                '<td><input name="description" type="text" class="form-control" value="'+description+'" readonly="true"></td>'+
                '<td><input name="reportto" type="text" class="form-control" value="'+reportedTo+'" readonly="true"></td>'+
                '<td><input name="duration" type="text" class="form-control" value="'+duration+'" readonly="true"></td>'+
                '<td><input name="weightage" type="text" class="form-control" value="'+weightage+'" readonly="true"></td>'+
                '<td><input name="rating" type="text" class="form-control" value="'+rating+'" readonly="true"></td>'+
                '</tr>';
            console.log("2");
        }
        console.log("3");
    }
    console.log("4");
    $('#task_row').html(out);
}
