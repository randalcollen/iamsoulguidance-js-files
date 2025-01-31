const jsonUrl = "https://dynamic-assets-27hrt96el-randal-collens-projects.vercel.app/mp3_intake_questions/index.json";

fetch(jsonUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched Data:", data);
    displayData(data);
  })
  .catch((error) => console.error("Error fetching JSON:", error));

function displayData(data) {
  const container = document.getElementById("audioList");
  data.questions.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.id}: ${item.file}`;
    container.appendChild(listItem);
  });
}
