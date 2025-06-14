# Logs e Diagnósticos

## Introdução aos Diagnósticos

O CalendarioReino oferece ferramentas abrangentes de diagnóstico para identificar e resolver problemas rapidamente. Esta seção explica como acessar, interpretar e utilizar logs e ferramentas de diagnóstico.

## Ferramentas de Diagnóstico

### Console do Navegador

#### Acessando o Console

**Métodos de Acesso**:
- **F12**: Abre ferramentas de desenvolvimento
- **Ctrl+Shift+I**: Atalho alternativo
- **Menu**: Mais ferramentas → Ferramentas do desenvolvedor
- **Clique direito**: Inspecionar elemento → Console

#### Informações no Console

**Tipos de Mensagens**:
- 🔴 **Errors**: Erros que impedem funcionamento
- 🟡 **Warnings**: Avisos que podem causar problemas
- 🔵 **Info**: Informações gerais de funcionamento
- ⚪ **Logs**: Detalhes de execução

**Exemplo de Log**:
`javascript
[CalendarioReino] Event created successfully
[CalendarioReino] WARNING: Participant has conflict
[CalendarioReino] ERROR: Failed to reserve room
[CalendarioReino] Sync completed in 1.2s
`

### Debug Logs do Salesforce

#### Configuração de Debug Logs

**Setup → Debug Logs**:

1. **Adicionar Traced User**:
   - Clique "New"
   - Selecione usuário
   - Configure duração

2. **Níveis de Log**:
   - **Apex Code**: DEBUG
   - **Database**: INFO
   - **System**: INFO
   - **Validation**: INFO
   - **Workflow**: DEBUG

3. **Captura de Logs**:
   - Execute operação com problema
   - Verifique lista de logs
   - Baixe para análise

#### Interpretando Debug Logs

**Estrutura Típica**:
`
EXECUTION_STARTED
USER_DEBUG|[1]|DEBUG|CalendarioReino: Starting event creation
SOQL_EXECUTE_BEGIN|[2]|SELECT Id FROM Event WHERE...
SOQL_EXECUTE_END|[2]|Rows:5
DML_BEGIN|[3]|Op:Insert|Type:Event
DML_END|[3]|
EXECUTION_FINISHED
`

**Pontos de Atenção**:
- **Exceptions**: Erros de código
- **Governor Limits**: Limites atingidos
- **SOQL/DML**: Operações de banco
- **Execution Time**: Performance

### Network Monitor

#### Monitoramento de Requisições

**Network Tab (F12)**:

**Filtros Úteis**:
- **XHR**: Requisições AJAX
- **JS**: Arquivos JavaScript
- **CSS**: Folhas de estilo
- **All**: Todas as requisições

**Análise de Requisições**:
- **Status**: 200 (OK), 404 (Not Found), 500 (Error)
- **Time**: Tempo de resposta
- **Size**: Tamanho da resposta
- **Type**: Tipo de conteúdo

### Application Insights

#### Métricas de Performance

**Dados Coletados**:
- Tempo de carregamento de páginas
- Erros JavaScript
- Requisições AJAX
- Interações do usuário

**Acessar Métricas**:
- Dashboard administrativo
- Relatórios de performance
- Alertas automáticos

## Logs do Sistema

### Tipos de Logs

#### Event Logs

**Localização**: Object Manager → Event → Fields & Relationships

**Campos de Auditoria**:
- **CreatedBy**: Quem criou o evento
- **CreatedDate**: Quando foi criado
- **LastModifiedBy**: Última modificação
- **LastModifiedDate**: Data da modificação

#### System Logs

**Setup → Event Monitoring**:

**Eventos Monitorados**:
- **Login**: Tentativas de login
- **Logout**: Sessões finalizadas
- **URI**: Páginas acessadas
- **API**: Chamadas de API

#### Custom Logs

**Logs Personalizados**:
- Eventos de negócio específicos
- Integrações customizadas
- Workflows e triggers
- Aprovações e processos

### Configuração de Logging

#### Níveis de Log

| Nível | Descrição | Uso |
|-------|-----------|-----|
| **ERROR** | Apenas erros críticos | Produção |
| **WARN** | Erros e warnings | Produção |
| **INFO** | Informações gerais | Desenvolvimento |
| **DEBUG** | Detalhes completos | Troubleshooting |
| **TRACE** | Máximo detalhe | Desenvolvimento |

#### Configuração por Ambiente

**Produção**:
`pex
// Log apenas erros críticos
System.debug(LoggingLevel.ERROR, 'Critical error occurred');
`

**Desenvolvimento**:
`pex
// Log detalhado para debugging
System.debug(LoggingLevel.DEBUG, 'Processing event: ' + eventId);
`

## Ferramentas de Análise

### Performance Profiler

#### Análise de Performance

**Métricas Principais**:
- **Page Load Time**: Tempo total de carregamento
- **DOM Ready**: Tempo até DOM estar pronto
- **First Paint**: Primeiro elemento visual
- **Interactive**: Página responsiva

**Ferramenta Lighthouse**:
1. Abra DevTools (F12)
2. Vá para aba "Lighthouse"
3. Selecione "Performance"
4. Clique "Generate report"

#### Otimização Baseada em Dados

**Identificar Gargalos**:
- Scripts lentos
- Recursos grandes
- Requisições desnecessárias
- Renderização bloqueante

### Memory Profiler

#### Análise de Memória

**Memory Tab (DevTools)**:

**Tipos de Análise**:
- **Heap Snapshot**: Estado atual da memória
- **Allocation Timeline**: Alocações ao longo do tempo
- **Allocation Sampling**: Amostragem de alocações

**Detectar Vazamentos**:
- Crescimento constante de memória
- Objetos não liberados
- Event listeners não removidos

### Error Tracking

#### Monitoramento Automático

**Configuração**:
`javascript
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // Enviar para sistema de monitoramento
});
`

**Métricas de Erro**:
- Taxa de erro por funcionalidade
- Erros mais frequentes
- Impacto nos usuários
- Tendências temporais

## Diagnóstico de Problemas Comuns

### Problemas de Carregamento

#### Sintomas

- Página não carrega completamente
- Componentes aparecem quebrados
- Funcionalidades não respondem

#### Diagnóstico

**Console Check**:
`javascript
// Verificar se CalendarioReino foi carregado
if (typeof CalendarioReino !== 'undefined') {
    console.log('CalendarioReino loaded successfully');
} else {
    console.error('CalendarioReino failed to load');
}
`

**Network Check**:
- Verificar status 200 para recursos
- Confirmar que CSS/JS foram baixados
- Checar por bloqueios de CORS

#### Soluções

1. **Limpar Cache**: Ctrl+Shift+R
2. **Verificar Rede**: Testar conectividade
3. **Atualizar Navegador**: Versão mais recente
4. **Desabilitar Extensões**: Temporariamente

### Problemas de Sincronização

#### Sintomas

- Eventos não aparecem
- Alterações não salvam
- Dados desatualizados

#### Diagnóstico

**Verificar Conectividade**:
`javascript
// Testar conexão com servidor
fetch('/services/data/v50.0/sobjects/Event')
  .then(response => {
    if (response.ok) {
      console.log('Connection OK');
    } else {
      console.error('Connection failed:', response.status);
    }
  })
  .catch(error => {
    console.error('Network error:', error);
  });
`

**Verificar Limites de API**:
- Setup → System Overview → API Usage
- Verificar se limite foi atingido
- Aguardar reset ou solicitar aumento

### Problemas de Performance

#### Sintomas

- Interface lenta
- Travamentos do navegador
- Timeouts frequentes

#### Diagnóstico

**Performance Metrics**:
`javascript
// Medir tempo de operações
console.time('eventLoad');
// ... operação ...
console.timeEnd('eventLoad');

// Verificar uso de memória
console.log('Memory usage:', performance.memory);
`

**Identificar Gargalos**:
- Muitos eventos carregados
- Filtros ineficientes
- Animações pesadas
- Memory leaks

## Relatórios de Diagnóstico

### Relatório Automático

#### Geração de Relatório

**Informações Incluídas**:
- Versão do navegador
- Sistema operacional
- Resolução de tela
- Configurações do Salesforce
- Logs de erro recentes
- Métricas de performance

**Comando para Gerar**:
`javascript
// Gerar relatório de diagnóstico
CalendarioReino.generateDiagnosticReport();
`

#### Formato do Relatório

`json
{
  "timestamp": "2025-01-15T10:30:00Z",
  "userAgent": "Chrome/118.0.0.0",
  "salesforceVersion": "Winter '24",
  "componentVersion": "2.1.0",
  "errors": [
    {
      "code": "CR-SYNC-001-E",
      "message": "Sync failed",
      "timestamp": "2025-01-15T10:29:45Z"
    }
  ],
  "performance": {
    "loadTime": 2.3,
    "memoryUsage": 45.6,
    "apiCalls": 23
  }
}
`

### Relatórios Customizados

#### Por Administradores

**Setup → Reports → New Report**:

**Tipos de Relatório**:
- Usage Analytics
- Error Trends
- Performance Metrics
- User Activity

**Filtros Comuns**:
- Período de tempo
- Usuários específicos
- Tipos de erro
- Funcionalidades

## Ferramentas Externas

### Browser Extensions

#### Salesforce Inspector

**Instalação**: Chrome Web Store → Salesforce Inspector

**Funcionalidades**:
- Visualizar metadados
- Executar SOQL
- Inspecionar objetos
- Exportar dados

#### Lightning Inspector

**Instalação**: Chrome Web Store → Lightning Inspector

**Recursos**:
- Debug de componentes Lightning
- Análise de performance
- Event tracking
- Storage inspection

### Monitoring Tools

#### Application Performance Monitoring

**New Relic/AppDynamics**:
- Monitoramento em tempo real
- Alertas automáticos
- Análise de tendências
- Correlação de eventos

**Configuração**:
`javascript
// Integração com APM
window.newrelic = {
  addPageAction: function(name, attributes) {
    // Track custom events
  }
};
`

## Suporte e Escalação

### Informações para Suporte

#### Dados Essenciais

**Sempre Incluir**:
- URL exata da página
- Passos para reproduzir
- Navegador e versão
- Sistema operacional
- Mensagens de erro completas
- Screenshots/vídeos

#### Logs Relevantes

**Console Logs**:
`
Copy/paste do console do navegador
Including timestamps and full stack traces
`

**Debug Logs**:
- Export do Salesforce Debug Log
- Filtrado para período relevante
- Níveis DEBUG ou superior

**Network Logs**:
- HAR file com requisições
- Status codes e response times
- Failed requests destacadas

### Escalação Técnica

#### Processo de Escalação

**Nível 1 - Usuário**:
- Consultar documentação
- Verificar FAQ
- Tentar soluções básicas

**Nível 2 - Admin Local**:
- Verificar configurações
- Revisar permissões
- Consultar logs do sistema

**Nível 3 - Suporte Especializado**:
- Análise de código
- Debug avançado
- Escalação para desenvolvimento

#### Contatos de Suporte

!!! question "Escalação de Problemas"
    
    **L1 Support**: suporte@empresa.com
    **L2 Technical**: tech-support@empresa.com
    **L3 Engineering**: engineering@empresa.com
    **Emergency**: +55 11 9999-9999

### SLA e Prioridades

#### Níveis de Prioridade

| Prioridade | Descrição | SLA |
|------------|-----------|-----|
| **P1 - Crítico** | Sistema indisponível | 1 hora |
| **P2 - Alto** | Funcionalidade crítica afetada | 4 horas |
| **P3 - Médio** | Funcionalidade não crítica | 1 dia útil |
| **P4 - Baixo** | Melhorias e questões menores | 3 dias úteis |

---

**Ferramentas Relacionadas**:
- [Códigos de Erro](error-codes.md)
- [Suporte Técnico](support.md)
- [Documentação Técnica](../technical/index.md)
