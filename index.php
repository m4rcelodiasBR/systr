<?php
$ip = $_SERVER['REMOTE_ADDR'];
$hostname = gethostbyaddr($ip);
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>CPO | Gerador de Termo de Responsabilidade</title>
    <!-- Bootstrap CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="bootstrap/icons/bootstrap-icons.min.css" rel="stylesheet">
    <!-- CSS do Sistema -->
    <link href="css/styles.css" rel="stylesheet">
</head>

<body>
<header class="w-100">
    <div class="container">
        <div class="text-center">
            <h3 class="py-2 octin-font">Secretaria da Comissão de Promoções de Oficiais</h3>
        </div>
    </div>
    <div class="w-100">
        <div class=" py-2 text-center text-light titulo-sistema">
            <h4 class="octin-font">Gerador de Termos de Responsabilidade</h4>
        </div>
    </div>
</header>

<main class="container">
    <div class="text-center my-2 text-decoration-underline">
        <h5>Escolha o Termo de Responsabilidade</h5>
    </div>
    <!-- Botões para alternar entre os Termos/Formulários -->
    <ul class="nav nav-pills justify-content-center my-3" id="formTabs" role="tablist">
        <li class="nav-item" role="presentation">
            <button aria-controls="tre-texto" aria-selected="true" class="nav-link active" data-bs-target="#tre-texto"
                    data-bs-toggle="pill" id="tabTextoTRE"
                    role="tab" type="button">
                <span class="bi bi-file-earmark-text-fill"></span>
                Estação de Trabalho (TRE)
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button aria-controls="tri-texto" aria-selected="false" class="nav-link" data-bs-target="#tri-texto"
                    data-bs-toggle="pill" id="tabTextoTRI"
                    role="tab" type="button">
                <span class="bi bi-file-earmark-text-fill"></span>
                Individual (TRI)
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button aria-controls="trpvm-texto" aria-selected="false" class="nav-link" data-bs-target="#trpvm-texto"
                    data-bs-toggle="pill" id="tabTextoTRPVM"
                    role="tab" type="button">
                <span class="bi bi-file-earmark-text-fill"></span>
                Portal MB/Máquina Virtual MB (TRPVM)
            </button>
        </li>
    </ul>
    <hr>
    <div class="tab-content">
        <!-- TRE -->
        <div aria-labelledby="tabTermoTRE" class="termo tab-pane fade show active" id="tre-texto" role="tabpanel">
            <div class="row gx-5 justify-content-center">
                <!-- Texto Termo -->
                <div class="col bg-light">
                    <div>
                        <h5 class="my-3 text-center">Termo de Responsabilidade de Estação de Trabalho</h5>
                    </div>
                    <div class="text-justify px-2 overflow-auto texto-termo">
                        <p>
                            Pelo presente instrumento, eu, <strong>Posto/GRAD ESP XX.XXXX.XX NOME COMPLETO</strong>,
                            perante a Marinha do Brasil,
                            doravante denominada MB, na qualidade de usuário do ambiente computacional de propriedade
                            daquela
                            Instituição, declaro ter recebido desta OM uma estação de trabalho com as seguintes
                            configurações:
                        </p>
                        <p><strong>I – de identificação:</strong></p>
                        <ul>
                            <li><strong>(a)</strong> endereço IP: <strong>0.0.0.0;</strong></li>
                            <li><strong>(b)</strong> endereço físico de rede: <strong>00-00-00-00-00-00;</strong> e</li>
                            <li><strong>(c)</strong> identificação da máquina: <strong>CPO-C-XX.</strong></li>
                        </ul>
                        <p><strong>II – de instalação de programas:</strong></p>
                        <button type="button" class="p-0 btn mb-3" data-bs-toggle="tooltip" data-bs-placement="right"
                                data-bs-title="Poderá ser visualizado após baixar o Termo"
                                data-bs-custom-class="custom-tooltip">
                            Conforme Anexo.
                        </button>
                        <p><strong>III – de senha de acesso à máquina (“boot”):</strong></p>
                        <p>
                            Inicialmente estabelecida pelo Administrador da Rede Local (ADMIN) da OM e por mim alterada,
                            sendo agora de
                            meu conhecimento exclusivo;
                        </p>
                        <p><strong>IV – de senha de configuração (“setup”):</strong></p>
                        <p>
                            De conhecimento exclusivo do ADMIN e à qual não devo tomar conhecimento.
                        </p>
                        <p><strong>V – Configurações de hardware:</strong></p>
                        <p>
                            As configurações de hardware posteriormente serão anexadas a este termo e qualquer
                            necessidade de alteração por parte do usuário
                            deve ser prontamente informada ao ADMIN e realizadas somente sob sua supervisão.
                        </p>
                        <p>
                            Assim, quaisquer alterações ou inclusões nos dados acima são de minha inteira
                            responsabilidade e
                            devem ser previamente autorizadas pelo Oficial de Segurança da Informação e Comunicações
                            (OSIC),
                            conforme previsto nas normas de Segurança das Informações Digitais da OM.
                        </p>
                        <p>
                            Estou ciente que o ADMIN executou a “formatação” prévia dos discos rígidos da referida
                            estação de
                            trabalho e sua correspondente reconfiguração e que, a qualquer momento e sempre que julgar
                            necessário,
                            poderei solicitar ao ADMIN auxílio para a realização dessa “formatação”, de modo a garantir
                            a
                            configuração padronizada da OM e a inexistência de arquivos ou programas irregulares.
                        </p>
                    </div>
                </div>
                <!-- Formulário -->
                <div class="col">
                    <div>
                        <h5 class="text-center my-3">Preencha os dados</h5>
                        <form class="formulario">
                            <!-- Oficial/Praça -->
                            <div class="row mb-3 align-items-center justify-content-center">
                                <div class="col-md-2 text-center">
                                    <div class="form-check">
                                        <input checked class="form-check-input oficialRadio" id="oficialRadio"
                                               name="tipoUsuario"
                                               type="radio" value="Oficial" required>
                                        <label class="form-check-label" for="oficialRadio">Oficial</label>
                                    </div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <div class="form-check">
                                        <input class="form-check-input pracaRadio" id="pracaRadio" name="tipoUsuario"
                                               type="radio"
                                               value="Praca" required>
                                        <label class="form-check-label" for="pracaRadio">Praça</label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select postoGrad" id="postoGrad">
                                            <option value=""></option>
                                        </select>
                                        <label class="form-label" for="postoGrad">Posto/Grad <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select quadroEspec" id="quadroEspec">
                                            <option value=""></option>
                                        </select>
                                        <label class="form-label" for="quadroEspec">Quadro/Espec <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                            </div>
                            <!-- Nome Completo/NIP -->
                            <div class="row mb-3">
                                <div class="col-md-9">
                                    <div class="form-floating">
                                        <input class="form-control text-uppercase" id="nomeCompleto" placeholder="Digite seu nome"
                                               type="text" required>
                                        <label class="form-label" for="nomeCompleto">Nome Completo <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating">
                                        <input class="form-control" id="nip" placeholder="NIP"
                                               type="text" required>
                                        <label class="form-label" for="nip">NIP <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                            </div>
                            <!-- IP/MAC/Hostname  -->
                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <input class="form-control" id="enderecoIP" type="text"
                                               value="<?php echo $ip; ?>" disabled>
                                        <label class="form-label" for="enderecoIP">Endereço IP <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <input class="form-control" id="macAddress" value="" type="text" required>
                                        <label class="form-label" for="macAddress">Endereço Físico <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating align-items-center">
                                        <input class="form-control text-uppercase" id="nomeMaquina" type="text"
                                               value="<?php echo $hostname; ?>"
                                               data-bs-toggle="tooltip"
                                               data-bs-custom-class="custom-tooltip"
                                               data-bs-html="true"
                                               data-bs-placement="bottom"
                                               data-bs-title="Verifique se a <strong>etiqueta</strong> do seu equipamento é igual a informação deste campo."
                                               disabled>
                                        <label class="form-label" for="nomeMaquina">Identificação <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                            </div>
                            <!-- Seleção de Programas/Observações -->
                            <div class="row mb-2">
                                <div class="col-md-4">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#selecaoProgramasModal">
                                        Selecione os programas instalados
                                    </button>
                                    <input type="hidden" id="programasSelecionados" name="programasSelecionados">
                                </div>
                                <div class="col-md-8">
                                    <small>
                                        <ul>
                                            <li>
                                                <span class="text-danger fw-bold">*</span> Campos obrigatórios
                                            </li>
                                            <li>
                                                Se a <em>Identificação</em> não esteja de acordo com a etiqueta do
                                                dispositivo.
                                                Entre em contato com o <span class="obs text-decoration-underline"
                                                                             title="Ramal: 3966"> Administrador de Rede da OM.</span>
                                            </li>
                                        </ul>
                                    </small>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- Botão Gerar TRE -->
                <div class="mt-3 text-center">
                    <button class="btn btn-success w-25 mb-3 fw-bold" id="gerarTRE" type="submits">
                        GERAR TRE
                        <span class="bi bi-file-earmark-arrow-down-fill"></span>
                    </button>
                </div>
            </div>
        </div>
        <!-- TRI -->
        <div aria-labelledby="tabTermoTRI" class="termo tab-pane fade" id="tri-texto" role="tabpanel">
            <div class="row gx-5 justify-content-center">
                <!-- Texto Termo -->
                <div class="col bg-light">
                    <div>
                        <h5 class="my-3 text-center">Termo de Responsabilidade Individual</h5>
                    </div>
                    <div class="text-justify px-2 overflow-auto texto-termo">
                        <p>
                            Pelo presente instrumento, eu, <strong>PostoGRAD NOME COMPLETO, NIP XX.XXXX.XX</strong>,
                            perante a Marinha do Brasil, doravante denominada MB, na qualidade de usuário do ambiente
                            computacional de propriedade daquela Instituição, declaro estar ciente das normas de
                            segurança das informações digitais da OM, segundo as quais devo:
                        </p>
                        <p>
                            <strong>a)</strong> tratar a informação digital como patrimônio da MB e como um recurso que
                            deva ter seu sigilo preservado, em consonância com a legislação vigente;
                        </p>
                        <p>
                            <strong>b)</strong> utilizar as informações disponíveis e os sistemas e produtos
                            computacionais, dos quais a MB é proprietária ou possui o direito de uso, exclusivamente
                            para o interesse do serviço;
                        </p>
                        <p>
                            <strong>c)</strong> preservar o conteúdo das informações sigilosas a que tiver acesso, sem
                            divulgá-las para pessoas não autorizadas;
                        </p>
                        <p>
                            <strong>d)</strong> não tentar obter acesso a informação cujo grau de sigilo não seja
                            compatível com a minha Credencial de Segurança (CREDSEG) ou que eu não tenha autorização ou
                            necessidade de conhecer;
                        </p>
                        <p>
                            <strong>e)</strong> não compartilhar o uso de senha com outros usuários;
                        </p>
                        <p>
                            <strong>f)</strong> não me fazer passar por outro usuário usando a sua identificação de
                            acesso e senha;
                        </p>
                        <p>
                            <strong>g)</strong> não alterar o endereço de rede ou qualquer outro dado de identificação
                            do microcomputador de meu uso;
                        </p>
                        <p>
                            <strong>h)</strong> instalar e utilizar em meu microcomputador somente programas homologados
                            para uso na MB e que esta possua as respectivas licenças de uso ou, no caso de programas de
                            domínio público, mediante autorização formal do Oficial de Segurança da Informação e
                            Comunicações (OSIC) da OM;
                        </p>
                        <p>
                            <strong>i)</strong> no caso de exoneração, demissão, licenciamento, término de prestação de
                            serviço ou qualquer tipo de afastamento, preservar o conteúdo das informações e documentos
                            sigilosos a que tive acesso e não divulgá-los para pessoas não autorizadas;
                        </p>
                        <p>
                            <strong>j)</strong> guardar segredo das minhas autenticações de acesso (senhas) utilizadas
                            no ambiente computacional da OM, não cedendo, não transferindo, não divulgando e não
                            permitindo o seu conhecimento por terceiros;
                        </p>
                        <p>
                            <strong>k)</strong> não utilizar senha com sequência fácil ou óbvia de caracteres que
                            facilite a sua descoberta e não escrever a senha em lugares visíveis ou de fácil acesso;
                        </p>
                        <p>
                            <strong>l)</strong> utilizar, ao me afastar momentaneamente da minha estação de trabalho,
                            descanso de tela (“screen saver”) protegido por senha, a fim de evitar que alguém possa ver
                            as informações que estejam disponíveis na tela do computador;
                        </p>
                        <p>
                            <strong>m)</strong> ao me ausentar do local de trabalho, momentaneamente ou ao término de
                            minhas atividades diárias, certificar-me de que a sessão aberta no ambiente computacional
                            com minha identificação foi fechada e as informações que exigem sigilo foram adequadamente
                            salvaguardadas;
                        </p>
                        <p>
                            <strong>n)</strong> seguir as orientações da área de informática da OM relativas à
                            instalação, à manutenção e ao uso adequado dos equipamentos, dos sistemas e dos programas do
                            ambiente computacional;
                        </p>
                        <p>
                            <strong>o)</strong> comunicar imediatamente ao meu superior hierárquico e ao Oficial de
                            Segurança da Informação e Comunicações (OSIC) da OM a ocorrência de qualquer evento que
                            implique ameaça ou impedimento de cumprir os procedimentos de segurança estabelecidos;
                        </p>
                        <p>
                            <strong>p)</strong> responder, perante a MB, às auditorias e ao Oficial de Segurança da
                            Informação e Comunicações (OSIC) da OM, por acessos, tentativas de acessos ou uso indevido
                            da informação digital realizados com a minha identificação ou autenticação;
                        </p>
                        <p>
                            <strong>q)</strong> não praticar quaisquer atos que possam afetar o sigilo ou a integridade
                            da informação;
                        </p>
                        <p>
                            <strong>r)</strong> estar ciente de que toda informação digital armazenada e processada no
                            ambiente computacional da OM pode ser auditada, como no caso de páginas informativas
                            (“sites”) visitadas por mim;
                        </p>
                        <p>
                            <strong>s)</strong> não transmitir, copiar ou reter arquivos contendo textos, fotos, filmes
                            ou quaisquer outros registros que contrariem a moral, os bons costumes e a legislação
                            vigente;
                        </p>
                        <p>
                            <strong>t)</strong> não transferir qualquer tipo de arquivo que pertença à MB para outro
                            local, seja por meio magnético ou não, exceto no interesse do serviço e mediante autorização
                            da autoridade competente;
                        </p>
                        <p>
                            <strong>u)</strong> estar ciente de que o processamento, o trâmite e o armazenamento de
                            arquivos que não sejam de interesse do serviço são expressamente proibidos no ambiente
                            computacional da OM;
                        </p>
                        <p>
                            <strong>v)</strong> estar ciente de que a MB poderá auditar os arquivos em trâmite ou
                            armazenados nos equipamentos do ambiente computacional da OM sob meu uso ou
                            responsabilidade;
                        </p>
                        <p>
                            <strong>w)</strong> estar ciente de que o correio eletrônico é de uso exclusivo para o
                            interesse do serviço e qualquer correspondência eletrônica originada ou retransmitida no
                            ambiente computacional da OM deve obedecer a este preceito; e
                        </p>
                        <p>
                            <strong>x)</strong> estar ciente de que a MB poderá auditar as correspondências eletrônicas
                            originadas ou retransmitidas por mim no ambiente computacional da OM.
                        </p>
                        <p>
                            Desta forma, estou ciente da minha responsabilidade pelas consequências decorrentes da não
                            observância do acima exposto e da legislação vigente.
                        </p>
                    </div>
                </div>
                <!-- Formulário -->
                <div class="col">
                    <div>
                        <h5 class="text-center my-3">Preencha os dados</h5>
                        <form class="formulario">
                            <!-- Oficial/Praça -->
                            <div class="row mb-3 align-items-center justify-content-center">
                                <div class="col-md-2 text-center">
                                    <div class="form-check">
                                        <input checked class="form-check-input oficialRadio" id="oficialRadio"
                                               name="tipoUsuario"
                                               type="radio" value="Oficial">
                                        <label class="form-check-label" for="oficialRadio">Oficial</label>
                                    </div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <div class="form-check">
                                        <input class="form-check-input pracaRadio" id="pracaRadio" name="tipoUsuario"
                                               type="radio"
                                               value="Praca">
                                        <label class="form-check-label" for="pracaRadio">Praça</label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select postoGrad" id="postoGrad">
                                            <option value=""></option>
                                        </select>
                                        <label class="form-label" for="postoGrad">Posto/Grad <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select quadroEspec" id="quadroEspec">
                                            <option value=""></option>
                                        </select>
                                        <label class="form-label" for="quadroEspec">Quadro/Espec <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                            </div>
                            <!-- Nome Completo/NIP -->
                            <div class="row mb-3">
                                <div class="col-md-9">
                                    <div class="form-floating">
                                        <input class="form-control" id="nomeCompleto" placeholder="Digite seu nome"
                                               type="text">
                                        <label class="form-label" for="nomeCompleto">Nome Completo <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating">
                                        <input class="form-control" id="nip" placeholder="NIP"
                                               type="text" required>
                                        <label class="form-label" for="nip">NIP <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <small>
                                <ul>
                                    <li>
                                        <span class="text-danger fw-bold">*</span> Campos obrigatórios
                                    </li>
                                    <li>
                                        Se a <em>Identificação</em> não esteja de acordo com a etiqueta do dispositivo.
                                        Entre em contato com o <span class="obs text-decoration-underline"
                                                                     title="Ramal: 3966"> Administrador de Rede da OM.</span>
                                    </li>
                                </ul>
                            </small>
                        </div>
                    </div>
                </div>
                <!-- Botão Gerar TRI -->
                <div class="mt-3 text-center">
                    <button class="btn btn-success w-25 mb-3 fw-bold" id="preencherFormTRI" type="button">
                        GERAR TRI
                        <span class="bi bi-file-earmark-arrow-down-fill"></span>
                    </button>
                </div>
            </div>
        </div>
        <!-- TRPVM -->
        <div aria-labelledby="tabTermoTRPVM" class="termo tab-pane fade" id="trpvm-texto" role="tabpanel">
            <div class="row gx-5 justify-content-center">
                <!-- Texto Termo -->
                <div class="col bg-light">
                    <div>
                        <h5 class="my-3 text-center">Termo de Responsabilidade Portal MB/Máquina Virtual MB</h5>
                    </div>
                    <div class="text-justify px-2 texto-termo overflow-auto">
                        <p>
                            “O Portal MB, Máquina Virtual MB e as informações por estes sistemas disponibilizadas são de
                            propriedade da Marinha do Brasil. Na qualidade de usuário do ambiente computacional de
                            propriedade
                            da MB, declaro estar ciente das normas e procedimentos para a segurança da informação em
                            vigor
                            (DGMM-0540 Rev3) e da Lei nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD), devendo
                            tratar
                            as informações disponíveis, sistemas e produtos computacionais, dos quais a MB é
                            proprietária ou
                            possui o direito de uso, como um recurso que deva ter seu sigilo preservado, bem como,
                            utilizá-lo
                            exclusivamente para o serviço, em consonância com a legislação vigente.”
                        </p>
                    </div>
                </div>
                <!-- Formulário -->
                <div class="col">
                    <div>
                        <h5 class="text-center my-3">Preencha os dados</h5>
                        <form class="formulario">
                            <!-- Oficial/Praça -->
                            <div class="row mb-3 align-items-center justify-content-center">
                                <div class="col-md-2 text-center">
                                    <div class="form-check">
                                        <input checked class="form-check-input oficialRadio" id="oficialRadio"
                                               name="tipoUsuario"
                                               type="radio" value="Oficial">
                                        <label class="form-check-label" for="oficialRadio">Oficial</label>
                                    </div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <div class="form-check">
                                        <input class="form-check-input pracaRadio" id="pracaRadio" name="tipoUsuario"
                                               type="radio"
                                               value="Praca">
                                        <label class="form-check-label" for="pracaRadio">Praça</label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select postoGrad" id="postoGrad" required>
                                            <option value=""></option>
                                        </select>
                                        <label class="form-label" for="postoGrad">Posto/Graduação <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select quadroEspec" id="quadroEspec" required>
                                            <option value=""></option>
                                        </select>
                                        <label class="form-label" for="quadroEspec">Quadro/Espec <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                            </div>
                            <!-- Nome Completo + IP -->
                            <div class="row mb-3">
                                <div class="col-md-9">
                                    <div class="form-floating">
                                        <input class="form-control" id="nomeCompleto" placeholder="Digite seu nome"
                                               type="text">
                                        <label class="form-label" for="nomeCompleto">Nome Completo <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating">
                                        <input class="form-control" id="nip" placeholder="NIP"
                                               type="text" required>
                                        <label class="form-label" for="nip">NIP <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div>
                            <small>
                                <ul>
                                    <li>
                                        <span class="text-danger fw-bold">*</span> Campos obrigatórios
                                    </li>
                                    <li>
                                        Se a <em>Identificação</em> não esteja de acordo com a etiqueta do dispositivo.
                                        Entre em contato com o <span class="obs text-decoration-underline"
                                                                     title="Ramal: 3966"> Administrador de Rede da OM.</span>
                                    </li>
                                </ul>
                            </small>
                        </div>
                    </div>
                </div>
                <!-- Botão Gerar TRPVM -->
                <div class="mt-3 text-center">
                    <button class="btn btn-success w-25 mb-3 fw-bold" id="preencherFormTRI" type="button">
                        GERAR TRPVM
                        <span class="bi bi-file-earmark-arrow-down-fill"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Modal Seleção de Programas-->
<div class="modal fade" id="selecaoProgramasModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
     aria-labelledby="selecaoProgramasLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-uppercase" id="selecaoProgramasLabel">Seleção de programas instalados</h1>
                <button type="button" class="btn-close bg-light btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="text-light">Clique nos programas instalados em seu dispositivo:</p>
                <form id="formProgramas">
                    <div class="row">
                        <div class="col-md-4">
                            <input type="checkbox" class="btn-check" id="1" autocomplete="off" value="Microsoft Office">
                            <label class="btn btn-outline-light btn-sm mb-2" for="1">Microsoft Office</label><br>

                            <input type="checkbox" class="btn-check" id="2" autocomplete="off" value="LibreOffice">
                            <label class="btn btn-outline-light btn-sm mb-2" for="2">LibreOffice</label><br>

                            <input type="checkbox" class="btn-check" id="3" autocomplete="off" value="Adobe Reader">
                            <label class="btn btn-outline-light btn-sm mb-2" for="3">Adobe Reader</label><br>

                            <input type="checkbox" class="btn-check" id="4" autocomplete="off" value="7-Zip">
                            <label class="btn btn-outline-light btn-sm mb-2" for="4">7-Zip</label><br>
                        </div>
                        <div class="col-md-4">
                            <input type="checkbox" class="btn-check" id="5" autocomplete="off" value="Eraser">
                            <label class="btn btn-outline-light btn-sm mb-2" for="5">Eraser</label><br>

                            <input type="checkbox" class="btn-check" id="6" autocomplete="off" value="Java JRE">
                            <label class="btn btn-outline-light btn-sm mb-2" for="6">Java JRE</label><br>

                            <input type="checkbox" class="btn-check" id="7" autocomplete="off" value="Apache NetBeans">
                            <label class="btn btn-outline-light btn-sm mb-2" for="7">Apache NetBeans</label><br>

                            <input type="checkbox" class="btn-check" id="8" autocomplete="off" value="Kaspersky Antivírus">
                            <label class="btn btn-outline-light btn-sm mb-2" for="8">Kaspersky Antivírus</label><br>
                        </div>
                        <div class="col-md-4">
                            <input type="checkbox" class="btn-check" id="9" autocomplete="off" value="Orion">
                            <label class="btn btn-outline-light btn-sm mb-2" for="9">Orion</label><br>

                            <input type="checkbox" class="btn-check" id="10" autocomplete="off" value="VMware Workstation">
                            <label class="btn btn-outline-light btn-sm mb-2" for="10">VMware Workstation</label><br>

                            <input type="checkbox" class="btn-check" id="11" autocomplete="off" value="CorelDRAW">
                            <label class="btn btn-outline-light btn-sm mb-2" for="11">CorelDRAW</label><br>

                            <input type="checkbox" class="btn-check" id="12" autocomplete="off" value="Adobe Photoshop  ">
                            <label class="btn btn-outline-light btn-sm mb-2" for="12">Adobe Photoshop</label><br>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" id="salvarProgramasSelecionados" for="formProgramas" data-bs-dismiss="modal"
                        class="btn btn-warning btn-sm">
                    Salvar seleção
                </button>
            </div>
        </div>
    </div>
</div>

<footer class="text-light py-2">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <p class="mb-0">&copy; 2024 Comissão de Promoções de Oficiais. Todos os direitos reservados.</p>
                <p class="mb-0">SysTR - Desenvolvido por Marcelo Dias</p>
            </div>
        </div>
    </div>
</footer>

<!-- jQuery/Bootstrap/jsPDF-->
<script src="js/jquery-3.7.1.slim.min.js"></script>
<script src="js/jquery-3.7.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="js/jsPDF/jspdf.umd.min.js"></script>
<script src="js/jsPDF-AutoTable/jspdf.plugin.autotable.min.js"></script>
<!-- JS do Sistema -->
<script src="js/scripts.js"></script>
<script src="js/fontesBase64.js"></script>
</body>

</html>