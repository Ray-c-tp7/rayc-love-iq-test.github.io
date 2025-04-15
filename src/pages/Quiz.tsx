import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; answer: number }[]>([]);

  const questions: Question[] = [
    {
      id: 0,
      text: "你对伴侣的情绪变化是否敏感？",
      options: ["完全不敏感", "偶尔能察觉", "经常能察觉", "非常敏锐"]
    },
    {
      id: 1,
      text: "当你和伴侣发生争执时，你通常怎么处理？",
      options: ["忽略对方", "冷战几天", "主动沟通", "设法一起解决问题"]
    },
    {
      id: 2,
      text: "你如何看待伴侣的异性朋友？",
      options: ["完全不能接受", "需要报备", "可以接受但要保持距离", "完全信任"]
    },
    {
      id: 3,
      text: "当伴侣遇到困难时，你会怎么做？",
      options: ["让他自己解决", "给予建议", "陪伴并支持", "主动帮助解决问题"]
    },
    {
      id: 4,
      text: "你如何处理与伴侣的金钱关系？",
      options: ["完全分开", "AA制", "互相分担", "共同管理"]
    },
    {
      id: 5,
      text: "你如何看待伴侣的过去？",
      options: ["非常在意", "偶尔会想起", "理解但不纠结", "完全接受"]
    },
    {
      id: 6,
      text: "当伴侣需要个人空间时，你会？",
      options: ["感到不安", "勉强接受", "理解支持", "主动给予空间"]
    },
    {
      id: 7,
      text: "你如何表达对伴侣的爱意？",
      options: ["很少表达", "偶尔表达", "经常表达", "用各种方式表达"]
    },
    {
      id: 8,
      text: "你如何处理与伴侣家人的关系？",
      options: ["保持距离", "礼貌相处", "主动关心", "像对待自己家人一样"]
    },
    {
      id: 9,
      text: "当伴侣犯错时，你会？",
      options: ["严厉批评", "指出错误", "理解包容", "一起分析原因"]
    },
    {
      id: 10,
      text: "你如何看待伴侣的缺点？",
      options: ["难以接受", "勉强忍受", "理解包容", "接受并帮助改进"]
    },
    {
      id: 11,
      text: "你如何处理与伴侣的未来规划？",
      options: ["各自规划", "偶尔讨论", "共同规划", "详细规划并执行"]
    },
    {
      id: 12,
      text: "当伴侣情绪低落时，你会？",
      options: ["不知所措", "简单安慰", "耐心倾听", "给予全方位支持"]
    },
    {
      id: 13,
      text: "你如何看待伴侣的社交圈？",
      options: ["限制交往", "了解但不干涉", "支持并参与", "完全融入"]
    },
    {
      id: 14,
      text: "你如何处理与伴侣的价值观差异？",
      options: ["坚持己见", "偶尔妥协", "互相理解", "寻找共同点"]
    },
    {
      id: 15,
      text: "当伴侣需要帮助时，你会？",
      options: ["看情况而定", "力所能及地帮助", "尽力帮助", "无条件支持"]
    },
    {
      id: 16,
      text: "你如何看待伴侣的隐私？",
      options: ["需要完全透明", "可以保留部分", "尊重隐私", "完全信任"]
    },
    {
      id: 17,
      text: "你如何处理与伴侣的日常矛盾？",
      options: ["冷战", "争论", "沟通解决", "理性分析"]
    },
    {
      id: 18,
      text: "你如何看待伴侣的成长？",
      options: ["不太关心", "偶尔关注", "支持鼓励", "共同进步"]
    },
    {
      id: 19,
      text: "当伴侣需要建议时，你会？",
      options: ["直接给出答案", "提供参考意见", "分析利弊", "引导思考"]
    },
    {
      id: 20,
      text: "你如何处理与伴侣的信任问题？",
      options: ["经常怀疑", "偶尔担心", "基本信任", "完全信任"]
    },
    {
      id: 21,
      text: "你如何看待伴侣的爱好？",
      options: ["不感兴趣", "偶尔参与", "支持鼓励", "共同培养"]
    },
    {
      id: 22,
      text: "当伴侣需要安慰时，你会？",
      options: ["不知如何安慰", "简单安慰", "耐心倾听", "给予全方位支持"]
    },
    {
      id: 23,
      text: "你如何处理与伴侣的沟通？",
      options: ["很少沟通", "有事才沟通", "经常沟通", "保持良好沟通"]
    },
    {
      id: 24,
      text: "你如何看待与伴侣的长期关系？",
      options: ["顺其自然", "走一步看一步", "认真经营", "用心维护"]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, { questionId: currentQuestion, answer: answerIndex + 1 }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results', { state: { answers: newAnswers } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            问题 {currentQuestion + 1} / {questions.length}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-pink-500 h-2.5 rounded-full"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          {questions[currentQuestion].text}
        </h2>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-left bg-white border border-pink-200 rounded-xl
                       hover:bg-pink-50 hover:border-pink-300 transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 