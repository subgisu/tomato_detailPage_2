import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Leaf, Package, Sun, Droplets, Thermometer, ShoppingBag, Truck, Info } from 'lucide-react';

export const TomatoLandingPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-red-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-red-600 tracking-tight">TOMATO</span>
            </div>
            <button className="bg-red-600 text-white px-5 py-2 rounded-full font-medium hover:bg-red-700 transition-colors text-sm">
              구매하기
            </button>
          </div>
        </div>
      </nav>

      {/* Section 1: Intro - Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1755405003720-c4c8935139da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHJlZCUyMHRvbWF0b2VzJTIwc3VubGlnaHR8ZW58MXx8fHwxNzcyMDk3OTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Sunlight on tomatoes" 
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              과즙이 넘치는<br className="md:hidden" /> 고당도 달콤 토마토
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed max-w-2xl mx-auto">
              산지의 햇살을 가득 머금은 토마토는 꿀처럼 달콤한 맛을 자랑합니다.<br className="hidden md:block"/>
              비파괴 당도 측정을 통해 <strong className="font-bold text-red-400">10브릭스 이상</strong>의 고당도 토마토만을 전해 드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Process - 3 Step Sorting */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold tracking-widest text-sm uppercase mb-2 block">Process</span>
            <h2 className="text-3xl font-bold text-stone-900">꼼꼼한 3단계 선별 과정</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-red-100 z-0"></div>

            {[
              { icon: Leaf, title: "신선 수확", desc: "가장 신선할 때 따서" },
              { icon: CheckCircle, title: "이중 검수", desc: "1차 외관, 2차 정밀 선별" },
              { icon: Package, title: "꼼꼼 포장", desc: "안전하게 배송합니다" }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-white border-4 border-red-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-stone-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Trust - Same Day Harvest */}
      <section className="py-20 bg-red-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                 <img 
                  src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBoYXJ2ZXN0JTIwZmFybXxlbnwxfHx8fDE3NzIwOTc5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Farmer harvesting tomatoes" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                <Sun className="w-4 h-4" />
                <span>당일 수확 원칙</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                신선하고 안전하게<br/>
                <span className="text-red-600">당일 수확</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                당일 수확 및 선별을 거쳐 당일 발송합니다. 
                갓 수확한 토마토의 싱그러운 향과 탱글탱글한 과육의 식감을 느끼실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Quality - Selection Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1561619128-84d4badf416e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRvbWF0b2VzJTIwY2xvc2UlMjB1cCUyMHdhdGVyJTIwZHJvcGxldHN8ZW58MXx8fHwxNzcyMDk3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Fresh wet tomato closeup" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm font-medium">
                <Droplets className="w-4 h-4" />
                <span>엄격한 품질 관리</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                갓 수확한 토마토 중에서도<br/>
                <span className="text-red-600">좋은 토마토만</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                수확한 토마토를 그대로 보내지 않습니다. 
                모양과 색상, 품질을 꼼꼼하게 확인하여 신선도가 떨어지는 토마토는 과감하게 제외하고 정성껏 포장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Storage Tips */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">더 오래 먹는 토마토 보관 방법</h2>
            <p className="text-stone-400">신선함을 오래 유지하는 꿀팁을 알려드려요</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-red-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-red-400">
                <Sun className="w-6 h-6" />
                <h3 className="text-xl font-bold">실온 보관</h3>
              </div>
              <p className="text-stone-300 leading-relaxed">
                햇빛이 들지 않고 통풍이 잘되는 서늘한 곳에 
                <span className="text-white font-medium"> 꼭지가 아래로 향하게</span> 보관하세요.
              </p>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-red-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-red-400">
                <Thermometer className="w-6 h-6" />
                <h3 className="text-xl font-bold">냉장 보관</h3>
              </div>
              <p className="text-stone-300 leading-relaxed">
                오래 두고 드실 경우, 세척 후 물기를 제거하여 
                <span className="text-white font-medium"> 키친타월에 감싸</span> 냉장 보관하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Options */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">상품 구성</h2>
            <p className="text-stone-600">용도에 맞춰 다양하게 선택하세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Size Guide */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
              <div className="flex items-center gap-3 mb-6">
                 <Info className="w-6 h-6 text-red-600" />
                 <h3 className="text-2xl font-bold">사이즈 가이드</h3>
              </div>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                    <span className="font-bold text-stone-800">한입 (소)</span>
                    <span className="text-sm text-stone-500">샐러드/주스용</span>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-red-50 border border-red-100 rounded-xl">
                    <span className="font-bold text-red-800">표준 (중)</span>
                    <span className="text-sm text-red-500">생식용 추천</span>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                    <span className="font-bold text-stone-800">대과 (대)</span>
                    <span className="text-sm text-stone-500">요리/선물용</span>
                 </div>
              </div>
            </div>

            {/* Packaging */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
               <div className="flex items-center gap-3 mb-6">
                 <Truck className="w-6 h-6 text-red-600" />
                 <h3 className="text-2xl font-bold">포장 타입</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 h-[calc(100%-4rem)]">
                <div className="flex flex-col justify-center items-center p-4 bg-stone-50 rounded-xl text-center hover:bg-red-50 transition-colors cursor-pointer group">
                   <div className="w-16 h-16 bg-stone-200 rounded-full mb-3 group-hover:bg-red-200 transition-colors flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 text-stone-400 group-hover:text-red-600" />
                   </div>
                   <span className="font-bold text-stone-900">실속형 일반포장</span>
                   <span className="text-xs text-stone-500 mt-1">가정에서 드시기 좋아요</span>
                </div>
                <div className="flex flex-col justify-center items-center p-4 bg-stone-50 rounded-xl text-center hover:bg-red-50 transition-colors cursor-pointer group">
                   <div className="w-16 h-16 bg-stone-200 rounded-full mb-3 group-hover:bg-red-200 transition-colors flex items-center justify-center">
                      <Package className="w-8 h-8 text-stone-400 group-hover:text-red-600" />
                   </div>
                   <span className="font-bold text-stone-900">선물용 전용박스</span>
                   <span className="text-xs text-stone-500 mt-1">마음을 전하세요</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-red-600 text-white text-xl font-bold py-5 px-16 rounded-full shadow-xl hover:bg-red-700 hover:scale-105 transition-all duration-300">
               지금 주문하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-500 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Premium Tomato Farm. All rights reserved.</p>
          <p>산지의 신선함을 그대로 식탁까지</p>
        </div>
      </footer>
    </div>
  );
};
