import { ArrowDown, Flame } from 'lucide-react';

const Hero = () => {
  const scrollToTracker = () => {
    const tracker = document.getElementById('tracker');
    if (tracker) {
      tracker.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <div className="relative z-10 animate-fade-up max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary mb-8 animate-fade-in backdrop-blur-sm">
          <Flame size={14} className="animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Mentor Mqsculus</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 uppercase font-heading">
          Stoic Discipline<br />
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-400 to-primary">& Absolute Resilience</span>
        </h1>

        <p className="text-lg md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Master your mind through the Stoic path. Focus intensely on constant personal improvement. Learn how to be more disciplined, forge an unbreakable will, and push past your physical and mental limits to build undeniable strength and absolute resilience. Eradicate all weakness.
          <br className="hidden md:block" />
          <span className="text-primary/80 mt-2 block text-base uppercase tracking-widest font-bold">Unbreakable Discipline • Absolute Strength • Radical Resilience</span>
          <span className="block mt-6 text-white font-medium">"First say to yourself what you would be; and then do what you have to do." - Epictetus</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToTracker}
            className="group relative px-8 py-4 bg-primary text-black font-bold text-lg uppercase tracking-wide rounded-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Begin the Work <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg uppercase tracking-wide rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
            The Code
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce opacity-50">
        <ArrowDown size={24} className="text-text-secondary" />
      </div>
    </header>
  );
};

export default Hero;
