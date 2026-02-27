// Retail/Commerce variant - retail.saathi.app (or custom retail domain)
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Re-export feeds infrastructure
export {
    SOURCE_TIERS,
    getSourceTier,
    SOURCE_TYPES,
    getSourceType,
    getSourcePropagandaRisk,
    type SourceRiskProfile,
    type SourceType,
} from '../feeds';

// Retail-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
    // Retail & Consumer Markets
    markets: [
        { name: 'CNBC Retail', url: rss('https://www.cnbc.com/id/10000116/device/rss/rss.html') },
        { name: 'Retail Dive', url: rss('https://www.retaildive.com/feeds/news/') },
        { name: 'Modern Retail', url: rss('https://www.modernretail.co/feed/') },
        { name: 'Wall Street Journal Retail', url: rss('https://news.google.com/rss/search?q=site:wsj.com+retail+when:3d&hl=en-US&gl=US&ceid=US:en') },
        { name: 'Yahoo Consumer News', url: rss('https://news.google.com/rss/search?q=site:finance.yahoo.com+consumer+retail+when:1d&hl=en-US&gl=US&ceid=US:en') },
        { name: 'AdAge Retail', url: rss('https://news.google.com/rss/search?q=site:adage.com+retail+brand+when:7d&hl=en-US&gl=US&ceid=US:en') },
    ],

    // Economic Indicators for Retailers
    economic: [
        { name: 'Retail Sales Data', url: rss('https://news.google.com/rss/search?q="retail+sales"+OR+"consumer+spending"+OR+CPI+OR+inflation+when:2d&hl=en-US&gl=US&ceid=US:en') },
        { name: 'Consumer Sentiment', url: rss('https://news.google.com/rss/search?q="consumer+confidence"+OR+"consumer+sentiment"+when:7d&hl=en-US&gl=US&ceid=US:en') },
        { name: 'Purchasing Power', url: rss('https://news.google.com/rss/search?q="real+wages"+OR+"disposable+income"+OR+"cost+of+living"+when:7d&hl=en-US&gl=US&ceid=US:en') },
    ],

    // Supply Chain & Logistics
    'supply-chain': [
        { name: 'Supply Chain Brain', url: rss('https://www.supplychainbrain.com/rss/articles') },
        { name: 'Logistics Management', url: rss('https://www.logisticsmgmt.com/rss') },
        { name: 'FreightWaves', url: rss('https://www.freightwaves.com/feed') },
        { name: 'Shipping Watch', url: rss('https://news.google.com/rss/search?q=("container+shipping"+OR+"port+congestion"+OR+"logistics")+when:2d&hl=en-US&gl=US&ceid=US:en') },
    ],

    // Trade Policy & Tariffs
    'trade-policy': [
        { name: 'WTO News', url: rss('https://www.wto.org/english/news_e/news_e.rss') },
        { name: 'Trade Tariffs', url: rss('https://news.google.com/rss/search?q=(tariff+OR+customs+OR+"trade+agreement")+retail+when:7d&hl=en-US&gl=US&ceid=US:en') },
        { name: 'Global Supply Policy', url: rss('https://news.google.com/rss/search?q=("forced+labor"+OR+ESG+OR+"supply+chain+compliance")+retail+when:14d&hl=en-US&gl=US&ceid=US:en') },
    ],

    // E-commerce & Tech
    tech: [
        { name: 'TechCrunch Commerce', url: rss('https://techcrunch.com/category/ecommerce/feed/') },
        { name: 'Digital Commerce 360', url: rss('https://www.digitalcommerce360.com/feed/') },
        { name: 'Amazon News', url: rss('https://news.google.com/rss/search?q=site:amazon.com+news+OR+aws+when:7d&hl=en-US&gl=US&ceid=US:en') },
        { name: 'Payment Systems', url: rss('https://news.google.com/rss/search?q=(Stripe+OR+PayPal+OR+Visa+OR+Mastercard+OR+"digital+wallet")+payments+when:7d&hl=en-US&gl=US&ceid=US:en') },
    ],
};

// Panel configuration for RetailSaathi
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
    map: { name: 'Retail Hubs Map', enabled: true, priority: 1 },
    'live-news': { name: 'Commerce Headlines', enabled: true, priority: 1 },
    insights: { name: 'Retail AI Insights', enabled: true, priority: 1 },
    markets: { name: 'Consumer Markets', enabled: true, priority: 1 },
    economic: { name: 'Economic Indicators', enabled: true, priority: 1 },
    'supply-chain': { name: 'Supply Chain Tracker', enabled: true, priority: 1 },
    'trade-policy': { name: 'Trade & Tariff Policy', enabled: true, priority: 1 },
    commodities: { name: 'Consumer Goods & Raw Materials', enabled: true, priority: 1 },
    'macro-signals': { name: 'Market Radar', enabled: true, priority: 1 },
    layoffs: { name: 'Retail Industry Layoffs', enabled: true, priority: 2 },
    monitors: { name: 'My Retail Monitors', enabled: true, priority: 2 },
    polymarket: { name: 'Market Predictions', enabled: true, priority: 2 },
};

// Retail-focused map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
    conflicts: false,
    bases: false,
    cables: true,
    pipelines: false,
    hotspots: false,
    ais: true,
    nuclear: false,
    irradiators: false,
    sanctions: true,
    weather: true,
    economic: true,
    waterways: true,
    outages: true,
    cyberThreats: false,
    datacenters: true,
    protests: false,
    flights: true,
    military: false,
    natural: true,
    spaceports: false,
    minerals: false,
    fires: false,
    ucdpEvents: false,
    displacement: false,
    climate: false,
    startupHubs: false,
    cloudRegions: false,
    accelerators: false,
    techHQs: true,
    techEvents: false,
    stockExchanges: true,
    financialCenters: true,
    centralBanks: true,
    commodityHubs: true,
    gulfInvestments: false,
    positiveEvents: false,
    kindness: false,
    happiness: false,
    speciesRecovery: false,
    renewableInstallations: false,
    tradeRoutes: true,
};

// Mobile defaults for retail variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
    ...DEFAULT_MAP_LAYERS,
    cables: false,
    ais: false,
    flights: false,
};

export const VARIANT_CONFIG: VariantConfig = {
    name: 'retail',
    description: 'RetailSaathi: AI-powered retail analytics and supply chain dashboard',
    panels: DEFAULT_PANELS,
    mapLayers: DEFAULT_MAP_LAYERS,
    mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
