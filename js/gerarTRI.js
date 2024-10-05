function gerarTRI(nomeCompleto, postoGrad, quadroEspec, nip) {
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
    doc.text(`TERMO DE RESPONSABILIDADE INDIVIDUAL`, pageWidth / 2, cursorY + lineHeight * 4, { align: 'center' });

    cursorY = marginTop + 25;
    // Texto do termo formatado
    doc.setFontSize(11);
    doc.setFont('Carlito', "normal");
    const textoTermo = `
    Pelo presente instrumento, eu, ${postoGrad}(${quadroEspec}) ${nomeCompleto}, ${nip}, perante a Marinha do Brasil, doravante denominada MB, na qualidade de usuário do ambiente computacional de propriedade daquela Instituição, declaro estar ciente das normas de segurança das informações digitais da OM, segundo as quais devo:

    a) tratar a informação digital como patrimônio da MB e como um recurso que deva ter seu sigilo preservado, em consonância com a legislação vigente;
    
    b) utilizar as informações disponíveis e os sistemas e produtos computacionais, dos quais a MB é proprietária ou possui o direito de uso, exclusivamente para o interesse do serviço;
    
    c) preservar o conteúdo das informações sigilosas a que tiver acesso, sem divulgá-las para pessoas não autorizadas;
    
    d) não tentar obter acesso a informação cujo grau de sigilo não seja compatível com a minha Credencial de Segurança (CREDSEG) ou que eu não tenha autorização ou necessidade de conhecer;
    
    e) não compartilhar o uso de senha com outros usuários;
    
    f) não me fazer passar por outro usuário usando a sua identificação de acesso e senha;
    
    g) não alterar o endereço de rede ou qualquer outro dado de identificação do microcomputador de meu uso;
    
    h) instalar e utilizar em meu microcomputador somente programas homologados para uso na MB e que esta possua as respectivas licenças de uso ou, no caso de programas de domínio público, mediante autorização formal do Oficial de Segurança da Informação e Comunicações (OSIC) da OM;
    
    i) no caso de exoneração, demissão, licenciamento, término de prestação de serviço ou qualquer tipo de afastamento, preservar o conteúdo das informações e documentos sigilosos a que tive acesso e não divulgá-los para pessoas não autorizadas;
    
    j) guardar segredo das minhas autenticações de acesso (senhas) utilizadas no ambiente computacional da OM, não cedendo, não transferindo, não divulgando e não permitindo o seu conhecimento por terceiros;
    
    k) não utilizar senha com sequência fácil ou óbvia de caracteres que facilite a sua descoberta e não escrever a senha em lugares visíveis ou de fácil acesso;
    
    l) utilizar, ao me afastar momentaneamente da minha estação de trabalho, descanso de tela (“screen saver”) protegido por senha, a fim de evitar que alguém possa ver as informações que estejam disponíveis na tela do computador;
    
    m) ao me ausentar do local de trabalho, momentaneamente ou ao término de minhas atividades diárias, certificar-me de que a sessão aberta no ambiente computacional com minha identificação foi fechada e as informações que exigem sigilo foram adequadamente salvaguardadas;
    
    n) seguir as orientações da área de informática da OM relativas à instalação, à manutenção e ao uso adequado dos equipamentos, dos sistemas e dos programas do ambiente computacional;
    
    o) comunicar imediatamente ao meu superior hierárquico e ao Oficial de Segurança da Informação e Comunicações (OSIC) da OM a ocorrência de qualquer evento que implique ameaça ou impedimento de cumprir os procedimentos de segurança estabelecidos;
    
    p) responder, perante a MB, às auditorias e ao Oficial de Segurança da Informação e Comunicações (OSIC) da OM, por acessos, tentativas de acessos ou uso indevido da informação digital realizados com a minha identificação ou autenticação;
    
    q) não praticar quaisquer atos que possam afetar o sigilo ou a integridade da informação;
    
    r) estar ciente de que toda informação digital armazenada e processada no ambiente computacional da OM pode ser auditada, como no caso de páginas informativas (“sites”) visitadas por mim;
    
    s) não transmitir, copiar ou reter arquivos contendo textos, fotos, filmes ou quaisquer outros registros que contrariem a moral, os bons costumes e a legislação vigente;
    
    t) não transferir qualquer tipo de arquivo que pertença à MB para outro local, seja por meio magnético ou não, exceto no interesse do serviço e mediante autorização da autoridade competente;
    
    u) estar ciente de que o processamento, o trâmite e o armazenamento de arquivos que não sejam de interesse do serviço são expressamente proibidos no ambiente computacional da OM;
    
    v) estar ciente de que a MB poderá auditar os arquivos em trâmite ou armazenados nos equipamentos do ambiente computacional da OM sob meu uso ou responsabilidade;
    
    w) estar ciente de que o correio eletrônico é de uso exclusivo para o interesse do serviço e qualquer correspondência eletrônica originada ou retransmitida no ambiente computacional da OM deve obedecer a este preceito; e
    
    x) estar ciente de que a MB poderá auditar as correspondências eletrônicas originadas ou retransmitidas por mim no ambiente computacional da OM.
    
    Desta forma, estou ciente da minha responsabilidade pelas consequências decorrentes da não observância do acima exposto e da legislação vigente.`;

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
    doc.save(`TRI ${postoGrad}-${quadroEspec} ${nip} ${nomeCompleto}.pdf`);
}