function teacherOption(teacherName) {
    var x = document.getElementById("teacher-sel");
    var option = document.createElement("option");
    option.text = teacherName;
    option.value = teacherName;
    const options = []
    document.querySelectorAll('#teacher-sel > option').forEach((option) => {
        if (options.includes(option.value)) option.remove()
        else options.push(option.value)
        if (options.length == 0)
            teachers.forEach(teacherOption(t));
    })
    x.add(option);

    console.log("options=" + document.getElementsByTagName("option")[0].value);

}

function clearTeacher() {
    var x = document.getElementById("teacher-sel");
    var option = document.createElement("option");
    x.remove(option);
}

function subjectOption(subName) {
    var x = document.getElementById("subject-sel");
    var option = document.createElement("option");
    option.text = subName;
    option.value = subName;
    x.add(option);
}
var time = ["10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00"];
var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var teachers = ["Newton", "Tesla", "Hook", "Einstein", "Raman"];
var subjects = ["Networks", "Avionics", "Physics", "Astronomy", "Programming"];
subjects.forEach(s => { subjectOption(s) });
var colom;

function setTeacher(cid) {
    document.getElementById("form-space").style.display = "block";
    console.log("cid.id[2]=" + cid.id[2]);
    if ((cid.id[2] == 2 && cid.id[1] == 1) || (cid.id[2] == 3 && cid.id[1] == 1) || (cid.id[2] == 4 && cid.id[1] == 1) || (cid.id[2] == 5 && cid.id[1] == 1) || (cid.id[2] == 6 && cid.id[1] == 1)) {
        teachers = ["Newton", "Tesla", "Hook", "Einstein", "Raman"];
        n = 0, e = 0, t = 0, r = 0;
        console.log("jjja");
    }

    teachers.forEach(t => {
        if (t == "Newton" && n > 1)
            return;
        if (t == "Einstein" && e > 1)
            return;
        if (t == "Tesla" && t > 1)
            return;
        if (t == "Raman" && r > 1)
            return;
        teacherOption(t)
    });
    console.log("cid=" + cid);
    console.log("this.id=" + cid.id);
    // cid.innerHTML = cid.id + "<hr>jjj";
    colom = cid;
    console.log("colomin fn=" + colom);
    var col = cid.id;
    console.log("time=" + col[1]);
    // colom.style.borderColor = "red";
    colom.style.border = "medium solid red";

    switch (col[1]) {
        case '1':
            document.getElementById("hour").value = time[0];
            break;
        case '2':
            document.getElementById("hour").value = time[1];
            break;
        case '3':
            document.getElementById("hour").value = time[2];
            break;
        case '4':
            document.getElementById("hour").value = time[3];
            break;
        case '5':
            document.getElementById("hour").value = time[4];
            break;
    }

    switch (col[2]) {
        case '2':
            document.getElementById("day").value = day[0];
            break;
        case '3':
            document.getElementById("day").value = day[1];
            break;
        case '4':
            document.getElementById("day").value = day[2];
            break;
        case '5':
            document.getElementById("day").value = day[3];
            break;
        case '6':
            document.getElementById("day").value = day[4];
            break;
    }


}

// var teacher = [{
//         name: "Newton",
//         subjects: ["Physics", "Avionics"]
//     },
//     {
//         name: "Raman",
//         subjects: ["Astronomy", "Physics"]
//     },
//     {
//         name: "Einstein",
//         subjects: ["Physics", "Programming"]
//     },
//     {
//         name: "Tesla",
//         subjects: ["Networks", "Avionics"]
//     }

// ];
var n = 0,
    r = 0,
    e = 0,
    t = 0;

function add() {
    console.log("in submit");
    console.log("colm=" + colom.id);
    var teach = document.getElementById("teacher-sel").value;
    if (teach == "Tesla")
        t++;
    if (teach == "Newton")
        n++;
    if (teach == "Einstein")
        e++;
    if (teach == "Raman")
        r++;

    console.log("n=" + n + "e=" + e + "t=" + t + "r=" + r);

    colom.innerHTML = document.getElementById('teacher-sel').value + "<hr>" + document.getElementById('subject-sel').value;
    colom.style.border = "";

    teachers.splice(teachers.indexOf(teach), 1);
    teachers.forEach(t => { clearTeacher() });
    document.getElementById("form-space").style.display = "none";

    // const pushtolocal=()=>{ if(localStorage.getItem('trainers') != null) { localStorage.setItem('trainers',JSON.stringify());   }   else{
    //     localStorage.setItem('trainers',JSON.stringify(trainer)); }}pushtolocal();

}