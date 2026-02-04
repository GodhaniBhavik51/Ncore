const normalizeBase64 = (input: string) => input.trim();

const ensureDataUrl = (base64: string, mimeType = 'image/png') => {
  const value = normalizeBase64(base64);
  if (value.startsWith('data:')) return value;
  return `data:${mimeType};base64,${value}`;
};

const base64ToBlob = (base64: string, mimeType = 'image/png') => {
  const dataUrl = ensureDataUrl(base64, mimeType);
  const [, data] = dataUrl.split(',', 2);
  const byteString = atob(data || '');
  const bytes = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i += 1) {
    bytes[i] = byteString.charCodeAt(i);
  }
  return new Blob([bytes], { type: mimeType });
};

const base64ToObjectUrl = (base64: string, mimeType = 'image/png') => {
  const blob = base64ToBlob(base64, mimeType);
  return URL.createObjectURL(blob);
};

export { ensureDataUrl, base64ToBlob, base64ToObjectUrl };
