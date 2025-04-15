import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 relative overflow-hidden">
      {/* 背景爱心动画 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-6 animate-bounce">
          测测你的恋爱情商
        </h1>
        <p className="text-2xl text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          你真的懂爱情吗？25个问题揭示你的恋爱智商。
          <br />
          <span className="text-pink-500">❤️ 发现更好的自己 ❤️</span>
        </p>
        <button
          onClick={() => navigate('/quiz')}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full 
                   hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 
                   shadow-lg hover:shadow-xl text-xl font-semibold"
        >
          开始测试
        </button>
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-100 to-transparent"></div>
    </div>
  );
};

export default Home; 