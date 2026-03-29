import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, BookOpen, Star, AlertTriangle, Home } from 'lucide-react';
import { chapters } from '../data/chapters';
import confetti from 'canvas-confetti';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  // Fallback to dashboard if no state (e.g. direct URL visit)
  useEffect(() => {
    if (!location.state) {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  if (!location.state) {
    return null;
  }

  const { score, total, chapterId } = location.state;
  const percentage = Math.round((score / total) * 100);
  const chapter = chapters.find(c => c.id === chapterId);

  let feedback = '';
  let colorClass = '';
  let Icon = Trophy;

  if (percentage >= 80) {
    feedback = 'Excellent';
    colorClass = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    Icon = Trophy;
  } else if (percentage >= 50) {
    feedback = 'Good';
    colorClass = 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    Icon = Star;
  } else {
    feedback = 'Needs Improvement';
    colorClass = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    Icon = AlertTriangle;
  }

  // Trigger confetti if excellent
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (percentage >= 80 && !showConfetti) {
      setShowConfetti(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#3b82f6', '#10b981']
      });
    }
  }, [percentage, showConfetti]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic Background based on result */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-background ${
        percentage >= 80 ? 'to-emerald-950/20' : 
        percentage >= 50 ? 'to-blue-950/20' : 'to-amber-950/20'
      } z-0`} />
      
      {/* Background Orbs */}
      <div className={`absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${
        percentage >= 80 ? 'bg-emerald-500/10' : 
        percentage >= 50 ? 'bg-blue-500/10' : 'bg-amber-500/10'
      }`} />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="relative z-10 w-full max-w-lg glass-card p-8 md:p-12 rounded-[2.5rem] text-center"
      >
        <div className="mb-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium">
          <BookOpen className="w-4 h-4 text-primary" />
          {chapter?.title}
        </div>

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className={`w-24 h-24 mx-auto mt-6 mb-6 rounded-3xl flex items-center justify-center border ${colorClass}`}
        >
          <Icon className="w-12 h-12" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-2 text-white">
          {score} <span className="text-2xl text-gray-500">/ {total}</span>
        </h1>
        
        <div className="text-lg text-gray-400 mb-8 font-medium">
          You scored <span className="text-white">{percentage}%</span>
        </div>

        <div className={`inline-block px-6 py-3 rounded-2xl border font-semibold text-lg tracking-wide mb-10 ${colorClass}`}>
          {feedback}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/')}
            className="glass-button px-6 py-4 rounded-xl flex items-center justify-center gap-2 group flex-1"
          >
            <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Back to Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
}
