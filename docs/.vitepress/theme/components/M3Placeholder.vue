<script setup>
import { computed } from "vue";

const props = defineProps({
    icon: { type: String, default: "construction" },
    title: { type: String, default: "Coming soon" },
    description: { type: String, default: "We're still working on this." },
    shape: { type: String, default: "cookie6" },
});

function cookiePath(sides, outerR, innerR, cx, cy, smooth = 0.35) {
    const pts = [];
    const total = sides * 2;
    for (let i = 0; i < total; i++) {
        const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
        const r = i % 2 === 0 ? outerR : innerR;
        pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
    }
    let d = "";
    for (let i = 0; i < pts.length; i++) {
        const prev = pts[(i - 1 + pts.length) % pts.length];
        const curr = pts[i];
        const next = pts[(i + 1) % pts.length];
        if (i === 0) {
            d += `M ${curr[0].toFixed(2)} ${curr[1].toFixed(2)} `;
        }
        const cp1x = curr[0] + (next[0] - prev[0]) * smooth;
        const cp1y = curr[1] + (next[1] - prev[1]) * smooth;
        const n2 = pts[(i + 2) % pts.length];
        const cp2x = next[0] - (n2[0] - curr[0]) * smooth;
        const cp2y = next[1] - (n2[1] - curr[1]) * smooth;
        d += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${next[0].toFixed(2)} ${next[1].toFixed(2)} `;
    }
    return d + "Z";
}

function sunPath(points, outerR, innerR, cx, cy) {
    const total = points * 2;
    let d = "";
    for (let i = 0; i < total; i++) {
        const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
        const r = i % 2 === 0 ? outerR : innerR;
        const x = (cx + r * Math.cos(angle)).toFixed(2);
        const y = (cy + r * Math.sin(angle)).toFixed(2);
        d += i === 0 ? `M ${x} ${y} ` : `L ${x} ${y} `;
    }
    return d + "Z";
}

const shapePath = computed(() => {
    const c = 60,
        o = 56,
        s = props.shape;
    if (s === "cookie6") return cookiePath(6, o, 44, c, c, 0.3);
    if (s === "cookie9") return cookiePath(9, o, 46, c, c, 0.25);
    if (s === "cookie12") return cookiePath(12, o, 48, c, c, 0.2);
    if (s === "sunny") return sunPath(8, o, 38, c, c);
    if (s === "softburst") return cookiePath(8, o, 36, c, c, 0.45);
    return cookiePath(6, o, 44, c, c, 0.3);
});
</script>

<template>
    <div class="ph-wrap">
        <div class="ph-inner">
            <div class="ph-shape-wrap">
                <svg
                    class="ph-svg"
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path class="ph-shape-bg" :d="shapePath" />
                </svg>
                <span class="ms ph-icon">{{ icon }}</span>
            </div>

            <h2 class="ph-title">{{ title }}</h2>
            <p class="ph-desc">{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
.ph-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    padding: 2rem;
    font-family: "main", sans-serif;
}

.ph-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 320px;
    text-align: center;
}

.ph-shape-wrap {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: spin 12s linear infinite;
}

.ph-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.ph-shape-bg {
    fill: var(--vp-c-brand-soft);
    transition: fill 0.3s;
}

.ph-icon {
    position: relative;
    z-index: 1;
    font-family: "symbols";
    font-style: normal;
    font-size: 72px;
    font-variation-settings:
        "FILL" 1,
        "wght" 400,
        "GRAD" 0,
        "opsz" 40;
    line-height: 1;
    color: var(--vp-c-brand-1);
    -webkit-font-smoothing: antialiased;
    animation: spin-reverse 12s linear infinite;
}

.ph-title {
    font-size: 20px;
    font-weight: 650;
    color: var(--vp-c-text-1);
    margin: 0;
    letter-spacing: -0.015em;
}

.ph-desc {
    font-size: 14px;
    font-weight: 400;
    color: var(--vp-c-text-2);
    margin: 0;
    line-height: 1.6;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-reverse {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}
</style>
