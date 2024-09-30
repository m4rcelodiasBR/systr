//Inicialização do Bootstrap Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function() {
    // Função para preencher os selects quando Oficial ou Praça
    function preencherSelects() {
        // Encontrar o formulário ativo
        $(".formulario:visible").each(function() {
            // Verificar se Oficial ou Praça está selecionado
            if ($(this).find(".oficialRadio").is(":checked")) {
                $(this).find("select.postoGrad").html(`
                <option value="1T">1T</option>
                <option value="2T">2T</option>
                <option value="CF">CF</option>
                <option value="CMG">CMG</option>
            `);
                $(this).find("select.quadroEspec").html(`
                <option value="CA">CA</option>
                <option value="T">T</option>
                <option value="RM2">RM2</option>
            `);
            } else if ($(this).find(".pracaRadio").is(":checked")) {
                $(this).find("select.postoGrad").html(`
                <option value="SO">SO</option>
                <option value="1SG">1SG</option>
                <option value="2SG">2SG</option>
            `);
                $(this).find("select.quadroEspec").html(`
                <option value="PD">PD</option>
                <option value="ES">ES</option>
                <option value="PL">PL</option>
            `);
            }
        });
    }

    // Preencher os selects na inicialização
    preencherSelects();

    // Chamar a função ao mudar de formulário
    $(".nav-pills .nav-link").on("click", function() {
        // Chama preencherSelects para atualizar os selects
        preencherSelects();
    });

    // Adicionar evento para mudar as opções quando mudar o radio button
    $("input[name='tipoUsuario']").on("change", function() {
        preencherSelects();
    });

    $('#nip').on('input', function() {
        let value = $(this).val().replace(/\D/g, ''); // Remove tudo que não for número
        if (value.length > 8) {
            value = value.slice(0, 8); // Limita a 8 dígitos
        }

        // Formata o valor no padrão 00.0000.00
        value = value.replace(/(\d{2})(\d{4})(\d{2})/, '$1.$2.$3');

        // Atualiza o campo com a máscara
        $(this).val(value);
    });

    $('#macAddress').on('input', function() {
        let value = $(this).val().replace(/\W/g, ''); // Remove tudo que não for letra ou número
        if (value.length > 12) {
            value = value.slice(0, 12); // Limita a 12 caracteres (para o MAC)
        }

        // Formata o valor no padrão 00-00-00-00-00-00
        value = value.replace(/(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})/, '$1-$2-$3-$4-$5-$6');

        // Atualiza o campo com a máscara
        $(this).val(value);
    });

    $('#salvarProgramasSelecionados').on('click', function() {
        let programasSelecionados = [];

        // Verifica quais checkboxes estão selecionadas
        $('#formProgramas input[type="checkbox"]:checked').each(function() {
            programasSelecionados.push($(this).val()); // Adiciona o valor do checkbox ao array
        });

        // Atualiza o campo oculto no formulário com as seleções
        $('#programasSelecionados').val(programasSelecionados.join(',')); // Armazena como uma string separada por vírgulas

        console.log(programasSelecionados);
    });

    $("#gerarTRE").on("click", function() {
        var nomeCompleto = $("#nomeCompleto").val().trim();
        var postoGrad = $("#postoGrad").val();
        var quadroEspec = $("#quadroEspec").val();
        var macAddress = $("#macAddress").val();
        var nomeMaquina = $("#nomeMaquina").val();
        var enderecoIP = $("#enderecoIP").val();
        var nip = $("#nip").val();
        const programasSelecionados = $("#programasSelecionados").val();

        gerarTRE(nomeCompleto, nip, postoGrad, quadroEspec, macAddress, nomeMaquina, enderecoIP, programasSelecionados);
    });

    function gerarTRE(nomeCompleto, nip, postoGrad, quadroEspec, macAddress, nomeMaquina, enderecoIP, programasSelecionados) {
        // Validar se os campos estão preenchidos
        if (nomeCompleto === "" || nip === "" || postoGrad === "" || quadroEspec === ""
            || macAddress === "" || nomeMaquina === "" || enderecoIP === "") {
            alert("Por favor, preencha todos os campos obrigatórios!");
            return;
        }
        if (programasSelecionados === "") {
            alert("Por favor, selecione pelo menos um programa que esteja instalado em seu dispositivo!");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        //Carregando fonte externa (fontesBase64.js)
        doc.addFileToVFS("Carlito.ttf", carlitoBase64);
        doc.addFileToVFS("CarlitoBold.ttf", carlitoBoldBase64);
        doc.addFont("Carlito.ttf", "Carlito", "normal");
        doc.addFont("CarlitoBold.ttf", "Carlito", "bold");

        const pageHeight = doc.internal.pageSize.height; // Altura da página A4
        const marginTop = 25; //2.5cm
        const marginBottom = 20; //2.0cm
        const marginLeft = 25; //2.5cm
        const marginRight = 15; //1.5cm
        const lineHeight = 5; // 0.5cm

        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = dataAtual.toLocaleString('default', { month: 'long' });
        const ano = dataAtual.getFullYear();

        // Título
        doc.setFontSize(12);
        doc.setFont('Carlito', "bold");

        doc.text(`MARINHA DO BRASIL`, 105, marginTop, { align: 'center' });
        doc.text(`SECRETARIA DA COMISSÃO DE PROMOÇÕES DE OFICIAIS`, 105, marginTop + lineHeight, { align: 'center' });
        doc.text(`TERMO DE RESPONSABILIDADE DE ESTAÇÃO DE TRABALHO`, 105, marginTop + 5 + lineHeight * 2, { align: 'center' });

        doc.setFontSize(10);
        doc.setFont('Carlito', "normal");

        let cursorY = marginTop + 25; // Posição inicial do texto

        // Texto do termo formatado
        const termoTexto = `            
        Pelo presente instrumento, eu, ${postoGrad}-${quadroEspec} ${nip} ${nomeCompleto}, perante a Marinha do Brasil, doravante denominada MB, na qualidade de usuário do ambiente computacional de propriedade daquela Instituição, declaro ter recebido desta OM uma estação de trabalho com as seguintes configurações:

        I – de identificação:
        
        (a) endereço IP: ${enderecoIP};
        (b) endereço físico de rede: ${macAddress}; e
        (c) identificação da máquina: ${nomeMaquina}.
        
        II – de instalação de programas:
        
        Conforme anexo.
        
        III – de senha de acesso à máquina (“boot”):
        
        Inicialmente estabelecida pelo Administrador da Rede Local (ADMIN) da OM e por mim alterada, sendo agora de meu conhecimento exclusivo;
        
        IV – de senha de configuração (“setup”):
        
        De conhecimento exclusivo do ADMIN e à qual não devo tomar conhecimento.
        
        V – Configurações de hardware:
        
        As configurações de hardware posteriormente serão anexadas a este termo e qualquer necessidade de alteração por parte do usuário deve ser prontamente informada ao ADMIN e realizadas somente sob sua supervisão.
        
        Assim, quaisquer alterações ou inclusões nos dados acima são de minha inteira responsabilidade e devem ser previamente autorizadas pelo Oficial de Segurança da Informação e Comunicações (OSIC), conforme previsto nas normas de Segurança das Informações Digitais da OM.
        
        Estou ciente que o ADMIN executou a “formatação” prévia dos discos rígidos da referida estação de trabalho e sua correspondente reconfiguração e que, a qualquer momento e sempre que julgar necessário, poderei solicitar ao ADMIN auxílio para a realização dessa “formatação”, de modo a garantir a configuração padronizada da OM e a inexistência de arquivos ou programas irregulares.
    `;

        const linhas = doc.splitTextToSize(termoTexto, 210 - marginLeft - marginRight);

        // Adiciona o texto e verifica se a página precisa ser quebrada
        linhas.forEach((linha, index) => {
            if (cursorY + lineHeight > pageHeight - marginBottom) {
                doc.addPage(); // Adiciona nova página
                cursorY = marginTop; // Reinicia o cursorY na nova página
            }
            doc.text(linha, marginLeft, cursorY);
            cursorY += lineHeight; // Incrementa a posição Y para a próxima linha
        });

        // Adiciona texto Local e Data
        const posYData = cursorY + 10;
        const dataTexto = `Rio de Janeiro, ${dia} de ${mes} de ${ano}.`;
        doc.text(dataTexto, marginLeft, posYData);

        // Assinatura
        const posYAssinatura = posYData + 15;
        const linhaAssinatura = "________________________________________________";

        doc.text(linhaAssinatura, 190, posYAssinatura, { align: 'right' });

        const larguraLinha = doc.getTextWidth(linhaAssinatura);
        const posXTextoAssinatura = 190 - larguraLinha / 2;

        doc.text(`${nomeCompleto}`, posXTextoAssinatura, posYAssinatura + lineHeight, { align: 'center' });
        doc.text(`${postoGrad}-${quadroEspec} ${nip}`, posXTextoAssinatura, posYAssinatura + lineHeight + 5, { align: 'center' });

        //Anexo
        doc.addPage();

        // Título da Tabela
        doc.setFontSize(12);
        doc.setFont("Carlito", "bold");
        doc.text('ANEXO A', 105, marginTop, { align: 'center' });
        doc.text('PROGRAMAS INSTALADOS', 105, marginTop + 10, { align: 'center' });
        doc.setFont("Carlito", "normal");

        // Configurando a tabela
        const programasArray = programasSelecionados.split(',').map(programa => programa.trim());
        const tableData = programasArray.map(programa => [programa]); // Transformando em array de arrays

        doc.autoTable({
            // Estilo da tabela
            head: [['Programas Instalados']],
            body: tableData,
            startY: 45, // Posição Y para começar a tabela
            theme: 'striped',
            headStyles: {
                fillColor: [6, 20, 64],
                textColor: [176, 180, 191],
                fontStyle: 'bold',
            },
        });

        // Salva o PDF
        doc.save(`TRE ${postoGrad}-${quadroEspec} ${nip} ${nomeCompleto}.pdf`);
    }
});
