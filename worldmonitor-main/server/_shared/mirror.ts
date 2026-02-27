const PRODUCTION_MIRROR_BASE = 'https://worldmonitor.app';

/**
 * Shared utility to fetch data from the production mirror when local API keys 
 * are missing or external services are rate-limited.
 */
export async function fetchWithMirrorFallback<T, R>(
    rpcPath: string,
    request: T,
    localResultPromise: Promise<R>
): Promise<R> {
    // Try local fetch first
    try {
        const localResult = await localResultPromise;
        if (localResult && (!Array.isArray(localResult) || localResult.length > 0)) {
            return localResult;
        }
    } catch (e) {
        console.warn(`[Mirror Fallback] Local fetch failed for ${rpcPath}:`, e);
    }

    // Otherwise, try the official production mirror
    try {
        const url = `${PRODUCTION_MIRROR_BASE}/api/${rpcPath}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': PRODUCTION_MIRROR_BASE
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(`Mirror returned ${response.status}`);
        }

        return await response.json();
    } catch (e) {
        console.error(`[Mirror Fallback] Failed for ${rpcPath}:`, e);
        throw e;
    }
}
