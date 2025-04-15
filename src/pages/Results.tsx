import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Answer {
  questionId: number;
  answer: number;
}

const FloatingHeart: React.FC = () => {
  const style = {
    animation: `float-heart ${3 + Math.random() * 2}s ease-in-out infinite`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`,
  };

  return (
    <div 
      className="absolute bottom-0 text-pink-500 opacity-70 pointer-events-none"
      style={style}
    >
      ❤️
    </div>
  );
};

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [score, setScore] = useState<number>(0);
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const answers = location.state?.answers as Answer[];
    if (!answers) {
      navigate('/');
      return;
    }

    // 计算总分（每个答案1-4分，25题，满分100分）
    const totalScore = answers.reduce((sum, answer) => sum + answer.answer, 0) * 4;
    setScore(totalScore);

    // 生成分析报告
    generateAnalysis(answers, totalScore);

    // 生成随机数量的心形（5-8个）
    setHearts(Array.from({ length: 5 + Math.floor(Math.random() * 4) }, (_, i) => i));
  }, [location, navigate]);

  const generateAnalysis = (answers: Answer[], totalScore: number) => {
    // 分析各个维度的得分
    const dimensions = {
      communication: answers.slice(0, 5).reduce((sum, a) => sum + a.answer, 0) * 4,
      trust: answers.slice(5, 10).reduce((sum, a) => sum + a.answer, 0) * 4,
      emotional: answers.slice(10, 15).reduce((sum, a) => sum + a.answer, 0) * 4,
      conflict: answers.slice(15, 20).reduce((sum, a) => sum + a.answer, 0) * 4,
      future: answers.slice(20, 25).reduce((sum, a) => sum + a.answer, 0) * 4,
    };

    let report = '';

    // 总体评价
    if (totalScore >= 80) {
      report += '哇哦！你是个恋爱高手呢！你的回答显示你非常懂得如何处理感情关系，既懂得表达爱意，又知道如何维护关系。你就像一本行走的恋爱教科书，不仅懂得如何经营感情，还知道如何让爱情保鲜。你的恋爱情商已经达到了相当高的水平，相信你的另一半一定很幸福！';
    } else if (totalScore >= 60) {
      report += '不错哦！你的恋爱智商处于中上水平，对感情有自己的理解和处理方式。你懂得基本的恋爱技巧，知道如何表达爱意，也明白如何维护关系。虽然还有一些提升空间，但你已经走在正确的道路上了。继续加油，相信你会成为一个更优秀的恋人！';
    } else {
      report += '别担心，每个人都在学习和成长。你的回答显示你还需要在感情方面多加学习和实践。这并不意味着你不适合恋爱，而是说明你还有很大的成长空间。记住，恋爱是一门需要不断学习和实践的课程，只要你愿意改变和成长，就一定能找到属于自己的幸福！';
    }

    // 具体维度分析
    report += '\n\n【详细分析报告】\n';
    
    // 沟通能力分析
    if (dimensions.communication >= 16) {
      report += '\n💬 沟通达人：你非常善于表达自己的想法和感受，懂得倾听对方，这是维持健康关系的重要基础。你能够清晰地表达自己的需求，同时也能理解对方的想法。这种双向的沟通方式让你们的感情更加稳固。建议继续保持这种良好的沟通习惯，同时可以尝试一些新的沟通方式，比如写情书、发语音消息等，让沟通更加有趣。';
    } else {
      report += '\n💬 沟通建议：可以多练习表达自己的感受，学会倾听和理解对方的想法。沟通是感情的桥梁，建议你可以：\n1. 每天花10分钟和对方分享当天的感受\n2. 学会使用"我"开头的句子表达感受\n3. 在对方说话时，给予适当的眼神交流和肢体语言\n4. 遇到分歧时，先倾听，再表达\n记住，好的沟通需要练习，不要害怕犯错，重要的是保持真诚。';
    }

    // 信任建立分析
    if (dimensions.trust >= 16) {
      report += '\n🔒 信任专家：你懂得给予对方空间和信任，这是建立稳固关系的关键。你明白信任是感情的基础，不会因为小事就怀疑对方。这种成熟的态度让你们的感情更加稳固。建议继续保持这种信任，同时也要注意保护自己的隐私，在信任和自我保护之间找到平衡。';
    } else {
      report += '\n🔒 信任建议：试着多给彼此一些信任和空间，相信对方也相信自己的选择。建立信任需要时间，建议你可以：\n1. 从小事开始建立信任\n2. 不要过度检查对方的手机或社交账号\n3. 学会处理自己的不安全感\n4. 给对方适当的个人空间\n记住，信任是相互的，需要双方共同努力。';
    }

    // 情感处理分析
    if (dimensions.emotional >= 16) {
      report += '\n❤️ 情感大师：你非常敏感且善于处理情绪，能够很好地理解和支持对方。你懂得如何安抚对方的情绪，也知道如何表达自己的感受。这种情感智慧让你们的感情更加深厚。建议继续保持这种敏感度，同时也要注意不要过度敏感，学会在适当的时候给予对方空间。';
    } else {
      report += '\n❤️ 情感建议：可以多关注自己和对方的情绪变化，学会更好地表达和调节情绪。建议你可以：\n1. 学习识别不同的情绪\n2. 练习用语言描述自己的感受\n3. 学会换位思考\n4. 在对方情绪低落时给予支持\n记住，情绪没有对错，重要的是如何表达和处理。';
    }

    // 冲突解决分析
    if (dimensions.conflict >= 16) {
      report += '\n⚔️ 和解高手：你善于处理冲突，懂得在矛盾中找到平衡点。你明白冲突是感情中不可避免的一部分，重要的是如何解决。你能够冷静地分析问题，找到双方都能接受的解决方案。这种能力让你们的感情更加稳固。建议继续保持这种理性，同时也要注意在解决冲突时照顾对方的感受。';
    } else {
      report += '\n⚔️ 冲突建议：当遇到分歧时，试着冷静下来，寻找双方都能接受的解决方案。建议你可以：\n1. 在冲突发生时先冷静10分钟\n2. 用"我们"而不是"你"来讨论问题\n3. 寻找共同点而不是分歧\n4. 学会妥协和让步\n记住，解决冲突的目标是增进感情，而不是争输赢。';
    }

    // 未来规划分析
    if (dimensions.future >= 16) {
      report += '\n🎯 未来规划师：你对未来有清晰的规划，懂得为关系做长远打算。你不仅考虑当下的幸福，还关注未来的发展。这种前瞻性的思维让你们的感情更加稳固。建议继续保持这种规划意识，同时也要注意不要给自己和对方太大压力，让规划成为增进感情的工具，而不是负担。';
    } else {
      report += '\n🎯 未来建议：可以多思考一下你们共同的未来，制定一些实际可行的计划。建议你可以：\n1. 和对方讨论3-5年的计划\n2. 制定一些短期可实现的目标\n3. 考虑双方的发展需求\n4. 保持计划的灵活性\n记住，规划是为了让生活更好，而不是束缚彼此。';
    }

    // 结尾建议
    report += '\n\n【温馨寄语】\n记住，恋爱是一门需要不断学习和实践的课程。无论得分如何，最重要的是保持真诚和开放的心态，愿意为对方改变和成长。\n\n每段感情都是独特的，没有标准答案。重要的是你们是否愿意为彼此付出，是否愿意一起成长。\n\n希望这份报告能帮助你更好地了解自己，在感情路上越走越顺！💕\n\nPS：如果你觉得这份报告对你有帮助，不妨分享给你的另一半，一起讨论如何让感情更好！';

    setAnalysis(report);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-pink-500">正在生成你的恋爱分析报告...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8 pb-32">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
            你的恋爱情商得分
          </h1>
          
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-pink-500">{score}</div>
            <div className="text-gray-600 mt-2">满分100分</div>
          </div>

          <div className="bg-pink-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">恋爱分析报告</h2>
            <div className="text-gray-700 whitespace-pre-line">
              {analysis}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
          {hearts.map((i) => (
            <FloatingHeart key={i} />
          ))}
          
          <div className="text-center relative z-10">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">
              🌟 解锁更准确的分析 🌟
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              亲爱的测试者，你的支持是我们持续优化算法的动力~ <br/>
              小小心意，让测试更准确哦！💝
            </p>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl shadow-inner mb-6">
              <img
                src="/wechat-pay-qr.png"
                alt="微信赞赏码"
                className="w-48 h-48 mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <p className="animate-pulse text-pink-500">
                💫 打赏后解锁更深度的情感分析 💫
              </p>
              <p>
                你的每一份支持，都是让我们变得更好的动力
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full 
                     hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 
                     shadow-lg hover:shadow-xl"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>
  );
};

// 添加漂浮爱心动画
const styles = `
  @keyframes float-heart {
    0% {
      transform: translateY(0) rotate(0deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg) scale(0.5);
      opacity: 0;
    }
  }
`;

// 将样式添加到文档头部
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Results; 