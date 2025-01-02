function gerarTRPVM(nomeCompleto, postoGrad, quadroEspec, nip) {
    // Validar se os campos estão preenchidos
    if (nomeCompleto === "" || postoGrad === "" || quadroEspec === "" || nip === "") {
        $("#avisoCamposObrigatoriosModal").modal('show');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4"); //Retrato, milímetros, Página A4

    // Carregando fontes externas (fontesBase64.js)
    doc.addFileToVFS("Carlito.ttf", carlitoBase64);
    doc.addFileToVFS("CarlitoBold.ttf", carlitoBoldBase64);
    doc.addFont("Carlito.ttf", "Carlito", "normal");
    doc.addFont("CarlitoBold.ttf", "Carlito", "bold");
    //Margens
    const marginTop = 20;
    const marginBottom = 20;
    const marginLeft = 20;
    const marginRight = 20;
    const lineHeight = 5;
    // Limitando conteúdo na página A4
    const pageHeight = doc.internal.pageSize.height; // 297mm
    const pageWidth = doc.internal.pageSize.width; // 210mm
    const contentWidth = pageWidth - marginLeft - marginRight;

    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.toLocaleString('default', { month: 'long' });
    const ano = dataAtual.getFullYear();

    let cursorY = marginTop;
    // Título
    doc.setFontSize(14);
    doc.setFont('Carlito', "bold");
    doc.text(`MARINHA DO BRASIL`, pageWidth / 2, marginTop, { align: 'center' });
    doc.text(`SECRETARIA DA COMISSÃO DE PROMOÇÕES DE OFICIAIS`, pageWidth / 2, cursorY + lineHeight * 2, { align: 'center' });
    doc.text(`TERMO DE RESPONSABILIDADE PORTAL/MÁQUINA VIRTUAL MB`, pageWidth / 2, cursorY + lineHeight * 4, { align: 'center' });

    cursorY = marginTop + 30;
    // Texto do termo formatado
    doc.setFontSize(11);
    doc.setFont('Carlito', "normal");
    const textoTermo = `
    O Portal MB, Máquina Virtual MB e as informações por estes sistemas disponibilizadas são de propriedade da Marinha do Brasil. Na qualidade de usuário do ambiente computacional de propriedade da MB, declaro estar ciente das normas e procedimentos para a segurança da informação em vigor (DGMM-0540 Rev3) e da Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD), devendo tratar as informações disponíveis, sistemas e produtos computacionais, dos quais a MB é proprietária ou possui o direito de uso, como um recurso que deva ter seu sigilo preservado, bem como, utilizá-lo exclusivamente para o serviço, em consonância com a legislação vigente.
    `;

    const linhasContinua = doc.splitTextToSize(textoTermo, contentWidth);
    linhasContinua.forEach((linha) => {
        if (cursorY + lineHeight > pageHeight - marginBottom) {
            doc.addPage(); // Adiciona nova página se necessário
            cursorY = marginTop; // Reinicia o cursorY na nova página
        }
        doc.text(linha, marginLeft, cursorY);
        cursorY += lineHeight; // Incrementa a posição Y para a próxima linha
    });

    // Adiciona texto Local e Data
    const posYData = cursorY + 7;
    const dataTexto = `Rio de Janeiro, ${dia} de ${mes} de ${ano}.`;

    const linhasAposData = doc.splitTextToSize(dataTexto, contentWidth);
    linhasAposData.forEach((linha) => {
        if (cursorY + lineHeight > pageHeight - marginBottom) {
            doc.addPage(); // Adiciona nova página se necessário
            cursorY = marginTop; // Reinicia o cursorY na nova página
        }
        doc.text(linha, marginLeft, posYData);
        cursorY += lineHeight; // Incrementa a posição Y para a próxima linha
    });

    // Assinatura
    const posYAssinatura = posYData + 10;
    const linhaAssinatura = `________________________________________________`;
    doc.text(linhaAssinatura, pageWidth - marginRight, posYAssinatura, { align: 'right' });
    const larguraLinha = doc.getTextWidth(linhaAssinatura);
    const posXTextoAssinatura = 190 - larguraLinha / 2;
    doc.text(`${nomeCompleto}`, posXTextoAssinatura, posYAssinatura + lineHeight, { align: 'center' });
    doc.text(`${postoGrad}(${quadroEspec}) ${nip}`, posXTextoAssinatura, posYAssinatura + lineHeight + 5, { align: 'center' });

    // Salva o PDF
    doc.save(`TRPVM ${postoGrad} ${quadroEspec} ${nip} ${nomeCompleto}.pdf`);
}