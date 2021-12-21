<?php

    if (isset($_POST['email']) && !empty($_POST['email'])) {

        $name = addslashes($_POST['name']);
        $fone = addslashes($_POST['fone']);
        $mailFrom = addslashes($_POST['email']);
        $message = addslashes($_POST['message']);

        $mail = 'contato@lotuscorporacoes.com.br';

        $para = $mail;
        $assunto = "Contato do Site Lotus Corporações";
        $body = "Nome: ".$name."\r\n"."Telefone: ".$fone."\r\n"."E-mail: ".$mailFrom."\r\n"."Mensagem: ".$message;

        $headers = "From: ".$mailFrom."\r\n"."Replay-To: ".$mailFrom."\r\n"."X-Mailer: PHP/".phpversion();

        mail($para, $assunto, $body, $headers);

        header('Location: index.html');
        exit;

    }

    header('Location: index.html');
    exit;
?>