// Roblox Variables
var baseURL = "roblox-api-server.herokuapp.com";

$('#roblox_Submit').on("click", function() {
  var username = $('#roblox_Username').val();
  var rank = $('#roblox_Rank').val();
  var groupID = $('#roblox_Group').val();
  var postURL = "https://" + baseURL + "/setRank/" + groupID + "/" + username + "/" + rank;
  console.log(postURL);
  $.post({
    url: postURL,
    success: function () {
      console.log("Success");
    },
    dataType: "jsonp"
  });
  // $.ajax({
  //   url: postURL,
  //   dataType: dataType,
  //   method: 'POST',
  // }).done (function () {
  //   console.log('success');
  // });

});



// var usernamesetter = $("#username");
// var emailsetter = $("#email");
// var dobsetter = $("#dob");
// var picture;
// var userID = $("#userID");
//
//
// function encodeImageFileAsURL(cb) {
//   return function(){
//     var file = this.files[0];
//     var reader  = new FileReader();
//     reader.onloadend = function () {
//       cb(reader.result);
//     }
//     reader.readAsDataURL(file);
//   }
// }
//
// $('#inputFileToLoad').change(encodeImageFileAsURL(function(base64Img){
//   picture = base64Img;
// }));
//
//
//
// $("#submit").on("click", function() {
//   // Local Variables
//   var firebaseRef = firebase.database();
//   var user = usernamesetter.val();
//   var email = emailsetter.val();
//   var dob = dobsetter.val();
//   var checker = "False";
//   var dataimage = picture;
//
//   // This function creates the key and stores it in the Firebase database
//   firebaseRef.ref('/Users').child(user).set({
//     username: user,
//     email: email,
//     dob: dob,
//     admin: checker,
//     pic: dataimage
//   });
//   console.log("User: " + user);
//   console.log("Email: " + email);
//   console.log("Admin: " + checker);
//   console.log("Data Image is: " + dataimage);
//   alert(dataimage);
// });
//
//
// $("#searchUser").on("click", function() {
//   var user = userID.val();
//   var firebaseUserRef = firebase.database().ref('Users/' + user);
//
//   firebaseUserRef.on('value', function(snapshot) {
//     var username = snapshot.child("username").val();
//     var email = snapshot.child("email").val();
//     var dob = snapshot.child("dob").val();
//     var admin = snapshot.child("admin").val();
//     var pic = snapshot.child("pic").val();
//     var adminChecker;
//
//     if (admin == "False") {
//       adminChecker = "Nope, sorry.";
//     } else if (admin == "True") {
//       adminChecker = "Yes, you are!";
//     }
//
//
//     $("#searchedUser").html("Username: " + username);
//     $("#searchedEmail").html("Email: " + email);
//     $("#searchedDob").html("Date of Birth: " + dob);
//     $("#admin").html("Admin: " + adminChecker);
//     $("#searchedPic").html("Data Image: " + pic);
//     $("#searchedImg").attr("src", pic);
//     $("#info").css("display", "block");
//   });
// });
