function trackScreen() {
    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'pageview');
}

function trackEntreCont(){
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
}

function trackDownload(){
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
}

function trackLorem(){
    ga('send', 'event', 'analise', 'ver_mais', 'Lorem');
}

function trackIpsum(){
    ga('send', 'event', 'analise', 'ver_mais', 'Ipsum');
}

function trackDolor(){
    ga('send', 'event', 'analise', 'ver_mais', 'Dolor');
}

function trackContato(){
    trackContatoNome();
    trackContatoEmail();
    trackContatoTelefone();
    trackContatoAceito();
}

function trackContatoNome(){
    var value = document.getElementById("nome").value;
    if (value) {
        console.log(value);
        ga('send', 'event', 'contato', 'nome', 'preencheu')
    }
}

function trackContatoEmail(){
    var value = document.getElementById("email").value;
    if (value) {
        console.log(value);
        ga('send', 'event', 'contato', 'email', 'preencheu')
    }
}

function trackContatoTelefone(){
    var value = document.getElementById("telefone").value;
    if (value) {
        console.log(value);
        ga('send', 'event', 'contato', 'telefone', 'preencheu')
    }
}

function trackContatoAceito(){
    var value = document.getElementById("aceito").checked;
    if (value) {
        console.log(value);
        ga('send', 'event', 'contato', 'aceito', 'preencheu')
    }
}

function trackContatoEnviado(){
    ga('send', 'event', 'contato', 'enviado', 'enviado');
    //console.log('enviado');
}