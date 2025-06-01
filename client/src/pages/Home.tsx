import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Travel App</h1>
      
      <div className="flex flex-col gap-4">
        <button className="bg-blue-600 text-white p-3 rounded" onClick={() => navigate('/planner')}>
          Start Planning
        </button>
        <button className="bg-green-600 text-white p-3 rounded" onClick={() => navigate('/budget')}>
          Budget Calculator
        </button>
        <button className="bg-purple-600 text-white p-3 rounded" onClick={() => navigate('/currency')}>
          Currency Converter
        </button>
        <button className="bg-orange-600 text-white p-3 rounded" onClick={() => navigate('/services')}>
          Local Services
        </button>
      </div>
    </div>
  );
};

export default Home;
