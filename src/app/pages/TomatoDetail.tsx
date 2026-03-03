import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Sprout,
  Search,
  Package,
  Check,
  ThermometerSun,
  Snowflake,
  ChevronDown,
  Star,
  Truck,
  ShieldCheck,
  ArrowRight,
  Heart,
  Shield,
  Flame,
  Droplets,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { NutritionIllustration } from "../components/NutritionIllustration";
import heroImage from "figma:asset/4f9311fec42ef4f708f65adc92a53b16574df160.png";
import qualityImage from "figma:asset/ec64936fadaf959e9080d99698a6cc57e04ccf12.png";

const images = {
  hero: heroImage,
  greenhouse: "https://images.unsplash.com/photo-1680180227067-dbc3ba5e0b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBncmVlbmhvdXNlJTIwZmFybWluZyUyMHN1bmxpZ2h0JTIwcm93c3xlbnwxfHx8fDE3NzIxMDM0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  closeup: "https://images.unsplash.com/photo-1592924625601-63601e1bca95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRvbWF0byUyMGNyb3NzJTIwc2VjdGlvbiUyMGp1aWN5JTIwY2xvc2V1cHxlbnwxfHx8fDE3NzIxMDM0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  farmer: "https://images.unsplash.com/photo-1672413052733-7b91a6cb9e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBoYW5kcyUyMHBpY2tpbmclMjB0b21hdG9lcyUyMGhhcnZlc3R8ZW58MXx8fHwxNzcyMTAzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  crate: "https://images.unsplash.com/photo-1670179819598-3049f7980180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXMlMjB3b29kZW4lMjBjcmF0ZSUyMHJ1c3RpY3xlbnwxfHx8fDE3NzIxMDM0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  nutrition: "https://images.unsplash.com/photo-1662027883502-0695c0b46f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHJlZCUyMHRvbWF0b2VzJTIwdmlicmFudCUyMGhlYWx0aHklMjBmb29kJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzI1MTE3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  splash: "https://images.unsplash.com/photo-1585650403056-c970be9165e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjB3YXRlciUyMHNwbGFzaCUyMGZyZXNoJTIwcmVkfGVufDF8fHx8MTc3MjEwMzQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

const serifFont = "'Noto Serif KR', 'Georgia', serif";

function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-block border border-red-700 text-red-700 px-4 py-1 text-[11px] tracking-[0.25em] uppercase mb-6">
      {label}
    </span>
  );
}

function ParallaxImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`overflow-hidden ${className}`}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

export function TomatoDetail() {
  const [selectedSize, setSelectedSize] = useState(1);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const stagger = (delay: number) => ({
    ...fadeUp,
    transition: { ...fadeUp.transition, delay },
  });

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-100" style={{ fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif" }}>
      {/* ── Sticky Nav ── */}
      

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO / INTRO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end pb-20 pt-14 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={images.hero}
            alt="Hero tomatoes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <SectionTag label="Check 01 · 고당도" />
            <h1 className="text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: serifFont }}>
              과즙이 넘치는
              <br />
              <span className="text-red-400">고당도 달콤 토마토</span>
            </h1>
            <p className="text-white/70 text-[clamp(0.9rem,1.8vw,1.125rem)] leading-relaxed max-w-lg mb-10">
              산지의 햇살을 가득 머금은 높은 당도의 자랑입니다.
              <br />
              비파괴 당도 측정을 통해{" "}
              <span className="text-red-400">10브릭스 이상</span>의
              <br />
              고당도 토마토만을 선별해 전해 드립니다.
            </p>
          </motion.div>

          {/* Brix Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-red-700 flex flex-col items-center justify-center text-white shadow-2xl shadow-red-900/40">
              <span className="text-3xl leading-none tracking-tight">10</span>
              <span className="text-[10px] tracking-wider opacity-80">
                BRIX+
              </span>
            </div>
            <div className="flex gap-6 text-white/50 text-[11px] tracking-[0.15em] uppercase">
              <span>Non-destructive tested</span>
              <span>·</span>
              <span>Premium selected</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — 3단계 선별 프로세스
      ═══════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <SectionTag label="Check 02 · 선별 과정" />
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-tight" style={{ fontFamily: serifFont }}>
              꼼꼼한 3단계
              <br />
              <span className="text-red-700">선별 프로세스</span>
            </h2>
          </motion.div>

          {/* Process Steps — Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border-t border-neutral-200">
            {[
              {
                num: "01",
                icon: Sprout,
                title: "신선 수확",
                desc: "가장 신선할 때 맛있는 당도로 수확합니다. 숙련된 농부가 최적의 수확 시점을 판단합니다.",
              },
              {
                num: "02",
                icon: Search,
                title: "이중 검수",
                desc: "1차 육안 선별 후, 2차 비파괴 당도 측정 기계를 통해 10브릭스 이상만 통과시킵니다.",
              },
              {
                num: "03",
                icon: Package,
                title: "꼼꼼 포장",
                desc: "개별 완충재로 안전하게 포장하여, 수확한 그 신선함 그대로 빠르게 배송합니다.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                {...stagger(i * 0.15)}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-neutral-200 p-8 md:p-10 group hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[40px] leading-none text-red-700/20 tracking-tight">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white group-hover:border-red-700 transition-all">
                    <step.icon size={18} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-[1.1rem] tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-[0.85rem] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — 당일 수확 신뢰
      ═══════════════════════════════════════════ */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          {/* Image Side */}
          <div className="relative h-[60vh] lg:h-auto">
            <ParallaxImage
              src={images.farmer}
              alt="Farmer harvesting"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-950/50 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent lg:hidden" />
          </div>

          {/* Text Side */}
          <div className="flex items-center py-16 lg:py-0 px-6 lg:px-16">
            <motion.div {...fadeUp} className="max-w-md">
              <SectionTag label="Check 03 · 당일 수확" />
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight mb-8" style={{ fontFamily: serifFont }}>
                신선하고 안전하게
                <br />
                <span className="text-red-400">당일 수확, 당일 발송</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 text-[0.95rem]">
                당일 수확 및 선별을 거쳐 당일 발송합니다.
                <br />
                갓 수확한 토마토의 싱그러운 향과
                <br />
                탱글탱글한 과육의 식감을 느껴보세요.
              </p>

              <div className="flex gap-8 text-sm">
                {[
                  { icon: Truck, label: "당일 출고" },
                  { icon: ShieldCheck, label: "안심 포장" },
                  { icon: Star, label: "고당도 보장" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-white/50"
                  >
                    <item.icon size={16} className="text-red-500" />
                    <span className="text-[12px] tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — 품질 선별 기준
      ═══════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <SectionTag label="Check 04 · 품질 기준" />
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-tight mb-6" style={{ fontFamily: serifFont }}>
              갓 수확한 토마토 중에서도
              <br />
              <span className="text-red-700">좋은 토마토만</span>
            </h2>
            <p className="text-neutral-500 text-[0.95rem] leading-relaxed max-w-lg mx-auto">
              수확한 토마토를 그대로 보내지 않습니다.
              <br />
              모양과 색상, 품질을 꼼꼼하게 확인하여
              <br />
              신선도가 떨어지는 것은 과감하게 제외합니다.
            </p>
          </motion.div>

          {/* Editorial Image + Criteria */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeUp}>
              <ParallaxImage
                src={qualityImage}
                alt="Tomato closeup"
                className="aspect-[3/4] w-full"
              />
            </motion.div>

            <motion.div {...stagger(0.2)} className="space-y-0">
              {[
                {
                  label: "색상",
                  value: "Deep Red",
                  desc: "균일하고 깊은 붉은 색상만 통과",
                },
                {
                  label: "당도",
                  value: "10 Brix+",
                  desc: "비파괴 측정 기준 10브릭스 이상",
                },
                {
                  label: "외관",
                  value: "Grade A",
                  desc: "균열·반점 없는 매끈한 표면만 선별",
                },
                {
                  label: "향",
                  value: "Fresh Scent",
                  desc: "싱그러운 토마토 고유의 향 확인",
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-start gap-5 py-6 border-b border-neutral-100 last:border-b-0"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={16} className="text-red-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-[0.95rem] tracking-tight">
                        {item.label}
                      </span>
                      <span className="text-[11px] tracking-[0.15em] text-red-700 uppercase">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-[0.82rem]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — 건강을 채우는 붉은 에너지
      ═══════════════════════════════════════════ */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          {/* Text Side */}
          <div className="flex items-center py-20 lg:py-0 px-6 lg:px-16 order-2 lg:order-1">
            <motion.div {...fadeUp} className="max-w-md">
              <SectionTag label="Check 05 · 영양 정보" />
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.15] tracking-tight mb-4"
                style={{ fontFamily: serifFont }}
              >
                맛만큼 깊은
                <br />
                <span className="text-red-400">토마토의 영양</span>
              </h2>
              <p className="text-white/50 text-[0.85rem] leading-relaxed mb-10">
                건강을 채우는 붉은 에너지
              </p>

              <div className="space-y-0">
                {[
                  {
                    icon: Heart,
                    title: "항산화의 제왕, 라이코펜",
                    desc: "토마토의 붉은빛을 만드는 라이코펜 성분은 노화의 원인이 되는 활성산소를 제거하고 세포의 젊음을 유지하는 데 도움을 줍니다.",
                    color: "text-red-400",
                    bg: "bg-red-500/10",
                  },
                  {
                    icon: Shield,
                    title: "비타민의 보고",
                    desc: "비타민 C와 K가 풍부하여 면역력 강화와 뼈 건강을 챙길 수 있는 천연 영양제입니다.",
                    color: "text-amber-400",
                    bg: "bg-amber-500/10",
                  },
                  {
                    icon: Flame,
                    title: "가벼운 칼로리, 높은 포만감",
                    desc: "100g당 약 14~20kcal의 낮은 열량으로 식단 관리 중에도 부담 없이 즐길 수 있는 최고의 간식입니다.",
                    color: "text-orange-400",
                    bg: "bg-orange-500/10",
                  },
                  {
                    icon: Droplets,
                    title: "혈압 및 혈관 건강",
                    desc: "칼륨 성분이 체내 나트륨 배출을 도와 혈압을 안정시키고 혈관을 깨끗하게 관리하는 데 효과적입니다.",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...stagger(i * 0.12)}
                    className="flex items-start gap-4 py-5 border-b border-white/10 last:border-b-0"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      <item.icon size={18} className={item.color} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[0.95rem] tracking-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-white/45 text-[0.82rem] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="relative h-[60vh] lg:h-auto order-1 lg:order-2">
            <NutritionIllustration />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════���
          SECTION 6 — 보관 팁
      ═══════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <SectionTag label="Check 06 · 보관법" />
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-tight" style={{ fontFamily: serifFont }}>
              더 오래, 더 맛있게
              <br />
              <span className="text-red-700">보관하는 방법</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Tip 1 */}
            <motion.div
              {...stagger(0)}
              className="bg-white p-8 border border-neutral-100 group hover:border-red-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center">
                  <ThermometerSun size={20} className="text-amber-600" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase block">
                    Room Temp
                  </span>
                  <h3 className="text-[0.95rem] tracking-tight">
                    후숙하면 더 맛있습니다
                  </h3>
                </div>
              </div>
              <p className="text-neutral-500 text-[0.85rem] leading-relaxed">
                햇빛이 들지 않고 통풍이 잘되는 서늘한 곳에
                <span className="text-neutral-800"> 꼭지가 아래로 향하게</span>{" "}
                보관하세요. 자연 후숙으로 더욱 깊은 단맛을 느끼실 수 있습니다.
              </p>
            </motion.div>

            {/* Tip 2 */}
            <motion.div
              {...stagger(0.15)}
              className="bg-white p-8 border border-neutral-100 group hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center">
                  <Snowflake size={20} className="text-blue-600" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase block">
                    Refrigerated
                  </span>
                  <h3 className="text-[0.95rem] tracking-tight">
                    냉장 보관은 이렇게
                  </h3>
                </div>
              </div>
              <p className="text-neutral-500 text-[0.85rem] leading-relaxed">
                오래 드실 경우 세척 후 물기를 제거하고
                <span className="text-neutral-800"> 키친타월에 감싸</span> 냉장
                보관해주세요. 밀폐용기에 넣으면 더 오래 신선합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — 옵션 / 사이즈
      ═══════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <SectionTag label="Check 07 · 상품 옵션" />
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-tight" style={{ fontFamily: serifFont }}>
              상품 정보
            </h2>
            <p className="text-neutral-400 text-[0.85rem] mt-4">
              산지 사정에 따라 주문하신 상품 포장 시 박스 디자인은 변경될 수
              있습니다.
            </p>
          </motion.div>

          {/* Size Selector */}
          <motion.div {...fadeUp} className="mb-20">
            <h3 className="text-center text-[11px] tracking-[0.25em] text-neutral-400 uppercase mb-10">
              Size Guide
            </h3>
            <div className="flex justify-center items-end gap-6 md:gap-12">
              {[
                { label: "S", sub: "한입(소)", note: "샐러드 · 주스용", w: 72 },
                {
                  label: "M",
                  sub: "표준(중)",
                  note: "생식용 추천",
                  w: 96,
                },
                {
                  label: "L",
                  sub: "대과(대)",
                  note: "요리 · 선물용",
                  w: 120,
                },
              ].map((opt, i) => (
                <motion.button
                  key={opt.label}
                  onClick={() => setSelectedSize(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div
                    className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                      selectedSize === i
                        ? "bg-red-700 text-white shadow-xl shadow-red-200"
                        : "bg-neutral-100 text-neutral-400 group-hover:bg-red-50 group-hover:text-red-700"
                    }`}
                    style={{ width: opt.w, height: opt.w }}
                  >
                    <span className="text-[clamp(1rem,2vw,1.5rem)] tracking-tight">
                      {opt.label}
                    </span>
                  </div>
                  <div className="text-center">
                    <span
                      className={`block text-[0.85rem] transition-colors ${selectedSize === i ? "text-red-700" : "text-neutral-700"}`}
                    >
                      {opt.sub}
                    </span>
                    <span className="block text-[11px] text-neutral-400 mt-0.5">
                      {opt.note}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
            <p className="text-center text-[11px] text-neutral-300 mt-8">
              * 측정 방법에 따라 약간의 오차가 있을 수 있습니다.
            </p>
          </motion.div>

          {/* Packaging Options */}
          <motion.div {...fadeUp} className="mb-20">
            <h3 className="text-center text-[11px] tracking-[0.25em] text-neutral-400 uppercase mb-10">
              Packaging
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-neutral-50 relative">
                  <ImageWithFallback
                    src={images.crate}
                    alt="Standard packaging"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-[11px] tracking-wider px-3 py-1.5 uppercase">
                      일반 포장
                    </span>
                  </div>
                </div>
                <h4 className="text-[0.9rem] tracking-tight group-hover:text-red-700 transition-colors">
                  실속형
                </h4>
                <p className="text-[12px] text-neutral-400 mt-1">
                  가정에서 드시기 좋은 간편 포장
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-red-50 relative">
                  <ImageWithFallback
                    src={images.greenhouse}
                    alt="Gift packaging"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-700 text-white text-[11px] tracking-wider px-3 py-1.5 uppercase">
                      선물 포장
                    </span>
                  </div>
                </div>
                <h4 className="text-[0.9rem] tracking-tight group-hover:text-red-700 transition-colors">
                  선물용
                </h4>
                <p className="text-[12px] text-neutral-400 mt-1">
                  마음을 전하는 프리미엄 전용 박스
                </p>
              </div>
            </div>
          </motion.div>

          {/* Product Info Table */}
          <motion.div {...fadeUp} className="max-w-xl mx-auto">
            <div className="border-t-2 border-neutral-900">
              <table className="w-full text-[0.85rem]">
                <tbody>
                  {[
                    ["제품명", "고당도 달콤 토마토"],
                    ["원산지", "국내산"],
                    ["생산자", "스윗팜 영농조합"],
                    ["보관방법", "수령 후 즉시 개봉하여 냉장/서늘한 곳 보관"],
                  ].map(([key, value]) => (
                    <tr key={key} className="border-b border-neutral-100">
                      <th className="py-4 text-neutral-400 text-left w-24 align-top" style={{ fontWeight: 'normal' }}>
                        {key}
                      </th>
                      <td className="py-4 text-neutral-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={images.splash}
            alt="Fresh tomato"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/80" />
        </div>
        <motion.div
          {...fadeUp}
          className="relative z-10 text-center text-white px-6"
        >
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight tracking-tight mb-4" style={{ fontFamily: serifFont }}>
            지금, 가장 달콤한 토마토를
            <br />
            만나보세요
          </h2>
          <p className="text-white/60 text-[0.9rem] mb-10">
            주문 즉시 당일 수확 · 당일 발송
          </p>
          <button className="bg-white text-red-800 text-[13px] tracking-wider px-10 py-3.5 hover:bg-red-50 transition-colors inline-flex items-center gap-2 group">
            주문하기
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-neutral-950 text-neutral-500 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-wider">
          <span className="text-neutral-400 uppercase">Sweet Tomato Inc.</span>
          <span>&copy; 2026 All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}