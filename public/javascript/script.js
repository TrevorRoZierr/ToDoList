document.addEventListener("DOMContentLoaded", function () {
  var checkBtn = document.getElementById("checkBtn");

  if (checkBtn) {
    checkBtn.addEventListener("click", function () {
      fetch("/clearItems", {
        method: "POST",
      })
        .then(function (response) {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("Failed to clear items");
          }
        })
        .then(function (data) {
          console.log(data);
          location.reload();
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  }
});