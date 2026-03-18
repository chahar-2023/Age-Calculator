document.getElementById("calculateBtn").addEventListener("click", calculateAge);

function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1;
  const year = parseInt(document.getElementById("year").value);

  const error = document.getElementById("error");
  const result = document.getElementById("result");

  error.textContent = "";
  result.style.display = "none";

  if (!day || month < 0 || !year) {
    error.textContent = "Please enter a valid date of birth.";
    return;
  }

  const birthDate = new Date(year, month, day);
  const today = new Date();

  if (birthDate > today) {
    error.textContent = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.style.display = "block";
  result.innerHTML = `Your Age is <b>${years}</b> years, <b>${months}</b> months, and <b>${days}</b> days.`;
}
