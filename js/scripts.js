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

    $(".nip").on('input', function() {
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

    let selecionarTodosProgramas = false;
    $("#selecionarTodos").click(function () {
        if (!selecionarTodosProgramas) {
            $(".programa-check").prop("checked", true);
            $(this).text('Limpar Seleção');
            $(this).removeClass('btn-outline-info').addClass('btn-info');
        } else {
            $(".programa-check").prop('checked', false);
            $(this).text('Selecionar Todos');
            $(this).removeClass('btn-info').addClass('btn-outline-info');
        }
        selecionarTodosProgramas = !selecionarTodosProgramas;
    });

    $('#salvarProgramasSelecionados').on('click', function() {
        let programasSelecionados = [];
        // Verifica quais checkboxes estão selecionadas
        $('#formProgramas input[type="checkbox"]:checked').each(function() {
            programasSelecionados.push($(this).val()); // Adiciona o valor do checkbox ao array
        });
        // Atualiza o campo oculto no formulário com as seleções
        $('#programasSelecionados').val(programasSelecionados.join(',')); // Armazena como uma string separada por vírgulas
    });

    $("#gerarTRE").on("click", function() {
        var nomeCompleto = $("#nomeCompleto").val().trim().toUpperCase();
        var postoGrad = $("#postoGrad").val();
        var quadroEspec = $("#quadroEspec").val();
        var macAddress = $("#macAddress").val();
        var nomeMaquina = $("#nomeMaquina").val().trim().toUpperCase();
        var enderecoIP = $("#enderecoIP").val();
        var nip = $("#nip").val();
        const programasSelecionados = $("#programasSelecionados").val();

        gerarTRE(nomeCompleto, nip, postoGrad, quadroEspec, macAddress, nomeMaquina, enderecoIP, programasSelecionados);
    });

    $("#gerarTRI").on("click", function() {
        var nomeCompleto = $("#nomeCompletoTRI").val().trim().toUpperCase();
        var postoGrad = $("#postoGradTRI").val();
        var quadroEspec = $("#quadroEspecTRI").val();
        var nip = $("#nipTRI").val();

        gerarTRI(nomeCompleto, postoGrad, quadroEspec, nip);
    });

    $("#gerarTRPVM").on("click", function() {
        var nomeCompleto = $("#nomeCompletoTRPVM").val().trim().toUpperCase();
        var postoGrad = $("#postoGradTRPVM").val();
        var quadroEspec = $("#quadroEspecTRPVM").val();
        var nip = $("#nipTRPVM").val();

        gerarTRI(nomeCompleto, postoGrad, quadroEspec, nip);
    });
});
