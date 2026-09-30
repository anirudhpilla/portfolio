/**
 * Triggers direct download of the static resume PDF file stored in /public/Anirudh_Pilla_Resume.pdf.
 * Uses a blob URL and programmatic click without target="_blank" to ensure the browser saves
 * the file directly to disk instead of attempting to open an extension or embedded PDF viewer.
 */
export async function downloadResumeFile(filename: string = 'Anirudh_Pilla_Resume.pdf'): Promise<void> {
  try {
    const response = await fetch('/Anirudh_Pilla_Resume.pdf');
    if (!response.ok) {
      throw new Error(`Failed to fetch /Anirudh_Pilla_Resume.pdf: ${response.status}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 3000);
  } catch (err) {
    console.warn('Blob download failed, using standard download link:', err);
    const link = document.createElement('a');
    link.href = '/Anirudh_Pilla_Resume.pdf';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
