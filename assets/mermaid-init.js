document.addEventListener('DOMContentLoaded', function () {
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            flowchart: { useMaxWidth: true, htmlLabels: true }
        });

        // ✅ KaTex 수식 렌더링 설정 추가 (필수)
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "\\[", right: "\\]", display: true},
                {left: "\\(", right: "\\)", display: false}
            ]
        });

        mermaid.run();

        // ✅ Mermaid SVG 내부 HTML 수식 강제 렌더링 (핵심)
        setTimeout(() => {
            document.querySelectorAll(".mermaid").forEach((el) => {
                const svg = el.querySelector("svg");
                if (svg) {
                    const htmlElements = svg.querySelectorAll("foreignObject div, foreignObject span");

                    htmlElements.forEach((htmlElement) => {
                        if (typeof renderMathInElement === 'function') {
                            renderMathInElement(htmlElement, {
                                delimiters: [
                                    {left: "$$", right: "$$", display: true},
                                    {left: "\\[", right: "\\]", display: true},
                                    {left: "\\(", right: "\\)", display: false}
                                ]
                            });
                        } else {
                            console.warn("KaTeX is not loaded properly.");
                        }
                    });

                    // ✅ Mermaid.js SVG 내부 폰트 강제 적용
                    svg.querySelectorAll('text').forEach((textElement) => {
                        textElement.style.fontFamily = "'Pretendard', sans-serif";
                        textElement.style.fill = '#1E3A8A';  // 파란색
                        textElement.style.fontWeight = '600';  // 굵은 글씨
                    });
                }
            });
        }, 100);  // Mermaid.js 렌더링 후 강제 딜레이 추가
    } else {
        console.error('Mermaid.js is not loaded properly.');
    }
});
