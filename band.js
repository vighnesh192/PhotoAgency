var id = '';
function myFunction(id) {
    var value1="value1";
    var value2="value2";
    var queryString = id;
    window.location.href = "form.html" + '?' + queryString;
    console.log('Id', id);
    console.log(document.getElementById("exampleInputEmail1"));
    document.getElementById("exampleInputEmail1").value = 'id';
}