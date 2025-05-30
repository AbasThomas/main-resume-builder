import html2pdf from 'html2pdf.js';

const handleExportPDF = () => {
  const element = document.getElementById('resume-to-print');
  html2pdf()
    .from(element)
    .set({
      filename: 'my_resume.pdf',
      margin: 0.5,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    })
    .save();
};
