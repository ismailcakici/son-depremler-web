export default function getFormattedDates(): { endDate: string; startDate: string } {
    const currentDate = new Date();

    const formattedCurrentDate = _formatDateWithTime(currentDate);
    
    const previousDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
    const formattedPreviousDate = _formatDateWithTime(previousDate);
    
    return {
        endDate: formattedCurrentDate,
        startDate: formattedPreviousDate
    };
}

function _formatDateWithTime(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
