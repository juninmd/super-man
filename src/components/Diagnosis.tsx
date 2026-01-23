import { AlertCircle, Skull } from 'lucide-react';

const PROBLEMS = [
    "Sem Academia",
    "Sem Tempo Livre",
    "Sono Insuficiente",
    "Dieta Ruim",
    "Tempo Excessivo de Tela",
    "Zero Propósito",
    "Laços Tóxicos",
    "Sem Tempo com a Família"
];

const Diagnosis = () => {
    return (
        <section className="max-w-4xl mx-auto mb-20 px-6 text-center">
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-10 backdrop-blur-sm mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-500 flex items-center justify-center gap-3 uppercase font-heading">
                    <AlertCircle className="w-8 h-8 md:w-10 md:h-10" /> Identifique o Veneno
                </h2>

                <p className="text-lg md:text-xl mb-8 text-text-secondary">
                    Se você se sente perdido, fraco ou deprimido, provavelmente está consumindo:
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
                        Você não está "triste". <span className="text-red-500 block md:inline mt-2 md:mt-0">Você está desregulado.</span>
                    </p>
                </div>
            </div>

            <div className="bg-surface-100/50 border border-white/5 rounded-2xl p-10 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center justify-center gap-3">
                    <Skull className="text-primary w-8 h-8" /> Responsabilidade Radical
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                    Depressão muitas vezes é apenas o resultado de escolhas ruins repetidas diariamente.
                    <br /><br />
                    <strong className="text-white text-xl block mb-2">Sua vida é 100% sua responsabilidade.</strong>
                    Não culpe ninguém. Assuma o controle. Mude seus hábitos e mudará sua mente.
                </p>
            </div>
        </section>
    );
};

export default Diagnosis;
