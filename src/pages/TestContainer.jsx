import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../data/chapters';
import { Clock, AlertCircle } from 'lucide-react';

export default function TestContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const chapter = chapters.find(c => c.id === parseInt(id));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(50 * 60); // 50 mins
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!chapter) {
      navigate('/');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishTest(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter, score]);

  if (!chapter) return null;

  const currentQuestion = chapter.questions[currentIndex];

  const handleOptionSelect = (option) => {
    if (selectedOption || isFinished) return; // Prevent multiple clicks
    
    setSelectedOption(option);
    
    let newScore = score;
    if (option === currentQuestion.answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    setTimeout(() => {
      if (currentIndex < chapter.questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        finishTest(newScore);
      }
    }, 600); // Wait bit to show selection
  };

  function finishTest(finalScore) {
    setIsFinished(true);
    // Save to local storage
    const storedScores = JSON.parse(localStorage.getItem('testmaster_scores') || '{}');
    
    // Only update if the new score is better or first time
    if (!storedScores[chapter.id] || finalScore > storedScores[chapter.id]) {
      storedScores[chapter.id] = finalScore;
      localStorage.setItem('testmaster_scores', JSON.stringify(storedScores));
    }
    
    navigate('/result', { 
      state: { score: finalScore, total: chapter.questions.length, chapterId: chapter.id },
      replace: true // Prevent going back
    });
  }

  // Format time
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen p-4 md:p-8 relative flex flex-col">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-background to-purple-950/20 z-0" />
      
      {/* Header Bar */}
      <header className="relative z-10 w-full max-w-4xl mx-auto flex justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 glass-card">
        <div className="font-semibold text-lg text-primary truncate max-w-[50%]">
          {chapter.title}
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-rose-400 bg-rose-500/10 px-4 py-2 rounded-xl font-mono text-lg">
            <Clock className="w-5 h-5" />
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
          <div className="text-gray-400 font-medium">
            <span className="text-white text-xl">{currentIndex + 1}</span> / {chapter.questions.length}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto h-2 bg-white/5 rounded-full overflow-hidden mb-12">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex) / chapter.questions.length) * 100}%` }}
          className="h-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>

      {/* Question Container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start w-full max-w-3xl mx-auto pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full glass-card p-8 md:p-12 rounded-[2.5rem]"
          >
            <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-10 leading-relaxed text-white text-center">
              {currentQuestion.question}
            </h2>

            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                // Once an option is selected, we could show right/wrong visually, 
                // but standard tests often just highlight what you picked.
                // If it's a practice test, we might show correct answer too.
                // Let's just highlight what they picked to match "highlight selected option".
                const isCorrect = isSelected && option === currentQuestion.answer;
                const isWrong = isSelected && option !== currentQuestion.answer;

                let optionClass = "bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 text-gray-200";
                
                if (isSelected) {
                  optionClass = isCorrect 
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-100" 
                    : "bg-primary/30 border-primary text-white"; // Treat as just 'selected' per requirements
                }

                return (
                  <motion.button
                    key={idx}
                    whileHover={!selectedOption ? { scale: 1.01 } : {}}
                    whileTap={!selectedOption ? { scale: 0.98 } : {}}
                    onClick={() => handleOptionSelect(option)}
                    disabled={!!selectedOption}
                    className={`w-full p-5 rounded-2xl text-left text-lg transition-all duration-300 font-medium ${optionClass}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-lg bg-black/30 flex items-center justify-center text-sm font-bold opacity-70">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {option}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Anti-cheat Disclaimer */}
      <div className="relative z-10 mt-auto pt-8 text-center text-gray-500 text-sm flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4" />
        Do not refresh or navigate away. Progress will be lost.
      </div>
    </div>
  );
}
