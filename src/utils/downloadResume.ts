/**
 * Downloads the exact uploaded resume from /public/resume.pdf without any formatting
 * or binary modifications, saved as Anirudh_Pilla_Resume.pdf.
 */
export async function downloadResumeFile(filename: string = 'Anirudh_Pilla_Resume.pdf'): Promise<void> {
  try {
    const response = await fetch('/resume.pdf');
    if (!response.ok) {
      throw new Error(`Failed to fetch /resume.pdf: ${response.statusText}`);
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 5000);
  } catch (error) {
    console.error('Download error, falling back to direct link:', error);
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

