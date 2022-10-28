var input = document.querySelector("#telephone");
window.intlTelInput(input, {
  initialCountry: "us",
  onlyCountries: ["gb", "us"],
  separateDialCode: true,
});
