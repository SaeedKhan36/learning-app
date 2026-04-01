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

  const scrollToTopic = (topic) => {
    const element = document.getElementById(`content-${topic.replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
              <motion.button 
                key={idx}
                onClick={() => scrollToTopic(topic)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-3 hover:bg-white/10 hover:border-primary/40 transition-all text-left w-full cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="font-medium text-gray-200">{topic}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Written Content Section (Rendered for ALL topics) */}
        <section className="space-y-8 pt-8 mt-12 border-t border-gray-800/50">
          {chapter.topics.map((topic, index) => {
            const topicContent = chapter.content ? chapter.content[topic] : "";
            
            return (
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={`content-section-${index}`} 
                id={`content-${topic.replace(/\s+/g, '-')}`}
                className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-gray-700/50 scroll-mt-10 group transition-colors hover:border-primary/30"
              >
                {/* Topic Title */}
                <h3 className="text-3xl font-bold text-primary mb-6">
                  {topic}
                </h3>
                
                {/* Topic Content Body */}
                <div className="text-gray-300 leading-relaxed text-lg">
                  {topicContent && topicContent.trim() !== "" ? (
                    <div 
                      className="prose prose-invert prose-primary max-w-none"
                      dangerouslySetInnerHTML={{ __html: topicContent }} 
                    />
                  ) : (
                    <div className="flex items-center justify-center py-16 bg-gray-900/40 rounded-2xl border border-dashed border-gray-600/50">
                      <p className="text-gray-400 italic font-medium tracking-wide">
                        Content coming soon...
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </section>

      </div>
    </div>
  );
}

