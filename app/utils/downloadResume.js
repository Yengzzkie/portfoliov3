export const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Tech_CV.pdf";
    link.download = "Tech_CV.pdf";
    link.click();
  };