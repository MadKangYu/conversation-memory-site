import { useState, useEffect } from "react";
import { Copy, Check, Terminal, Cpu, Zap, Brain, Github, ExternalLink, Code } from "lucide-react";

// Neo-Brutalism Components
function NeoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`box-neo p-8 relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function NeoBadge({ text }: { text: string }) {
  return (
    <span className="inline-block bg-black text-white px-3 py-1 font-bold border-2 border-black text-sm transform -rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
      {text}
    </span>
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
      const commands = [
        "> Analyzing project structure...",
        "> Optimizing neural pathways...",
        "> Generating code...",
        "> Deploying to production...",
        "> Success: 100% efficiency.",
        "> Waiting for next task..."
      ];
      const randomCommand = commands[Math.floor(Math.random() * commands.length)];
      setTerminalLines(prev => [...prev.slice(-4), randomCommand]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm install -g memory-factory");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] selection:bg-[var(--color-primary)] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b-4 border-black bg-[var(--color-background)]/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center text-[var(--color-primary)] font-bold text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              {">_"}
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">THE FORGE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm tracking-wide">
            <a href="#features" className="hover:underline decoration-4 decoration-[var(--color-primary)] underline-offset-4">FEATURES</a>
            <a href="#how-it-works" className="hover:underline decoration-4 decoration-[var(--color-primary)] underline-offset-4">HOW IT WORKS</a>
            <a href="https://github.com/MadKangYu/conversation-memory-v2" target="_blank" className="hover:underline decoration-4 decoration-[var(--color-primary)] underline-offset-4">GITHUB</a>
          </nav>
          <a href="https://github.com/MadKangYu/conversation-memory-v2" target="_blank" className="btn-neo text-sm py-2 px-6 hidden sm:block">
            GET STARTED
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <NeoBadge text="V3.0 CLOUD EDITION RELEASED" />
              <h1 className="text-6xl md:text-8xl font-display leading-[0.9] tracking-tighter text-black">
                YOUR AI'S
                <br />
                <span className="text-[var(--color-primary)] text-stroke text-transparent" style={{ WebkitTextStroke: '3px black', color: 'var(--color-primary)' }}>SECOND BRAIN</span>
              </h1>
              <p className="text-xl font-mono border-l-4 border-black pl-6 leading-relaxed">
                Autonomous coding agent that absorbs Claude Code's power. 
                <br/>
                <strong>Free to use. Infinite context. Zero amnesia.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="relative group w-full sm:w-auto">
                  <div className="flex items-center bg-black border-4 border-black p-1 pr-4 shadow-[6px_6px_0px_0px_var(--color-primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all cursor-pointer" onClick={copyCommand}>
                    <span className="px-4 py-3 font-mono text-[var(--color-primary)] font-bold select-all">
                      $ npm install -g memory-factory
                    </span>
                    <button className="ml-2 p-2 text-white hover:text-[var(--color-primary)] transition-colors">
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
                <a href="https://github.com/MadKangYu/conversation-memory-v2" target="_blank" className="btn-neo flex items-center justify-center gap-2 bg-white hover:bg-gray-100">
                  <Github size={20} /> VIEW SOURCE
                </a>
              </div>
            </div>

            {/* Interactive Terminal */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-black border-4 border-black shadow-[12px_12px_0px_0px_var(--color-primary)] p-0 overflow-hidden">
                <div className="bg-[var(--color-primary)] px-4 py-3 flex items-center justify-between border-b-4 border-black">
                  <span className="font-bold text-black font-mono text-lg">TERMINAL_V2.exe</span>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-black rounded-full border-2 border-white"></div>
                    <div className="w-4 h-4 bg-black rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm h-[400px] flex flex-col bg-[#0c0c0c]">
                  <div className="flex-1 space-y-3 text-[var(--color-primary)] font-bold">
                    {terminalLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                    <div className="flex items-center gap-2 text-white">
                      <span>Forge&gt;</span>
                      <span className="w-3 h-5 bg-[var(--color-primary)] animate-pulse"></span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-gray-800 text-gray-500 text-xs flex justify-between font-bold">
                    <span>CPU: 12%</span>
                    <span>MEM: 1024TB</span>
                    <span>STATUS: ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="bg-black text-[var(--color-primary)] py-6 overflow-hidden border-y-4 border-black mb-32 transform -rotate-1 shadow-[0px_10px_20px_rgba(0,0,0,0.1)]">
          <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap font-display text-5xl font-bold flex gap-12 items-center">
            <span>AUTONOMOUS CODING AGENT</span>
            <Zap fill="currentColor" size={40} />
            <span>NO API KEYS REQUIRED</span>
            <Zap fill="currentColor" size={40} />
            <span>LOCAL EXECUTION</span>
            <Zap fill="currentColor" size={40} />
            <span>INFINITE MEMORY</span>
            <Zap fill="currentColor" size={40} />
            <span>AUTONOMOUS CODING AGENT</span>
            <Zap fill="currentColor" size={40} />
          </div>
        </div>

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-6 mb-32">
          <div className="flex items-end justify-between mb-16 border-b-4 border-black pb-6">
            <h2 className="text-6xl font-display text-black">
              SYSTEM <span className="text-[var(--color-primary)]">MODULES</span>
            </h2>
            <span className="font-mono font-bold bg-black text-white px-4 py-2 hidden md:block transform rotate-2">v2.0.4-beta</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard className="bg-white">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 border-2 border-black shadow-[4px_4px_0px_0px_var(--color-primary)]">
                <Cpu className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">AGENT CORE</h3>
              <p className="font-mono text-sm leading-relaxed text-gray-700 font-medium">
                Powered by Gemini 2.0 Flash. 1M context window absorbs your entire codebase instantly.
                It thinks, plans, and executes like a senior engineer on caffeine.
              </p>
            </NeoCard>

            <NeoCard className="bg-[var(--color-primary)]">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 border-2 border-black shadow-[4px_4px_0px_0px_white]">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">HIDDEN SYSTEM</h3>
              <p className="font-mono text-sm leading-relaxed text-black font-bold">
                A completely isolated environment (.forge) that keeps your main directory clean.
                It manages its own database, logs, and configuration in the shadows.
              </p>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 border-2 border-black shadow-[4px_4px_0px_0px_var(--color-primary)]">
                <Brain className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">THE GARDEN</h3>
              <p className="font-mono text-sm leading-relaxed text-gray-700 font-medium">
                Knowledge graph that grows with every interaction. It remembers your preferences,
                past bugs, and architectural decisions forever.
              </p>
            </NeoCard>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 text-center">
          <div className="box-neo bg-black p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-20"></div>
            <h2 className="text-5xl md:text-7xl font-display text-white mb-8 relative z-10">
              READY TO <span className="text-[var(--color-primary)]">BUILD?</span>
            </h2>
            <p className="text-gray-300 font-mono text-xl mb-12 max-w-2xl mx-auto relative z-10 font-bold">
              Join the revolution. Install The Forge and let your AI agent take over the boring parts.
            </p>
            <a href="https://github.com/MadKangYu/conversation-memory-v2" target="_blank" className="inline-block bg-[var(--color-primary)] text-black border-4 border-white px-10 py-5 font-display text-2xl hover:scale-105 transition-transform shadow-[8px_8px_0px_0px_white] relative z-10 font-bold uppercase">
              Start The Forge
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-lg">
              {">_"}
            </div>
            <span className="font-mono font-bold">© 2026 THE FORGE.</span>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/MadKangYu/conversation-memory-v2" className="text-black hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="#" className="text-black hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
              <ExternalLink size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
