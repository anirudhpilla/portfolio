import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

/**
 * Builds and triggers an immediate binary PDF download in the browser.
 * This guarantees the file is received as valid application/pdf binary data
 * with no iframe blocking or SPA router fallback issues.
 */
export async function downloadResumePdf(filename: string = 'Anirudh_Pilla_Resume.pdf'): Promise<void> {
  try {
    const pdfDoc = await PDFDocument.create();
    
    // Standard fonts guaranteed to be supported across all PDF readers
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    const pageWidth = 612;
    const pageHeight = 792;
    const margin = 36;
    const contentWidth = pageWidth - margin * 2;

    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    let y = pageHeight - margin;

    const colorBlack = rgb(0.08, 0.08, 0.08);
    const colorGray = rgb(0.35, 0.35, 0.35);
    const colorNavy = rgb(0.05, 0.38, 0.65);
    const colorLine = rgb(0.75, 0.75, 0.75);

    function checkPageBreak(requiredSpace: number = 40) {
      if (y - requiredSpace < margin + 20) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
        return true;
      }
      return false;
    }

    function drawText(text: string, x: number, yPos: number, font: any, size: number, color = colorBlack) {
      page.drawText(text, {
        x,
        y: yPos,
        font,
        size,
        color,
      });
    }

    function drawSectionHeader(title: string) {
      checkPageBreak(35);
      y -= 10;
      drawText(title.toUpperCase(), margin, y, helveticaBold, 10, colorNavy);
      y -= 4;
      page.drawLine({
        start: { x: margin, y },
        end: { x: pageWidth - margin, y },
        thickness: 0.75,
        color: colorLine,
      });
      y -= 10;
    }

    function wrapText(text: string, font: any, fontSize: number, maxWidth: number): string[] {
      const words = text.split(' ');
      const lines: string[] = [];
      let currentLine = '';

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const testWidth = font.widthOfTextAtSize(testLine, fontSize);
        if (testWidth <= maxWidth) {
          currentLine = testLine;
        } else {
          if (currentLine) lines.push(currentLine);
          currentLine = word;
        }
      }
      if (currentLine) lines.push(currentLine);
      return lines;
    }

    // 1. HEADER
    const name = "ANIRUDH PILLA";
    const nameW = helveticaBold.widthOfTextAtSize(name, 18);
    drawText(name, (pageWidth - nameW) / 2, y, helveticaBold, 18, colorBlack);
    y -= 14;

    const contact1 = "Visakhapatnam, India  •  (+91) 9949266794  •  anirudhxdev@gmail.com";
    const contact1W = helvetica.widthOfTextAtSize(contact1, 8.5);
    drawText(contact1, (pageWidth - contact1W) / 2, y, helvetica, 8.5, colorGray);
    y -= 11;

    const contact2 = "LinkedIn: linkedin.com/in/AnirudhPilla  •  GitHub: github.com/anirudhpilla  •  HackerRank: anirudhxdev";
    const contact2W = helvetica.widthOfTextAtSize(contact2, 8.5);
    drawText(contact2, (pageWidth - contact2W) / 2, y, helvetica, 8.5, colorNavy);
    y -= 6;

    // 2. SUMMARY
    drawSectionHeader("Professional Summary");
    const summary = "Software Development Engineer with 4+ years of experience building scalable, distributed, multi-tenant SaaS platforms. Experienced in microservices, event-driven architecture, and cloud-native systems, delivering production solutions for enterprise clients with a focus on performance, reliability, and system design.";
    const summaryLines = wrapText(summary, helvetica, 9, contentWidth);
    for (const line of summaryLines) {
      drawText(line, margin, y, helvetica, 9, colorBlack);
      y -= 11;
    }

    // 3. SKILLS
    drawSectionHeader("Technical Skills");
    const skills = [
      { label: "Languages:", value: "JavaScript, TypeScript, Python, SQL" },
      { label: "Frameworks & Runtimes:", value: "Node.js, NestJS, Express.js, React, Angular, TypeORM" },
      { label: "Architecture & Systems:", value: "Microservices, Event-Driven Architecture, REST APIs, Multi-Tenant Systems, RBAC, SSO" },
      { label: "Databases & Storage:", value: "PostgreSQL, MySQL, MongoDB, DynamoDB" },
      { label: "Messaging & Caching:", value: "Redis (Lua Distributed Locks), RabbitMQ, BullMQ, Async Processing Pipelines" },
      { label: "Cloud, DevOps & Tools:", value: "Docker, Jenkins, CI/CD, Grafana, Linux, Git, Claude Code, Cursor IDE" },
      { label: "Engineering Practices:", value: "System Design, High-Concurrency Tuning, Unit & Integration Testing, Agile/Scrum" }
    ];

    for (const sk of skills) {
      checkPageBreak(12);
      drawText(sk.label, margin, y, helveticaBold, 8.5, colorBlack);
      const labelW = helveticaBold.widthOfTextAtSize(sk.label, 8.5);
      drawText(sk.value, margin + labelW + 6, y, helvetica, 8.5, colorGray);
      y -= 11;
    }

    // 4. EXPERIENCE
    drawSectionHeader("Professional Experience");

    checkPageBreak(25);
    drawText("Akrivia Automation Pvt. Ltd.", margin, y, helveticaBold, 10, colorBlack);
    const expDate = "Mar 2022 – Present";
    const expDateW = helveticaBold.widthOfTextAtSize(expDate, 9);
    drawText(expDate, pageWidth - margin - expDateW, y, helveticaBold, 9, colorBlack);
    y -= 11;

    drawText("Software Development Engineer", margin, y, helveticaOblique, 9, colorGray);
    const expLoc = "Visakhapatnam, India";
    const expLocW = helveticaOblique.widthOfTextAtSize(expLoc, 9);
    drawText(expLoc, pageWidth - margin - expLocW, y, helveticaOblique, 9, colorGray);
    y -= 12;

    // Facttwin
    checkPageBreak(18);
    drawText("Facttwin (Industrial Automation SaaS)", margin + 4, y, helveticaBold, 9, colorBlack);
    const ftDate = "Feb 2024 – Present";
    const ftDateW = helvetica.widthOfTextAtSize(ftDate, 8.5);
    drawText(ftDate, pageWidth - margin - ftDateW, y, helvetica, 8.5, colorGray);
    y -= 10;

    const ftBullets = [
      "Developed and scaled Machine Health Monitoring supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ-based event-driven architecture.",
      "Improved API performance by 33% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.",
      "Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.",
      "Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (MongoDB + SQL Server) architecture for time-series and relational workloads."
    ];

    for (const bullet of ftBullets) {
      const lines = wrapText(bullet, helvetica, 8.5, contentWidth - 16);
      checkPageBreak(lines.length * 10.5 + 4);
      drawText("•", margin + 10, y, helvetica, 8.5, colorNavy);
      for (let i = 0; i < lines.length; i++) {
        drawText(lines[i], margin + 20, y, helvetica, 8.5, colorBlack);
        y -= 10.5;
      }
      y -= 1;
    }

    // Akrivia HCM
    y -= 3;
    checkPageBreak(18);
    drawText("Akrivia HCM (Enterprise HR Platform)", margin + 4, y, helveticaBold, 9, colorBlack);
    const hcmDate = "Mar 2022 – Jan 2024";
    const hcmDateW = helvetica.widthOfTextAtSize(hcmDate, 8.5);
    drawText(hcmDate, pageWidth - margin - hcmDateW, y, helvetica, 8.5, colorGray);
    y -= 10;

    const hcmBullets = [
      "Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.",
      "Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance complexity.",
      "Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.",
      "Built reusable backend services and API integrations to support HR workflows, improving module scalability and enabling faster feature delivery across the platform."
    ];

    for (const bullet of hcmBullets) {
      const lines = wrapText(bullet, helvetica, 8.5, contentWidth - 16);
      checkPageBreak(lines.length * 10.5 + 4);
      drawText("•", margin + 10, y, helvetica, 8.5, colorNavy);
      for (let i = 0; i < lines.length; i++) {
        drawText(lines[i], margin + 20, y, helvetica, 8.5, colorBlack);
        y -= 10.5;
      }
      y -= 1;
    }

    // 5. PROJECTS
    drawSectionHeader("Key Engineering Projects");

    const projects = [
      {
        title: "Boltticket: High-Concurrency Distributed Ticket Booking Platform",
        tech: "Node.js, TypeScript, Redis (Lua Locks), BullMQ, PostgreSQL, k6",
        desc: "Engineered a high-concurrency distributed ticket booking platform sustaining 955 RPS (57K+ req/min) with 0% error rate, achieving 3.05 ms median and 7.21 ms P95 latency through atomic Redis Lua distributed locking, BullMQ async workers, and PostgreSQL ACID row locks."
      },
      {
        title: "LiveBoard: Real-Time Collaborative Whiteboard",
        tech: "React, Node.js, Socket.io, HTML5 Canvas, MongoDB",
        desc: "Built a real-time collaborative whiteboard with Socket.io and React, enabling sub-15ms multi-user synchronized drawing, delta WebSocket streaming, and persistent canvas snapshot history in MongoDB."
      },
      {
        title: "Face Filters & Emotion Recognition System",
        tech: "Python, MediaPipe, OpenCV, TensorFlow",
        desc: "Developed a real-time facial emotion recognition system with 82% accuracy, classifying 7 primary emotions via lightweight CNN to trigger dynamic facial AR overlays."
      }
    ];

    for (const proj of projects) {
      checkPageBreak(30);
      drawText(proj.title, margin, y, helveticaBold, 8.8, colorBlack);
      y -= 9.5;
      drawText(`Tech Stack: ${proj.tech}`, margin + 8, y, helveticaOblique, 8.2, colorNavy);
      y -= 9.5;
      const lines = wrapText(proj.desc, helvetica, 8.5, contentWidth - 8);
      checkPageBreak(lines.length * 10.5 + 4);
      for (const l of lines) {
        drawText(l, margin + 8, y, helvetica, 8.5, colorBlack);
        y -= 10.5;
      }
      y -= 2;
    }

    // 6. EDUCATION
    drawSectionHeader("Education");
    checkPageBreak(25);
    drawText("Raghu Engineering College", margin, y, helveticaBold, 9.2, colorBlack);
    const gradDate = "Graduated: Apr 2023";
    const gradW = helveticaBold.widthOfTextAtSize(gradDate, 8.8);
    drawText(gradDate, pageWidth - margin - gradW, y, helveticaBold, 8.8, colorBlack);
    y -= 10.5;

    drawText("Bachelor of Technology (B.Tech), Computer Science and Engineering  •  CGPA: 9.16 / 10", margin, y, helvetica, 8.8, colorGray);
    const eduLoc = "Visakhapatnam, India";
    const eduLocW = helvetica.widthOfTextAtSize(eduLoc, 8.8);
    drawText(eduLoc, pageWidth - margin - eduLocW, y, helvetica, 8.8, colorGray);

    // Save and generate Blob
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // Create trigger link
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Cleanup object URL after a short delay
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 2000);
  } catch (error) {
    console.error('Error generating or downloading PDF resume:', error);
    // Fallback to static direct link
    const fallbackLink = document.createElement('a');
    fallbackLink.href = '/Anirudh_Pilla_Resume.pdf';
    fallbackLink.download = filename;
    fallbackLink.target = '_blank';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
}
