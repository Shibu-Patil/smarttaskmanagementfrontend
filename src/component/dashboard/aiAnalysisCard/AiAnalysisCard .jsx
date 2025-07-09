import React from 'react';

const AiAnalysisCard = ({ report:{report} }) => {
  if (!report) return null;


  const cleanedReport = report
    .split('\n')
    .filter(line => !line.toLowerCase().includes('let me know'))
    .join('\n');

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 mt-6 text-gray-800">
      <h2 className="text-2xl font-bold text-indigo-600">📋 AI-Generated Task Insight</h2>

      {typeof cleanedReport === 'string' ? (
        cleanedReport.split('---').map((section, index) => {
          const lines = section.trim().split('\n').filter(Boolean);
          const title = lines[0];
          const content = lines.slice(1);

          return (
            <div key={index} className="border-l-4 border-indigo-400 pl-4 py-2">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              {content.map((line, i) => (
                <p key={i} className="ml-2 text-sm leading-6">
                  {line.trim()}
                </p>
              ))}
            </div>
          );
        })
      ) : (
        <p className="text-red-600">Invalid report format received.</p>
      )}
    </div>
  );
};

export default AiAnalysisCard;
