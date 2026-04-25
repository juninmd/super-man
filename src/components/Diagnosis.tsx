import { AlertCircle, Skull } from 'lucide-react';

const PROBLEMS = [
    "Physical Weakness",
    "Lack of Discipline",
    "Emotional Reactivity",
    "Comfort Seeking",
    "Screen Addiction",
    "Aimlessness",
    "Tolerance of Vice",
    "Neglect of Duty",
    "Self-Pity",
    "Mental Fragility",
    "Cheap Dopamine",
    "Blaming Others"
];

const Diagnosis = () => {
    return (
        <section className="max-w-4xl mx-auto mb-20 px-6 text-center">
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-10 backdrop-blur-sm mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-500 flex items-center justify-center gap-3 uppercase font-heading">
                    <AlertCircle className="w-8 h-8 md:w-10 md:h-10" /> Identify the Weakness
                </h2>

                <p className="text-lg md:text-xl mb-8 text-text-secondary">
                    If you lack strength, it is because you tolerate weakness. You are actively yielding to:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
                    {PROBLEMS.map((problem, index) => (
                        <div key={index} className="flex items-center gap-3 bg-black/40 p-4 rounded-lg border-l-4 border-red-500 text-red-200">
                            <span className="text-red-500 font-bold">✕</span>
                            <span className="text-sm font-medium">{problem}</span>
                        </div>
                    ))}
                </div>

                <div className="border-t border-red-500/20 pt-8 mt-4">
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Your suffering is a choice. <span className="text-red-500 block md:inline mt-2 md:mt-0">Eradicate excuses. Choose discipline.</span>
                    </p>
                </div>
            </div>

            <div className="bg-surface-100/50 border border-white/5 rounded-2xl p-10 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center justify-center gap-3">
                    <Skull className="text-primary w-8 h-8" /> Radical Responsibility
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                    Weakness is not an accident; it is the predictable result of avoiding discomfort and seeking the easy path.
                    <br /><br />
                    <strong className="text-white text-xl block mb-2">The Obstacle is the Way. True strength is forged exclusively in the crucible of adversity.</strong>
                    Your circumstances are your fault. Stop blaming others. Stop hoping for salvation. Take absolute control. Command your mind, execute with discipline, and build undeniable resilience.
                </p>
            </div>

            <div className="mt-12 text-left bg-black/20 border border-white/5 rounded-2xl p-8 md:p-10">
                <h3 className="text-3xl font-bold mb-8 text-white uppercase tracking-tight text-center">
                    How to Forge Yourself
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-3">
                        <div className="text-primary font-bold text-xl uppercase tracking-wider mb-2 border-b border-primary/20 pb-2">
                            1. Discipline
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                            <strong className="text-white">Start small, execute daily.</strong> Motivation is fleeting; routine is permanent. Do not wait to feel ready. Choose the hardest task of your day and attack it first. Relentless consistency over time is the only path.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="text-primary font-bold text-xl uppercase tracking-wider mb-2 border-b border-primary/20 pb-2">
                            2. Strength
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                            <strong className="text-white">Embrace voluntary discomfort.</strong> Push your physical and mental limits when you don't have to. Take cold showers, lift heavy, and run until your mind begs you to quit. True strength is built by repeatedly choosing the hard path.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="text-primary font-bold text-xl uppercase tracking-wider mb-2 border-b border-primary/20 pb-2">
                            3. Resilience
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                            <strong className="text-white">Anticipate adversity.</strong> Practice <em>Premeditatio Malorum</em>. When failure or hardship strikes, do not act surprised. Smile at the obstacle. Every setback is merely raw material to build an unshakeable mind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Diagnosis;
