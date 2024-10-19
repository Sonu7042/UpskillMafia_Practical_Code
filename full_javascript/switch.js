const grade = "Z";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Very Good");
    break;

  case "C":
    case "Z":
    console.log("Good");
    break;

  case "D":
    console.log("Nice");
    break;

  default:
    console.log("there is no grade value for it");
}
