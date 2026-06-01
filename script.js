// SEU FIREBASE CONFIGURADO E ATIVO
const firebaseConfig = {
    apiKey: "AIzaSyBUtHF-AuRkhPoXfkFsfWyPOBHwy8_mPSw",
    authDomain: "escala-ad3f2.firebaseapp.com",
    databaseURL: "https://escala-ad3f2-default-rtdb.firebaseio.com",
    projectId: "escala-ad3f2",
    storageBucket: "escala-ad3f2.firebasestorage.app",
    messagingSenderId: "299403679280",
    appId: "1:299403679280:web:158fb997702454ea4f7ff5",
    measurementId: "G-V0SHYQDPG1"
};

// Inicializa o aplicativo Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const escalaRef = database.ref('celulasMarcadas');

const matrizesEscala = {
    todos: [
        { hora: "23:00", pix: "Paloma", bds: "Leandro", vip: "Leandro", gan: "Ivah", disc: "Todos", status: "-" },
        { hora: "00:00", pix: "Paloma", bds: "Leandro", vip: "Leandro", gan: "Ivah", disc: "Todos", status: "-" },
        { hora: "01:00", pix: "Ivah", bds: "Paloma", vip: "Paloma", gan: "Leandro", disc: "Todos", status: "-" },
        { hora: "02:00", pix: "Leandro", bds: "Ivah", vip: "Ivah", gan: "Leandro", disc: "Ivah e Leandro", status: "(Pausa de Paloma)" },
        { hora: "03:00", pix: "Leandro", bds: "Paloma", vip: "Paloma", gan: "Leandro", disc: "Leandro e Paloma", status: "(Pausa de Ivah)" },
        { hora: "04:00", pix: "Paloma", bds: "Paloma", vip: "Ivah", gan: "Ivah", disc: "Ivah e Paloma", status: "(Pausa de Leandro)" },
        { hora: "05:00", pix: "Ivah", bds: "Leandro", vip: "Leandro", gan: "Paloma", disc: "Todos", status: "-" },
        { hora: "06:00", pix: "Leandro", bds: "Ivah", vip: "Ivah", gan: "Paloma", disc: "Todos", status: "-" },
        { hora: "07:00", pix: "-", bds: "-", vip: "-", gan: "-", disc: "-", status: "-" }
    ],
    leandro: [
        { hora: "23:00", pix: "Ivah", bds: "Paloma", vip: "Paloma", gan: "Ivah", disc: "Todos", status: "-" },
        { hora: "00:00", pix: "Ivah", bds: "Paloma", vip: "Paloma", gan: "Ivah", disc: "Todos", status: "-" },
        { hora: "01:00", pix: "Ivah", bds: "Paloma", vip: "Paloma", gan: "Ivah", disc: "Todos", status: "-" },
        { hora: "02:00", pix: "Ivah", bds: "Ivah", vip: "Ivah", gan: "Ivah", disc: "Ivah", status: "(Pausa de Paloma)" },
        { hora: "03:00", pix: "Paloma", bds: "Paloma", vip: "Paloma", gan: "Paloma", disc: "Paloma", status: "(Pausa de Ivah)" },
        { hora: "04:00", pix: "Paloma", bds: "Ivah", vip: "Ivah", gan: "Paloma", disc: "Todos", status: "-" },
        { hora: "05:00", pix: "Paloma", bds: "Ivah", vip: "Ivah", gan: "Paloma", disc: "Todos", status: "-" },
        { hora: "06:00", pix: "Paloma", bds: "Ivah", vip: "Ivah", gan: "Paloma", disc: "Todos", status: "-" },
        { hora: "07:00", pix: "-", bds: "-", vip: "-", gan: "-", disc: "-", status: "-" }
    ],
    paloma: [
        { hora: "23:00", pix: "Leandro", bds: "Ivah", vip: "Ivah", gan: "Leandro", disc: "Todos", status: "-" },
        { hora: "00:00", pix: "Ivah", bds: "Leandro", vip: "Leandro", gan: "Ivah", disc: "Todos", status: "-" },
        { hora: "01:00", pix: "Ivah", bds: "Leandro", vip: "Leandro", gan: "Ivah", disc: "Todos", status: "-" },
        { hora: "02:00", pix: "Ivah", bds: "Leandro", vip: "Leandro", gan: "Ivah", disc: "Todos", status: "-" },
        { hora: "03:00", pix: "Leandro", bds: "Leandro", vip: "Leandro", gan: "Leandro", disc: "Leandro", status: "(Pausa de Ivah)" },
        { hora: "04:00", pix: "Ivah", bds: "Ivah", vip: "Ivah", gan: "Ivah", disc: "Ivah", status: "(Pausa de Leandro)" },
        { hora: "05:00", pix: "Leandro", bds: "Ivah", vip: "Ivah", gan: "Leandro", disc: "Todos", status: "-" },
        { hora: "06:00", pix: "Leandro", bds: "Ivah", vip: "Ivah", gan: "Leandro", disc: "Todos", status: "-" },
        { hora: "07:00", pix: "-", bds: "-", vip: "-", gan: "-", disc: "-", status: "-" }
    ],
    ivah: [
        { hora: "23:00", pix: "Paloma", bds: "Leandro", vip: "Leandro", gan: "Paloma", disc: "Todos", status: "-" },
        { hora: "00:00", pix: "Paloma", bds: "Leandro", vip: "Leandro", gan: "Paloma", disc: "Todos", status: "-" },
        { hora: "01:00", pix: "Paloma", bds: "Leandro", vip: "Leandro", gan: "Leandro", disc: "Todos", status: "-" },
        { hora: "02:00", pix: "Leandro", bds: "Leandro", vip: "Leandro", gan: "Leandro", disc: "Leandro", status: "(Pausa de Paloma)" },
        { hora: "03:00", pix: "Paloma", bds: "Paloma", vip: "Paloma", gan: "Paloma", disc: "Paloma", status: "(Pausa de Leandro)" },
        { hora: "04:00", pix: "Leandro", bds: "Paloma", vip: "Paloma", gan: "Leandro", disc: "Todos", status: "-" },
        { hora: "05:00", pix: "Leandro", bds: "Paloma", vip: "Paloma", gan: "Leandro", disc: "Todos", status: "-" },
        { hora: "06:00", pix: "Leandro", bds: "Paloma", vip: "Paloma", gan: "Leandro", disc: "Todos", status: "-" },
        { hora: "07:00", pix: "-", bds: "-", vip: "-", gan: "-", disc: "-", status: "-" }
    ]
};

let celulasMarcadas = new Set();

const hoje = new Date();
document.getElementById('shift-date').value = hoje.toISOString().split('T')[0];

// SEU NOVO CONTEÚDO EXATO PARA A CAIXA DE TEXTO
function gerarTemplateRelatorio(dataString) {
    const dataInvertida = dataString.split('-').reverse().join('/');
    return `FLASH REPORT - (MADRUGADA)\n` +
           `Data: ${dataInvertida}\n\n` +
           `Bom dia, pessoal!\n\n` +
           `PIXBET | BETDÁSORTE | GANHEIBET | BETVIP\n\n` +
           `Ocorrências:\n\n` +
           `Tenham um ótimo dia de trabalho!`;
}

document.getElementById('report-text').value = gerarTemplateRelatorio(document.getElementById('shift-date').value);

function atualizarDataRelatorio() {
    const campoData = document.getElementById('shift-date').value;
    const textoExistente = document.getElementById('report-text').value;
    const divisaoLinhas = textoExistente.split('\n');
    
    if (divisaoLinhas.length >= 2 && divisaoLinhas[1].startsWith("Data:")) {
        divisaoLinhas[1] = `Data: ${campoData.split('-').reverse().join('/')}`;
        document.getElementById('report-text').value = divisaoLinhas.join('\n');
    } else {
        document.getElementById('report-text').value = gerarTemplateRelatorio(campoData);
    }
}

function mudarCenarioEscala() {
    const tipoCenario = document.getElementById('scenery-select').value;
    const dadosCenario = matrizesEscala[tipoCenario];
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = "";

    dadosCenario.forEach((linha, indexLinha) => {
        const tr = document.createElement('tr');
        
        const renderCell = (valor, colunaNome) => {
            if(valor === "-" || valor === "Todos" || valor.includes("Pausa")) return valor;
            
            const cellId = `id-${indexLinha}-${colunaNome}`;
            const activeClass = celulasMarcadas.has(cellId) ? "checked" : "";
            
            return `<span id="${cellId}" class="operator-check ${activeClass}" onclick="ejecutarCheckInIndividual('${cellId}')">${valor}</span>`;
        };

        tr.innerHTML = `
            <td class="time-col">${linha.hora}</td>
            <td>${renderCell(linha.pix, 'pix')}</td>
            <td>${renderCell(linha.bds, 'bds')}</td>
            <td>${renderCell(linha.vip, 'vip')}</td>
            <td>${renderCell(linha.gan, 'gan')}</td>
            <td>${renderCell(linha.disc, 'disc')}</td>
            <td style="font-style: italic; color: #94a3b8;">${linha.status}</td>
        `;
        tbody.appendChild(tr);
    });
}

function ejecutarCheckInIndividual(cellId) {
    if (celulasMarcadas.has(cellId)) {
        escalaRef.child(cellId).remove();
    } else {
        escalaRef.child(cellId).set(true);
    }
}

escalaRef.on('value', (snapshot) => {
    celulasMarcadas.clear();
    const dados = snapshot.val();
    
    if (dados) {
        Object.keys(dados).forEach(cellId => {
            celulasMarcadas.add(cellId);
        });
    }
    mudarCenarioEscala();
});

document.getElementById('btnLimparEscala').addEventListener('click', function() {
    if (confirm("Você tem certeza que deseja limpar todos os check-ins atuais para TODOS os usuários ativos?")) {
        escalaRef.remove();
    }
});

mudarCenarioEscala();
