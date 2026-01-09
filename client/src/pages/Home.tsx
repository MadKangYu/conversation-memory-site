import { BackgroundBlob, GlassCard, GradientText, NeuralButton, Section } from "@/components/ui/custom";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, Cpu, Database, Layers, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <Brain className="h-6 w-6 text-primary" />
            <span>Conversation Memory V2</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#integration" className="hover:text-primary transition-colors">Integration</a>
          </div>
          <NeuralButton variant="outline" className="hidden md:inline-flex">
            Get Started
          </NeuralButton>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <BackgroundBlob className="top-0 left-1/4 bg-cyan-500/30" />
        <BackgroundBlob className="bottom-0 right-1/4 bg-purple-500/30 delay-1000" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now Available for Claude Code & OpenCode
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              Give Your AI <br />
              <GradientText>True Long-Term Memory</GradientText>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Stop repeating yourself. The <strong>Factory Druid</strong> pattern automatically captures, compresses, and injects context into your AI agent's workflow. Zero effort required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NeuralButton className="h-12 px-8 text-base">
                Install Now <ArrowRight className="ml-2 h-4 w-4" />
              </NeuralButton>
              <NeuralButton variant="outline" className="h-12 px-8 text-base">
                Read the Docs
              </NeuralButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20">
              <img 
                src="/images/hero-neural-network.jpg" 
                alt="Neural Network Visualization" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8"
              >
                <GlassCard className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Context Compressed</div>
                    <div className="text-xs text-cyan-400">Token usage reduced by 72%</div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section id="features" className="bg-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Engineered for Continuity</h2>
          <p className="text-muted-foreground">
            A complete memory management system that runs silently in the background, ensuring your AI never loses the thread.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard>
            <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Factory Druid Pattern</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A set-it-and-forget-it architecture. Whether you use Claude Code or OpenCode, a single install command configures everything automatically.
            </p>
          </GlassCard>

          <GlassCard>
            <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Robust Persistence</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Powered by <strong>SQLite WAL mode</strong> for high-concurrency performance. Your memories are safe, even if the agent crashes.
            </p>
          </GlassCard>

          <GlassCard>
            <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Secure & Isolated</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Runs in a secure sandbox with <strong>API Key stripping</strong>. Your credentials never leak to the background process.
            </p>
          </GlassCard>
        </div>
      </Section>

      {/* How it Works */}
      <Section id="how-it-works">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <img src="/images/feature-automation.jpg" className="rounded-2xl border border-white/10 shadow-lg" alt="Automation" />
                <img src="/images/feature-compression.jpg" className="rounded-2xl border border-white/10 shadow-lg mt-8" alt="Compression" />
             </div>
             <BackgroundBlob className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 w-[300px] h-[300px]" />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Seamless Background Operation</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-none h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Auto-Capture</h4>
                  <p className="text-muted-foreground text-sm">Hooks into your agent's event loop to capture every prompt, tool use, and response without manual intervention.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Async Compression</h4>
                  <p className="text-muted-foreground text-sm">A background worker processes the conversation log, updating the compressed memory state without blocking the main thread.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-none h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Context Injection</h4>
                  <p className="text-muted-foreground text-sm">When the agent needs context, the system instantly provides the most relevant compressed memories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Integration */}
      <Section id="integration" className="bg-gradient-to-b from-transparent to-black/50">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Works Where You Work</h2>
          <p className="text-muted-foreground">Native support for the most advanced AI coding agents.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GlassCard className="flex flex-col items-center text-center p-8">
            <div className="h-16 w-16 rounded-2xl bg-[#D97757]/20 flex items-center justify-center text-[#D97757] mb-6">
              <Bot className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Claude Code</h3>
            <p className="text-muted-foreground mb-6">
              Uses a daemon process and <code className="text-xs bg-white/10 px-1 py-0.5 rounded">settings.json</code> hooks to provide robust background memory management.
            </p>
            <div className="w-full bg-black/50 rounded-lg p-4 text-left font-mono text-xs text-muted-foreground">
              <div className="mb-2 text-gray-500"># Auto-detects environment</div>
              <span className="text-green-400">$</span> npx memory-factory install
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col items-center text-center p-8">
            <div className="h-16 w-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Bot className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">OpenCode</h3>
            <p className="text-muted-foreground mb-6">
              Leverages the native plugin system for a clean, all-in-one integration with zero external dependencies.
            </p>
            <div className="w-full bg-black/50 rounded-lg p-4 text-left font-mono text-xs text-muted-foreground">
              <div className="mb-2 text-gray-500"># Works with TS source or JS build</div>
              <span className="text-green-400">$</span> npx memory-factory install
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Ready to Upgrade Your Agent?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of developers who have stopped repeating themselves.
          </p>
          <NeuralButton className="h-14 px-10 text-lg">
            Get Started Now
          </NeuralButton>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display font-bold">
            <Brain className="h-5 w-5 text-primary" />
            <span>Conversation Memory V2</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2026 Manus AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
