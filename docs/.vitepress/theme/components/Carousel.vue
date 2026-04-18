<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
const props = defineProps(["items"]);
const cur = ref(0);
const lightbox = ref(false);
const hovered = ref(false);
const n = () => props.items.length;
const go = (dir) => {
    cur.value = (cur.value + dir + n()) % n();
};
const state = (i) => {
    if (i === cur.value) return "active";
    if (i === (cur.value + 1) % n()) return "next";
    if (i === (cur.value - 1 + n()) % n()) return "prev";
    return "hidden";
};
const onKey = (e) => {
    if (!lightbox.value) return;
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
    if (e.key === "Escape") lightbox.value = false;
};
let timer = null;
const startTimer = () => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (!lightbox.value && !hovered.value) go(1);
    }, 2000);
};
onMounted(() => {
    window.addEventListener("keydown", onKey);
    startTimer();
});
onUnmounted(() => {
    window.removeEventListener("keydown", onKey);
    clearInterval(timer);
});
watch(lightbox, (open) => {
    open ? clearInterval(timer) : startTimer();
});
</script>

<template>
    <div class="wrap">
        <div
            class="stage"
            @mouseenter="hovered = true"
            @mouseleave="hovered = false"
        >
            <div
                v-for="(item, i) in items"
                :key="i"
                class="slide"
                :class="state(i)"
            >
                <div
                    class="media"
                    :class="{ main: i === cur }"
                    @click="i === cur ? (lightbox = true) : null"
                >
                    <video
                        v-if="item.video"
                        :src="item.video"
                        muted
                        loop
                        autoplay
                        playsinline
                    />
                    <img v-else :src="item.img" :alt="item.title" />
                    <div
                        v-if="i !== cur"
                        class="veil"
                        @click.stop="go(i > cur ? 1 : -1)"
                    />
                </div>
            </div>
        </div>
        <div class="title">{{ src = items[cur].title }}</div>
        <div class="controls">
            <div class="btn-group">
                <button
                    class="gbtn gbtn-l"
                    @click="go(-1)"
                    aria-label="Previous"
                >
                    <span class="ms">arrow_back</span>
                </button>
                <button class="gbtn gbtn-r" @click="go(1)" aria-label="Next">
                    <span class="ms">arrow_forward</span>
                </button>
            </div>
            <div class="dots">
                <button
                    v-for="(_, i) in items"
                    :key="i"
                    class="dot"
                    :class="{ on: i === cur }"
                    @click="cur = i"
                />
            </div>
            <div class="counter">{{ cur + 1 }} / {{ items.length }}</div>
        </div>

        <Teleport to="body">
            <Transition name="lb">
                <div
                    v-if="lightbox"
                    class="lb-backdrop"
                    @click="lightbox = false"
                >
                    <div class="lb-box" @click.stop>
                        <video
                            v-if="items[cur].video"
                            :src="items[cur].video"
                            muted
                            loop
                            autoplay
                            playsinline
                        />
                        <img
                            v-else
                            :src="items[cur].img"
                            :alt="items[cur].title"
                        />
                        <div class="lb-footer">
                            <span class="lb-title">{{ items[cur].title }}</span>
                            <span class="lb-hint">
                                <span class="ms">keyboard</span> ← → to navigate
                                · esc to close
                            </span>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..900&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap");

.wrap {
    padding: 2rem 0 1.5rem;
    overflow: hidden;
    width: 100%;
    font-family: "Google Sans Flex", sans-serif;
}

.stage {
    position: relative;
    height: 440px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide {
    position: absolute;
    width: 70%;
    transition:
        transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.5s ease;
    z-index: 1;
}
.slide.active {
    z-index: 10;
    transform: scale(1);
    opacity: 1;
}
.slide.next {
    z-index: 5;
    transform: translateX(57%) scale(0.76);
    opacity: 0.5;
}
.slide.prev {
    z-index: 5;
    transform: translateX(-57%) scale(0.76);
    opacity: 0.5;
}
.slide.hidden {
    opacity: 0;
    transform: scale(0.5);
    pointer-events: none;
}

.media {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 16/9;
    background: var(--vp-c-bg-soft);
    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.1);
}
.media.main {
    cursor: zoom-in;
}
.media img,
.media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.veil {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.42);
    cursor: pointer;
    transition: background 0.3s;
}
.veil:hover {
    background: rgba(0, 0, 0, 0.28);
}

.ms {
    font-family: "Material Symbols Rounded";
    font-style: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    user-select: none;
}

.controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 22px;
}
.title {
    font-size: 18px;
    margin-top: -2em;
    font-weight: 600;
    color: var(--vp-c-text-2);
    min-width: 32px;
    text-align: center;
}
.btn-group {
    display: flex;
    align-items: center;
    gap: 3px;
}

.gbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    cursor: pointer;
    transition:
        background 0.18s ease,
        transform 0.12s ease;
    color: var(--vp-c-brand-1);
    padding: 0;
}
.gbtn-l {
    border-radius: 20px 6px 6px 20px;
}
.gbtn-r {
    border-radius: 6px 20px 20px 6px;
}
.gbtn:hover {
    background: var(--vp-c-brand-soft);
    border-color: var(--vp-c-brand-2);
}
.gbtn:active {
    transform: scale(0.91);
}
.gbtn .ms {
    font-size: 22px;
    font-variation-settings:
        "FILL" 0,
        "wght" 350,
        "GRAD" 0,
        "opsz" 24;
}

.dots {
    display: flex;
    align-items: center;
    gap: 5px;
}
.dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--vp-c-divider);
    border: none;
    padding: 0;
    cursor: pointer;
    transition:
        background 0.22s,
        width 0.22s,
        border-radius 0.22s;
}
.dot.on {
    width: 18px;
    border-radius: 100px;
    background: var(--vp-c-brand-1);
}

.counter {
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-text-2);
    letter-spacing: 0.04em;
    min-width: 32px;
    text-align: center;
}

.lb-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.82);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
}

.lb-box {
    position: relative;
    width: 100%;
    max-width: 1000px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
}
.lb-box img,
.lb-box video {
    width: 100%;
    display: block;
    aspect-ratio: 16/9;
    object-fit: contain;
    background: #000;
}

.lb-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 28px 24px 20px;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7) 0%,
        transparent 100%
    );
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
}

.lb-title {
    font-size: 16px;
    font-weight: 550;
    color: #fff;
    letter-spacing: 0.01em;
}

.lb-hint {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.45);
    letter-spacing: 0.02em;
    white-space: nowrap;
}
.lb-hint .ms {
    font-size: 13px;
    font-variation-settings:
        "FILL" 0,
        "wght" 300,
        "GRAD" 0,
        "opsz" 20;
}

.lb-enter-active,
.lb-leave-active {
    transition: opacity 0.22s ease;
}
.lb-enter-active .lb-box,
.lb-leave-active .lb-box {
    transition:
        transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.22s ease;
}
.lb-enter-from,
.lb-leave-to {
    opacity: 0;
}
.lb-enter-from .lb-box {
    transform: scale(0.96);
}
.lb-leave-to .lb-box {
    transform: scale(0.96);
    opacity: 0;
}

@media (max-width: 600px) {
    .slide {
        width: 84%;
    }
    .slide.next,
    .slide.prev {
        display: none;
    }
    .lb-backdrop {
        padding: 16px;
    }
}
</style>
