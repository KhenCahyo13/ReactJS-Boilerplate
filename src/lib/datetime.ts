export function formatToLocalDateTime(
    isoString: string,
    options?: Intl.DateTimeFormatOptions
): string {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        ...options,
    });
}
