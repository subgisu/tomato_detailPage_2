import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search } from "lucide-react";

const bgImage =
  "https://images.unsplash.com/photo-1530088643190-43528e6e154a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjB0b21hdG9lcyUyMHZpbmUlMjBicmlnaHQlMjBjb2xvcmZ1bCUyMGZyZXNofGVufDF8fHx8MTc3MjUxNjM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const nutritionData = [
  { label: "라이코펜", value: "3.0mg", sub: "항산화 작용", color: "#ef4444" },
  { label: "비타민 C", value: "14mg", sub: "면역력 강화", color: "#f59e0b" },
  { label: "칼로리", value: "14kcal", sub: "100g 기준", color: "#f97316" },
  { label: "칼륨", value: "237mg", sub: "혈압 안정", color: "#3b82f6" },
];

export function NutritionIllustration() {
  return (
    <div className="absolute inset-0 w-full h-full bg-neutral-950 overflow-hidden">
      {/* Background Photo */}
      <ImageWithFallback
        src={bgImage}
        alt="Fresh ripe tomatoes on vine"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-neutral-950/20" />

      {/* Content container */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-full max-w-[420px]">
          {/* Magnifying glass card — Nutrition Facts */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/30 overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 pt-5 pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                  <Search size={15} className="text-red-600" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                    Nutrition Facts
                  </p>
                  <h3 className="text-neutral-900 text-[0.95rem] tracking-tight leading-tight">
                    고당도 토마토 영양성분
                  </h3>
                </div>
              </div>
            </div>

            {/* Nutrition rows */}
            <div className="px-6 py-2">
              {nutritionData.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 py-3.5 border-b border-neutral-100 last:border-b-0"
                >
                  {/* Color indicator */}
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <span className="text-neutral-800 text-[0.85rem] tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-neutral-400 text-[0.7rem] ml-2">
                      {item.sub}
                    </span>
                  </div>
                  {/* Value */}
                  <span className="text-neutral-900 text-[0.9rem] tracking-tight tabular-nums shrink-0">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-neutral-50/80">
              <p className="text-[10px] text-neutral-400 leading-relaxed">
                * 100g 기준 / 한국식품영양학회 자료 참고
              </p>
            </div>
          </motion.div>

          {/* Floating accent badges — around the card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -top-4 -right-3 bg-red-600 text-white text-[10px] tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-red-900/30"
          >
            HIGH LYCOPENE
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -bottom-3 -left-2 bg-white/90 backdrop-blur-sm text-neutral-700 text-[10px] tracking-wider px-3 py-1.5 rounded-full shadow-lg border border-neutral-100"
          >
            LOW CALORIE
          </motion.div>
        </div>
      </div>

      {/* Edge gradients for blending into dark layout */}
      <div className="hidden" />
    </div>
  );
}