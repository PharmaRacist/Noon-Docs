<template>
    <footer class="noon-footer">
        <div class="footer-content">
            <p>Project Noon © 2026</p>
            <div class="legal-links">
                <a href="/Noon-Docs/pages/privacy">Privacy Policy</a>
                <span class="sep">|</span>
                <a href="/Noon-Docs/pages/tos">Terms of Service</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.noon-footer {
    padding: 32px 24px;
    border-top: 1px solid var(--vp-c-divider);
    background-color: var(--vp-c-bg);
}
.footer-content {
    margin: 0 auto;
    max-width: var(--vp-layout-max-width);
    text-align: center;
}
.legal-links {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 8px;
    font-size: 14px;
}
.legal-links a {
    color: var(--vp-c-brand-1);
    font-weight: 500;
    text-decoration: none;
}
.legal-links a:hover {
    text-decoration: underline;
}
.sep {
    color: var(--vp-c-text-3);
}
p {
    color: var(--vp-c-text-2);
    margin: 0;
    font-size: 14px;
}
</style>
