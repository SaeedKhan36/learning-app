import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { chapters } from '../data/chapters';
import { motion } from 'framer-motion';
import { Search, LogOut, BookOpen, Layers, Target, Code, Award, Sparkles } from 'lucide-react';

// Using consistent set of icons varying by chapter index
const icons = [BookOpen, Layers, Target, Code, Award, Sparkles];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    // Check local storage for completed chapters
    const storedScores = JSON.parse(localStorage.getItem('testmaster_scores') || '{}');
    const completed = Object.keys(storedScores).length;
    setCompletedCount(completed);
  }, []);

  const handleLogout = () => {
    logout();
  };

  const filteredChapters = chapters.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.topics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const progressPercentage = (completedCount / chapters.length) * 100;

  return (
    <div className="min-h-screen p-6 md:p-12 relative">
      {/* Background Orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/60">
              Welcome, {user?.name || 'Student'} ✨
            </h1>
            <p className="text-gray-400 text-lg">Choose a chapter to begin your test</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-gray-300 hover:text-white"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </header>

        {/* Progress Bar + Search Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Progress Card */}
          <div className="glass-card p-6 rounded-3xl lg:col-span-1">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Your Progress</p>
                <p className="text-2xl font-bold">{completedCount}/{chapters.length} <span className="text-gray-400 text-base font-normal">Completed</span></p>
              </div>
              <div className="bg-primary/20 p-2 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
            </div>
            {/* Animated Progress Bar */}
            <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>
          </div>

          {/* Search Card */}
          <div className="glass-card p-6 rounded-3xl lg:col-span-2 flex flex-col justify-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search className="h-6 w-6" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search chapters or topics..."
                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Chapters Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredChapters.map((chapter, index) => {
            const Icon = icons[index % icons.length];
            // Different gradient for each card icon background
            const gradients = [
              'from-blue-500 to-indigo-600',
              'from-purple-500 to-pink-600',
              'from-emerald-500 to-teal-600',
              'from-orange-500 to-red-600',
              'from-cyan-500 to-blue-600',
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div 
                key={chapter.id}
                variants={item}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/chapter/${chapter.id}`)}
                className="glass-card p-6 rounded-3xl cursor-pointer group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/0 group-hover:to-primary/10 transition-colors duration-500" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {chapter.topics.length} Topics • {chapter.topics.join(', ')}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {filteredChapters.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-xl font-medium">No chapters found</p>
            <p>Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
