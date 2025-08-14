export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

export const validateFileType = (fileName: string, allowedTypes: string[]): boolean => {
    const fileExtension = fileName.split('.').pop();
    return allowedTypes.includes(fileExtension || '');
};

export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};