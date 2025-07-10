// import React from 'react';

// const AiAnalysisCard = ({ report:{report} }) => {
//   if (!report) return null;


//   const cleanedReport = report
//     .split('\n')
//     .filter(line => !line.toLowerCase().includes('let me know'))
//     .join('\n');

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 mt-6 text-gray-800">
//       <h2 className="text-2xl font-bold text-indigo-600">📋 AI-Generated Task Insight</h2>

//       {typeof cleanedReport === 'string' ? (
//         cleanedReport.split('---').map((section, index) => {
//           const lines = section.trim().split('\n').filter(Boolean);
//           const title = lines[0];
//           const content = lines.slice(1);

//           return (
//             <div key={index} className="border-l-4 border-indigo-400 pl-4 py-2">
//               <h3 className="text-lg font-semibold mb-2">{title}</h3>
//               {content.map((line, i) => (
//                 <p key={i} className="ml-2 text-sm leading-6">
//                   {line.trim()}
//                 </p>
//               ))}
//             </div>
//           );
//         })
//       ) : (
//         <p className="text-red-600">Invalid report format received.</p>
//       )}
//     </div>
//   );
// };

// export default AiAnalysisCard;




// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { FaRobot, FaDownload } from 'react-icons/fa';

// const AiAnalysisCard = ({ report: { report } }) => {
//   const reportRef = useRef(null);

//   if (!report) return null;

//   const cleanedReport = report
//     .split('\n')
//     .filter(line => !line.toLowerCase().includes('let me know'))
//     .join('\n');

//   const handleDownloadPDF = async () => {
//     const input = reportRef.current;
//     const canvas = await html2canvas(input);
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save('task-insight-report.pdf');
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 mt-6 text-gray-800">
//       <div ref={reportRef}>
//         <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
//           <FaRobot className="text-indigo-500" />
//           AI-Generated Task Insight
//         </h2>

//         {typeof cleanedReport === 'string' ? (
//           cleanedReport.split('---').map((section, index) => {
//             const lines = section.trim().split('\n').filter(Boolean);
//             const title = lines[0];
//             const content = lines.slice(1);

//             return (
//               <div key={index} className="border-l-4 border-indigo-400 pl-4 py-2">
//                 <h3 className="text-lg font-semibold mb-2">{title}</h3>
//                 {content.map((line, i) => (
//                   <p key={i} className="ml-2 text-sm leading-6">
//                     {line.trim()}
//                   </p>
//                 ))}
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-red-600">Invalid report format received.</p>
//         )}
//       </div>

//       <button
//         onClick={handleDownloadPDF}
//         className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//       >
//         <FaDownload />
//         Download as PDF
//       </button>
//     </div>
//   );
// };

// export default AiAnalysisCard;


// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { FaRobot, FaFilePdf } from 'react-icons/fa';

// const AiAnalysisCard = ({ report: { report } }) => {
//   const reportRef = useRef(null);

//   if (!report) return null;

//   const cleanedReport = report
//     .split('\n')
//     .filter(line => !line.toLowerCase().includes('let me know'))
//     .join('\n');

//   const removeUnsupportedColors = (element) => {
//     const allElements = element.querySelectorAll('*');
//     allElements.forEach(el => {
//       const computed = getComputedStyle(el);
//       ['color', 'backgroundColor', 'borderColor'].forEach(prop => {
//         const value = computed[prop];
//         if (value.includes('oklch')) {
//           el.style[prop] = '#000'; // fallback to black
//         }
//       });
//     });
//   };

//   const handleDownloadPDF = async () => {
//     const input = reportRef.current;

//     // Fix: Replace unsupported oklch colors before rendering
//     removeUnsupportedColors(input);

//     const canvas = await html2canvas(input);
//     const imgData = canvas.toDataURL('image/png');

//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save('task-insight-report.pdf');
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 mt-6 text-gray-800">
//       <div ref={reportRef}>
//         <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
//           <FaRobot className="text-indigo-500" />
//           AI-Generated Task Insight
//         </h2>

//         {typeof cleanedReport === 'string' ? (
//           cleanedReport.split('---').map((section, index) => {
//             const lines = section.trim().split('\n').filter(Boolean);
//             const title = lines[0];
//             const content = lines.slice(1);

//             return (
//               <div key={index} className="border-l-4 border-indigo-400 pl-4 py-2 mt-4">
//                 <h3 className="text-lg font-semibold mb-2">{title}</h3>
//                 {content.map((line, i) => (
//                   <p key={i} className="ml-2 text-sm leading-6">
//                     {line.trim()}
//                   </p>
//                 ))}
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-red-600">Invalid report format received.</p>
//         )}
//       </div>

//       <button
//         onClick={handleDownloadPDF}
//         className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//       >
//         <FaFilePdf />
//         Download as PDF
//       </button>
//     </div>
//   );
// };

// export default AiAnalysisCard;


// import React from 'react';
// import jsPDF from 'jspdf';
// import { FaRobot, FaFilePdf } from 'react-icons/fa';

// const AiAnalysisCard = ({ report: { report } }) => {
//   if (!report) return null;

//   // Remove lines like: "Let me know if you need further analysis"
//   const cleanedReport = report
//     .split('\n')
//     .filter(line => !line.toLowerCase().includes('let me know'))
//     .join('\n');

//   const handleDownloadPDF = () => {
//     const pdf = new jsPDF();
//     const lines = cleanedReport.split('\n');

//     let y = 10;
//     pdf.setFont('helvetica', 'normal');
//     pdf.setFontSize(12);

//     lines.forEach((line, index) => {
//       if (y > 280) {
//         pdf.addPage();
//         y = 10;
//       }

//       pdf.text(line, 10, y);
//       y += 8;
//     });

//     pdf.save('task-insight-report.pdf');
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 mt-6 text-gray-800">
//       <div>
//         <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
//           <FaRobot className="text-indigo-500" />
//           AI-Generated Task Insight
//         </h2>

//         {typeof cleanedReport === 'string' ? (
//           cleanedReport.split('---').map((section, index) => {
//             const lines = section.trim().split('\n').filter(Boolean);
//             const title = lines[0];
//             const content = lines.slice(1);

//             return (
//               <div key={index} className="border-l-4 border-indigo-400 pl-4 py-2 mt-4">
//                 <h3 className="text-lg font-semibold mb-2">{title}</h3>
//                 {content.map((line, i) => (
//                   <p key={i} className="ml-2 text-sm leading-6">
//                     {line.trim()}
//                   </p>
//                 ))}
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-red-600">Invalid report format received.</p>
//         )}
//       </div>

//       <button
//         onClick={handleDownloadPDF}
//         className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//       >
//         <FaFilePdf />
//         Download as PDF
//       </button>
//     </div>
//   );
// };

// export default AiAnalysisCard;


import React from 'react';
import jsPDF from 'jspdf';
import { FaRobot, FaFilePdf } from 'react-icons/fa';


const stripEmojis = (text) =>
  text.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|\uFE0F)/g,
    ''
  );

const AiAnalysisCard = ({ report: { report } }) => {
  if (!report) return null;


  const cleanedReport = report
    .split('\n')
    .filter(line => !line.toLowerCase().includes('let me know'))
    .join('\n');

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    const lines = stripEmojis(cleanedReport).split('\n');

    let y = 10;
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);

    lines.forEach((line) => {
      if (y > 280) {
        pdf.addPage();
        y = 10;
      }
      pdf.text(line, 10, y);
      y += 8;
    });

    pdf.save('task-insight-report.pdf');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 mt-6 text-gray-800">
      <div>
        <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
          <FaRobot className="text-indigo-500" />
          AI-Generated Task Insight
        </h2>

        {typeof cleanedReport === 'string' ? (
          cleanedReport.split('---').map((section, index) => {
            const lines = section.trim().split('\n').filter(Boolean);
            const title = lines[0];
            const content = lines.slice(1);

            return (
              <div key={index} className="border-l-4 border-indigo-400 pl-4 py-2 mt-4">
                <h3 className="text-lg font-semibold mb-2">{stripEmojis(title)}</h3>
                {content.map((line, i) => (
                  <p key={i} className="ml-2 text-sm leading-6">
                    {stripEmojis(line.trim())}
                  </p>
                ))}
              </div>
            );
          })
        ) : (
          <p className="text-red-600">Invalid report format received.</p>
        )}
      </div>

      <button
        onClick={handleDownloadPDF}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        <FaFilePdf />
        Download as PDF
      </button>
    </div>
  );
};

export default AiAnalysisCard;
