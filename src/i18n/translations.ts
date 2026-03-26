export const translations = {
  en: {
    nav: {
      banner: 'Q2 2026 allocation now accepting applications — For accredited investors',
      cta: 'Check Eligibility',
      skipLink: 'Skip to eligibility quiz',
      logo: 'World Bridge Capital',
      tagline: 'Trade Finance Investment Platform'
    },
    hero: {
      label: 'Trade Finance Investment Platform',
      title: 'World Bridge Capital:',
      titleAccent: 'Trade Finance',
      subtitle: 'for Accredited Investors.',
      description: 'Targeting 8–10% returns. 30–90 day cycles. Asset-backed positions. Low market correlation.*',
      targetReturn: 'Target Return*',
      duration: 'Duration',
      secured: 'Secured',
      securedSub: 'Every Position',
      watchOverview: 'Watch the overview',
      accreditedOnly: 'Accredited Investors Only · Regulation D'
    },
    stickyBar: {
      text: 'Targeting 8–10% + profit sharing on asset-backed trade finance.* Q2 2026.',
      cta: 'Check Eligibility'
    }
  },
  es: {
    nav: {
      banner: 'Asignación Q2 2026 aceptando solicitudes — Para inversores acreditados',
      cta: 'Verificar Elegibilidad',
      skipLink: 'Saltar al cuestionario de elegibilidad',
      logo: 'World Bridge Capital',
      tagline: 'Plataforma de Inversión en Factoraje Comercial'
    },
    hero: {
      label: 'Plataforma de Inversión en Factoraje Comercial',
      title: 'World Bridge Capital:',
      titleAccent: 'Factoraje Comercial',
      subtitle: 'para Inversores Acreditados.',
      description: '目标的 8–10% 回报。30–90 天周期。资产支持仓位。低市场相关性*',
      targetReturn: 'Retorno Objetivo*',
      duration: 'Duración',
      secured: 'Asegurado',
      securedSub: 'Cada Posición',
      watchOverview: 'Ver la descripción general',
      accreditedOnly: 'Solo Inversores Acreditados · Regulación D'
    },
    stickyBar: {
      text: 'Objetivo 8–10% + participación en ganancias en factoraje comercial respaldado por activos.* Q2 2026.',
      cta: 'Verificar Elegibilidad'
    }
  }
} as const;

export type Language = 'en' | 'es';
export type TranslationKeys = typeof translations.en;