### Objetivo

Fornecer instruções concisas e acionáveis para agentes de codificação (AI) que vão trabalhar neste front-end Angular (task-tracker). Priorize mudanças pequenas e reversíveis: componentes standalone, serviço de tarefas e integração com o servidor mock (`json-server`).

## Resumo rápido
- Angular standalone (v20.x). Entrypoint: `src/main.ts` → `App` (`src/app/app.ts`).
- Componentes principais: `src/app/components/` — `header`, `tasks`, `task-item` (todos standalone).
- Serviço HTTP: `src/app/services/task-service.ts` usa `HttpClient`. API mock em `http://localhost:5000/tasks`.
- Mock/local DB: `src/app/mock-tasks.ts` (exemplos em memória) e `db.json` (usado por `json-server`).

### Objetivo

Instruções concisas e acionáveis para agentes de codificação que vão trabalhar neste front-end Angular (standalone components, serviço de tarefas e integração com o mock backend).

Resumo rápido
- Framework: Angular v20 (standalone components).
- Entrypoint: `src/main.ts` → bootstrapApplication(App, appConfig).
- App: `src/app/app.ts` é um componente standalone que importa `Header`, `Tasks`, `FontAwesomeModule` e `HttpClientModule`.
- API base: `API_URL` exportado em `src/app/app.config.ts` (atualmente `http://localhost:5000/tasks`).
- Mock data: `src/app/mock-tasks.ts` (exemplos) e `db.json` (usado por `json-server`).

Comandos essenciais
- npm install
- npm run server    # executa `json-server --watch db.json --port 5000`
- npm start         # `ng serve` — abre em http://localhost:4200
- npm test          # Karma + Jasmine

Contracts & exemplos rápidos
- Modelo `Task` (`src/app/Task.ts`):
  `{ id?: number; text: string; day: string; reminder: boolean }`
- Serviço HTTP (`src/app/services/task-service.ts`):
  `getTasks(): Observable<Task[]>` — usa `API_URL` importado de `app.config.ts`.
  Exemplo de POST se precisar adicionar: `addTask(task: Task) { return this.http.post<Task>(this.apiUrl, task); }`

Arquitetura e convenções específicas
- Componentes standalone em `src/app/components/*` (ex.: `header`, `tasks`, `task-item`). Use `@Component({ standalone: true, imports: [...] })`.
- Templates e estilos ficam ao lado do componente: `component.html` / `component.css`.
- Classes em PascalCase; arquivos em kebab-case (ex.: `task-item.ts`).
- App-wide providers: `src/app/app.config.ts` importa `HttpClientModule` via `importProvidersFrom(HttpClientModule)` e exporta `API_URL`.

Pontos práticos ao editar
- Sempre verifique `API_URL` em `src/app/app.config.ts` ao mudar a porta/endpoint do mock.
- `mock-tasks.ts` é só um exemplo em memória; o app usa `API_URL`/HttpClient por padrão. Confirme antes de remover mocks.
- Rode `npm run server` antes de `npm start` para evitar erros 404/CORS contra `db.json`.

Onde olhar primeiro (impacto alto → baixo)
- `src/app/components/tasks/tasks.ts` + `tasks.html` — listagem e consumo de `TaskService`.
- `src/app/components/task-item/*` — UI e eventos de toggle/delete.
- `src/app/services/task-service.ts` — chamadas HTTP; estende aqui POST/PUT/DELETE.
- `src/app/app.config.ts` — `API_URL` e providers.
- `db.json` / `src/app/mock-tasks.ts` — dados de exemplo.

Testes e fluxo de desenvolvimento
- Tests unitários com Karma + Jasmine: arquivos `*.spec.ts` ao lado dos componentes e serviços. Rode `npm test`.
- Para PRs pequenos: inclua passos para rodar (`npm run server`, `npm start`) e cenários de verificação (criar/excluir/toggle reminder).

Checklist rápido ao abrir um PR
- `npm install` ok
- `npm run server` (porta 5000 respondendo)
- `npm start` sem erros no console
- Testes unitários (happy-path) pelo menos verdes localmente

Se algo estiver ambíguo: abra uma issue com detalhes do erro/console e os passos para reproduzir.

Solicito feedback: falta algum fluxo (ex.: e2e, CI) que vocês usam? Informe e eu atualizo estas instruções.
