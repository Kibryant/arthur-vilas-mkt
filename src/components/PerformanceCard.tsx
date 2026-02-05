import { FaStar, FaCalendarAlt, FaThumbtack, FaMoneyBillWave, FaComments, FaChartLine, FaFileContract, FaChartPie } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';

export const PerformanceCard = () => {
    return (
        <div className="bg-[#128c7e] text-white p-4 rounded-xl shadow-lg max-w-sm font-sans text-sm leading-relaxed border border-[#0b5c4b]">
            <div className="mb-4">
                <p>
                    Maravilha dr, cada mês estamos crescendo e mantendo o mesmo valor investindo,
                    aumentando a taxa de conversão e diminuindo o CAC 🚀
                </p>
            </div>

            <div className="bg-[#0b5c4b]/30 p-4 rounded-lg space-y-3">
                <div className="font-bold text-center text-yellow-300 flex items-center justify-center gap-2 text-base">
                    <FaStar /> Relatório de Desempenho - Meta Ads <FaStar />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-red-300" />
                        <span className="font-bold">Período Analisado:</span> JANEIRO 2026
                    </div>

                    <div className="flex items-center gap-2">
                        <FaMeta className="text-blue-400" />
                        <span className="font-bold">Meta Ads:</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaThumbtack className="text-red-500" />
                        <span className="font-bold">Tese:</span> RECONHECIMENTO DE VINCULO
                    </div>
                </div>

                <div className="h-px bg-white/20 my-2"></div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <FaMoneyBillWave className="text-yellow-400" />
                        <span className="font-bold">Valor Investido:</span> R$ 1.653,50
                    </div>

                    <div className="flex items-center gap-2">
                        <FaComments className="text-white" />
                        <span className="font-bold">Total de Conversas Iniciadas:</span> 191
                    </div>

                    <div className="flex items-center gap-2">
                        <FaChartLine className="text-blue-200" />
                        <span className="font-bold">Custo por Conversa Iniciada:</span> R$ 8,66
                    </div>
                </div>

                <div className="h-px bg-white/20 my-2"></div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <FaFileContract className="text-gray-200" />
                        <span className="font-bold">Contratos fechados:</span> 22
                    </div>

                    <div className="flex items-center gap-2">
                        <FaMoneyBillWave className="text-yellow-400" />
                        <span className="font-bold">CAC:</span> R$ 75,16
                    </div>

                    <div className="flex items-center gap-2">
                        <FaChartPie className="text-red-400" />
                        <span className="font-bold">Taxa de conversão:</span> 11,52%
                    </div>
                </div>

                <div className="text-[10px] text-right text-gray-300 mt-2">
                    Editada 13:21 ✓✓
                </div>
            </div>
        </div>
    );
};
