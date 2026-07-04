/* beò cookie consent - PECR/UK GDPR compliant */
(function() {
    if (localStorage.getItem('beo-cookies') === 'accepted') {
        loadAnalytics();
        return;
    }
    if (localStorage.getItem('beo-cookies') === 'declined') return;

    var style = document.createElement('style');
    style.textContent = '.cookie-bar{position:fixed;bottom:0;left:0;right:0;background:#1B4332;color:rgba(250,250,247,0.85);padding:1rem 1.5rem;display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap;z-index:9999;font-family:"DM Sans",sans-serif;font-size:0.85rem;line-height:1.5;box-shadow:0 -2px 12px rgba(0,0,0,0.15)}.cookie-bar a{color:rgba(250,250,247,0.7);text-decoration:underline;border:none}.cookie-bar button{padding:8px 20px;border-radius:5px;border:none;font-family:"DM Sans",sans-serif;font-size:0.82rem;font-weight:500;cursor:pointer;white-space:nowrap}.cookie-bar .cb-accept{background:#FAFAF7;color:#1B4332}.cookie-bar .cb-decline{background:transparent;color:rgba(250,250,247,0.6);border:1px solid rgba(250,250,247,0.2)}';
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'cookie-bar';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML = '<span>We use cookies for anonymous analytics to understand how people find us. No advertising, no tracking across sites. <a href="/privacy.html">Privacy Policy</a></span><button class="cb-accept">Accept</button><button class="cb-decline">Decline</button>';
    document.body.appendChild(bar);

    bar.querySelector('.cb-accept').addEventListener('click', function() {
        localStorage.setItem('beo-cookies', 'accepted');
        bar.remove();
        loadAnalytics();
    });

    bar.querySelector('.cb-decline').addEventListener('click', function() {
        localStorage.setItem('beo-cookies', 'declined');
        bar.remove();
    });

    function loadAnalytics() {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-9KPL21EX4E';
        document.head.appendChild(s);
        s.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9KPL21EX4E');
        };
    }
})();
