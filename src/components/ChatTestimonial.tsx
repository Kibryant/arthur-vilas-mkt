import Image from 'next/image';
import { FaPlay, FaMicrophone } from 'react-icons/fa';

export const ChatTestimonial = () => {
    return (
        <div className="bg-[#0b141a] p-4 rounded-3xl shadow-2xl max-w-md w-full border border-gray-800 font-sans relative overflow-hidden">
            {/* Background Pattern Mock */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>

            <div className="relative z-10 space-y-4">

                {/* Pedro Message */}
                <div className="flex flex-col space-y-1">
                    <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none self-start max-w-[85%] text-white text-sm relative border border-gray-700/50">
                        <div className="text-[#f35d7b] font-bold text-xs mb-1">Pedro Teixeira</div>
                        <p>Fala, Arthur.</p>
                        <p className="mt-1">Fechamos um na segunda. Temos dois bons candidatos ainda.</p>
                        <div className="text-[10px] text-end text-gray-400 mt-1">08:38</div>
                    </div>
                </div>

                {/* My Replies */}
                <div className="flex flex-col space-y-1 items-end">
                    <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none self-end max-w-[85%] text-white text-sm relative shadow-md">
                        <div className="bg-[#000000]/20 p-1 rounded mb-1 text-xs border-l-4 border-[#128c7e] pl-2 text-gray-300">
                            <div className="text-[#128c7e] font-bold text-[10px] mb-0.5">Pedro Teixeira</div>
                            Fechamos um na segunda. Temos dois...
                        </div>
                        <p>Fechamos mais 3 contratos, hoje 🔥</p>
                        <div className="text-[10px] text-end text-gray-300 mt-1">18:10</div>
                    </div>

                    <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none self-end max-w-[85%] text-white text-sm relative shadow-md">
                        <p>Recorde total de um dia só kkk E recorde semanal de 4 contratos (já que fizemos 4 contratos em cada quinzena passada)</p>
                        <div className="text-[10px] text-end text-gray-300 mt-1">18:11</div>
                    </div>

                    <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none self-end max-w-[85%] text-white text-sm relative shadow-md">
                        <p>Um dia atípico, mas que torcemos para que se repita muitas e muitas vezes 🙏🏼</p>
                        <div className="text-[10px] text-end text-gray-300 mt-1">18:12</div>
                    </div>
                </div>

                {/* Dennison Message */}
                <div className="flex flex-col space-y-1">
                    <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none self-start max-w-[85%] text-white text-sm relative border border-gray-700/50">
                        <div className="text-[#25d366] font-bold text-xs mb-1">Dennison</div>
                        <p>Pra cima</p>
                        <div className="text-[10px] text-end text-gray-400 mt-1">18:46</div>
                    </div>

                    <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none self-start max-w-[85%] text-white text-sm relative border border-gray-700/50">
                        <div className="text-[#25d366] font-bold text-xs mb-1">Dennison</div>
                        <div className="w-full h-32 bg-gray-600 rounded opacity-60 flex items-center justify-center">
                            {/* Placeholder for sticker */}
                            <span className="text-xs text-center text-gray-300">[Sticker: Aperto de Mãos]</span>
                        </div>
                        <div className="text-[10px] text-end text-gray-400 mt-1">18:46</div>
                    </div>
                </div>

                {/* Audio Message */}
                <div className="flex flex-col space-y-1 items-end">
                    <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none self-end max-w-[85%] w-64 text-white text-sm relative shadow-md flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-400">
                            {/* Placeholder Avatar */}
                            <div className="absolute inset-0 bg-gray-500"></div>
                            <div className="absolute bottom-0 right-0"> <FaMicrophone className="text-sm absolute bottom-0 right-0 text-blue-300" /></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <FaPlay className="text-gray-300 text-sm" />
                                <div className="bg-gray-500/50 h-1 flex-1 rounded-full relative">
                                    <div className="absolute left-0 top-0 bottom-0 bg-white w-1/3 rounded-full"></div>
                                    <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-300 mt-1">
                                <span>0:28</span>
                                <div className="flex items-center gap-1">
                                    <span>18:54</span>
                                    <span className="text-blue-300">✓✓</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none self-end max-w-[85%] text-white text-sm relative shadow-md">
                        <p>Parabéns pessoal 👏👏👏</p>
                        <div className="flex justify-end items-center gap-1 mt-1">
                            <span className="text-[10px] text-gray-300">18:54</span>
                            <span className="text-blue-300 text-[10px]">✓✓</span>
                        </div>
                        {/* Reaction */}
                        <div className="absolute -bottom-2 right-2 bg-[#202c33] text-xs px-1.5 py-0.5 rounded-full border border-gray-700 shadow-sm">
                            🤝
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
