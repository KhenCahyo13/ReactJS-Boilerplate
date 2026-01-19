export const getPaginationPages = (
    current: number,
    last: number
): (number | 'ellipsis')[] => {
    if (last <= 3) {
        return Array.from({ length: last }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [];

    // First page
    pages.push(1);

    // Left ellipsis
    if (current > 3) {
        pages.push('ellipsis');
    }

    // Middle pages
    const start = Math.max(2, current - 1);
    const end = Math.min(last - 1, current + 1);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    // Right ellipsis
    if (current < last - 2) {
        pages.push('ellipsis');
    }

    // Last page
    pages.push(last);

    return pages;
};
