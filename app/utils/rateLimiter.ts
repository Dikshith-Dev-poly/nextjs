interface RateLimit {
    count: number
    startTime: number
}


const requests: Map<string, RateLimit> = new Map();


export function rateLimiter(ip: string, limit: number = 10, windowms: number = 60000): boolean {
    const now = Date.now();

    if (!requests.has(ip)) {
        requests.set(ip, { count: 1, startTime: now });
    }

    const data = requests.get(ip)!;
    if (now - data.startTime > windowms) {
        requests.set(ip, { count: 1, startTime: now });
        return true;
    }

    data.count += 1;

    if (data.count > limit) {
        return false;
    }

    return true;
}