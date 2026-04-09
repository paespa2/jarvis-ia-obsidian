
### [8/4/2026, 2:53:26 a. m.] - CHAT
Usuario: crear un script que salude cada minuto
Jarvis: ERROR_COMUNICACION_CORTEX

### [8/4/2026, 2:55:00 a. m.] - CHAT
User: crear un script que salude cada minuto
Jarvis: **Script de saludo cada minuto**

Para crear un script que salude cada minuto, puedo proporcionarte un ejemplo en Python utilizando la biblioteca `schedule` y `time`. Aquí te dejo el código:
```python
import schedule
import time

def saludo():
    print("¡Hola! Soy Jarvis.")

schedule.every(1).minutes.do(saludo)  # Saluda cada minuto

while True:
    schedule.run_pending()
    time.sleep(1)
```
**Explicación**

1. Importamos las bibliotecas `schedule` y `time`.
2. Definimos una función `saludo()` que imprime el mensaje "¡Hola! Soy Jarvis.".
3. Utilizamos la función `schedule.every()` para programar la función `saludo()` para que se ejecute cada minuto.
4. Creamos un bucle infinito que verifica si hay tareas pendientes en la cola de `schedule` y las ejecuta.

**Ejecución**

Para ejecutar el script, debes tener instaladas las bibliotecas `schedule` y `time`. Puedes instalar `schedule` utilizando pip:
```
pip install schedule
```
Luego, simplemente copia y pega el código en un archivo con extensión `.py` (por ejemplo, `saludo.py`) y ejecútalo:
```
python saludo.py
```
El script empezará a saludar cada minuto.

**Nota**

Recuerda que este script se ejecutará en un bucle infinito, por lo que debes detenerlo manualmente cuando desees. Puedes hacerlo presionando `Ctrl+C` en la terminal o consola donde se esté ejecutando el script.

### [8/4/2026, 2:58:31 a. m.] - FALLO_DE_SISTEMA
Tarea: "Crea un script que me diga la hora cada minuto"
Logs:
Command failed: node "C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\skills\skill_auto_1775635110874.js"
node:internal/modules/cjs/loader:1478
  throw err;
  ^

Error: Cannot find module 'node-cron'
Require stack:
- C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\skills\skill_auto_1775635110874.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1475:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1048:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1072:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1093:12)
    at Module._load (node:internal/modules/cjs/loader:1261:25)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.require (node:internal/modules/cjs/loader:1575:12)
    at require (node:internal/modules/helpers:191:16)
    at Object.<anonymous> (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\skills\skill_auto_1775635110874.js:1:14)
    at Module._compile (node:internal/modules/cjs/loader:1829:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'C:\\Users\\ppaes\\OneDrive\\Escritorio\\jarvis ia\\skills\\skill_auto_1775635110874.js'
  ]
}

Node.js v25.9.0


### [8/4/2026, 2:58:31 a. m.] - INTERACCION_USUARIO
Pregunta: "Crea un script que me diga la hora cada minuto"
Respuesta: El código se generó pero falló al ejecutar. Error registrado en memoria.

### [8/4/2026, 3:00:24 a. m.] - FALLO_DE_SISTEMA
Tarea: intenta de nuevo
Logs:
Command failed: node "C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\skills\skill_auto_1775635223882.js"
node:internal/modules/cjs/loader:1478
  throw err;
  ^

Error: Cannot find module 'node-cron'
Require stack:
- C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\skills\skill_auto_1775635223882.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1475:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1048:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1072:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1093:12)
    at Module._load (node:internal/modules/cjs/loader:1261:25)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.require (node:internal/modules/cjs/loader:1575:12)
    at require (node:internal/modules/helpers:191:16)
    at Object.<anonymous> (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\skills\skill_auto_1775635223882.js:1:14)
    at Module._compile (node:internal/modules/cjs/loader:1829:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'C:\\Users\\ppaes\\OneDrive\\Escritorio\\jarvis ia\\skills\\skill_auto_1775635223882.js'
  ]
}

Node.js v25.9.0


### [8/4/2026, 3:00:24 a. m.] - INTERACCION_USUARIO
Pregunta: intenta de nuevo
Respuesta: El código se generó pero falló al ejecutar. Error registrado en memoria.

### [8/4/2026, 3:01:11 a. m.] - FALLO_DE_SISTEMA
Tarea: Crea un archivo llamado TEST.txt en mi escritorio que diga "Jarvis está vivo"
Logs:
Command failed: node "C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\skills\skill_auto_1775635270968.js"
node:internal/errors:546
      throw error;
      ^

TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
    at Object.join (node:path:513:7)
    at Object.<anonymous> (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\skills\skill_auto_1775635270968.js:4:26)
    at Module._compile (node:internal/modules/cjs/loader:1829:14)
    at Object..js (node:internal/modules/cjs/loader:1969:10)
    at Module.load (node:internal/modules/cjs/loader:1552:32)
    at Module._load (node:internal/modules/cjs/loader:1354:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47 {
  code: 'ERR_INVALID_ARG_TYPE'
}

Node.js v25.9.0


### [8/4/2026, 3:01:11 a. m.] - INTERACCION_USUARIO
Pregunta: Crea un archivo llamado TEST.txt en mi escritorio que diga "Jarvis está vivo"
Respuesta: El código se generó pero falló al ejecutar. Error registrado en memoria.

### [8/4/2026, 3:09:52 a. m.] - EVOLUCION_EXITOSA
Tarea: Error al obtener el clima: AxiosError: Request failed with status code 401
    at settle (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\node_modules\axios\dist\node\axios.cjs:1931:12)
    at IncomingMessage.handleStreamEnd (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\node_modules\axios\dist\node\axios.cjs:3176:11)
    at IncomingMessage.emit (node:events:521:24)
    at endReadableNT (node:internal/streams/readable:1729:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
    at Axios.request (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\node_modules\axios\dist\node\axios.cjs:4236:41)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async obtenerClima (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\sandbox\eval_1775635789158.js:14:27)
    at async main (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\sandbox\eval_1775635789158.js:37:19) {
  isAxiosError: true,
  code: 'ERR_BAD_REQUEST',
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
      legacyInterceptorReqResOrdering: true
    },
    adapter: [ 'xhr', 'http', 'fetch' ],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: [Function], Blob: [class Blob] },
    validateStatus: [Function: validateStatus],
    headers: Object [AxiosHeaders] {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': undefined,
      'User-Agent': 'axios/1.14.0',
      'Accept-Encoding': 'gzip, compress, deflate, br'
    },
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=tu_api_key_aqui&units=metric',
    allowAbsoluteUrls: true,
    data: undefined
  },
  request: <ref *1> ClientRequest {
    _events: [Object: null prototype] {
      abort: [Function (anonymous)],
      aborted: [Function (anonymous)],
      connect: [Function (anonymous)],
      error: [Function (anonymous)],
      socket: [Function (anonymous)],
      timeout: [Function (anonymous)],
      finish: [Function: requestOnFinish]
    },
    _eventsCount: 7,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: true,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: true,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: false,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: 0,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    _closed: true,
    _header: 'GET /data/2.5/weather?q=Bogota&appid=tu_api_key_aqui&units=metric HTTP/1.1\r\n' +
      'Accept: application/json, text/plain, */*\r\n' +
      'User-Agent: axios/1.14.0\r\n' +
      'Accept-Encoding: gzip, compress, deflate, br\r\n' +
      'Host: api.openweathermap.org\r\n' +
      'Connection: keep-alive\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: nop],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      options: [Object: null prototype],
      defaultPort: 80,
      protocol: 'http:',
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype] {},
      freeSockets: [Object: null prototype],
      keepAliveMsecs: 1000,
      keepAlive: true,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      agentKeepAliveTimeoutBuffer: 1000,
      Symbol(shapeMode): false,
      Symbol(kCapture): false
    },
    socketPath: undefined,
    method: 'GET',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    joinDuplicateHeaders: undefined,
    _ended: true,
    res: IncomingMessage {
      _events: [Object],
      _readableState: [ReadableState],
      _maxListeners: undefined,
      socket: null,
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      joinDuplicateHeaders: undefined,
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 401,
      statusMessage: 'Unauthorized',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [Circular *1],
      _eventsCount: 4,
      responseUrl: 'http://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=tu_api_key_aqui&units=metric',
      redirects: [],
      Symbol(shapeMode): true,
      Symbol(kCapture): false,
      Symbol(kHeaders): [Object],
      Symbol(kHeadersCount): 16,
      Symbol(kTrailers): null,
      Symbol(kTrailersCount): 0
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: 'api.openweathermap.org',
    protocol: 'http:',
    _redirectable: Writable {
      _events: [Object],
      _writableState: [WritableState],
      _maxListeners: undefined,
      _options: [Object],
      _ended: true,
      _ending: true,
      _redirectCount: 0,
      _redirects: [],
      _requestBodyLength: 0,
      _requestBodyBuffers: [],
      _eventsCount: 3,
      _onNativeResponse: [Function (anonymous)],
      _currentRequest: [Circular *1],
      _currentUrl: 'http://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=tu_api_key_aqui&units=metric',
      _timeout: null,
      Symbol(shapeMode): true,
      Symbol(kCapture): false
    },
    Symbol(shapeMode): false,
    Symbol(kCapture): false,
    Symbol(kBytesWritten): 0,
    Symbol(kNeedDrain): false,
    Symbol(corked): 0,
    Symbol(kChunkedBuffer): [],
    Symbol(kChunkedLength): 0,
    Symbol(kSocket): Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'api.openweathermap.org',
      _closeAfterHandlingError: false,
      _events: [Object],
      _readableState: [ReadableState],
      _writableState: [WritableState],
      allowHalfOpen: false,
      _maxListeners: undefined,
      _eventsCount: 6,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      timeout: 5000,
      _httpMessage: null,
      parser: null,
      Symbol(async_id_symbol): -1,
      Symbol(kHandle): [TCP],
      Symbol(lastWriteQueueSize): 0,
      Symbol(timeout): Timeout {
        _idleTimeout: 5000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 570,
        _onTimeout: [Function: bound ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        Symbol(refed): false,
        Symbol(kHasPrimitive): false,
        Symbol(asyncId): 22,
        Symbol(triggerId): 20,
        Symbol(kAsyncContextFrame): undefined
      },
      Symbol(kBuffer): null,
      Symbol(kBufferCb): null,
      Symbol(kBufferGen): null,
      Symbol(shapeMode): true,
      Symbol(kCapture): false,
      Symbol(kSetNoDelay): true,
      Symbol(kSetKeepAlive): true,
      Symbol(kSetKeepAliveInitialDelay): 1,
      Symbol(kSetTOS): undefined,
      Symbol(kBytesRead): 0,
      Symbol(kBytesWritten): 0
    },
    Symbol(kOutHeaders): [Object: null prototype] {
      accept: [Array],
      'user-agent': [Array],
      'accept-encoding': [Array],
      host: [Array]
    },
    Symbol(errored): null,
    Symbol(kHighWaterMark): 16384,
    Symbol(kRejectNonStandardBodyWrites): false,
    Symbol(kPath): '/data/2.5/weather?q=Bogota&appid=tu_api_key_aqui&units=metric',
    Symbol(kUniqueHeaders): null
  },
  response: {
    status: 401,
    statusText: 'Unauthorized',
    headers: Object [AxiosHeaders] {
      date: 'Wed, 08 Apr 2026 08:09:50 GMT',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '108',
      connection: 'keep-alive',
      'x-cache-key': '/data/2.5/weather?q=bogota&units=metric',
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true',
      'access-control-allow-methods': 'GET, POST'
    },
    config: {
      transitional: [Object],
      adapter: [Array],
      transformRequest: [Array],
      transformResponse: [Array],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      env: [Object],
      validateStatus: [Function: validateStatus],
      headers: [Object [AxiosHeaders]],
      method: 'get',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=tu_api_key_aqui&units=metric',
      allowAbsoluteUrls: true,
      data: undefined
    },
    request: <ref *1> ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: true,
      _header: 'GET /data/2.5/weather?q=Bogota&appid=tu_api_key_aqui&units=metric HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'User-Agent: axios/1.14.0\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'Host: api.openweathermap.org\r\n' +
        'Connection: keep-alive\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api.openweathermap.org',
      protocol: 'http:',
      _redirectable: [Writable],
      Symbol(shapeMode): false,
      Symbol(kCapture): false,
      Symbol(kBytesWritten): 0,
      Symbol(kNeedDrain): false,
      Symbol(corked): 0,
      Symbol(kChunkedBuffer): [],
      Symbol(kChunkedLength): 0,
      Symbol(kSocket): [Socket],
      Symbol(kOutHeaders): [Object: null prototype],
      Symbol(errored): null,
      Symbol(kHighWaterMark): 16384,
      Symbol(kRejectNonStandardBodyWrites): false,
      Symbol(kPath): '/data/2.5/weather?q=Bogota&appid=tu_api_key_aqui&units=metric',
      Symbol(kUniqueHeaders): null
    },
    data: {
      cod: 401,
      message: 'Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.'
    }
  },
  status: 401
}

Resultado: 

### [8/4/2026, 3:15:07 a. m.] - EVOLUCION_OK
Tarea: Investiga el precio actual del Bitcoin en dólares sin usar ninguna API Key y guárdalo en un archivo llamado crypto.json
Resultado: Precio del Bitcoin guardado en crypto.json


### [8/4/2026, 3:24:31 a. m.] - EXITO
Habilidad consolidada: {"bitcoin":71701}

### [8/4/2026, 3:35:24 a. m.] - EXITO
Habilidad consolidada: Corrige este error: Command failed: node "C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\sandbox\eval_1775637323028.js"
C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\sandbox\eval_1775637323028.js:4
  const rawData = await Investigador.deepScan(query);
                  ^

ReferenceError: Investigador is not defined
    at investigarYEvolicionarCuantizacion (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\sandbox\eval_1775637323028.js:4:19)
    at Object.<anonymous> (C:\Users\ppaes\OneDrive\Escritorio\jarvis ia\sandbox\eval_1775637323028.js:20:1)
    at Module._compile (node:internal/modules/cjs/loader:1829:14)
    at Object..js (node:internal/modules/cjs/loader:1969:10)
    at Module.load (node:internal/modules/cjs/loader:1552:32)
    at Module._load (node:internal/modules/cjs/loader:1354:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v25.9.0
. Tarea: Investiga sobre TurboQuant en Google Developers y evoluciona tu propia función de cuantización para que sea más agresiva.

[VITALES 12:58:05 a. m.] RAM: 1.71GB | Usuario Inactivo

[VITALES 12:58:50 a. m.] RAM: 1.68GB | Usuario Inactivo

[VITALES 12:59:34 a. m.] RAM: 1.67GB | Usuario Inactivo

[VITALES] RAM: 1.84GB | CPU: 8.5% | Temp: N/A°C | Activo: false
[VITALES] RAM: 1.82GB | CPU: 8.0% | Temp: N/A°C | Activo: false
[VITALES] RAM: 1.34GB | CPU: 13.0% | Temp: N/A°C | Activo: false
[1:12:03 a. m.] RAM: 1.99GB | CPU: 8.4% | Temp: N/A°C | Activo: false
[1:12:53 a. m.] RAM: 1.93GB | CPU: 4.9% | Temp: N/A°C | Activo: false
[1:31:39 a. m.] RAM: 1.80GB | CPU: 8.1% | Temp: N/A°C | Activo: false
[1:32:34 a. m.] RAM: 1.65GB | CPU: 5.8% | Temp: N/A°C | Activo: false
[1:33:29 a. m.] RAM: 1.73GB | CPU: 6.8% | Temp: N/A°C | Activo: false
[1:34:24 a. m.] RAM: 1.54GB | CPU: 8.2% | Temp: N/A°C | Activo: false
[1:36:09 a. m.] RAM: 0.79GB | CPU: 8.1% | Temp: N/A°C | Activo: false
[1:37:08 a. m.] RAM: 0.44GB | CPU: 10.5% | Temp: N/A°C | Activo: false
[1:38:09 a. m.] RAM: 0.65GB | CPU: 10.3% | Temp: N/A°C | Activo: false
[1:39:08 a. m.] RAM: 0.84GB | CPU: 16.0% | Temp: N/A°C | Activo: false
[1:40:08 a. m.] RAM: 0.80GB | CPU: 13.1% | Temp: N/A°C | Activo: false
[1:41:08 a. m.] RAM: 0.96GB | CPU: 11.1% | Temp: N/A°C | Activo: false
[1:42:08 a. m.] RAM: 0.80GB | CPU: 9.1% | Temp: N/A°C | Activo: false
[1:43:08 a. m.] RAM: 8.85GB | CPU: 13.1% | Temp: N/A°C | Activo: false
[1:44:09 a. m.] RAM: 3.29GB | CPU: 34.1% | Temp: N/A°C | Activo: true
[1:45:08 a. m.] RAM: 1.14GB | CPU: 27.6% | Temp: N/A°C | Activo: true
[1:50:18 a. m.] RAM: 1.90GB | CPU: 8.4% | Temp: N/A°C | Activo: false
[1:51:19 a. m.] RAM: 1.79GB | CPU: 10.3% | Temp: N/A°C | Activo: false
[1:52:18 a. m.] RAM: 1.55GB | CPU: 8.8% | Temp: N/A°C | Activo: false
[1:53:18 a. m.] RAM: 1.45GB | CPU: 6.4% | Temp: N/A°C | Activo: false
[1:54:18 a. m.] RAM: 1.54GB | CPU: 3.7% | Temp: N/A°C | Activo: false
[1:55:19 a. m.] RAM: 0.47GB | CPU: 10.5% | Temp: N/A°C | Activo: false
[1:56:19 a. m.] RAM: 0.88GB | CPU: 9.0% | Temp: N/A°C | Activo: false
[1:57:19 a. m.] RAM: 1.33GB | CPU: 8.8% | Temp: N/A°C | Activo: false
[1:58:19 a. m.] RAM: 1.09GB | CPU: 6.3% | Temp: N/A°C | Activo: false
[1:59:18 a. m.] RAM: 1.15GB | CPU: 6.2% | Temp: N/A°C | Activo: false
[2:00:18 a. m.] RAM: 1.09GB | CPU: 4.4% | Temp: N/A°C | Activo: false
[2:01:19 a. m.] RAM: 1.22GB | CPU: 8.4% | Temp: N/A°C | Activo: false
[2:02:18 a. m.] RAM: 1.92GB | CPU: 8.4% | Temp: N/A°C | Activo: false
[2:03:18 a. m.] RAM: 1.84GB | CPU: 3.4% | Temp: N/A°C | Activo: false
[2:04:22 a. m.] RAM: 1.79GB | CPU: 6.7% | Temp: N/A°C | Activo: false
[2:05:22 a. m.] RAM: 1.76GB | CPU: 5.0% | Temp: N/A°C | Activo: false
[2:06:23 a. m.] RAM: 1.32GB | CPU: 13.9% | Temp: N/A°C | Activo: false
[2:07:22 a. m.] RAM: 1.39GB | CPU: 14.0% | Temp: N/A°C | Activo: false
[2:08:22 a. m.] RAM: 1.36GB | CPU: 11.0% | Temp: N/A°C | Activo: false
[2:09:22 a. m.] RAM: 1.36GB | CPU: 9.7% | Temp: N/A°C | Activo: false
[2:10:22 a. m.] RAM: 1.26GB | CPU: 10.3% | Temp: N/A°C | Activo: false
[2:11:22 a. m.] RAM: 1.05GB | CPU: 21.3% | Temp: N/A°C | Activo: false
[2:12:22 a. m.] RAM: 1.31GB | CPU: 13.9% | Temp: N/A°C | Activo: false
[2:13:22 a. m.] RAM: 1.26GB | CPU: 5.0% | Temp: N/A°C | Activo: false
[2:14:22 a. m.] RAM: 2.29GB | CPU: 4.3% | Temp: N/A°C | Activo: false
[2:15:33 a. m.] RAM: 2.53GB | CPU: 11.8% | Temp: N/A°C | Activo: false
[2:16:32 a. m.] RAM: 2.30GB | CPU: 17.9% | Temp: N/A°C | Activo: false
[2:17:33 a. m.] RAM: 4.40GB | CPU: 15.0% | Temp: N/A°C | Activo: false
[10:36:52 a. m.] RAM: 3.82GB | CPU: 26.3% | Temp: N/A°C | Activo: true
[10:37:48 a. m.] RAM: 2.31GB | CPU: 23.8% | Temp: N/A°C | Activo: false
[10:38:51 a. m.] RAM: 2.20GB | CPU: 19.2% | Temp: N/A°C | Activo: false
[10:39:51 a. m.] RAM: 2.14GB | CPU: 12.8% | Temp: N/A°C | Activo: false
[10:41:47 a. m.] RAM: 3.50GB | CPU: 8.7% | Temp: N/A°C | Activo: false
[10:42:47 a. m.] RAM: 3.53GB | CPU: 8.4% | Temp: N/A°C | Activo: false
[10:43:47 a. m.] RAM: 3.45GB | CPU: 6.2% | Temp: N/A°C | Activo: false
[10:44:47 a. m.] RAM: 3.23GB | CPU: 5.3% | Temp: N/A°C | Activo: false
[10:45:47 a. m.] RAM: 2.95GB | CPU: 6.6% | Temp: N/A°C | Activo: false
[10:46:47 a. m.] RAM: 1.55GB | CPU: 13.4% | Temp: N/A°C | Activo: false
[10:48:50 a. m.] RAM: 2.73GB | CPU: 8.7% | Activo: false
[10:49:50 a. m.] RAM: 2.64GB | CPU: 15.5% | Activo: false
[10:50:50 a. m.] RAM: 3.92GB | CPU: 18.7% | Activo: false
[10:51:50 a. m.] RAM: 3.41GB | CPU: 10.4% | Activo: false
[10:52:50 a. m.] RAM: 3.94GB | CPU: 16.4% | Activo: false
[10:53:50 a. m.] RAM: 3.97GB | CPU: 14.0% | Activo: false
[10:54:50 a. m.] RAM: 3.76GB | CPU: 15.4% | Activo: false
[10:55:50 a. m.] RAM: 3.86GB | CPU: 14.1% | Activo: false
[10:56:50 a. m.] RAM: 3.85GB | CPU: 13.4% | Activo: false
[10:57:50 a. m.] RAM: 3.87GB | CPU: 6.7% | Activo: false
[10:58:50 a. m.] RAM: 4.18GB | CPU: 11.4% | Activo: false
[10:59:50 a. m.] RAM: 4.25GB | CPU: 10.5% | Activo: false
[11:00:51 a. m.] RAM: 4.13GB | CPU: 12.4% | Activo: false
[11:01:50 a. m.] RAM: 3.97GB | CPU: 28.6% | Activo: true
[11:02:50 a. m.] RAM: 3.41GB | CPU: 25.7% | Activo: true
[11:03:50 a. m.] RAM: 3.78GB | CPU: 23.0% | Activo: false
[11:04:50 a. m.] RAM: 3.77GB | CPU: 18.0% | Activo: false
[11:05:50 a. m.] RAM: 3.72GB | CPU: 17.9% | Activo: false
[11:06:50 a. m.] RAM: 3.28GB | CPU: 15.8% | Activo: false
[11:07:51 a. m.] RAM: 3.48GB | CPU: 19.6% | Activo: false
[11:08:50 a. m.] RAM: 3.23GB | CPU: 19.9% | Activo: false
[11:09:50 a. m.] RAM: 3.15GB | CPU: 14.4% | Activo: false
[11:10:50 a. m.] RAM: 2.94GB | CPU: 12.3% | Activo: false
[11:12:06 a. m.] RAM: 3.55GB | CPU: 9.2% | Temp: N/A°C | Activo: false
[11:13:06 a. m.] RAM: 3.58GB | CPU: 11.9% | Temp: N/A°C | Activo: false
[11:14:06 a. m.] RAM: 5.43GB | CPU: 15.0% | Temp: N/A°C | Activo: false
[11:15:06 a. m.] RAM: 3.81GB | CPU: 24.6% | Temp: N/A°C | Activo: false
[11:16:06 a. m.] RAM: 3.98GB | CPU: 16.7% | Temp: N/A°C | Activo: false
[11:17:06 a. m.] RAM: 3.88GB | CPU: 18.2% | Temp: N/A°C | Activo: false
[11:18:06 a. m.] RAM: 3.93GB | CPU: 9.0% | Temp: N/A°C | Activo: false
[11:19:06 a. m.] RAM: 3.60GB | CPU: 15.6% | Temp: N/A°C | Activo: false
[11:20:06 a. m.] RAM: 3.04GB | CPU: 12.2% | Temp: N/A°C | Activo: false
[11:21:06 a. m.] RAM: 3.19GB | CPU: 8.5% | Temp: N/A°C | Activo: false
[11:22:06 a. m.] RAM: 3.06GB | CPU: 14.8% | Temp: N/A°C | Activo: false
[11:23:06 a. m.] RAM: 3.04GB | CPU: 24.5% | Temp: N/A°C | Activo: false
[11:24:07 a. m.] RAM: 2.96GB | CPU: 19.2% | Temp: N/A°C | Activo: false
[11:25:06 a. m.] RAM: 2.98GB | CPU: 22.5% | Temp: N/A°C | Activo: false
[11:26:06 a. m.] RAM: 3.09GB | CPU: 11.2% | Temp: N/A°C | Activo: false
[11:27:06 a. m.] RAM: 3.09GB | CPU: 9.0% | Temp: N/A°C | Activo: false
[11:28:06 a. m.] RAM: 2.72GB | CPU: 12.8% | Temp: N/A°C | Activo: false
[11:29:06 a. m.] RAM: 2.74GB | CPU: 12.2% | Temp: N/A°C | Activo: false
[11:30:06 a. m.] RAM: 2.74GB | CPU: 13.3% | Temp: N/A°C | Activo: false
[11:31:06 a. m.] RAM: 2.74GB | CPU: 14.2% | Temp: N/A°C | Activo: false
[11:32:06 a. m.] RAM: 2.71GB | CPU: 12.3% | Temp: N/A°C | Activo: false
[11:33:06 a. m.] RAM: 2.91GB | CPU: 13.5% | Temp: N/A°C | Activo: false
[11:34:06 a. m.] RAM: 2.83GB | CPU: 13.7% | Temp: N/A°C | Activo: false
[11:35:03 a. m.] RAM: 2.73GB | CPU: 17.5% | Temp: N/A°C | Activo: false
[11:36:03 a. m.] RAM: 2.80GB | CPU: 5.2% | Temp: N/A°C | Activo: false
[11:37:03 a. m.] RAM: 2.19GB | CPU: 12.7% | Temp: N/A°C | Activo: false
[11:38:03 a. m.] RAM: 2.12GB | CPU: 8.5% | Temp: N/A°C | Activo: false
[11:39:02 a. m.] RAM: 2.21GB | CPU: 5.6% | Temp: N/A°C | Activo: false
[11:40:03 a. m.] RAM: 2.13GB | CPU: 7.4% | Temp: N/A°C | Activo: false
[11:41:03 a. m.] RAM: 2.35GB | CPU: 6.8% | Temp: N/A°C | Activo: false
[11:42:03 a. m.] RAM: 3.46GB | CPU: 7.4% | Temp: N/A°C | Activo: false
[11:43:03 a. m.] RAM: 3.13GB | CPU: 19.5% | Temp: N/A°C | Activo: false
[11:44:03 a. m.] RAM: 2.93GB | CPU: 16.0% | Temp: N/A°C | Activo: false
[11:45:03 a. m.] RAM: 2.70GB | CPU: 15.5% | Temp: N/A°C | Activo: false
[11:46:03 a. m.] RAM: 2.79GB | CPU: 15.8% | Temp: N/A°C | Activo: false
[11:47:32 a. m.] RAM: 2.75GB | CPU: 9.7%
[11:48:47 a. m.] RAM: 1.88GB | CPU: 9.7%
[11:49:47 a. m.] RAM: 2.52GB | CPU: 4.9%
[11:50:47 a. m.] RAM: 2.50GB | CPU: 12.8%
[11:51:47 a. m.] RAM: 2.45GB | CPU: 12.3%
[11:52:48 a. m.] RAM: 2.36GB | CPU: 14.7%
[11:53:47 a. m.] RAM: 2.33GB | CPU: 11.6%
[11:54:48 a. m.] RAM: 2.06GB | CPU: 13.9%
[11:55:47 a. m.] RAM: 2.37GB | CPU: 10.4%
[11:56:48 a. m.] RAM: 2.26GB | CPU: 18.1%
[11:57:47 a. m.] RAM: 2.18GB | CPU: 12.4%
[11:58:47 a. m.] RAM: 2.21GB | CPU: 17.6%
[11:59:48 a. m.] RAM: 2.06GB | CPU: 8.7%
[12:00:48 p. m.] RAM: 2.20GB | CPU: 9.5%
[12:01:47 p. m.] RAM: 2.14GB | CPU: 13.3%
[12:02:47 p. m.] RAM: 2.14GB | CPU: 9.9%
[12:03:48 p. m.] RAM: 2.11GB | CPU: 12.9%
[12:04:48 p. m.] RAM: 2.19GB | CPU: 10.3%
[12:05:48 p. m.] RAM: 2.09GB | CPU: 14.5%
[12:06:48 p. m.] RAM: 2.14GB | CPU: 11.7%
[12:07:48 p. m.] RAM: 2.12GB | CPU: 11.7%
[12:36:45 p. m.] RAM: 2.87GB | CPU: 9.8%
[12:37:45 p. m.] RAM: 2.55GB | CPU: 6.0%
[12:38:45 p. m.] RAM: 2.50GB | CPU: 6.2%
[12:39:45 p. m.] RAM: 2.68GB | CPU: 3.7%
[12:40:45 p. m.] RAM: 1.91GB | CPU: 5.9%
[12:41:45 p. m.] RAM: 3.45GB | CPU: 9.4%
[12:42:45 p. m.] RAM: 3.55GB | CPU: 4.3%
[12:43:45 p. m.] RAM: 3.58GB | CPU: 3.8%
[12:44:45 p. m.] RAM: 3.28GB | CPU: 6.5%
[12:45:45 p. m.] RAM: 3.19GB | CPU: 6.9%
[12:46:45 p. m.] RAM: 3.36GB | CPU: 4.1%
[12:47:45 p. m.] RAM: 3.34GB | CPU: 5.6%
[12:48:45 p. m.] RAM: 3.03GB | CPU: 6.5%
[12:49:45 p. m.] RAM: 3.33GB | CPU: 3.3%
[12:50:45 p. m.] RAM: 3.29GB | CPU: 4.5%
[12:51:45 p. m.] RAM: 3.38GB | CPU: 3.5%
[12:52:45 p. m.] RAM: 3.44GB | CPU: 2.5%
[12:53:45 p. m.] RAM: 3.45GB | CPU: 3.6%
[12:54:45 p. m.] RAM: 3.37GB | CPU: 5.0%
[12:55:45 p. m.] RAM: 3.23GB | CPU: 5.9%
[12:56:45 p. m.] RAM: 3.24GB | CPU: 6.5%
[12:57:45 p. m.] RAM: 3.27GB | CPU: 5.7%
[1:01:26 p. m.] RAM: 2.93GB | CPU: 9.6% | Temp: 0°C
[1:02:26 p. m.] RAM: 3.25GB | CPU: 3.4% | Temp: 0°C
[1:03:26 p. m.] RAM: 3.26GB | CPU: 3.2% | Temp: 0°C
[1:04:26 p. m.] RAM: 3.27GB | CPU: 3.2% | Temp: 0°C
[1:05:26 p. m.] RAM: 3.17GB | CPU: 5.4% | Temp: 0°C
[1:06:26 p. m.] RAM: 3.11GB | CPU: 7.0% | Temp: 0°C
[1:07:26 p. m.] RAM: 2.64GB | CPU: 5.0% | Temp: 0°C
[1:08:26 p. m.] RAM: 2.86GB | CPU: 7.3% | Temp: 0°C
[1:09:26 p. m.] RAM: 2.71GB | CPU: 6.2% | Temp: 0°C
[1:10:26 p. m.] RAM: 2.46GB | CPU: 5.1% | Temp: 0°C
[1:11:26 p. m.] RAM: 2.46GB | CPU: 8.1% | Temp: 0°C
[1:13:10 p. m.] RAM: 2.26GB | CPU: 9.5% | Temp: 0°C
[1:14:09 p. m.] RAM: 2.35GB | CPU: 6.2% | Temp: 0°C
[1:15:10 p. m.] RAM: 2.56GB | CPU: 6.4% | Temp: 0°C
[1:16:09 p. m.] RAM: 2.50GB | CPU: 7.7% | Temp: 0°C
[1:17:10 p. m.] RAM: 2.44GB | CPU: 5.0% | Temp: 0°C
[1:18:10 p. m.] RAM: 3.49GB | CPU: 6.4% | Temp: 0°C
[1:19:10 p. m.] RAM: 3.43GB | CPU: 4.9% | Temp: 0°C
[1:20:10 p. m.] RAM: 3.67GB | CPU: 7.4% | Temp: 0°C
[1:21:10 p. m.] RAM: 3.68GB | CPU: 3.9% | Temp: 0°C
[1:22:10 p. m.] RAM: 3.63GB | CPU: 5.7% | Temp: 0°C
[1:23:10 p. m.] RAM: 3.30GB | CPU: 8.4% | Temp: 0°C
[1:24:10 p. m.] RAM: 3.26GB | CPU: 5.9% | Temp: 0°C
[1:24:36 p. m.] RAM: 3.03GB | CPU: 9.4% | Temp: 0°C
[1:25:10 p. m.] RAM: 3.04GB | CPU: 9.2% | Temp: 0°C
[1:25:36 p. m.] RAM: 3.01GB | CPU: 9.0% | Temp: 0°C
[1:26:10 p. m.] RAM: 3.28GB | CPU: 7.5% | Temp: 0°C
[1:26:36 p. m.] RAM: 3.14GB | CPU: 8.5% | Temp: 0°C
[1:27:10 p. m.] RAM: 2.45GB | CPU: 11.0% | Temp: 0°C
[1:27:57 p. m.] RAM: 2.76GB | CPU: 9.4% | Temp: 0°C
[1:28:10 p. m.] RAM: 2.79GB | CPU: 8.5% | Temp: 0°C
[1:28:57 p. m.] RAM: 2.76GB | CPU: 5.3% | Temp: 0°C
[1:29:10 p. m.] RAM: 2.80GB | CPU: 5.3% | Temp: 0°C
[1:29:57 p. m.] RAM: 2.29GB | CPU: 10.0% | Temp: 0°C
[1:30:10 p. m.] RAM: 2.60GB | CPU: 10.6% | Temp: 0°C
[1:31:11 p. m.] RAM: 2.73GB | CPU: 16.5% | Temp: 0°C
[1:31:13 p. m.] RAM: 2.67GB | CPU: 9.4% | Temp: 0°C
[1:32:10 p. m.] RAM: 2.43GB | CPU: 11.6% | Temp: 0°C
[1:32:11 p. m.] RAM: 2.40GB | CPU: 11.1% | Temp: 0°C
[1:33:10 p. m.] RAM: 2.54GB | CPU: 5.2% | Temp: 0°C
[1:33:12 p. m.] RAM: 2.52GB | CPU: 5.1% | Temp: 0°C
[1:34:10 p. m.] RAM: 2.55GB | CPU: 4.5% | Temp: 0°C
[1:34:12 p. m.] RAM: 2.53GB | CPU: 4.5% | Temp: 0°C
[1:35:10 p. m.] RAM: 2.61GB | CPU: 6.6% | Temp: 0°C
[1:35:11 p. m.] RAM: 2.64GB | CPU: 6.7% | Temp: 0°C
[1:36:10 p. m.] RAM: 2.73GB | CPU: 5.2% | Temp: 0°C
[1:36:12 p. m.] RAM: 2.70GB | CPU: 5.2% | Temp: 0°C
[1:37:10 p. m.] RAM: 3.78GB | CPU: 8.3% | Temp: 0°C
[1:37:12 p. m.] RAM: 3.80GB | CPU: 8.3% | Temp: 0°C
[1:38:10 p. m.] RAM: 3.32GB | CPU: 7.6% | Temp: 0°C
[1:38:12 p. m.] RAM: 3.22GB | CPU: 7.9% | Temp: 0°C
[1:39:10 p. m.] RAM: 3.68GB | CPU: 7.9% | Temp: 0°C
[1:39:12 p. m.] RAM: 3.67GB | CPU: 7.6% | Temp: 0°C
[1:40:10 p. m.] RAM: 3.46GB | CPU: 7.7% | Temp: 0°C
[1:40:12 p. m.] RAM: 3.45GB | CPU: 7.7% | Temp: 0°C
[1:41:12 p. m.] RAM: 2.61GB | CPU: 14.5% | Temp: 0°C
[1:41:13 p. m.] RAM: 2.61GB | CPU: 15.2% | Temp: 0°C
[1:42:11 p. m.] RAM: 2.45GB | CPU: 12.2% | Temp: 0°C
[1:42:12 p. m.] RAM: 2.38GB | CPU: 11.8% | Temp: 0°C
[1:43:10 p. m.] RAM: 2.56GB | CPU: 10.4% | Temp: 0°C
[1:43:12 p. m.] RAM: 2.54GB | CPU: 10.3% | Temp: 0°C
[1:44:10 p. m.] RAM: 2.51GB | CPU: 4.6% | Temp: 0°C
[1:44:12 p. m.] RAM: 2.50GB | CPU: 4.5% | Temp: 0°C
[1:45:10 p. m.] RAM: 2.60GB | CPU: 4.6% | Temp: 0°C
[1:45:12 p. m.] RAM: 2.58GB | CPU: 4.6% | Temp: 0°C
[1:46:10 p. m.] RAM: 2.08GB | CPU: 6.2% | Temp: 0°C
[1:46:12 p. m.] RAM: 2.01GB | CPU: 6.5% | Temp: 0°C
[1:47:10 p. m.] RAM: 2.27GB | CPU: 19.1% | Temp: 0°C
[1:47:12 p. m.] RAM: 2.25GB | CPU: 18.8% | Temp: 0°C
[1:48:10 p. m.] RAM: 2.16GB | CPU: 6.0% | Temp: 0°C
[1:48:12 p. m.] RAM: 3.45GB | CPU: 6.1% | Temp: 0°C
[1:49:10 p. m.] RAM: 3.44GB | CPU: 8.1% | Temp: 0°C
[1:49:12 p. m.] RAM: 3.49GB | CPU: 8.0% | Temp: 0°C
[1:50:11 p. m.] RAM: 2.55GB | CPU: 20.3% | Temp: 0°C
[1:50:12 p. m.] RAM: 2.83GB | CPU: 20.8% | Temp: 0°C
[1:51:10 p. m.] RAM: 3.06GB | CPU: 9.2% | Temp: 0°C
[1:51:12 p. m.] RAM: 3.03GB | CPU: 8.7% | Temp: 0°C
[1:52:10 p. m.] RAM: 3.02GB | CPU: 4.6% | Temp: 0°C
[1:52:11 p. m.] RAM: 2.99GB | CPU: 4.7% | Temp: 0°C
[1:53:10 p. m.] RAM: 3.01GB | CPU: 6.5% | Temp: 0°C
[1:53:12 p. m.] RAM: 3.00GB | CPU: 6.6% | Temp: 0°C
[1:54:10 p. m.] RAM: 2.93GB | CPU: 8.9% | Temp: 0°C
[1:54:12 p. m.] RAM: 2.90GB | CPU: 8.6% | Temp: 0°C
[1:55:11 p. m.] RAM: 2.47GB | CPU: 6.2% | Temp: 0°C
[1:55:12 p. m.] RAM: 2.66GB | CPU: 6.6% | Temp: 0°C
[1:56:10 p. m.] RAM: 3.82GB | CPU: 11.8% | Temp: 0°C
[1:56:12 p. m.] RAM: 3.81GB | CPU: 11.6% | Temp: 0°C
[1:57:37 p. m.] RAM: 3.63GB | CPU: 9.3% | Temp: 0°C
[1:58:38 p. m.] RAM: 2.56GB | CPU: 8.9% | Temp: 0°C
[1:59:37 p. m.] RAM: 2.60GB | CPU: 15.0% | Temp: 0°C
[2:00:37 p. m.] RAM: 2.74GB | CPU: 5.9% | Temp: 0°C
[2:01:37 p. m.] RAM: 2.72GB | CPU: 6.2% | Temp: 0°C
[2:02:39 p. m.] RAM: 2.31GB | CPU: 11.2% | Temp: 0°C
[2:03:37 p. m.] RAM: 2.45GB | CPU: 21.3% | Temp: 0°C
[2:04:37 p. m.] RAM: 2.63GB | CPU: 3.9% | Temp: 0°C
[2:05:37 p. m.] RAM: 2.61GB | CPU: 3.5% | Temp: 0°C
[2:06:37 p. m.] RAM: 2.67GB | CPU: 3.9% | Temp: 0°C
[2:07:37 p. m.] RAM: 2.62GB | CPU: 5.3% | Temp: 0°C
[2:08:37 p. m.] RAM: 4.12GB | CPU: 8.2% | Temp: 0°C
[2:09:37 p. m.] RAM: 4.17GB | CPU: 3.8% | Temp: 0°C
[2:10:37 p. m.] RAM: 4.11GB | CPU: 6.1% | Temp: 0°C
[2:11:37 p. m.] RAM: 3.37GB | CPU: 9.7% | Temp: 0°C
[2:12:37 p. m.] RAM: 3.27GB | CPU: 8.6% | Temp: 0°C
[2:13:37 p. m.] RAM: 3.31GB | CPU: 7.6% | Temp: 0°C
[2:15:06 p. m.] RAM: 3.85GB | CPU: 9.3% | Temp: 0°C
[2:16:07 p. m.] RAM: 2.04GB | CPU: 8.0% | Temp: 0°C
[2:21:55 p. m.] RAM: 3.43GB | CPU: 9.3%
[2:22:53 p. m.] RAM: 3.27GB | CPU: 7.6%
[2:23:54 p. m.] RAM: 2.50GB | CPU: 6.4%
[2:24:53 p. m.] RAM: 2.53GB | CPU: 18.8%
[2:25:53 p. m.] RAM: 2.54GB | CPU: 4.7%
[2:26:53 p. m.] RAM: 2.04GB | CPU: 16.9%
[2:27:55 p. m.] RAM: 1.53GB | CPU: 18.5%
[2:28:54 p. m.] RAM: 1.71GB | CPU: 27.7%
[2:29:53 p. m.] RAM: 1.92GB | CPU: 9.5%
[2:30:54 p. m.] RAM: 1.98GB | CPU: 11.2%
[2:31:54 p. m.] RAM: 1.39GB | CPU: 13.7%
[2:33:24 p. m.] RAM: 2.04GB | CPU: 9.4%
[2:34:23 p. m.] RAM: 2.09GB | CPU: 12.9%
[2:35:23 p. m.] RAM: 1.89GB | CPU: 6.8%
[2:36:24 p. m.] RAM: 1.98GB | CPU: 20.4%
[2:37:23 p. m.] RAM: 1.31GB | CPU: 11.3%
[2:38:23 p. m.] RAM: 1.39GB | CPU: 3.1%
[2:39:23 p. m.] RAM: 1.64GB | CPU: 5.5%
[2:40:24 p. m.] RAM: 1.73GB | CPU: 15.5%
[2:41:23 p. m.] RAM: 1.68GB | CPU: 12.3%
[2:42:24 p. m.] RAM: 1.73GB | CPU: 8.7%
[2:43:23 p. m.] RAM: 1.31GB | CPU: 15.7%
[2:44:23 p. m.] RAM: 1.61GB | CPU: 7.0%
[2:45:23 p. m.] RAM: 1.34GB | CPU: 5.0%
[2:46:24 p. m.] RAM: 1.36GB | CPU: 8.6%
[2:47:23 p. m.] RAM: 1.38GB | CPU: 21.5%
[2:48:23 p. m.] RAM: 2.96GB | CPU: 9.2%
[2:49:23 p. m.] RAM: 2.88GB | CPU: 5.3%
[2:50:23 p. m.] RAM: 3.10GB | CPU: 5.4%
[2:52:10 p. m.] RAM: 2.63GB | CPU: 9.4%
[2:53:11 p. m.] RAM: 2.06GB | CPU: 17.2%
[2:54:12 p. m.] RAM: 2.04GB | CPU: 6.5%
[2:55:11 p. m.] RAM: 1.87GB | CPU: 10.6%
[2:56:10 p. m.] RAM: 1.77GB | CPU: 7.9%
[2:57:11 p. m.] RAM: 1.80GB | CPU: 3.2%
[2:58:10 p. m.] RAM: 1.82GB | CPU: 5.0%
[2:59:10 p. m.] RAM: 1.88GB | CPU: 2.6%
[3:00:11 p. m.] RAM: 3.43GB | CPU: 4.0%
[3:01:12 p. m.] RAM: 2.65GB | CPU: 18.4%
[3:02:12 p. m.] RAM: 2.62GB | CPU: 26.3%
[3:03:13 p. m.] RAM: 2.40GB | CPU: 29.3%
[3:04:10 p. m.] RAM: 2.66GB | CPU: 21.0%
[3:05:11 p. m.] RAM: 2.29GB | CPU: 13.5%
[3:06:11 p. m.] RAM: 2.41GB | CPU: 18.0%
[3:07:11 p. m.] RAM: 2.58GB | CPU: 17.7%
[3:08:11 p. m.] RAM: 2.59GB | CPU: 12.1%
[3:09:10 p. m.] RAM: 1.79GB | CPU: 14.9%
[3:10:11 p. m.] RAM: 2.30GB | CPU: 10.5%
[3:11:11 p. m.] RAM: 2.30GB | CPU: 2.8%
[3:12:11 p. m.] RAM: 2.32GB | CPU: 2.6%
[3:13:11 p. m.] RAM: 2.52GB | CPU: 5.3%
[3:14:11 p. m.] RAM: 2.26GB | CPU: 3.5%
[3:15:11 p. m.] RAM: 3.65GB | CPU: 8.0%
[3:16:11 p. m.] RAM: 3.18GB | CPU: 18.6%
[3:17:11 p. m.] RAM: 3.67GB | CPU: 3.2%
[3:18:11 p. m.] RAM: 3.69GB | CPU: 3.8%
[3:19:11 p. m.] RAM: 3.66GB | CPU: 3.4%
[3:20:11 p. m.] RAM: 3.63GB | CPU: 3.0%
[3:21:11 p. m.] RAM: 3.49GB | CPU: 6.2%
[3:22:11 p. m.] RAM: 3.47GB | CPU: 7.9%
[3:23:11 p. m.] RAM: 3.49GB | CPU: 7.5%
[3:24:11 p. m.] RAM: 3.51GB | CPU: 6.8%
[3:25:11 p. m.] RAM: 3.51GB | CPU: 7.3%
[3:26:11 p. m.] RAM: 3.49GB | CPU: 7.1%
[3:27:11 p. m.] RAM: 3.45GB | CPU: 7.2%
[3:28:11 p. m.] RAM: 3.66GB | CPU: 6.0%
[3:29:11 p. m.] RAM: 3.66GB | CPU: 4.3%
[3:30:11 p. m.] RAM: 3.69GB | CPU: 3.1%
[3:31:11 p. m.] RAM: 3.73GB | CPU: 2.7%
[3:32:11 p. m.] RAM: 3.72GB | CPU: 2.5%
[3:33:11 p. m.] RAM: 3.70GB | CPU: 2.8%
[3:34:11 p. m.] RAM: 3.70GB | CPU: 2.5%
[3:35:11 p. m.] RAM: 3.73GB | CPU: 3.0%
[3:36:11 p. m.] RAM: 3.69GB | CPU: 2.8%
[3:37:11 p. m.] RAM: 3.68GB | CPU: 2.9%
[3:38:11 p. m.] RAM: 3.23GB | CPU: 4.4%
[3:39:11 p. m.] RAM: 3.23GB | CPU: 3.1%
[3:40:11 p. m.] RAM: 3.23GB | CPU: 2.8%
[3:41:11 p. m.] RAM: 3.25GB | CPU: 3.0%
[3:42:11 p. m.] RAM: 3.23GB | CPU: 2.5%
[3:43:11 p. m.] RAM: 3.25GB | CPU: 2.4%
[3:44:11 p. m.] RAM: 3.26GB | CPU: 2.6%
[3:45:11 p. m.] RAM: 3.26GB | CPU: 2.4%
[3:46:11 p. m.] RAM: 3.23GB | CPU: 2.6%
[3:47:11 p. m.] RAM: 3.22GB | CPU: 2.6%
[3:48:11 p. m.] RAM: 3.17GB | CPU: 4.0%
[3:49:11 p. m.] RAM: 3.18GB | CPU: 3.3%
[3:50:11 p. m.] RAM: 2.68GB | CPU: 7.7%
[3:51:11 p. m.] RAM: 2.41GB | CPU: 6.5%
[3:52:39 p. m.] RAM: 2.44GB | CPU: 9.2%
[3:53:39 p. m.] RAM: 2.45GB | CPU: 5.3%
[3:54:41 p. m.] RAM: 1.73GB | CPU: 20.3%
[3:55:39 p. m.] RAM: 2.18GB | CPU: 7.6%
[3:56:41 p. m.] RAM: 2.04GB | CPU: 13.8%
[3:57:39 p. m.] RAM: 2.13GB | CPU: 13.6%
[3:58:39 p. m.] RAM: 1.87GB | CPU: 6.7%
[3:59:40 p. m.] RAM: 1.83GB | CPU: 4.3%
[4:00:41 p. m.] RAM: 1.97GB | CPU: 15.8%
[4:01:39 p. m.] RAM: 1.75GB | CPU: 14.9%
[4:02:39 p. m.] RAM: 1.96GB | CPU: 6.0%
[4:03:39 p. m.] RAM: 1.81GB | CPU: 6.0%
[4:04:41 p. m.] RAM: 1.78GB | CPU: 11.1%
[4:05:39 p. m.] RAM: 1.90GB | CPU: 21.4%
[4:06:39 p. m.] RAM: 1.50GB | CPU: 9.0%
[4:07:39 p. m.] RAM: 1.57GB | CPU: 6.4%
[4:08:39 p. m.] RAM: 1.38GB | CPU: 5.1%
[4:09:41 p. m.] RAM: 1.21GB | CPU: 20.0%
[4:10:40 p. m.] RAM: 1.58GB | CPU: 10.1%
[4:11:40 p. m.] RAM: 1.06GB | CPU: 8.5%
[4:12:39 p. m.] RAM: 1.67GB | CPU: 6.9%
[4:13:39 p. m.] RAM: 1.47GB | CPU: 7.7%
[4:14:39 p. m.] RAM: 1.48GB | CPU: 6.7%
[4:15:40 p. m.] RAM: 1.53GB | CPU: 5.7%
[4:16:40 p. m.] RAM: 1.22GB | CPU: 13.5%
[4:17:40 p. m.] RAM: 1.56GB | CPU: 6.2%
[4:18:39 p. m.] RAM: 2.73GB | CPU: 5.9%
[4:19:39 p. m.] RAM: 2.59GB | CPU: 5.3%
[4:20:39 p. m.] RAM: 2.54GB | CPU: 4.9%
[4:21:41 p. m.] RAM: 2.15GB | CPU: 14.5%
[4:22:40 p. m.] RAM: 2.57GB | CPU: 9.4%
[4:23:39 p. m.] RAM: 2.56GB | CPU: 5.2%
[4:24:40 p. m.] RAM: 2.60GB | CPU: 3.4%
[4:25:40 p. m.] RAM: 2.40GB | CPU: 8.5%
[4:26:40 p. m.] RAM: 2.37GB | CPU: 6.2%
[4:27:40 p. m.] RAM: 2.11GB | CPU: 5.9%
[4:28:40 p. m.] RAM: 1.74GB | CPU: 6.0%
[4:29:40 p. m.] RAM: 2.17GB | CPU: 6.0%
[4:30:40 p. m.] RAM: 2.10GB | CPU: 6.8%
[4:31:40 p. m.] RAM: 2.05GB | CPU: 4.6%
[4:32:39 p. m.] RAM: 1.21GB | CPU: 6.9%
[4:34:36 p. m.] RAM: 2.07GB | CPU: 9.2%
[4:35:36 p. m.] RAM: 1.94GB | CPU: 5.0%
[4:36:36 p. m.] RAM: 1.90GB | CPU: 11.9%
[4:37:36 p. m.] RAM: 1.64GB | CPU: 8.7%
[4:38:36 p. m.] RAM: 1.36GB | CPU: 4.0%
[4:39:36 p. m.] RAM: 1.40GB | CPU: 6.1%
[4:40:36 p. m.] RAM: 0.92GB | CPU: 6.7%
[4:41:36 p. m.] RAM: 0.85GB | CPU: 5.8%
[4:42:36 p. m.] RAM: 2.24GB | CPU: 7.9%
[4:43:36 p. m.] RAM: 2.07GB | CPU: 8.2%
[4:44:36 p. m.] RAM: 2.19GB | CPU: 3.0%
[4:45:36 p. m.] RAM: 1.74GB | CPU: 8.5%
[4:46:36 p. m.] RAM: 0.99GB | CPU: 8.5%
[4:47:36 p. m.] RAM: 1.13GB | CPU: 7.9%
[4:48:36 p. m.] RAM: 1.42GB | CPU: 7.5%
[4:49:36 p. m.] RAM: 1.47GB | CPU: 5.9%
[4:50:36 p. m.] RAM: 1.18GB | CPU: 11.3%
[4:51:36 p. m.] RAM: 1.50GB | CPU: 24.2%
[4:52:36 p. m.] RAM: 2.84GB | CPU: 22.8%
[4:53:36 p. m.] RAM: 2.82GB | CPU: 10.2%
[4:54:36 p. m.] RAM: 2.72GB | CPU: 10.9%
[4:55:37 p. m.] RAM: 2.65GB | CPU: 17.0%
[4:56:36 p. m.] RAM: 2.85GB | CPU: 21.2%
[4:57:36 p. m.] RAM: 2.97GB | CPU: 15.8%