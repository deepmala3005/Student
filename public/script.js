function displayColleges() {
    fetch("http://localhost:3000/api/colleges", {method : "GET"})
    .then(function(response){
        return response.json();
    }).then(function(data){
        var bodyRows = "";
        console.log(data);

        for(var i=0;i<data.length;i++){
            bodyRows += "<tr>";
            bodyRows += "<td>" + data[i].name + "</td>";
            bodyRows += "</tr>"; 

        }
        console.log(bodyRows);

        document.getElementById("collegeList").innerHTML = bodyRows;
    });
}

function addCollege() {
    var college = document.getElementById('college').value;
    var college_name = {
        name : college
    };

    console.log(college);

    fetch("http://localhost:3000/api/colleges", 
    { method : "POST",
        headers :{
          "Content-Type" : "application/json" 
        },
          body : JSON.stringify(college_name)
}).then(function(response) {
    if(response.status == 200){
        window.location = "collegelist.html";
    }
});
}

function fun() {
    // console.log("table loaded");
    fetch("http://localhost:3000/api/students", {method : "GET"})
    .then(function(response){
        return response.json();
    }).then(function(data){

        var bodyRows = "";
        console.log(data);

        for(var i=0;i<data.length;i++){
            bodyRows += "<tr>";
            bodyRows += "<td>" + "<a href = 'details,html?id=>" +
                          data[i]._id + "'>" + data[i].name + "</a>" + "</td>";
            bodyRows += "<td>" + data[i].reg_no +"</td>";
            bodyRows += "<td>" + data[i].email +"</td>";
            bodyRows += "<td>" + data[i].college_id +"</td>";
            bodyRows += "</tr>";

        }
        console.log(bodyRows);

        document.getElementById('table').innerHTML = bodyRows;
    });
}

function userform() {
    // console.log("hello");
    
}

function discolleges() {
    var form = document.getElementById("form");
    var dropdown = form.college;

    fetch("http://localhost:3000/api/colleges", {method : "GET"})
    .then(function(response){
        return response.json();
    }).then(function(data) {
        var options ="";
        for(var i=0;i<data.length;i++) {
            options += "<option value=" + data[i]._id + ">" +
            data[i].name + "</option>";
        }
        console.log(options);
        dropdown.innerHTML = options;
    });
}

function studentDetail() {
    var url = new URL(window.location.href);
    console.log(url);
    var id = url.searchParams.get("id");
    console.log(id);

    // fetch("http://localhost:3000/api/students/" + id, { method: "GET" })
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(data) {
    //     console.log(data);
    //     var display =
    //       "<p>Name :" +
    //       data.name +
    //       "</p>" +
    //       "<p>Reg No :" +
    //       data.reg_no +
    //       "</p>" +
    //       "<p>Email :" +
    //       data.email +
    //       "</p>" +
    //       "<p>College :" +
    //       data.college_id +
    //       "</p>" +
    //       "<button class='btn btn-primary' onclick='deleteStudent(\"" +
    //       data._id +
    //       "\")'>Delete</button>";

    //     document.getElementById("details").innerHTML = display;
    //   });
}

function deleteStudent(id) {}