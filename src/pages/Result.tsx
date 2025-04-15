import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const score = Math.floor(Math.random() * 101); // 随机生成0-100的分数

  const getAdvice = (score: number) => {
    if (score < 40) {
      return "你的恋商还有很大的提升空间。建议多关注伴侣的情感需求，学习有效沟通技巧，培养共情能力。";
    } else if (score < 70) {
      return "你的恋商处于中等水平。继续保持对伴侣的关心，同时可以尝试更多情感表达方式。";
    } else {
      return "恭喜你！你的恋商很高。你善于理解伴侣，懂得经营感情，继续保持这种状态。";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-6">测试结果</h2>
        <div className="text-center mb-8">
          <p className="text-4xl font-bold text-pink-500 mb-4">
            你的恋商得分是：{score}分
          </p>
          <p className="text-lg text-gray-700">{getAdvice(score)}</p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-full p-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          返回首页
        </button>
      </div>
    </div>
  );
};

export default Result; 