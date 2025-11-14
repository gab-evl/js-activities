document.getElementById("submitBtn").addEventListener("click", function () {
  let isUserReady = confirm("Are you ready?");
  console.log(isUserReady); // fixed typo

  if (isUserReady) {
    alert("User ready!");
    document.getElementById("output").style.display = "block"; // show the message
  } else {
    document.getElementById("output").style.display = "none"; // hide if not ready
  }
});