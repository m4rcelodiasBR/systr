function gerarTRE(nomeCompleto, nip, postoGrad, quadroEspec, macAddress, nomeMaquina, enderecoIP, programasSelecionados) {
    // Validar se os campos estão preenchidos
    if (nomeCompleto === "" || nip === "" || postoGrad === "" || quadroEspec === ""
        || macAddress === "" || nomeMaquina === "" || enderecoIP === "") {
        $("#avisoCamposObrigatoriosModal").modal('show');
        return;
    }
    if (programasSelecionados === "") {
        $("#avisoSelecaoProgramasModal").modal('show');
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
    doc.text(`TERMO DE RESPONSABILIDADE DE ESTAÇÃO DE TRABALHO`, pageWidth / 2, cursorY + lineHeight * 4, { align: 'center' });

    cursorY = marginTop + 25;
    // Texto do termo formatado
    doc.setFontSize(11);
    doc.setFont('Carlito', "normal");
    const termoTexto = `            
        Pelo presente instrumento, eu, ${postoGrad}(${quadroEspec}) ${nip} ${nomeCompleto}, perante a Marinha do Brasil, doravante denominada MB, na qualidade de usuário do ambiente computacional de propriedade daquela Instituição, declaro ter recebido desta OM uma estação de trabalho com as seguintes configurações:

        I – de identificação:
        
        (a) endereço IP: ${enderecoIP};
        (b) endereço físico de rede: ${macAddress}; e
        (c) identificação da máquina: ${nomeMaquina}.
        
        II – de instalação de programas:`;

    const linhas = doc.splitTextToSize(termoTexto, contentWidth);
    linhas.forEach((linha) => {
        if (cursorY + lineHeight > pageHeight - marginBottom) {
            doc.addPage(); // Adiciona nova página se necessário
            cursorY = marginTop; // Reinicia o cursorY na nova página
        }
        doc.text(linha, marginLeft, cursorY);
        cursorY += lineHeight; // Incrementa a posição Y para a próxima linha
    });

    // Adiciona a tabela na seção II
    const programasArray = programasSelecionados.split(',').map(programa => programa.trim());
    const tableData = [];
    const colunasPorLinha = 4;

    for (let i = 0; i < programasArray.length; i += colunasPorLinha) {
        const linha = [];
        for (let j = 0; j < colunasPorLinha; j++) {
            linha.push(programasArray[i + j] || '');
        }
        tableData.push(linha);
    }

    const tableWidth = doc.internal.pageSize.width - marginLeft - marginRight;
    doc.autoTable({
        head: [
            [{
                content: 'Lista de Programas',
                colSpan: colunasPorLinha, // Colspan para mesclar as colunas
                styles: {
                    halign: 'center',
                    fillColor: [6, 20, 64],
                    textColor: [176, 180, 191],
                    fontStyle: 'bold'
                }
            }],
        ], // Cabeçalho da tabela
        body: tableData,
        startY: cursorY + 2, // Posição Y para começar a tabela
        theme: 'striped',
        margin: { top: 10, left: marginLeft, right: marginRight },
        styles: {
            cellPadding: 2,
            fontSize: 9, // Tamanho da fonte
        },
        columnStyles: {
            0: { cellWidth: tableWidth / colunasPorLinha }, // Largura da coluna (dividida por 4)
            1: { cellWidth: tableWidth / colunasPorLinha },
            2: { cellWidth: tableWidth / colunasPorLinha },
            3: { cellWidth: tableWidth / colunasPorLinha }
        }
    });

    cursorY = doc.autoTable.previous.finalY + 3;

    doc.setFontSize(7);
    const obsProgramasHomologados = `* Programas Homologados pela MB (DCIMBOTEC).`;
    doc.text(obsProgramasHomologados, marginLeft, cursorY);

    cursorY += 2;
    // Texto do termo após a tabela
    doc.setFontSize(11);
    const termoContinuaTexto = `        
        III – de senha de acesso à máquina (“boot”):
        
        Inicialmente estabelecida pelo Administrador da Rede Local (ADMIN) da OM e por mim alterada, sendo agora de meu conhecimento exclusivo;
        
        IV – de senha de configuração (“setup”):
        
        De conhecimento exclusivo do ADMIN e à qual não devo tomar conhecimento.
        
        V – Configurações de hardware:
        
        As configurações de hardware posteriormente serão anexadas a este termo e qualquer necessidade de alteração por parte do usuário deve ser prontamente informada ao ADMIN e realizadas somente sob sua supervisão.
        Assim, quaisquer alterações ou inclusões nos dados acima são de minha inteira responsabilidade e devem ser previamente autorizadas pelo Oficial de Segurança da Informação e Comunicações (OSIC), conforme previsto nas normas de Segurança das Informações Digitais da OM.
        Estou ciente que o ADMIN executou a “formatação” prévia dos discos rígidos da referida estação de trabalho e sua correspondente reconfiguração e que, a qualquer momento e sempre que julgar necessário, poderei solicitar ao ADMIN auxílio para a realização dessa “formatação”, de modo a garantir a configuração padronizada da OM e a inexistência de arquivos ou programas irregulares.`;

    const linhasContinua = doc.splitTextToSize(termoContinuaTexto, contentWidth);
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

    const nomeArquivo = `TRE ${postoGrad}(${quadroEspec}) ${nip} ${nomeCompleto}.pdf`;
    const pdfData = doc.output('blob');
    const formData = new FormData();
    formData.append('pdf', pdfData, nomeArquivo);

    $.ajax({
        url: 'php/salvar_tre.php',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data) {
            var response = JSON.parse(data);
            if (response.status === "success") {
                $('#modalConfirmacaoTitle').html('<i class="bi bi-check-circle-fill"></i> Sucesso');
                $('#modalConfirmacao .modal-content').removeClass('bg-danger').addClass('bg-success text-light');
            } else {
                $('#modalConfirmacaoTitle').html('<i class="bi bi-x-circle-fill"></i> Erro');
                $('#modalConfirmacao .modal-content').removeClass('bg-success').addClass('bg-danger text-light');
            }

            $('#modalMensagem').text(response.message);

            $('#modalConfirmacao').modal('show');
        },
        error: function(error) {
            console.error('Erro ao enviar o TRE para o servidor. Contate o Administrador da Rede Local:', error);
        }
    });

    doc.save(nomeArquivo);

    $('.formulario')[0].reset();
    $('.formulario input[type="checkbox"]').prop('checked', false);
}