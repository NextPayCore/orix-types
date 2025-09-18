import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
// export const formatTimeCountdown = (seconds: number): string => {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
// };
dayjs.extend(utc);
dayjs.extend(timezone);
export const getTimeByTimezone = (date, timeZone = 'Asia/Bangkok') => {
    const parsedDate = dayjs(date);
    if (!parsedDate.isValid()) {
        throw new Error('Invalid date string provided');
    }
    return parsedDate.tz(timeZone).format('HH:mm');
};
export const formatDate = (date, format = 'DD/MM/YYYY') => {
    const parsedDate = dayjs(date);
    if (!parsedDate.isValid()) {
        throw new Error('Invalid date string provided');
    }
    return parsedDate.format(format);
};
// 2025-09-08 08:30:00
export const getCurrentDateRange = (format = 'DD/MM/YYYY HH:mm:ss') => {
    const start = dayjs().startOf('day').format(format);
    const end = dayjs().endOf('day').format(format);
    return { start, end };
};
export const getCurrentWeekRange = (format = 'DD/MM/YYYY HH:mm:ss') => {
    const startOfWeek = dayjs().startOf('week').format(format);
    const endOfWeek = dayjs().endOf('week').format(format);
    return { startOfWeek, endOfWeek };
};
export const getCurrentMonthRange = (format = 'DD/MM/YYYY HH:mm:ss') => {
    const startOfMonth = dayjs().startOf('month').format(format);
    const endOfMonth = dayjs().endOf('month').format(format);
    return { startOfMonth, endOfMonth };
};
//# sourceMappingURL=date.js.map