

import React, { useContext, useEffect, useState } from 'react';
import TaskStatsChart from './TaskStatsChart';
import services from '../../services/service';
import { contextApi } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import AiAnalysisCard from '../aiAnalysisCard/AiAnalysisCard ';


const Home = () => {
  const [stats, setStats] = useState(null);
  const [aiReport, setAiReport] = useState('');
  const [showLoad, setShowLoad] = useState(false);

  const { globalState } = useContext(contextApi);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (globalState.LoggedUserRole === 'user') {
      if (globalState.token) {
        navigate('userTask');
      } else {
        navigate('/');
      }
    }
  }, [globalState]);


  useEffect(() => {
    (async () => {
      let data = await services.generateRepo(globalState.token);
      setStats(data.data);
    })();
  }, []);


  const handleButtonClick = async () => {
    setShowLoad(true);
    let data = await services.generateAiRepo(globalState.token);
    if (data.status === 200) {
      setAiReport(data.data);
    }
    setShowLoad(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col gap-4 p-4">
      <TaskStatsChart stats={stats} />

      <button
        className="relative w-[300px] h-[40px] rounded-xl overflow-hidden bg-transparent group"
        onClick={handleButtonClick}
      >
        <span className="absolute inset-0 z-0 pointer-events-none">
          <span className="absolute inset-[-4px] rounded-[20px] bg-[conic-gradient(from_0deg,_red,_orange,_yellow,_lime,_cyan,_blue,_magenta,_red)] group-hover:[animation:spin_2s_linear_infinite]"></span>
          <span className="absolute inset-[2px] rounded-[16px] bg-[#1f2937] z-10"></span>
        </span>
        <span className="relative z-20 text-white font-semibold">Generate Report</span>
        {showLoad && (
          <span className="w-5 h-5 z-20 relative inline-block left-7 top-1 rounded-full border-t-4 border-t-blue-400 border-4 border-transparent animate-spin"></span>
        )}
      </button>

      <AiAnalysisCard report={aiReport} />
    </div>
  );
};

export default Home;
