let rNum;

function randomizer() {
  rNum = Math.floor(Math.random() * 7) + 1;
  console.log(rNum);

  switch (rNum) {
    case 1:
      document.body.style.backgroundColor = "yellow";
      break;
    case 2:
      document.body.style.backgroundColor = "red";
      break;
    case 3:
      document.body.style.backgroundColor = "green";
      break;
    case 4:
      document.body.style.backgroundColor = "blue";
      break;
    case 5:
      document.body.style.backgroundColor = "black";
      break;
    case 6:
      document.body.style.backgroundColor = "orange";
      break;
    case 7:
      document.body.style.backgroundColor = "pink";
      break;
    default:
      alert("Something went wrong !");
      break;
  }

  return rNum;
}
