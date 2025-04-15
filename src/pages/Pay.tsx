import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pay: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            推荐使用微信支付
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            支付 9.9 元解锁完整分析报告
          </p>
          <p className="text-sm text-gray-500">
            包含个性化建议和详细改进方向
          </p>
        </div>

        <div className="flex flex-col items-center mb-8">
          {/* 绿色渐变背景卡片 */}
          <div className="bg-gradient-to-b from-green-500 to-green-600 p-8 rounded-2xl shadow-lg mb-6 w-full max-w-md">
            <div className="bg-white p-6 rounded-xl shadow-inner">
              <img
                src="/wechat-qr.jpg"  // 将你的收款码图片放在 public 文件夹下并命名为 wechat-qr.jpg
                alt="微信支付二维码"
                className="w-full max-w-[300px] mx-auto"
              />
            </div>
            <p className="text-white text-center mt-4 text-lg font-medium">
              RayC(**海)
            </p>
          </div>

          {/* 微信支付图标和文字 */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#07C160"/>
              <path d="M16 9.5C16 7.567 14.433 6 12.5 6C10.567 6 9 7.567 9 9.5C9 11.433 10.567 13 12.5 13C14.433 13 16 11.433 16 9.5Z" fill="white"/>
              <path d="M7.5 15C7.5 16.933 9.067 18.5 11 18.5C12.933 18.5 14.5 16.933 14.5 15C14.5 13.067 12.933 11.5 11 11.5C9.067 11.5 7.5 13.067 7.5 15Z" fill="white"/>
            </svg>
            <span className="text-green-600 font-medium">微信支付</span>
          </div>

          <p className="text-gray-500 text-center text-sm">
            请使用微信扫描上方二维码支付
          </p>
        </div>

        <div className="text-center space-y-4">
          <button
            onClick={() => navigate('/results')}
            className="px-8 py-3 bg-green-500 text-white rounded-full 
                     hover:bg-green-600 transition-all transform hover:scale-105 
                     shadow-lg hover:shadow-xl text-lg font-medium"
          >
            已完成支付
          </button>
          
          <div className="text-sm text-gray-500">
            <p>支付完成后点击上方按钮查看报告</p>
            <p className="mt-2">如遇问题请添加客服微信：RayC(**海)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay; 