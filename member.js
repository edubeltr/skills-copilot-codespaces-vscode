function skillsMember() {
    var member = document.getElementById("member").value;
    var member = parseInt(member);
    if (member == 1) {
        document.getElementById("skills").style.display = "block";
    } else {
        document.getElementById("skills").style.display = "none";
    }
}
