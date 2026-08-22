import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesRomanItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // US Letter dimensions: 612 x 792 pt
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const margin = 36; // 0.5 inch margins
  let y = height - margin;

  const primaryColor = rgb(0.05, 0.05, 0.05); // near black
  const secondaryColor = rgb(0.3, 0.3, 0.3); // dark gray
  const accentColor = rgb(0.05, 0.45, 0.7); // professional navy/blue
  const dividerColor = rgb(0.7, 0.7, 0.7); // light divider line

  // Helper for drawing text
  function drawText(text, x, yPos, font, size, color = primaryColor) {
    page.drawText(text, {
      x,
      y: yPos,
      font,
      size,
      color,
    });
  }

  // Helper for drawing section header with bottom line
  function drawSectionHeader(title) {
    y -= 14;
    drawText(title.toUpperCase(), margin, y, helveticaBold, 10.5, accentColor);
    y -= 3;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.8,
      color: dividerColor,
    });
    y -= 10;
  }

  // Helper to wrap text
  function wrapText(text, font, fontSize, maxWidth) {
    const words = text.split(' ');
    const lines = [];
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

  // 1. NAME & CONTACT HEADER
  const name = "ANIRUDH PILLA";
  const nameWidth = helveticaBold.widthOfTextAtSize(name, 19);
  drawText(name, (width - nameWidth) / 2, y, helveticaBold, 19, primaryColor);
  y -= 15;

  const contactLine = "Visakhapatnam, India  |  (+91) 9949266794  |  anirudhxdev@gmail.com";
  const contactWidth = helvetica.widthOfTextAtSize(contactLine, 9);
  drawText(contactLine, (width - contactWidth) / 2, y, helvetica, 9, secondaryColor);
  y -= 12;

  const linksLine = "LinkedIn: linkedin.com/in/AnirudhPilla  |  GitHub: github.com/anirudhpilla  |  HackerRank: hackerrank.com/profile/anirudhxdev";
  const linksWidth = helvetica.widthOfTextAtSize(linksLine, 8.5);
  drawText(linksLine, (width - linksWidth) / 2, y, helvetica, 8.5, rgb(0.1, 0.4, 0.65));
  y -= 6;

  // 2. PROFESSIONAL SUMMARY
  drawSectionHeader("Professional Summary");
  const summaryText = "Software Development Engineer with 4+ years of experience building scalable, distributed, multi-tenant SaaS platforms. Experienced in microservices, event-driven architecture, and cloud-native systems, delivering production solutions for enterprise clients with a focus on performance, reliability, and system design.";
  const summaryLines = wrapText(summaryText, timesRoman, 9.5, width - 2 * margin);
  for (const line of summaryLines) {
    drawText(line, margin, y, timesRoman, 9.5, primaryColor);
    y -= 11.5;
  }

  // 3. TECHNICAL SKILLS
  drawSectionHeader("Technical Skills");
  const skills = [
    { label: "Languages:", value: "JavaScript, TypeScript, Python, SQL" },
    { label: "Frameworks:", value: "Node.js, NestJS, Express.js, React, Angular, TypeORM" },
    { label: "Architecture:", value: "Microservices, Event-Driven Architecture, REST APIs, Multi-Tenant Systems, RBAC, SSO" },
    { label: "Databases:", value: "PostgreSQL, MySQL, MongoDB, DynamoDB" },
    { label: "Caching & Messaging:", value: "Redis (Lua Distributed Locks), RabbitMQ, BullMQ, Async Processing Pipelines" },
    { label: "Cloud & DevOps:", value: "Docker, Jenkins, CI/CD, Grafana, Linux" },
    { label: "AI-Assisted Tools:", value: "Claude Code, Cursor IDE" },
    { label: "Core Practices:", value: "System Design, High-Concurrency Tuning, Unit & Integration Testing, Agile/Scrum" },
  ];

  for (const sk of skills) {
    drawText(sk.label, margin, y, helveticaBold, 8.8, primaryColor);
    const labelW = helveticaBold.widthOfTextAtSize(sk.label, 8.8);
    drawText(sk.value, margin + labelW + 5, y, timesRoman, 9, secondaryColor);
    y -= 11;
  }

  // 4. PROFESSIONAL EXPERIENCE
  drawSectionHeader("Professional Experience");

  // Company Line
  drawText("Akrivia Automation Pvt. Ltd.", margin, y, helveticaBold, 10.5, primaryColor);
  const dateStr = "Mar 2022 – Present";
  const dateW = helveticaBold.widthOfTextAtSize(dateStr, 9.5);
  drawText(dateStr, width - margin - dateW, y, helveticaBold, 9.5, primaryColor);
  y -= 12;

  drawText("Software Development Engineer", margin, y, timesRomanItalic, 9.5, secondaryColor);
  const locStr = "Visakhapatnam, India";
  const locW = timesRomanItalic.widthOfTextAtSize(locStr, 9.5);
  drawText(locStr, width - margin - locW, y, timesRomanItalic, 9.5, secondaryColor);
  y -= 12;

  // Facttwin
  drawText("• Facttwin (Industrial Automation SaaS)", margin + 4, y, helveticaBold, 9.2, primaryColor);
  const facttwinDate = "Feb 2024 – Present";
  const ftDateW = helvetica.widthOfTextAtSize(facttwinDate, 8.5);
  drawText(facttwinDate, width - margin - ftDateW, y, helvetica, 8.5, secondaryColor);
  y -= 11;

  const facttwinBullets = [
    "Developed and scaled Machine Health Monitoring supporting 15+ enterprise clients with tenant-level data isolation using NestJS microservices and RabbitMQ-based event-driven architecture.",
    "Improved API performance by 33% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit-breaking mechanisms.",
    "Reduced client onboarding time by 20% by implementing automated tenant provisioning workflows using RabbitMQ messaging, AES-encrypted communication, and multi-tenant configuration management.",
    "Designed scalable IoT telemetry processing pipelines using RabbitMQ and Redis, reducing anomaly detection latency while improving data reliability through a dual-database (MongoDB + SQL Server) architecture for time-series and relational workloads."
  ];

  for (const bullet of facttwinBullets) {
    const bulletLines = wrapText(bullet, timesRoman, 8.8, width - 2 * margin - 16);
    drawText("–", margin + 14, y, helvetica, 8.8, secondaryColor);
    for (let i = 0; i < bulletLines.length; i++) {
      drawText(bulletLines[i], margin + 24, y, timesRoman, 8.8, primaryColor);
      y -= 10.5;
    }
    y -= 1;
  }

  // Akrivia HCM
  y -= 2;
  drawText("• Akrivia HCM (Enterprise HR Platform)", margin + 4, y, helveticaBold, 9.2, primaryColor);
  const hcmDate = "Mar 2022 – Jan 2024";
  const hcmDateW = helvetica.widthOfTextAtSize(hcmDate, 8.5);
  drawText(hcmDate, width - margin - hcmDateW, y, helvetica, 8.5, secondaryColor);
  y -= 11;

  const hcmBullets = [
    "Developed scalable HR platform modules using NestJS, Angular, MySQL, and Redis, optimizing database queries and API workflows to improve response times by 12%.",
    "Modernized legacy backend and frontend services by migrating to a NestJS + Angular architecture, improving application performance by 15% and reducing maintenance complexity.",
    "Implemented configurable performance appraisal workflows, including 9-Box evaluation, reducing HR review cycle completion time by 25%.",
    "Built reusable backend services and API integrations to support HR workflows, improving module scalability and enabling faster feature delivery across the platform."
  ];

  for (const bullet of hcmBullets) {
    const bulletLines = wrapText(bullet, timesRoman, 8.8, width - 2 * margin - 16);
    drawText("–", margin + 14, y, helvetica, 8.8, secondaryColor);
    for (let i = 0; i < bulletLines.length; i++) {
      drawText(bulletLines[i], margin + 24, y, timesRoman, 8.8, primaryColor);
      y -= 10.5;
    }
    y -= 1;
  }

  // 5. PROJECTS
  drawSectionHeader("Key Engineering Projects");

  const projects = [
    {
      title: "Boltticket: High-Concurrency Distributed Ticket Booking Platform",
      tech: "Node.js, TypeScript, Redis (Lua), BullMQ, PostgreSQL, k6",
      bullet: "Engineered a high-concurrency distributed ticket booking platform sustaining 955 RPS (57K+ req/min) with 0% error rate, achieving 3.05 ms median and 7.21 ms P95 latency through atomic Redis Lua distributed locking, BullMQ async workers, and PostgreSQL ACID row locks."
    },
    {
      title: "LiveBoard: Real-Time Collaborative Whiteboard",
      tech: "React, Node.js, Socket.io, HTML5 Canvas, MongoDB",
      bullet: "Built a real-time collaborative whiteboard with Socket.io and React, enabling sub-15ms multi-user synchronized drawing, delta WebSocket streaming, and persistent canvas snapshot history in MongoDB."
    },
    {
      title: "Face Filters & Emotion Recognition System",
      tech: "Python, MediaPipe, OpenCV, TensorFlow",
      bullet: "Developed a real-time facial emotion recognition system with 82% accuracy, classifying 7 primary emotions via lightweight CNN to trigger dynamic facial AR overlays."
    }
  ];

  for (const proj of projects) {
    drawText(proj.title, margin, y, helveticaBold, 9, primaryColor);
    y -= 10;
    drawText(`Tech Stack: ${proj.tech}`, margin + 10, y, timesRomanItalic, 8.5, accentColor);
    y -= 10;
    const pLines = wrapText(proj.bullet, timesRoman, 8.8, width - 2 * margin - 10);
    for (const pl of pLines) {
      drawText(pl, margin + 10, y, timesRoman, 8.8, primaryColor);
      y -= 10.5;
    }
    y -= 2;
  }

  // 6. EDUCATION
  drawSectionHeader("Education");
  drawText("Raghu Engineering College", margin, y, helveticaBold, 9.5, primaryColor);
  const gradDate = "Graduated: Apr 2023";
  const gradW = helveticaBold.widthOfTextAtSize(gradDate, 9);
  drawText(gradDate, width - margin - gradW, y, helveticaBold, 9, primaryColor);
  y -= 11;

  drawText("Bachelor of Technology (B.Tech), Computer Science and Engineering  |  CGPA: 9.16 / 10", margin, y, timesRoman, 9, secondaryColor);
  const eduLoc = "Visakhapatnam, India";
  const eduLocW = timesRoman.widthOfTextAtSize(eduLoc, 9);
  drawText(eduLoc, width - margin - eduLocW, y, timesRoman, 9, secondaryColor);

  // Save PDF to public folder
  const pdfBytes = await pdfDoc.save();
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfBytes);
  fs.writeFileSync(path.join(publicDir, 'Anirudh_Pilla_Resume.pdf'), pdfBytes);
  console.log('Successfully generated /public/resume.pdf and /public/Anirudh_Pilla_Resume.pdf');
}

generateResume().catch(console.error);
