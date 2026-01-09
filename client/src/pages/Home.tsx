import React, { useState, useEffect } from 'react';
import { HextechCard, HextechButton, HextechBadge } from '@/components/ui/hextech';
import { Terminal, Cpu, Zap, Brain, Github, Copy, Check } from 'lucide-react';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <HextechCard className="h-full flex flex-col items-start gap-4 bg-black/50 backdrop-blur-sm border border-primary/30 hover:border-primary transition-colors group">
      <div className="p-3 bg-primary/10 rounded-none border border-primary/50 text-primary shadow-[0_0_15px_rgba(57,255,20,0.3)] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] transition-all duration-500 relative overflow-hidden">
        {icon}
        {/* Particle Effect on Hover */}
        <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </div>
      <h3 className="text-xl font-bold text-white font-display tracking-wider uppercase group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 font-mono text-sm leading-relaxed">
        {description}
      </p>
    </HextechCard>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> Initializing The Forge...",
    "> Loading memory modules...",
    "> Bypassing security protocols...",
    "> System ready. Waiting for input."
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLines = [
        "> Analyzing project structure...",
        "> Optimizing neural pathways...",
        "> Generating solution matrix...",
        "> Executing Phase 1...",
        "> Compiling assets...",
        "> Deployment sequence initiated..."
      ];
      const randomLine = newLines[Math.floor(Math.random() * newLines.length)];
      setTerminalLines(prev => [...prev.slice(-5), randomLine]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm install -g memory-factory");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-primary selection:text-black overflow-x-hidden relative">
      {/* Hextech Background Gears Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Big Gear Top Right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-10 animate-[spin_60s_linear_infinite]">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary w-full h-full">
            <path d="M50 50 m-40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0" strokeWidth="1" />
            <path d="M50 50 m-30 0 a 30 30 0 1 0 60 0 a 30 30 0 1 0 -60 0" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M50 10 L50 0 M90 50 L100 50 M50 90 L50 100 M10 50 L0 50" strokeWidth="4" />
            <circle cx="50" cy="50" r="10" strokeWidth="1" />
          </svg>
        </div>
        {/* Small Gear Bottom Left */}
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] opacity-10 animate-[spin_40s_linear_infinite_reverse]">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary w-full h-full">
            <path d="M50 50 m-35 0 a 35 35 0 1 0 70 0 a 35 35 0 1 0 -70 0" strokeWidth="1" />
            <path d="M50 50 m-25 0 a 25 25 0 1 0 50 0 a 25 25 0 1 0 -50 0" strokeWidth="2" strokeDasharray="3 3" />
            <rect x="45" y="0" width="10" height="100" />
            <rect x="0" y="45" width="100" height="10" />
          </svg>
        </div>
      </div>

      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)', 
             backgroundSize: '50px 50px',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
           }}>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-primary/20 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-black font-bold text-xl shadow-[0_0_20px_rgba(57,255,20,0.6)] clip-path-polygon-[10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px] group-hover:rotate-180 transition-transform duration-700">
              <Zap size={24} fill="black" />
            </div>
            <span className="font-display font-bold text-2xl tracking-widest text-white group-hover:text-primary transition-colors">THE FORGE</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-primary/80">
            <a href="#features" className="hover:text-primary hover:shadow-[0_0_10px_rgba(57,255,20,0.8)] transition-all">FEATURES</a>
            <a href="#how-it-works" className="hover:text-primary hover:shadow-[0_0_10px_rgba(57,255,20,0.8)] transition-all">HOW IT WORKS</a>
            <a href="https://github.com/MadKangYu/conversation-memory-v2" target="_blank" className="hover:text-primary hover:shadow-[0_0_10px_rgba(57,255,20,0.8)] transition-all">GITHUB</a>
          </nav>

          <HextechButton className="hidden md:block text-sm px-6 py-2">
            GET STARTED
          </HextechButton>
        </div>
      </header>

      <main className="pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <HextechBadge>V3.0 HEXTECH EDITION</HextechBadge>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-none text-white tracking-tighter">
                YOUR AI'S <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                  SECOND BRAIN
                </span>
              </h1>
              <p className="text-xl text-gray-400 font-mono max-w-xl border-l-2 border-primary pl-6 py-2 relative">
                <span className="absolute top-0 left-0 w-2 h-2 bg-primary -translate-x-[5px] -translate-y-[4px]"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 bg-primary -translate-x-[5px] translate-y-[4px]"></span>
                Autonomous coding agent that absorbs Claude Code's power. <br/>
                <strong className="text-white">Free to use. Infinite context. Zero amnesia.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="relative group w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-600 rounded-none blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex items-center bg-black border border-primary/50 p-1 pr-2 clip-path-polygon-[10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px]">
                    <code className="flex-1 font-mono text-primary px-4 py-3 bg-black/50">
                      $ npm install -g memory-factory
                    </code>
                    <button 
                      onClick={copyCommand}
                      className="p-3 hover:bg-primary/20 text-primary transition-colors"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
                <HextechButton className="flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Github size={20} />
                  VIEW SOURCE
                </HextechButton>
              </div>
            </div>

            {/* Terminal Demo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-full opacity-50 animate-pulse group-hover:opacity-80 transition-opacity"></div>
              {/* Hextech Frame */}
              <div className="absolute -inset-[2px] border border-primary/30 clip-path-polygon-[20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px]"></div>
              
              <div className="box-hextech bg-black p-0 overflow-hidden h-[400px] flex flex-col relative z-10">
                <div className="bg-primary/20 p-3 flex items-center justify-between border-b border-primary/30">
                  <span className="font-mono text-xs text-primary font-bold flex items-center gap-2">
                    <Terminal size={12} />
                    TERMINAL_V2.exe
                  </span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary/50 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/50"></div>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm space-y-2 flex-1 overflow-hidden relative">
                  {terminalLines.map((line, i) => (
                    <div key={i} className="text-primary/80 animate-in fade-in slide-in-from-left-2 duration-300">
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-white mt-4">
                    <span className="text-primary">Forge&gt;</span>
                    <span className="w-3 h-5 bg-primary animate-pulse"></span>
                  </div>
                  
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>
                </div>
                <div className="p-2 bg-primary/10 border-t border-primary/30 flex justify-between text-[10px] font-mono text-primary/60 uppercase">
                  <span>CPU: 12%</span>
                  <span>MEM: 1024TB</span>
                  <span>STATUS: ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="bg-primary text-black py-4 overflow-hidden border-y-4 border-black mb-32 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] font-display font-bold text-4xl tracking-widest">
            <span className="mx-8">AUTONOMOUS CODING AGENT</span>
            <span className="mx-8">///</span>
            <span className="mx-8">NO API KEY REQUIRED</span>
            <span className="mx-8">///</span>
            <span className="mx-8">LOCAL EXECUTION</span>
            <span className="mx-8">///</span>
            <span className="mx-8">GEMINI 2.0 FLASH POWERED</span>
            <span className="mx-8">///</span>
            <span className="mx-8">AUTONOMOUS CODING AGENT</span>
            <span className="mx-8">///</span>
            <span className="mx-8">NO API KEY REQUIRED</span>
            <span className="mx-8">///</span>
            <span className="mx-8">LOCAL EXECUTION</span>
            <span className="mx-8">///</span>
            <span className="mx-8">GEMINI 2.0 FLASH POWERED</span>
          </div>
        </div>

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-6 mb-32">
          <div className="flex items-end justify-between mb-16 border-b border-primary/30 pb-4 relative">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/30"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-primary"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              SYSTEM <span className="text-primary">MODULES</span>
            </h2>
            <span className="font-mono text-primary/60 hidden md:block">v3.0.1-beta</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain size={32} />}
              title="Agent Core"
              description="Powered by Gemini 2.0 Flash. ReAct loop architecture that thinks, plans, and executes code modifications autonomously."
            />
            <FeatureCard 
              icon={<Cpu size={32} />}
              title="Hidden System"
              description="Isolated .forge environment. Keeps your project clean while maintaining persistent memory and configuration."
            />
            <FeatureCard 
              icon={<Zap size={32} />}
              title="The Garden"
              description="Advanced memory management system. Grows with your project, remembering context and user preferences forever."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 text-center">
          <div className="relative p-16 overflow-hidden group">
            <div className="absolute inset-0 border-2 border-primary/30 clip-path-polygon-[20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px]"></div>
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
            
            {/* Animated Circuit Lines */}
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-[slideDown_3s_linear_infinite]"></div>
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-[slideDown_4s_linear_infinite]"></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
                READY TO <span className="text-primary animate-pulse">FORGE</span>?
              </h2>
              <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
                Join the revolution of autonomous local development. <br/>
                No subscription. No limits. Just pure code.
              </p>
              <div className="pt-8">
                <HextechButton className="text-xl px-12 py-6" onClick={copyCommand}>
                  INITIALIZE SYSTEM
                </HextechButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-black py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary/20 border border-primary flex items-center justify-center text-[10px] text-primary clip-path-polygon-[5px_0,100%_0,100%_calc(100%-5px),calc(100%-5px)_100%,0_100%,0_5px]">
              F
            </div>
            <span className="font-display font-bold text-white tracking-widest">THE FORGE</span>
          </div>
          <div className="font-mono text-xs text-gray-500">
            &copy; 2026 MANUS AI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/MadKangYu/conversation-memory-v2" className="text-gray-500 hover:text-primary transition-colors">GITHUB</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">DOCS</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">DISCORD</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
