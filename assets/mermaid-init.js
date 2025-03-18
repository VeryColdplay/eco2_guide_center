document.addEventListener('DOMContentLoaded', function () {
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            flowchart: { useMaxWidth: true, htmlLabels: true }
        });
        mermaid.run();
    } else {
        console.error('Mermaid.js is not loaded properly.');
    }
});
