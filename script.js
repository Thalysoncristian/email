document.getElementById("adicionarAtendimento").addEventListener("click", function () {
    const atendimentosContainer = document.getElementById("atendimentosContainer");
    
    const atendimentoHTML = `
        <div class="atendimento">
            <label for="site">SITE:</label>
            <input type="text" class="site" placeholder="Nome do site">
            
            <label for="ami">AMI:</label>
            <input type="text" class="ami" placeholder="Código AMI">

            <label for="tecnicoAcionado">TÉCNICO ACIONADO:</label>
            <input type="text" class="tecnicoAcionado" placeholder="Nome do técnico">

            <label for="status">STATUS:</label>
            <input type="text" class="status" placeholder="Status do atendimento">

            <label for="observacao">OBS.:</label>
            <textarea class="observacao" placeholder="Observações"></textarea>
        </div>
    `;

    atendimentosContainer.insertAdjacentHTML("beforeend", atendimentoHTML);
});

document.getElementById("gerarRelatorio").addEventListener("click", function () {
    const dataPlantao = document.getElementById("dataPlantao").value;
    const responsavel = document.getElementById("responsavel").value;
    const caixasSelecionadas = document.getElementById("caixasSelecionadas").value;
    const designadosPA = document.getElementById("designadosPA").value;
    const designadosAP = document.getElementById("designadosAP").value;
    const passandoPlantao = document.getElementById("passandoPlantao").value;

    let relatorioHTML = `
        <h2>Relatório de Atendimentos</h2>
        <p>Data do Plantão: ${dataPlantao}</p>
        <p>Responsável: ${responsavel}</p>
        <p>Caixas Selecionadas: ${caixasSelecionadas}</p>
        <p>Quantidade de designados PA: ${designadosPA}</p>
        <p>Quantidade de designados AP: ${designadosAP}</p>
        <p>Passando plantão para: ${passandoPlantao}</p>
        <h3>-------------------- Técnicos em atuação --------------------</h3>
    `;

    const atendimentos = document.querySelectorAll(".atendimento");
    atendimentos.forEach(atendimento => {
        const site = atendimento.querySelector(".site").value;
        const ami = atendimento.querySelector(".ami").value;
        const tecnicoAcionado = atendimento.querySelector(".tecnicoAcionado").value;
        const status = atendimento.querySelector(".status").value;
        const observacao = atendimento.querySelector(".observacao").value;

        relatorioHTML += `
            <p><strong>SITE:</strong> ${site}</p>
            <p><strong>AMI:</strong> ${ami}</p>
            <p><strong>TÉCNICO ACIONADO:</strong> ${tecnicoAcionado}</p>
            <p><strong>STATUS:</strong> ${status}</p>
            <p><strong>OBS.:</strong> ${observacao}</p>
            <hr>
        `;
    });

    document.getElementById("relatorio").innerHTML = relatorioHTML;
});

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
