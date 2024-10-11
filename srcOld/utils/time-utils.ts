import { StringMap } from "../types";

const intervals: StringMap<number> = {
    "year": 31536000,
    "month": 2592000,
    "week": 604800,
    "day": 86400,
    "hour": 3600,
    "minute": 60,
    "second": 1,
};

const intervalEntries = Object.entries(intervals);

export function dateAgo(value: number | string | Date): number | string | Date {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) { // less than 30 seconds ago will show as 'Just now'
            return "Just now";
        }
        let counter;
        for (const [key, interval] of intervalEntries) {
            counter = Math.floor(seconds / interval);
            if (counter <= 0) {
                continue;
            }
            if (counter === 1) {
                return `${counter} ${key} ago`; // singular (1 day ago)
            }

            return `${counter} ${key}s ago`; // plural (2 days ago)
        }
    }

    return value;
}

export function formatTime(date: Date, pattern: string): string {
    const toString = (time: number): string => time < 10 ? `0${time}` : `${time}`;

    const DD = toString(date.getDate());
    const MM = toString(date.getMonth() + 1);
    const YYYY = `${date.getFullYear()}`;
    const YYY = YYYY.substr(1);
    const YY = YYY.substr(1);
    const HH = toString(date.getHours());
    const mm = toString(date.getMinutes());
    const SS = toString(date.getSeconds());

    const map: { [key: string]: string } = { DD, MM, YYYY, YYY, YY, HH, mm, SS };
    const regex = new RegExp(`(${Object.keys(map).join("|")})`, "g");

    return pattern.replace(regex, (e) => map[e] ?? e);
}

export function createStopWatch(): { getDiffMs(): number; getDiff(): string } {
    const start = Date.now();

    const getDiffMs = (): number => Date.now() - start;

    return {
        getDiffMs,
        getDiff(): string {
            return `${getDiffMs()}ms`;
        },
    };
}

function setDate(date: Date, opt: { ms: number; s: number; m: number; h: number }): Date {
    if (!date) {
        return new Date("");
    }

    if (!isNaN(opt.ms)) {
        date.setMilliseconds(opt.ms);
    }
    if (!isNaN(opt.s)) {
        date.setSeconds(opt.s);
    }
    if (!isNaN(opt.m)) {
        date.setMinutes(opt.m);
    }
    if (!isNaN(opt.h)) {
        date.setHours(opt.h);
    }

    return date;
}

export function getStartOfTheDay(date: Date): Date {
    return setDate(date, {
        ms: 0,
        s: 0,
        m: 0,
        h: 0,
    });
}

export function getStartOfTheHour(date: Date): Date {
    return setDate(date, {
        ms: 0,
        s: 0,
        m: 0,
        h: date.getHours(),
    });
}

export function getEndOfTheHour(date: Date): Date {
    return setDate(date, {
        ms: 999,
        s: 59,
        m: 59,
        h: date.getHours(),
    });
}

export function getEndOfTheDay(date: Date): Date {
    return setDate(date, {
        ms: 999,
        s: 59,
        m: 59,
        h: 23,
    });
}
