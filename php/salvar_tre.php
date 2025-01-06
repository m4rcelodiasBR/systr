<?php
$diretorio = '../termos/tre/';

if (!is_dir($diretorio)) {
    mkdir($diretorio, 0755, true);
}

if (isset($_FILES['pdf'])) {
    $arquivo = $_FILES['pdf'];
    $caminhoArquivo = $diretorio . basename($arquivo['name']);
    if (move_uploaded_file($arquivo['tmp_name'], $caminhoArquivo)) {
        echo json_encode(["status" => "success", "message" => "Termo de Responsabilidade de Estação de Trabalho gerado com sucesso.
        Foi criado uma cópia no servidor. Será apenas necessário entrar em contato com o Administrador da Rede Local
        para informar a geração do termo."]);
    } else {
        echo json_encode(["status" => "erro", "message" => "Erro ao gerar/salvar o TRE. Entre em contato com o
        Administrador da Rede Local."]);
    }
} else {
    echo json_encode(["status" => "erro", "message" => "Nenhum arquivo TRE foi criado. Entre em contato com o
        Administrador da Rede Local"]);
}
?>