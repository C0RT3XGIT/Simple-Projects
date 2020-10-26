let step;
let value = document.getElementById("label").innerHTML;
function action(step) {
  console.log(document.getElementById("label").innerHTML);
  if (step === "inc") {
    document.getElementById("label").innerHTML++;
  } else if (step === "dec" && document.getElementById("label").innerHTML > 1) {
    document.getElementById("label").innerHTML--;
  }
}
