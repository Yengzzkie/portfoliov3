export const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/manuel-gatchalian-fullstack-developer-nextjs.pdf";
    link.download = "manuel-gatchalian-fullstack-developer-nextjs.pdf";
    link.click();
  };