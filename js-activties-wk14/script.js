document.getElementById("submitBtn").addEventListener("click", function () {
  let isUserReady = confirm("Are you ready?");
  console.log(isUserReady);

  const output = document.getElementById("output");

  if (isUserReady) {
    alert("User ready!");
    output.style.display = "block";
    output.style.animation = "rainbow 1.5s infinite";
  } else {
    output.style.display = "none";
    output.style.animation = "none";
  }
});