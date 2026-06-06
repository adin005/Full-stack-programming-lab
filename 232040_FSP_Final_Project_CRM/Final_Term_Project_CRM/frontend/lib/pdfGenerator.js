// PDF Invoice Generator using jsPDF + autoTable

export const generateInvoicePDF = (invoice) => {
  // Dynamic import to avoid SSR issues
  if (typeof window === 'undefined') return;

  const { jsPDF } = require('jspdf');
  require('jspdf-autotable');

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // ── Header ──────────────────────────────────────────────
  doc.setFillColor(37, 99, 235); // blue-600
  doc.rect(0, 0, pageWidth, 40, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('CRM SYSTEM', 14, 18);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Customer Relationship Management', 14, 27);
  doc.text('Pakistan', 14, 34);

  // Invoice label top right
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('INVOICE', pageWidth - 14, 18, { align: 'right' });
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(invoice.invoiceNumber, pageWidth - 14, 27, { align: 'right' });

  // ── Invoice Meta ────────────────────────────────────────
  doc.setTextColor(30, 30, 30);
  doc.setFontSize(10);

  const metaY = 52;
  doc.setFont('helvetica', 'bold');
  doc.text('Bill To:', 14, metaY);
  doc.setFont('helvetica', 'normal');
  doc.text(invoice.customer?.name || '', 14, metaY + 7);
  doc.text(invoice.customer?.email || '', 14, metaY + 13);
  doc.text(invoice.customer?.phone || '', 14, metaY + 19);
  if (invoice.customer?.company) doc.text(invoice.customer.company, 14, metaY + 25);
  if (invoice.customer?.address) doc.text(invoice.customer.address, 14, metaY + 31);

  // Right side meta
  const rightX = pageWidth - 14;
  const metaItems = [
    ['Invoice Date:', new Date(invoice.createdAt).toLocaleDateString('en-PK')],
    ['Due Date:', new Date(invoice.dueDate).toLocaleDateString('en-PK')],
    ['Status:', invoice.status],
  ];
  metaItems.forEach(([label, value], i) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label, rightX - 60, metaY + i * 8);
    doc.setFont('helvetica', 'normal');
    doc.text(value, rightX, metaY + i * 8, { align: 'right' });
  });

  // ── Items Table ──────────────────────────────────────────
  const tableY = metaY + 45;

  const tableRows = invoice.items.map((item, i) => [
    i + 1,
    item.description,
    item.quantity,
    `PKR ${item.unitPrice.toLocaleString()}`,
    `PKR ${(item.quantity * item.unitPrice).toLocaleString()}`,
  ]);

  doc.autoTable({
    startY: tableY,
    head: [['#', 'Description', 'Qty', 'Unit Price', 'Total']],
    body: tableRows,
    theme: 'grid',
    headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: 'bold', fontSize: 10 },
    bodyStyles: { fontSize: 10, textColor: [30, 30, 30] },
    alternateRowStyles: { fillColor: [241, 245, 249] },
    columnStyles: { 0: { cellWidth: 12 }, 4: { fontStyle: 'bold' } },
    margin: { left: 14, right: 14 },
  });

  // ── Totals ───────────────────────────────────────────────
  const finalY = doc.lastAutoTable.finalY + 8;

  doc.setFillColor(241, 245, 249);
  doc.rect(pageWidth - 90, finalY, 76, 20, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(30, 30, 30);
  doc.text('TOTAL AMOUNT:', pageWidth - 88, finalY + 8);
  doc.setTextColor(22, 163, 74);
  doc.text(`PKR ${invoice.totalAmount.toLocaleString()}`, pageWidth - 14, finalY + 8, { align: 'right' });
  doc.text(`PKR ${invoice.totalAmount.toLocaleString()}`, pageWidth - 14, finalY + 15, { align: 'right' });

  // ── Notes ────────────────────────────────────────────────
  if (invoice.notes) {
    const notesY = finalY + 30;
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);
    doc.setFont('helvetica', 'bold');
    doc.text('Notes:', 14, notesY);
    doc.setFont('helvetica', 'normal');
    doc.text(invoice.notes, 14, notesY + 7, { maxWidth: pageWidth - 28 });
  }

  // ── Footer ───────────────────────────────────────────────
  const footerY = doc.internal.pageSize.getHeight() - 15;
  doc.setFillColor(37, 99, 235);
  doc.rect(0, footerY - 5, pageWidth, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Thank you for your business!', pageWidth / 2, footerY + 3, { align: 'center' });
  doc.text('CRM System — Pakistan', pageWidth / 2, footerY + 9, { align: 'center' });

  doc.save(`${invoice.invoiceNumber}.pdf`);
};
