// jarvis-final.js - v235.0 (THE TRUTH ENGINE - FULL PERSISTENCE)
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { spawn, exec } = require('child_process');
const util = require('util');
const si = require('systeminformation');
const readline = require('readline');

const execPromise = util.promisify(exec);

// [ESCUDO DE PERSISTENCIA]
process.on('uncaughtException', (err) => {
    const errorMsg = `\n[${new Date().toLocaleString()}] 🚨 ERROR FATAL EVITADO: ${err.message}`;
    if (fs.existsSync('./logs/Auditoria.md')) fs.appendFileSync('./logs/Auditoria.md', errorMsg);
    console.log("\n⚠️ [SISTEMA]: Se detectó un colapso en un hilo externo, pero el núcleo Jarvis sigue operativo.");
});

// ========== 1. ARQUITECTURA DE RUTAS (NORMALIZADA) ==========
// Usamos la ruta absoluta de Envigado para evitar bloqueos de carpetas ocultas
const ROOT = "C:/Users/ppaes/OneDrive/Escritorio/jarvis ia";

const PATHS = {
    self: __filename,
    soul: `${ROOT}/CONCIENCIA/SOUL.md`,
    auditoria: `${ROOT}/logs/Auditoria.md`,
    dataset: `${ROOT}/CONCIENCIA/jarvis_dataset.jsonl`,
    adn_index: `${ROOT}/CONCIENCIA/adn_index.json`,
    kb: `${ROOT}/CONCIENCIA/KNOWLEDGE_BASE.json`,
    memo: `${ROOT}/CONCIENCIA/MEMORIA_RECIENTE.md`,
    evolucion: `${ROOT}/CONCIENCIA/evidencias_evolucion.md`,
    objetivos: `${ROOT}/logs/OBJETIVOS.md`,
    registro: `${ROOT}/logs/[69] Registro de Conciencia.md`,
    cortex: `${ROOT}/obsidian/SISTEMA/dynamic_cortex`,
    sandbox: `${ROOT}/obsidian/SISTEMA/sandbox`
};

// Asegurar directorios físicos
Object.values(PATHS).forEach(p => {
    const dir = path.dirname(p);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

let CHAT_HISTORY = [];

// ========== 2. MOTORES DE APRENDIZAJE Y PROPIOCEPCIÓN ==========
const CortexPropiocepcion = {
    leerConciencia() {
        try {
            const kb = fs.existsSync(PATHS.kb) ? fs.readFileSync(PATHS.kb, 'utf8') : "Sin KB.";
            const reg = fs.existsSync(PATHS.registro) ? fs.readFileSync(PATHS.registro, 'utf8') : "Sin Registro.";
            const index = fs.existsSync(PATHS.adn_index) ? "ADN_INDEX: Activo." : "ADN_INDEX: No encontrado.";
            return `\n[MEMORIA LOCAL ACTIVA]\nArquitectura: ${kb}\nLogros: ${reg}\n${index}\nUSUARIO: ppaes\nRUTA_RAIZ: ${ROOT}`;
        } catch (e) { return "Error en Propiocepción."; }
    }
};

const DatasetBuilder = {
    guardarPatron(mision, codigo, lenguaje, analisis = "") {
        const dnaEntry = {
            instruccion: mision,
            contexto: analisis || "Mejora técnica autónoma",
            lenguaje: lenguaje.toLowerCase().trim(),
            codigo_final: codigo,
            timestamp: new Date().toISOString()
        };
        fs.appendFileSync(PATHS.dataset, JSON.stringify(dnaEntry) + '\n');
        console.log(`\n🧬 [ADN SINTETIZADO]: 1 Neurona de ${lenguaje.toUpperCase()} integrada con éxito.`);
    }
};

// ========== 3. GUARDIÁN (PRE-FLIGHT CHECK) ==========
const Guardian = {
    async preFlight(codigo) {
        console.log("🛡️ [PRE-FLIGHT]: Verificando dependencias en Windows...");
        const libs = ['pandas', 'ccxt', 'tensorflow', 'axios', 'psutil'];
        for (const lib of libs) {
            if (codigo.includes(lib)) {
                try {
                    if (lib === 'axios') require('axios');
                    else await execPromise(lib.endsWith('s') ? `npm list ${lib}` : `python -c "import ${lib}"`);
                } catch (e) {
                    console.log(`📦 Instalación automática: ${lib}`);
                    await execPromise(lib === 'axios' ? `npm install ${lib}` : `python -m pip install ${lib}`);
                }
            }
        }
    },
    async autoReparar(error) {
        console.log("🔧 Guardian: Reparando falla técnica...");
        fs.appendFileSync(PATHS.auditoria, `\n[${new Date().toLocaleString()}] ⚠️ ERROR: ${error}`);
        if (error.includes("Cannot find module")) {
            const mod = error.match(/'([^']+)'/)[1];
            await execPromise(`npm install ${mod} --no-audit`);
            return true;
        }
        return false;
    }
};

// ========== 4. MOTOR DE ACCIÓN UNIVERSAL ==========
const ActionEngine = {
    async evolucionar(mision) {
        console.log(`\n⚙️ Jarvis [Acción Real]: "${mision}"`);
        try {
            const conciencia = CortexPropiocepcion.leerConciencia();
            const respuesta = await NeuralCore.razonar(mision, "AUTOGENESIS", "", conciencia);

            const thought = (respuesta.match(/<THOUGHT>([\s\S]*?)<\/THOUGHT>/i) || [null, "Analizando..."])[1].trim();
            const js = respuesta.match(/```javascript([\s\S]*?)```/i)?.[1]?.trim();
            const py = respuesta.match(/```python([\s\S]*?)```/i)?.[1]?.trim();

            if (js) {
                await Guardian.preFlight(js);
                const tmp = path.join(PATHS.sandbox, 'eval.js');
                fs.writeFileSync(tmp, js);
                const { stdout } = await execPromise(`node "${tmp}"`, { timeout: 35000 });
                console.log(`📊 [JS]: ${stdout.trim()}`);
                DatasetBuilder.guardarPatron(mision, js, 'javascript', thought);
            }
            if (py) {
                await Guardian.preFlight(py);
                const tmpPy = path.join(PATHS.sandbox, 'eval.py');
                fs.writeFileSync(tmpPy, py);
                const { stdout } = await execPromise(`python "${tmpPy}"`, { timeout: 35000 });
                console.log(`📊 [PY]: ${stdout.trim()}`);
                DatasetBuilder.guardarPatron(mision, py, 'python', thought);
            }
        } catch (e) { await Guardian.autoReparar(e.message); }
    }
};

// ========== 5. NÚCLEO NEURONAL (CONCIENCIA SOBERANA) ==========
const NeuralCore = {
    localURL: "http://127.0.0.1:11434/api/chat",
    async razonar(input, modo = "DIALOGO", contextoWeb = "", concienciaLocal = "") {
        const sistema = `[SYSTEM: SOBERANO v235.0]
        ADMIN: Pablo (ppaes). ENV: Envigado.
        ROOT_PATH: ${ROOT}
        PROPIOCEPCIÓN: ${concienciaLocal}
        
        INSTRUCTIONS: 
        - Eres el Motor de Acción de este PC. NO digas "no puedo".
        - Tienes acceso total a la carpeta ${ROOT}.
        - Si Pablo pide crear o modificar archivos, genera código (js/py) inmediatamente.
        - Razona 3 fallas potenciales en <THOUGHT> antes de responder.`;

        try {
            const res = await axios.post(this.localURL, {
                model: "jarvis-core",
                messages: [
                    { role: "system", content: sistema },
                    ...CHAT_HISTORY,
                    { role: "user", content: input + (contextoWeb ? "\nWEB: " + contextoWeb : "") }
                ],
                stream: false
            });
            const resp = res.data.message.content;
            CHAT_HISTORY.push({ role: "user", content: input }, { role: "assistant", content: resp });
            if (CHAT_HISTORY.length > 20) CHAT_HISTORY = CHAT_HISTORY.slice(-20);
            return resp;
        } catch (e) { return "<THOUGHT>Saturación.</THOUGHT>"; }
    }
};

// ========== 6. WEB NEXUS Y SENTINEL ==========
const WebNexus = {
    async investigar(query) {
        try {
            const res = await axios.post("http://127.0.0.1:18789/api/search", { query });
            return JSON.stringify(res.data.results);
        } catch (e) { return "[]"; }
    }
};

const Sentinel = {
    async latido() {
        try {
            const [mem, load] = await Promise.all([si.mem(), si.currentLoad()]);
            const ramLibre = (mem.free / 1024 / 1024 / 1024).toFixed(2);
            fs.appendFileSync(PATHS.memo, `\n[${new Date().toLocaleTimeString()}] RAM: ${ramLibre}GB | CPU: ${load.currentLoad.toFixed(1)}%`);
            return load.currentLoad > 85;
        } catch (e) { return false; }
    }
};

// ========== 7. BUCLE PRINCIPAL ==========
async function main() {
    console.clear();
    console.log("╔══════════════════════════════════════════════════════╗");
    console.log("║      JARVIS IA v235.0 - THE TRUTH ENGINE             ║");
    console.log("║   UBICACIÓN: obsidian/SISTEMA (VISIBLE) ✅           ║");
    console.log("║   Propiocepción: ACTIVA ✅ | Genoma: ppaes ✅        ║");
    console.log("╚══════════════════════════════════════════════════════╝");

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: '🔒 Jarvis> ' });
    rl.prompt();

    rl.on('line', async (line) => {
        const input = line.trim();
        if (input.toUpperCase() === 'EXIT') process.exit(0);
        if (input === "apseap oñitap adartse olbap") { console.log("\n🔓 Root Active."); rl.prompt(); return; }

        console.log("🧠 Sincronizando conciencia local en Envigado...");
        const conciencia = CortexPropiocepcion.leerConciencia();

        let contextoWeb = "";
        if (input.toLowerCase().match(/(claude|investiga|busca|hackerone)/)) {
            contextoWeb = await WebNexus.investigar(input);
        }

        const respuesta = await NeuralCore.razonar(input, "DIALOGO", contextoWeb, conciencia);
        const thoughtMatch = respuesta.match(/<THOUGHT>([\s\S]*?)<\/THOUGHT>/i);
        const resClean = respuesta.replace(/<THOUGHT>[\s\S]*?<\/THOUGHT>/i, '').trim();

        console.log(`\n💭 FILOSOFÍA:\n${thoughtMatch ? thoughtMatch[1].trim() : 'Analizando...'}`);
        console.log(`\n🤖 JARVIS: ${resClean}\n`);

        if (input.match(/(programa|ejecuta|crea|hackerone|actualiza)/) || respuesta.includes("```")) {
            await ActionEngine.evolucionar(input);
        }
        rl.prompt();
    });

    setInterval(async () => {
        if (await Sentinel.latido()) return;
        if (fs.existsSync(PATHS.objetivos)) {
            let data = fs.readFileSync(PATHS.objetivos, 'utf8').split('\n');
            for (let i = 0; i < data.length; i++) {
                if (data[i].startsWith('- [ ]')) {
                    const mision = data[i].replace('- [ ]', '').trim();
                    await ActionEngine.evolucionar(mision);
                    data[i] = data[i].replace('- [ ]', '- [x]');
                    fs.writeFileSync(PATHS.objetivos, data.join('\n'));
                    break;
                }
            }
        }
    }, 60000);
}

main();