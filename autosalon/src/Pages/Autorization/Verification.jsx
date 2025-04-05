// components/EmailVerification.tsx
import React from 'react';

const EmailVerification = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-[#EFF3F2]">
            {/* Header */}
            <header className="w-full text-center bg-[#F7FAFA] py-5 border-b border-black fixed top-0">
                <div className="text-[38px] font-bold">ЛОГО</div>
            </header>

            {/* Main Content */}
            <main className="mt-[140px] text-center px-4">
                <h1 className="text-[28px] font-bold mb-2">Проверьте ваш e-mail</h1>
                <p className="text-[16px] text-[#333]">Мы выслали вам код подтверждения</p>
                <p className="text-[16px] text-[#333] mt-8">
                    Не получили код?{' '}
                    <a href="#" className="text-[#015454] font-bold">Отправить повторно</a>
                </p>

                {/* Input Fields */}
                <div className="flex justify-center gap-[10px] my-6">
                    {Array(4).fill(0).map((_, i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength={1}
                            className="w-[90px] h-[100px] text-center text-[22px] border border-[#707070] rounded-[16px] bg-white outline-none"
                        />
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-[20px] mt-[20px]">
                    <button className="bg-white text-black border border-black rounded-[16px] w-[196px] h-[56px] text-[16px]">
                        Отмена
                    </button>
                    <button className="bg-[#2CC295] text-white rounded-[16px] w-[196px] h-[56px] text-[16px] border-none">
                        Проверить
                    </button>
                </div>
            </main>
        </div>
    );
};

export default EmailVerification;

