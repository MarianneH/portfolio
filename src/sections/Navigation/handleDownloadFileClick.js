export function handleDownloadFileClick() {
  console.log("hi");
  fetch("CV_MarianneHelbig.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "CV_MarianneHelbig.pdf";
      alink.click();
    });
  });
}
