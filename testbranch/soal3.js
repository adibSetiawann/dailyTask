let array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1998", "Membaca"];

function dataHandling2(array) {
  // case 1
  array.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1998", "Pria", "SMA International Metro");
  console.log(array);
  //   case 2
  let day = array[3].slice(0, 2);
  let month = array[3].slice(3, 5);
  let year = array[3].slice(6);

  let birthday = day + " " + month + " " + year;
  let spliting = birthday.split(" ");

  // case 4
  let joining = spliting.join("-");
  console.log(joining);

  switch (month) {
    case "01":
      console.log("January");
      break;
    case "02":
      console.log("February");
      break;
    case "03":
      console.log("March");
      break;
    case "04":
      console.log("April");
      break;
    case "05":
      console.log("Mei");
      break;
    case "06":
      console.log("Juny");
      break;
    default:
      console.log("No value found");
  }

  //  case 3
  let sorting = spliting.sort(function (a, b) {
    return b - a;
  });
  console.log(sorting);
  
  //   last case
  let name = array[1].slice(0, 14);
  console.log(name);
}

dataHandling2(array);
