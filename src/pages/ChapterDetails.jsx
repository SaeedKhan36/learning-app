import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { chapters } from '../data/chapters';
import { ArrowLeft, PlayCircle, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function ChapterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const chapter = chapters.find(c => c.id === parseInt(id));

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Chapter not found</h2>
          <button onClick={() => navigate('/')} className="text-primary hover:underline flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[0%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Dashboard</span>
        </button>

        {/* Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] mb-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/30 to-transparent blur-[80px]" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Chapter {chapter.id}
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> 50 Questions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {chapter.title}
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Master the fundamental concepts of this chapter to build a strong foundation. Review the topics below before attempting the test.
              </p>
            </div>
            
            <button 
              onClick={() => navigate(`/test/${chapter.id}`)}
              className="glass-button px-8 py-5 rounded-2xl flex items-center gap-3 text-lg whitespace-nowrap group shrink-0"
            >
              <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Start Test
            </button>
          </div>
        </motion.div>

        {/* Topics Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Layers className="text-primary w-6 h-6" /> Topics Included
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapter.topics.map((topic, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-3 hover:bg-white/10 hover:border-primary/40 transition-all cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="font-medium text-gray-200">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
