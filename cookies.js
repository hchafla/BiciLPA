/**
 * cookies.js — Banner de consentimiento de cookies para BiciLPA
 *
 * Cómo usarlo:
 * 1. Sustituye GA_MEASUREMENT_ID más abajo por tu ID real de GA4 (G-XXXXXXXXXX).
 * 2. Incluye este archivo en TODAS las páginas, justo antes de </body>:
 *      <script src="cookies.js"></script>
 * 3. No incluyas el snippet de gtag.js de Google en ningún sitio más:
 *    este archivo ya se encarga de cargarlo, y SOLO si el usuario acepta.
 */

(function () {
    'use strict';

    const GA_MEASUREMENT_ID = 'G-J2VJF5TMWG'; // <-- sustituye por tu ID real

    const CLAVE_CONSENTIMIENTO = 'bicilpa_cookies_consent'; // 'accepted' | 'rejected'
    const CLAVE_FECHA = 'bicilpa_cookies_consent_date';

    function obtenerConsentimiento() {
        return localStorage.getItem(CLAVE_CONSENTIMIENTO);
    }

    function guardarConsentimiento(valor) {
        localStorage.setItem(CLAVE_CONSENTIMIENTO, valor);
        localStorage.setItem(CLAVE_FECHA, new Date().toISOString());
    }

    function cargarGoogleAnalytics() {
        if (window.__gaCargado) return;
        window.__gaCargado = true;

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
    }

    function crearBanner() {
        if (document.getElementById('cookie-banner')) return;

        const estilos = document.createElement('style');
        estilos.textContent = `
            #cookie-banner {
                position: fixed;
                left: 20px;
                right: 20px;
                bottom: 20px;
                z-index: 3000;
                max-width: 560px;
                margin: 0 auto;
                background: rgba(255, 255, 255, 0.98);
                border: 1px solid #e2e8f0;
                border-radius: 20px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                padding: 20px 22px;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                color: #2c3e50;
                transform: translateY(140%);
                transition: transform 0.4s cubic-bezier(0.1, 0.76, 0.55, 0.94);
            }
            #cookie-banner.visible {
                transform: translateY(0);
            }
            #cookie-banner p {
                font-size: 0.9rem;
                line-height: 1.5;
                margin: 0 0 14px 0;
                color: #4a5568;
            }
            #cookie-banner p a {
                color: #3498db;
                text-decoration: underline;
            }
            #cookie-banner .cookie-botones {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
            #cookie-banner button {
                border: none;
                border-radius: 30px;
                padding: 10px 20px;
                font-weight: 600;
                font-size: 0.85rem;
                cursor: pointer;
                font-family: inherit;
            }
            #cookie-banner .btn-aceptar {
                background: #3498db;
                color: #fff;
            }
            #cookie-banner .btn-rechazar {
                background: #f8f9fa;
                color: #2c3e50;
                border: 1px solid #e2e8f0;
            }
            @media (max-width: 480px) {
                #cookie-banner {
                    left: 12px;
                    right: 12px;
                    bottom: 12px;
                    padding: 18px;
                }
            }
        `;
        document.head.appendChild(estilos);

        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Consentimiento de cookies');
        banner.innerHTML = `
            <p>
                Usamos cookies propias necesarias para el funcionamiento de la web y,
                si nos das tu permiso, cookies de análisis (Google Analytics) para
                entender cómo se usa BiciLPA. Puedes leer más en nuestra
                <a href="privacidad.html">Política de Privacidad</a>.
            </p>
            <div class="cookie-botones">
                <button type="button" class="btn-aceptar" id="cookie-btn-aceptar">Aceptar</button>
                <button type="button" class="btn-rechazar" id="cookie-btn-rechazar">Rechazar</button>
            </div>
        `;
        document.body.appendChild(banner);

        requestAnimationFrame(() => banner.classList.add('visible'));

        document.getElementById('cookie-btn-aceptar').addEventListener('click', () => {
            guardarConsentimiento('accepted');
            cargarGoogleAnalytics();
            ocultarBanner();
        });

        document.getElementById('cookie-btn-rechazar').addEventListener('click', () => {
            guardarConsentimiento('rejected');
            ocultarBanner();
        });
    }

    function ocultarBanner() {
        const banner = document.getElementById('cookie-banner');
        if (!banner) return;
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 400);
    }

    function iniciar() {
        const consentimiento = obtenerConsentimiento();
        if (consentimiento === 'accepted') {
            cargarGoogleAnalytics();
        } else if (consentimiento === 'rejected') {
            // No se carga nada. No se vuelve a preguntar salvo que el usuario
            // reabra las preferencias manualmente.
        } else {
            crearBanner();
        }
    }

    // API pública para poder reabrir las preferencias desde cualquier página
    // (por ejemplo, desde un enlace "Configurar cookies" en privacidad.html)
    window.BiciLPACookies = {
        abrirPreferencias: crearBanner,
        estadoActual: obtenerConsentimiento
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciar);
    } else {
        iniciar();
    }
})();
