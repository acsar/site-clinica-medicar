var klaroConfig = {
    privacyPolicy: '/politica-de-privacidade.html',
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'medicar-consent',
    cookieExpiresAfterDays: 365,

    translations: {
        pt: {
            consentModal: {
                title: 'Sua privacidade é importante',
                description: 'Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site conforme nossa Política de Privacidade.',
            },
            purposes: {
                analytics: 'Análise de Tráfego',
            },
            ok: 'Aceitar Todos',
            decline: 'Recusar',
            acceptSelected: 'Salvar preferências',
        },
    },

    services: [
        {
            name: 'google-analytics',
            default: true,
            title: 'Google Analytics',
            purposes: ['analytics'],
            required: false,
        }
    ],
};