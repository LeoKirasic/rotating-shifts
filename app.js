function generateSchedule(startDate, numMonths) {
    // Define the rotation pattern
    const rotation = ["morning", "morning", "day", "day", "night", "night", "off"];
    const schedule = {};
    let currentDate = moment(startDate);
    for (let i = 0; i < numMonths; i++) {
        const month = currentDate.month();
        const year = currentDate.year();
        const daysInMonth = moment([year, month]).daysInMonth();
        for (let j = 0; j < daysInMonth; j++) {
            schedule[currentDate.format("dddd, MMMM DD YYYY")] = rotation[j % 7];
            currentDate.add(1, "days");
        }
    }
    let formattedSchedule = "";
    for (const [date, shift] of Object.entries(schedule)) {
      formattedSchedule += `${date}: ${shift}\n`;
    }
    return formattedSchedule;
  }

const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", () => {
  const startDate = document.getElementById("start-date").value;
  const numMonths = document.getElementById("months").value;

    if(startDate === "" || numMonths === "") {
    alert("Please enter a start date and number of months.");
    } else {
        const schedule = generateSchedule(startDate, numMonths);
        document.getElementById("schedule").innerText = schedule;
    }
});
