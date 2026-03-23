// ============================================
// 8K Strong IPTV - Main JavaScript File
// ============================================

// Translations for all pages (English, Arabic, French, Spanish, German, Italian)
const translations = {
    en: {
        home: "Home",
        convert: "Convert",
        reseller: "Reseller",
        subscription: "Subscription",
        setup_guide: "Setup Guide",
        about: "About",
        contact: "Contact",
        blogs: "Blogs",
        resolution: "Resolution Center",
        search: "Search",
        login: "Login",
        free_trial: "Free Trial",
        subscribe: "Subscribe",
        learn_more: "Learn More",
        get_started: "Get Started",
        // Hero Section
        hero_title: "8K Strong IPTV – The Ultimate 4K Streaming Experience",
        hero_desc: "33,076+ live channels, 119,608+ movies, 28,753+ series, built-in VPN, and 24/7 support. Start watching today!",
        trial_telegram: "Free Trial via Telegram",
        trial_whatsapp: "Free Trial via WhatsApp",
        // Panel Section
        panel_title: "Strong 8K IPTV Panel",
        panel_subtitle: "Premium 8K reseller panel with fast activation, stable performance, a modern dashboard, and 24/7 support",
        channels: "Channels",
        movies: "Movies",
        series: "Series",
        instant_line: "Instant Line Creation",
        uptime: "99.9% Uptime",
        anti_freeze: "Anti-Freeze Streaming",
        support: "24/7 Support",
        // Slideshow
        slide1_title: "Premium IPTV Service",
        slide1_desc: "33,076+ live channels & 148,361+ movies & series in 4K quality",
        slide1_btn: "Subscribe Now",
        slide2_title: "Become a Reseller",
        slide2_desc: "Flexible plans – start your own business today",
        slide2_btn: "Join Reseller",
        slide3_title: "Limited Time Offer",
        slide3_desc: "Get 20% off on yearly subscription",
        slide3_btn: "Claim Offer",
        // Credit System
        credit_title: "Credit System",
        credit_desc: "Simple and transparent – convert credits directly into subscription months.",
        credits: "Credits",
        subscription_months: "Subscription Months",
        free_trial_btn: "Free Trial",
        about_reseller_btn: "About Reseller",
        panel_preview: "Reseller Panel Preview",
        panel_placeholder: "(Image placeholder)",
        // Features
        features_title: "Why Choose 8K Strong IPTV?",
        feature1_title: "Ultra Fast",
        feature1_desc: "High‑performance servers for buffer‑free streaming",
        feature2_title: "VPN Protection",
        feature2_desc: "Built‑in VPN for privacy and security",
        feature3_title: "Worldwide Channels",
        feature3_desc: "Channels from 100+ countries",
        feature4_title: "24/7 Support",
        feature4_desc: "Dedicated support team",
        feature5_title: "Reseller Dashboard",
        feature5_desc: "Full control with real‑time analytics",
        feature6_title: "Easy Integration",
        feature6_desc: "Compatible with all popular IPTV players",
        // Testimonials
        testimonials_title: "What Our Customers Say",
        testimonial1: "Best IPTV service I've used. No buffering, great channel selection, and the VPN is a nice bonus.",
        testimonial2: "As a reseller, the panel is super easy to use. My customers love the quality.",
        testimonial3: "The 4K streams are amazing. Support responds within minutes. Highly recommended!",
        // FAQ
        faq_title: "Frequently Asked Questions",
        faq1_q: "What devices are supported?",
        faq1_a: "All major devices: Smart TVs (Samsung, LG), Android boxes, iOS, Android phones/tablets, Windows/Mac, and more.",
        faq2_q: "Is there a free trial?",
        faq2_a: "Yes! Contact us on Telegram or WhatsApp to get a 24‑hour free trial.",
        faq3_q: "Can I use my own player?",
        faq3_a: "Yes, you can use any player that supports M3U or M3U8 links, such as VLC, TiviMate, or IPTV Smarters.",
        faq4_q: "Do you offer reseller discounts?",
        faq4_a: "Yes! Check our Reseller page for bulk credit options and white‑label plans.",
        // Plans
        plans_title: "Our Plans & Packages",
        plan1_name: "1 Month",
        plan3_name: "3 Months",
        plan6_name: "6 Months",
        plan12_name: "12 Months",
        all_channels: "All channels",
        hd: "HD quality",
        one_conn: "1 connection",
        vpn: "VPN included",
        catchup: "Catch‑Up TV",
        ibopro: "Free IboproApp activation for 1 year",
        // Footer
        company: "Company",
        about_us: "About Us",
        contact_us: "Contact Us",
        blog: "Blog",
        product: "Product",
        pricing: "Pricing",
        resellers_plan: "Resellers Plan",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        refund: "Refund Policy",
        dmca: "DMCA Policy",
        footer_desc: "Premium IPTV service with the best quality and support.",
        copyright: "© 2026 8K Strong IPTV. All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        convert: "تحويل",
        reseller: "إعادة البيع",
        subscription: "الاشتراكات",
        setup_guide: "دليل الإعداد",
        about: "من نحن",
        contact: "اتصل بنا",
        blogs: "المدونة",
        resolution: "مركز الحلول",
        search: "بحث",
        login: "تسجيل الدخول",
        free_trial: "تجربة مجانية",
        subscribe: "اشترك",
        learn_more: "اعرف المزيد",
        get_started: "ابدأ الآن",
        hero_title: "8K Strong IPTV – تجربة البث المثالية 4K",
        hero_desc: "أكثر من 33,076 قناة مباشرة، 119,608 فيلم، 28,753 مسلسل، VPN مدمج، ودعم 24/7. ابدأ المشاهدة اليوم!",
        trial_telegram: "تجربة مجانية عبر تيليجرام",
        trial_whatsapp: "تجربة مجانية عبر واتساب",
        panel_title: "لوحة 8K Strong IPTV",
        panel_subtitle: "لوحة موزع 8K متميزة مع تفعيل سريع وأداء مستقر ولوحة تحكم حديثة ودعم 24/7",
        channels: "قنوات",
        movies: "أفلام",
        series: "مسلسلات",
        instant_line: "إنشاء خط فوري",
        uptime: "وقت تشغيل 99.9%",
        anti_freeze: "بث بدون تجميد",
        support: "دعم 24/7",
        slide1_title: "خدمة IPTV المميزة",
        slide1_desc: "أكثر من 33,076 قناة مباشرة و 148,361 فيلم ومسلسل بجودة 4K",
        slide1_btn: "اشترك الآن",
        slide2_title: "كن موزعاً معتمداً",
        slide2_desc: "خطط مرنة – ابدأ مشروعك اليوم",
        slide2_btn: "انضم للموزعين",
        slide3_title: "عرض خاص",
        slide3_desc: "احصل على خصم 20% على الاشتراك السنوي",
        slide3_btn: "استفد من العرض",
        credit_title: "نظام الأرصدة",
        credit_desc: "بسيط وشفاف – حوّل الأرصدة مباشرة إلى أشهر اشتراك.",
        credits: "الأرصدة",
        subscription_months: "أشهر الاشتراك",
        free_trial_btn: "تجربة مجانية",
        about_reseller_btn: "عن إعادة البيع",
        panel_preview: "معاينة لوحة الموزع",
        panel_placeholder: "(مكان للصورة)",
        features_title: "لماذا تختار 8K Strong IPTV؟",
        feature1_title: "فائق السرعة",
        feature1_desc: "سيرفرات عالية الأداء لبث بدون تقطيع",
        feature2_title: "حماية VPN",
        feature2_desc: "VPN مدمج للخصوصية والأمان",
        feature3_title: "قنوات عالمية",
        feature3_desc: "قنوات من أكثر من 100 دولة",
        feature4_title: "دعم 24/7",
        feature4_desc: "فريق دعم متخصص جاهز لمساعدتك",
        feature5_title: "لوحة تحكم الموزع",
        feature5_desc: "تحكم كامل مع تحليلات فورية وإدارة المستخدمين",
        feature6_title: "تكامل سهل",
        feature6_desc: "متوافق مع جميع مشغلات IPTV الشهيرة",
        testimonials_title: "ماذا يقول عملاؤنا",
        testimonial1: "أفضل خدمة IPTV استخدمتها. لا تقطيع، تشكيلة قنوات رائعة، وVPN مكافأة لطيفة.",
        testimonial2: "كموزع، لوحة التحكم سهلة الاستخدام للغاية. عملائي يحبون الجودة.",
        testimonial3: "بث 4K مذهل. الدعم يستجيب في دقائق. أنصح به بشدة!",
        faq_title: "الأسئلة الشائعة",
        faq1_q: "ما هي الأجهزة المدعومة؟",
        faq1_a: "جميع الأجهزة الرئيسية: تلفزيونات ذكية (سامسونج، LG)، أندرويد بوكس، iOS، هواتف/أجهزة لوحية أندرويد، ويندوز/ماك، والمزيد.",
        faq2_q: "هل هناك فترة تجريبية مجانية؟",
        faq2_a: "نعم! اتصل بنا على تيليجرام أو واتساب للحصول على 24 ساعة تجربة مجانية.",
        faq3_q: "هل يمكنني استخدام مشغل خاص بي؟",
        faq3_a: "نعم، يمكنك استخدام أي مشغل يدعم روابط M3U أو M3U8، مثل VLC أو TiviMate أو IPTV Smarters.",
        faq4_q: "هل تقدمون خصومات للموزعين؟",
        faq4_a: "نعم! تحقق من صفحة الموزعين لخيارات الأرصدة بالجملة والعلامة البيضاء.",
        plans_title: "خططنا وباقاتنا",
        plan1_name: "شهر واحد",
        plan3_name: "3 أشهر",
        plan6_name: "6 أشهر",
        plan12_name: "12 شهراً",
        all_channels: "جميع القنوات",
        hd: "جودة HD",
        one_conn: "اتصال واحد",
        vpn: "VPN مجاني",
        catchup: "مشاهدة متأخرة",
        ibopro: "تفعيل IboproApp مجاناً لمدة عام",
        company: "الشركة",
        about_us: "من نحن",
        contact_us: "اتصل بنا",
        blog: "المدونة",
        product: "المنتج",
        pricing: "الأسعار",
        resellers_plan: "خطة الموزعين",
        legal: "قانوني",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        refund: "سياسة الاسترداد",
        dmca: "سياسة DMCA",
        footer_desc: "خدمة IPTV متميزة بأفضل جودة ودعم.",
        copyright: "© 2026 8K Strong IPTV. جميع الحقوق محفوظة."
    },
    fr: {
        home: "Accueil",
        convert: "Convertir",
        reseller: "Revendeur",
        subscription: "Abonnement",
        setup_guide: "Guide d'installation",
        about: "À propos",
        contact: "Contact",
        blogs: "Blog",
        resolution: "Centre de résolution",
        search: "Rechercher",
        login: "Connexion",
        free_trial: "Essai gratuit",
        subscribe: "S'abonner",
        learn_more: "En savoir plus",
        get_started: "Commencer",
        hero_title: "8K Strong IPTV – L'expérience de streaming 4K ultime",
        hero_desc: "33 076+ chaînes en direct, 119 608+ films, 28 753+ séries, VPN intégré et support 24/7. Commencez à regarder aujourd'hui!",
        trial_telegram: "Essai gratuit via Telegram",
        trial_whatsapp: "Essai gratuit via WhatsApp",
        panel_title: "Panneau 8K Strong IPTV",
        panel_subtitle: "Panneau revendeur 8K premium avec activation rapide, performances stables, tableau de bord moderne et support 24/7",
        channels: "Chaînes",
        movies: "Films",
        series: "Séries",
        instant_line: "Création instantanée",
        uptime: "Disponibilité 99.9%",
        anti_freeze: "Streaming anti-gel",
        support: "Support 24/7",
        slide1_title: "Service IPTV Premium",
        slide1_desc: "33 076+ chaînes en direct et 148 361+ films et séries en qualité 4K",
        slide1_btn: "S'abonner",
        slide2_title: "Devenez revendeur",
        slide2_desc: "Plans flexibles – lancez votre entreprise aujourd'hui",
        slide2_btn: "Devenir revendeur",
        slide3_title: "Offre limitée",
        slide3_desc: "Obtenez 20% de réduction sur l'abonnement annuel",
        slide3_btn: "Profiter de l'offre",
        credit_title: "Système de crédits",
        credit_desc: "Simple et transparent – convertissez les crédits directement en mois d'abonnement.",
        credits: "Crédits",
        subscription_months: "Mois d'abonnement",
        free_trial_btn: "Essai gratuit",
        about_reseller_btn: "À propos du revendeur",
        panel_preview: "Aperçu du panneau revendeur",
        panel_placeholder: "(Espace réservé à l'image)",
        features_title: "Pourquoi choisir 8K Strong IPTV?",
        feature1_title: "Ultra rapide",
        feature1_desc: "Serveurs haute performance pour un streaming sans interruption",
        feature2_title: "Protection VPN",
        feature2_desc: "VPN intégré pour la confidentialité et la sécurité",
        feature3_title: "Chaînes mondiales",
        feature3_desc: "Chaînes de plus de 100 pays",
        feature4_title: "Support 24/7",
        feature4_desc: "Équipe d'assistance dédiée",
        feature5_title: "Tableau de bord revendeur",
        feature5_desc: "Contrôle total avec analyses en temps réel",
        feature6_title: "Intégration facile",
        feature6_desc: "Compatible avec tous les lecteurs IPTV populaires",
        testimonials_title: "Ce que disent nos clients",
        testimonial1: "Le meilleur service IPTV que j'ai utilisé. Pas de mise en mémoire tampon, excellente sélection de chaînes, et le VPN est un bonus.",
        testimonial2: "En tant que revendeur, le panneau est super facile à utiliser. Mes clients adorent la qualité.",
        testimonial3: "Les flux 4K sont incroyables. Le support répond en quelques minutes. Hautement recommandé!",
        faq_title: "Questions fréquentes",
        faq1_q: "Quels appareils sont pris en charge?",
        faq1_a: "Tous les principaux appareils: téléviseurs intelligents (Samsung, LG), boîtiers Android, iOS, téléphones/tablettes Android, Windows/Mac, etc.",
        faq2_q: "Y a-t-il un essai gratuit?",
        faq2_a: "Oui! Contactez-nous sur Telegram ou WhatsApp pour obtenir un essai gratuit de 24 heures.",
        faq3_q: "Puis-je utiliser mon propre lecteur?",
        faq3_a: "Oui, vous pouvez utiliser n'importe quel lecteur prenant en charge les liens M3U ou M3U8, comme VLC, TiviMate ou IPTV Smarters.",
        faq4_q: "Offrez-vous des réductions pour les revendeurs?",
        faq4_a: "Oui! Consultez notre page Revendeur pour les options de crédits en gros et de marque blanche.",
        plans_title: "Nos plans et forfaits",
        plan1_name: "1 mois",
        plan3_name: "3 mois",
        plan6_name: "6 mois",
        plan12_name: "12 mois",
        all_channels: "Toutes les chaînes",
        hd: "Qualité HD",
        one_conn: "1 connexion",
        vpn: "VPN inclus",
        catchup: "Télévision de rattrapage",
        ibopro: "Activation gratuite d'IboproApp pour 1 an",
        company: "Société",
        about_us: "À propos",
        contact_us: "Contactez-nous",
        blog: "Blog",
        product: "Produit",
        pricing: "Tarifs",
        resellers_plan: "Plan revendeur",
        legal: "Juridique",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        refund: "Politique de remboursement",
        dmca: "Politique DMCA",
        footer_desc: "Service IPTV premium avec la meilleure qualité et support.",
        copyright: "© 2026 8K Strong IPTV. Tous droits réservés."
    },
    es: {
        home: "Inicio",
        convert: "Convertir",
        reseller: "Revendedor",
        subscription: "Suscripción",
        setup_guide: "Guía de configuración",
        about: "Acerca de",
        contact: "Contacto",
        blogs: "Blog",
        resolution: "Centro de resolución",
        search: "Buscar",
        login: "Iniciar sesión",
        free_trial: "Prueba gratis",
        subscribe: "Suscribirse",
        learn_more: "Más información",
        get_started: "Comenzar",
        hero_title: "8K Strong IPTV – La experiencia de streaming 4K definitiva",
        hero_desc: "33,076+ canales en vivo, 119,608+ películas, 28,753+ series, VPN integrado y soporte 24/7. ¡Comienza a ver hoy!",
        trial_telegram: "Prueba gratis vía Telegram",
        trial_whatsapp: "Prueba gratis vía WhatsApp",
        panel_title: "Panel 8K Strong IPTV",
        panel_subtitle: "Panel de revendedor 8K premium con activación rápida, rendimiento estable, panel moderno y soporte 24/7",
        channels: "Canales",
        movies: "Películas",
        series: "Series",
        instant_line: "Creación instantánea",
        uptime: "99.9% de actividad",
        anti_freeze: "Streaming anti-congelación",
        support: "Soporte 24/7",
        slide1_title: "Servicio IPTV Premium",
        slide1_desc: "33,076+ canales en vivo y 148,361+ películas y series en calidad 4K",
        slide1_btn: "Suscribirse",
        slide2_title: "Conviértete en revendedor",
        slide2_desc: "Planes flexibles – comienza tu negocio hoy",
        slide2_btn: "Unirse",
        slide3_title: "Oferta limitada",
        slide3_desc: "Obtén 20% de descuento en suscripción anual",
        slide3_btn: "Reclamar oferta",
        credit_title: "Sistema de créditos",
        credit_desc: "Simple y transparente – convierte créditos directamente en meses de suscripción.",
        credits: "Créditos",
        subscription_months: "Meses de suscripción",
        free_trial_btn: "Prueba gratis",
        about_reseller_btn: "Acerca de revendedor",
        panel_preview: "Vista previa del panel",
        panel_placeholder: "(Espacio para imagen)",
        features_title: "¿Por qué elegir 8K Strong IPTV?",
        feature1_title: "Ultra rápido",
        feature1_desc: "Servidores de alto rendimiento para streaming sin interrupciones",
        feature2_title: "Protección VPN",
        feature2_desc: "VPN integrada para privacidad y seguridad",
        feature3_title: "Canales mundiales",
        feature3_desc: "Canales de más de 100 países",
        feature4_title: "Soporte 24/7",
        feature4_desc: "Equipo de soporte dedicado",
        feature5_title: "Panel de revendedor",
        feature5_desc: "Control total con análisis en tiempo real",
        feature6_title: "Integración fácil",
        feature6_desc: "Compatible con todos los reproductores IPTV populares",
        testimonials_title: "Lo que dicen nuestros clientes",
        testimonial1: "El mejor servicio IPTV que he usado. Sin almacenamiento en búfer, excelente selección de canales, y el VPN es un buen extra.",
        testimonial2: "Como revendedor, el panel es súper fácil de usar. Mis clientes aman la calidad.",
        testimonial3: "Los streams 4K son increíbles. El soporte responde en minutos. ¡Muy recomendado!",
        faq_title: "Preguntas frecuentes",
        faq1_q: "¿Qué dispositivos son compatibles?",
        faq1_a: "Todos los dispositivos principales: Smart TVs (Samsung, LG), Android boxes, iOS, teléfonos/tablets Android, Windows/Mac, y más.",
        faq2_q: "¿Hay prueba gratuita?",
        faq2_a: "¡Sí! Contáctanos en Telegram o WhatsApp para obtener una prueba gratuita de 24 horas.",
        faq3_q: "¿Puedo usar mi propio reproductor?",
        faq3_a: "Sí, puedes usar cualquier reproductor que admita enlaces M3U o M3U8, como VLC, TiviMate o IPTV Smarters.",
        faq4_q: "¿Ofrecen descuentos para revendedores?",
        faq4_a: "¡Sí! Consulta nuestra página de Revendedor para opciones de créditos al por mayor y marca blanca.",
        plans_title: "Nuestros planes y paquetes",
        plan1_name: "1 mes",
        plan3_name: "3 meses",
        plan6_name: "6 meses",
        plan12_name: "12 meses",
        all_channels: "Todos los canales",
        hd: "Calidad HD",
        one_conn: "1 conexión",
        vpn: "VPN incluido",
        catchup: "TV de recuperación",
        ibopro: "Activación gratuita de IboproApp por 1 año",
        company: "Empresa",
        about_us: "Acerca de",
        contact_us: "Contáctenos",
        blog: "Blog",
        product: "Producto",
        pricing: "Precios",
        resellers_plan: "Plan de revendedor",
        legal: "Legal",
        privacy: "Política de privacidad",
        terms: "Términos de servicio",
        refund: "Política de reembolso",
        dmca: "Política DMCA",
        footer_desc: "Servicio IPTV premium con la mejor calidad y soporte.",
        copyright: "© 2026 8K Strong IPTV. Todos los derechos reservados."
    },
    de: {
        home: "Startseite",
        convert: "Konvertieren",
        reseller: "Wiederverkäufer",
        subscription: "Abonnement",
        setup_guide: "Einrichtungsanleitung",
        about: "Über uns",
        contact: "Kontakt",
        blogs: "Blog",
        resolution: "Lösungszentrum",
        search: "Suchen",
        login: "Anmelden",
        free_trial: "Kostenlose Testversion",
        subscribe: "Abonnieren",
        learn_more: "Mehr erfahren",
        get_started: "Loslegen",
        hero_title: "8K Strong IPTV – Das ultimative 4K Streaming-Erlebnis",
        hero_desc: "33.076+ Live-Kanäle, 119.608+ Filme, 28.753+ Serien, integriertes VPN und 24/7-Support. Beginnen Sie noch heute!",
        trial_telegram: "Kostenlose Testversion via Telegram",
        trial_whatsapp: "Kostenlose Testversion via WhatsApp",
        panel_title: "8K Strong IPTV-Panel",
        panel_subtitle: "Premium 8K Wiederverkäufer-Panel mit schneller Aktivierung, stabiler Leistung, modernem Dashboard und 24/7-Support",
        channels: "Kanäle",
        movies: "Filme",
        series: "Serien",
        instant_line: "Sofortige Erstellung",
        uptime: "99.9% Verfügbarkeit",
        anti_freeze: "Einfrierfreies Streaming",
        support: "24/7 Support",
        slide1_title: "Premium IPTV-Dienst",
        slide1_desc: "33.076+ Live-Kanäle und 148.361+ Filme & Serien in 4K-Qualität",
        slide1_btn: "Abonnieren",
        slide2_title: "Werden Sie Wiederverkäufer",
        slide2_desc: "Flexible Pläne – starten Sie Ihr eigenes Geschäft heute",
        slide2_btn: "Wiederverkäufer werden",
        slide3_title: "Begrenztes Angebot",
        slide3_desc: "20% Rabatt auf Jahresabonnement",
        slide3_btn: "Angebot sichern",
        credit_title: "Kredit-System",
        credit_desc: "Einfach und transparent – Konvertieren Sie Credits direkt in Abonnement-Monate.",
        credits: "Credits",
        subscription_months: "Abonnement-Monate",
        free_trial_btn: "Kostenlose Testversion",
        about_reseller_btn: "Über Wiederverkäufer",
        panel_preview: "Vorschau des Wiederverkäufer-Panels",
        panel_placeholder: "(Bildplatzhalter)",
        features_title: "Warum 8K Strong IPTV wählen?",
        feature1_title: "Ultra schnell",
        feature1_desc: "Hochleistungsserver für unterbrechungsfreies Streaming",
        feature2_title: "VPN-Schutz",
        feature2_desc: "Integriertes VPN für Privatsphäre und Sicherheit",
        feature3_title: "Weltweite Kanäle",
        feature3_desc: "Kanäle aus über 100 Ländern",
        feature4_title: "24/7 Support",
        feature4_desc: "Engagiertes Support-Team",
        feature5_title: "Wiederverkäufer-Dashboard",
        feature5_desc: "Volle Kontrolle mit Echtzeit-Analysen",
        feature6_title: "Einfache Integration",
        feature6_desc: "Kompatibel mit allen gängigen IPTV-Playern",
        testimonials_title: "Was unsere Kunden sagen",
        testimonial1: "Der beste IPTV-Dienst, den ich genutzt habe. Kein Puffern, großartige Kanalauswahl und das VPN ist ein nettes Extra.",
        testimonial2: "Als Wiederverkäufer ist das Panel super einfach zu bedienen. Meine Kunden lieben die Qualität.",
        testimonial3: "Die 4K-Streams sind erstaunlich. Der Support antwortet innerhalb von Minuten. Sehr empfehlenswert!",
        faq_title: "Häufig gestellte Fragen",
        faq1_q: "Welche Geräte werden unterstützt?",
        faq1_a: "Alle gängigen Geräte: Smart-TVs (Samsung, LG), Android-Boxen, iOS, Android-Telefone/Tablets, Windows/Mac und mehr.",
        faq2_q: "Gibt es eine kostenlose Testversion?",
        faq2_a: "Ja! Kontaktieren Sie uns auf Telegram oder WhatsApp für eine 24-stündige kostenlose Testversion.",
        faq3_q: "Kann ich meinen eigenen Player verwenden?",
        faq3_a: "Ja, Sie können jeden Player verwenden, der M3U- oder M3U8-Links unterstützt, wie VLC, TiviMate oder IPTV Smarters.",
        faq4_q: "Bieten Sie Rabatte für Wiederverkäufer an?",
        faq4_a: "Ja! Sehen Sie sich unsere Wiederverkäufer-Seite für Bulk-Credit-Optionen und White-Label-Pläne an.",
        plans_title: "Unsere Pläne & Pakete",
        plan1_name: "1 Monat",
        plan3_name: "3 Monate",
        plan6_name: "6 Monate",
        plan12_name: "12 Monate",
        all_channels: "Alle Kanäle",
        hd: "HD-Qualität",
        one_conn: "1 Verbindung",
        vpn: "VPN inklusive",
        catchup: "Verpasstes Fernsehen",
        ibopro: "Kostenlose IboproApp-Aktivierung für 1 Jahr",
        company: "Unternehmen",
        about_us: "Über uns",
        contact_us: "Kontakt",
        blog: "Blog",
        product: "Produkt",
        pricing: "Preise",
        resellers_plan: "Wiederverkäufer-Plan",
        legal: "Rechtliches",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen",
        refund: "Rückerstattungsrichtlinie",
        dmca: "DMCA-Richtlinie",
        footer_desc: "Premium IPTV-Dienst mit bester Qualität und Support.",
        copyright: "© 2026 8K Strong IPTV. Alle Rechte vorbehalten."
    },
    it: {
        home: "Home",
        convert: "Convertire",
        reseller: "Rivenditore",
        subscription: "Abbonamento",
        setup_guide: "Guida all'installazione",
        about: "Chi siamo",
        contact: "Contatti",
        blogs: "Blog",
        resolution: "Centro di risoluzione",
        search: "Cerca",
        login: "Accedi",
        free_trial: "Prova gratuita",
        subscribe: "Abbonati",
        learn_more: "Scopri di più",
        get_started: "Inizia",
        hero_title: "8K Strong IPTV – L'esperienza di streaming 4K definitiva",
        hero_desc: "33.076+ canali live, 119.608+ film, 28.753+ serie, VPN integrata e supporto 24/7. Inizia a guardare oggi!",
        trial_telegram: "Prova gratuita via Telegram",
        trial_whatsapp: "Prova gratuita via WhatsApp",
        panel_title: "Pannello 8K Strong IPTV",
        panel_subtitle: "Pannello rivenditore 8K premium con attivazione rapida, prestazioni stabili, dashboard moderna e supporto 24/7",
        channels: "Canali",
        movies: "Film",
        series: "Serie",
        instant_line: "Creazione istantanea",
        uptime: "99.9% Uptime",
        anti_freeze: "Streaming anti-freeze",
        support: "Supporto 24/7",
        slide1_title: "Servizio IPTV Premium",
        slide1_desc: "33.076+ canali live e 148.361+ film e serie in qualità 4K",
        slide1_btn: "Abbonati",
        slide2_title: "Diventa rivenditore",
        slide2_desc: "Piani flessibili – avvia la tua attività oggi",
        slide2_btn: "Diventa rivenditore",
        slide3_title: "Offerta limitata",
        slide3_desc: "Ottieni il 20% di sconto sull'abbonamento annuale",
        slide3_btn: "Richiedi offerta",
        credit_title: "Sistema di crediti",
        credit_desc: "Semplice e trasparente – converti i crediti direttamente in mesi di abbonamento.",
        credits: "Crediti",
        subscription_months: "Mesi di abbonamento",
        free_trial_btn: "Prova gratuita",
        about_reseller_btn: "Informazioni rivenditore",
        panel_preview: "Anteprima pannello rivenditore",
        panel_placeholder: "(Spazio per immagine)",
        features_title: "Perché scegliere 8K Strong IPTV?",
        feature1_title: "Ultra veloce",
        feature1_desc: "Server ad alte prestazioni per streaming senza interruzioni",
        feature2_title: "Protezione VPN",
        feature2_desc: "VPN integrata per privacy e sicurezza",
        feature3_title: "Canali mondiali",
        feature3_desc: "Canali da oltre 100 paesi",
        feature4_title: "Supporto 24/7",
        feature4_desc: "Team di supporto dedicato",
        feature5_title: "Dashboard rivenditore",
        feature5_desc: "Controllo totale con analisi in tempo reale",
        feature6_title: "Integrazione facile",
        feature6_desc: "Compatibile con tutti i lettori IPTV popolari",
        testimonials_title: "Cosa dicono i nostri clienti",
        testimonial1: "Il miglior servizio IPTV che abbia mai usato. Nessun buffering, ottima selezione di canali e la VPN è un bel bonus.",
        testimonial2: "Come rivenditore, il pannello è super facile da usare. I miei clienti adorano la qualità.",
        testimonial3: "Gli stream 4K sono fantastici. Il supporto risponde in pochi minuti. Altamente raccomandato!",
        faq_title: "Domande frequenti",
        faq1_q: "Quali dispositivi sono supportati?",
        faq1_a: "Tutti i dispositivi principali: Smart TV (Samsung, LG), Android box, iOS, telefoni/tablet Android, Windows/Mac e altro.",
        faq2_q: "C'è una prova gratuita?",
        faq2_a: "Sì! Contattaci su Telegram o WhatsApp per ottenere una prova gratuita di 24 ore.",
        faq3_q: "Posso usare il mio lettore?",
        faq3_a: "Sì, puoi usare qualsiasi lettore che supporti link M3U o M3U8, come VLC, TiviMate o IPTV Smarters.",
        faq4_q: "Offrite sconti per rivenditori?",
        faq4_a: "Sì! Controlla la nostra pagina Rivenditore per opzioni di crediti all'ingrosso e piani white-label.",
        plans_title: "I nostri piani e pacchetti",
        plan1_name: "1 mese",
        plan3_name: "3 mesi",
        plan6_name: "6 mesi",
        plan12_name: "12 mesi",
        all_channels: "Tutti i canali",
        hd: "Qualità HD",
        one_conn: "1 connessione",
        vpn: "VPN inclusa",
        catchup: "TV Catch-Up",
        ibopro: "Attivazione gratuita di IboproApp per 1 anno",
        company: "Azienda",
        about_us: "Chi siamo",
        contact_us: "Contattaci",
        blog: "Blog",
        product: "Prodotto",
        pricing: "Prezzi",
        resellers_plan: "Piano rivenditore",
        legal: "Legale",
        privacy: "Informativa sulla privacy",
        terms: "Termini di servizio",
        refund: "Politica di rimborso",
        dmca: "Politica DMCA",
        footer_desc: "Servizio IPTV premium con la migliore qualità e supporto.",
        copyright: "© 2026 8K Strong IPTV. Tutti i diritti riservati."
    }
};

// ============================================
// Language Change Function
// ============================================
function changeLanguage(lang) {
    // Set HTML language attribute
    document.documentElement.lang = lang;
    
    // Set text direction (RTL for Arabic)
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Update language button with emoji flag
    const btn = document.getElementById('currentLangBtn');
    if (btn) {
        const emojis = { en: '🇬🇧', ar: '🇸🇦', fr: '🇫🇷', es: '🇪🇸', de: '🇩🇪', it: '🇮🇹' };
        const names = { en: 'EN', ar: 'العربية', fr: 'FR', es: 'ES', de: 'DE', it: 'IT' };
        btn.innerHTML = `${emojis[lang]} ${names[lang]}`;
    }
    
    // Save language preference
    localStorage.setItem('preferredLang', lang);
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener('click', function() {
            body.classList.toggle('mobile-menu-open');
            const icon = toggleBtn.querySelector('i');
            if (body.classList.contains('mobile-menu-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// ============================================
// FAQ Accordion
// ============================================
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// ============================================
// Slideshow Function
// ============================================
let slideIndex = 0;

function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slidesContainer = document.getElementById('slides');
    
    if (!slidesContainer || slides.length === 0) return;
    
    function showSlide(n) {
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[slideIndex]) dots[slideIndex].classList.add('active');
    }
    
    window.changeSlide = function(n) {
        slideIndex += n;
        showSlide(slideIndex);
    };
    
    window.currentSlide = function(n) {
        slideIndex = n;
        showSlide(slideIndex);
    };
    
    // Auto advance slides every 5 seconds
    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);
    
    showSlide(0);
}

// ============================================
// Copy to Clipboard Function
// ============================================
function copyToClipboard(text, elementId) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied! ✅');
            if (elementId) {
                const btn = document.getElementById(elementId);
                if (btn) {
                    const originalText = btn.innerHTML;
                    btn.innerHTML = 'Copied!';
                    setTimeout(() => { btn.innerHTML = originalText; }, 2000);
                }
            }
        }).catch(() => fallbackCopy(text, elementId));
    } else {
        fallbackCopy(text, elementId);
    }
}

function fallbackCopy(text, elementId) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.top = '-1000px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showNotification('Copied! ✅');
        if (elementId) {
            const btn = document.getElementById(elementId);
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Copied!';
                setTimeout(() => { btn.innerHTML = originalText; }, 2000);
            }
        }
    } catch (err) {
        showNotification('Failed to copy');
    }
    document.body.removeChild(textarea);
}

function showNotification(message) {
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #ecb619;
            color: #0a0b1a;
            padding: 12px 24px;
            border-radius: 50px;
            font-weight: bold;
            z-index: 1000;
            display: none;
            animation: fadeInOut 2s ease;
        `;
        document.body.appendChild(notification);
        
        // Add animation keyframes if not exists
        if (!document.querySelector('#fadeInOutKeyframes')) {
            const style = document.createElement('style');
            style.id = 'fadeInOutKeyframes';
            style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translateY(20px); }
                    15% { opacity: 1; transform: translateY(0); }
                    85% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0; transform: translateY(-20px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// ============================================
// M3U Parser Function
// ============================================
function parseM3U(content) {
    const lines = content.split('\n');
    const items = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('#EXTINF')) {
            let name = '';
            const nameMatch = line.match(/#EXTINF:-?[^,]*,?(.+)/);
            if (nameMatch) name = nameMatch[1].trim();
            
            let group = 'Other';
            const groupMatch = line.match(/group-title="([^"]*)"/);
            if (groupMatch && groupMatch[1]) group = groupMatch[1];
            
            let logo = '';
            const logoMatch = line.match(/tvg-logo="([^"]*)"/);
            if (logoMatch) logo = logoMatch[1];
            
            if (i + 1 < lines.length && !lines[i+1].startsWith('#')) {
                const url = lines[i+1].trim();
                items.push({ name, group, logo, url });
            }
        }
    }
    
    return items;
}

// ============================================
// Parse Expiration from M3U
// ============================================
function parseExpirationFromM3U(content) {
    if (!content) return null;
    
    const lines = content.split('\n');
    
    const patterns = [
        /#EXTVLCOPT.*expire[-_]?date[=:]\s*([\d\-\s:]+)/i,
        /#\s*expires?[=:]\s*([\d\-\s:]+)/i,
        /#\s*account[-_]?expires[=:]\s*([\d\-\s:]+)/i,
        /expires?[=:](\d{10,13})/i
    ];
    
    for (const line of lines) {
        for (const pattern of patterns) {
            const match = line.match(pattern);
            if (match && match[1]) {
                if (/^\d{10,13}$/.test(match[1])) {
                    const timestamp = parseInt(match[1]);
                    return new Date(timestamp < 10000000000 ? timestamp * 1000 : timestamp);
                }
                const date = new Date(match[1]);
                if (!isNaN(date.getTime())) return date;
            }
        }
    }
    
    return null;
}

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLanguage(savedLang);
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize FAQ accordion
    initFaqAccordion();
    
    // Initialize slideshow
    initSlideshow();
});
