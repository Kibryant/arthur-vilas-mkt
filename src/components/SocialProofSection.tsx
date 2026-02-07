import { ImageCarousel } from "./ImageCarousel";

export const SocialProofSection = () => {
    return (
        <section className="py-20 px-4" id="social-proof">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span>Resultados Reais</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Cases Reais de{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                            Advogados Reais
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Resultados comprováveis de escritórios que investiram em captação estratégica de clientes.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-full max-w-4xl px-4">
                        <ImageCarousel />
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-400 font-medium italic">
                        "O tráfego pago é o motor, mas a estratégia é o combustível."
                    </p>
                </div>
            </div>
        </section>
    );
};
