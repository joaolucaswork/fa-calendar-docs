# Códigos de Erro

## Introdução aos Códigos de Erro

O CalendarioReino utiliza um sistema estruturado de códigos de erro para facilitar o diagnóstico e resolução de problemas. Esta referência abrangente ajuda usuários e administradores a identificar e resolver rapidamente qualquer issue.

## Estrutura dos Códigos

### Formato Padrão

`
CR-[CATEGORIA]-[NÚMERO]-[SEVERIDADE]
`

**Exemplo**: CR-AUTH-001-E

**Componentes**:
- **CR**: CalendarioReino
- **CATEGORIA**: Área funcional
- **NÚMERO**: Identificador sequencial
- **SEVERIDADE**: E=Erro, W=Warning, I=Info

### Categorias de Erro

| Código | Categoria | Descrição |
|--------|-----------|-----------|
| **AUTH** | Autenticação | Problemas de login e permissões |
| **PERM** | Permissões | Acesso negado a recursos |
| **DATA** | Dados | Problemas com dados e validação |
| **SYNC** | Sincronização | Falhas de sincronização |
| **API** | API/Integração | Erros de integração externa |
| **UI** | Interface | Problemas de interface |
| **PERF** | Performance | Problemas de performance |
| **CONFIG** | Configuração | Erros de configuração |

## Erros de Autenticação (AUTH)

### CR-AUTH-001-E: Sessão Expirada

**Descrição**: A sessão do usuário expirou

**Causas**:
- Timeout de sessão do Salesforce
- Logout forçado por política
- Alteração de credenciais

**Soluções**:
1. Faça login novamente
2. Verifique se suas credenciais estão corretas
3. Contate administrador se persistir

### CR-AUTH-002-E: Token Inválido

**Descrição**: Token de autenticação inválido ou corrompido

**Causas**:
- Token JWT expirado
- Manipulação indevida do token
- Problema na geração do token

**Soluções**:
1. Limpe cookies e cache do navegador
2. Faça logout e login novamente
3. Contate suporte se persistir

### CR-AUTH-003-W: Múltiplas Sessões Detectadas

**Descrição**: Múltiplas sessões ativas detectadas

**Causas**:
- Login em múltiplos dispositivos
- Abas duplicadas do navegador
- Sessões não finalizadas corretamente

**Soluções**:
1. Feche sessões desnecessárias
2. Use apenas uma aba por vez
3. Configure política de sessão única se necessário

## Erros de Permissões (PERM)

### CR-PERM-001-E: Acesso Negado ao Objeto Event

**Descrição**: Usuário não tem permissão para acessar eventos

**Causas**:
- Perfil sem permissão Read em Event
- Sharing rules restritivas
- Field Level Security bloqueando campos

**Soluções**:
1. Contate administrador Salesforce
2. Solicite permissões adequadas
3. Verifique configuração do perfil

### CR-PERM-002-E: Não Pode Criar Eventos

**Descrição**: Usuário não pode criar novos eventos

**Causas**:
- Permissão Create negada em Event
- Validation rules bloqueando criação
- Processo de aprovação ativo

**Soluções**:
1. Solicite permissão Create ao administrador
2. Verifique validation rules
3. Complete processo de aprovação se necessário

### CR-PERM-003-E: Não Pode Editar Este Evento

**Descrição**: Usuário não pode editar evento específico

**Causas**:
- Não é proprietário do evento
- Sharing rules restritivas
- Evento bloqueado por outro processo

**Soluções**:
1. Contate organizador do evento
2. Solicite transferência de propriedade
3. Verifique regras de sharing

### CR-PERM-004-E: Acesso Negado a Salas

**Descrição**: Usuário não pode acessar sistema de reserva de salas

**Causas**:
- Permissões em objetos customizados de sala
- Restrições por departamento/localização
- Configuração de acesso específica

**Soluções**:
1. Contate facilities manager
2. Solicite acesso a salas específicas
3. Verifique política de reservas

## Erros de Dados (DATA)

### CR-DATA-001-E: Campo Obrigatório Não Preenchido

**Descrição**: Campo obrigatório está vazio

**Campos Comuns**:
- Subject (Título do evento)
- StartDateTime (Data/hora início)
- EndDateTime (Data/hora fim)

**Soluções**:
1. Preencha todos os campos obrigatórios
2. Verifique validation rules customizadas
3. Confirme formato de dados

### CR-DATA-002-E: Data Inválida

**Descrição**: Formato de data/hora inválido

**Causas**:
- Data no passado para eventos futuros
- Formato de data incorreto
- Fuso horário inválido
- Data fim antes de data início

**Soluções**:
1. Verifique formato de data (DD/MM/YYYY)
2. Confirme que data fim > data início
3. Verifique configurações de fuso horário

### CR-DATA-003-E: Conflito de Agenda

**Descrição**: Conflito detectado com evento existente

**Causas**:
- Sobreposição de horários
- Participante já ocupado
- Sala já reservada

**Soluções**:
1. Escolha horário alternativo
2. Remova participantes conflitantes
3. Selecione sala diferente

### CR-DATA-004-E: Limite de Participantes Excedido

**Descrição**: Muitos participantes para o evento

**Causas**:
- Limite organizacional de convites
- Capacidade da sala excedida
- Restrições de licença

**Soluções**:
1. Reduza número de participantes
2. Escolha sala maior
3. Divida em múltiplos eventos

## Erros de Sincronização (SYNC)

### CR-SYNC-001-E: Falha na Sincronização

**Descrição**: Erro ao sincronizar dados com servidor

**Causas**:
- Problemas de conectividade
- Timeout na requisição
- Conflitos de dados

**Soluções**:
1. Verifique conexão com internet
2. Tente novamente em alguns minutos
3. Atualize a página

### CR-SYNC-002-W: Sincronização Parcial

**Descrição**: Alguns dados não foram sincronizados

**Causas**:
- Conectividade instável
- Dados muito grandes
- Limitações de API

**Soluções**:
1. Aguarde sincronização automática
2. Force sincronização manual
3. Verifique dados críticos

### CR-SYNC-003-E: Conflito de Versão

**Descrição**: Conflito entre versão local e servidor

**Causas**:
- Edição simultânea por múltiplos usuários
- Sincronização interrompida
- Dados desatualizados

**Soluções**:
1. Atualize página para obter versão mais recente
2. Refaça alterações cuidadosamente
3. Coordene edições com equipe

## Erros de API (API)

### CR-API-001-E: Limite de API Excedido

**Descrição**: Cota de chamadas API esgotada

**Causas**:
- Uso intensivo de funcionalidades
- Integrações externas excessivas
- Processes automáticos em loop

**Soluções**:
1. Aguarde reset diário de cota
2. Reduza operações desnecessárias
3. Otimize integrações customizadas

### CR-API-002-E: Serviço Indisponível

**Descrição**: Serviço externo temporariamente indisponível

**Causas**:
- Manutenção programada
- Sobrecarga do servidor
- Problemas de infraestrutura

**Soluções**:
1. Tente novamente em alguns minutos
2. Verifique status do serviço
3. Use funcionalidades offline quando possível

### CR-API-003-E: Resposta Inválida

**Descrição**: Resposta da API em formato inválido

**Causas**:
- Mudança na API externa
- Dados corrompidos
- Problemas de codificação

**Soluções**:
1. Reporte ao suporte técnico
2. Verifique logs para detalhes
3. Use funcionalidades alternativas

## Erros de Interface (UI)

### CR-UI-001-E: Componente Não Carrega

**Descrição**: Componente da interface falha ao carregar

**Causas**:
- JavaScript desabilitado
- Bloqueadores de conteúdo
- Recursos CSS/JS não carregaram

**Soluções**:
1. Habilite JavaScript no navegador
2. Desabilite bloqueadores temporariamente
3. Limpe cache e recarregue

### CR-UI-002-E: Responsividade Quebrada

**Descrição**: Interface não se adapta ao dispositivo

**Causas**:
- Navegador não suportado
- CSS não carregou corretamente
- Configurações de zoom extremas

**Soluções**:
1. Use navegador suportado
2. Redefina zoom para 100%
3. Atualize página

### CR-UI-003-W: Funcionalidade Limitada

**Descrição**: Algumas funcionalidades não disponíveis

**Causas**:
- Dispositivo móvel com limitações
- Navegador antigo
- Configurações de acessibilidade

**Soluções**:
1. Use desktop para funcionalidade completa
2. Atualize navegador
3. Ajuste configurações conforme necessário

## Erros de Performance (PERF)

### CR-PERF-001-W: Carregamento Lento

**Descrição**: Componente demora para carregar

**Causas**:
- Muitos eventos para exibir
- Conexão lenta
- Processamento intensivo

**Soluções**:
1. Use filtros para reduzir dados
2. Melhore conexão se possível
3. Aguarde carregamento completo

### CR-PERF-002-W: Memoria Insuficiente

**Descrição**: Navegador com pouca memória disponível

**Causas**:
- Muitas abas abertas
- Navegador com vazamentos de memória
- Dados em cache excessivos

**Soluções**:
1. Feche abas desnecessárias
2. Reinicie navegador
3. Limpe cache regularmente

## Erros de Configuração (CONFIG)

### CR-CONFIG-001-E: Configuração Inválida

**Descrição**: Configuração do sistema inválida

**Causas**:
- Parâmetros incorretos
- Dependências não atendidas
- Configuração corrompida

**Soluções**:
1. Contate administrador do sistema
2. Verifique documentação de configuração
3. Restaure configuração padrão se necessário

### CR-CONFIG-002-E: Recurso Não Configurado

**Descrição**: Funcionalidade não foi configurada

**Causas**:
- Setup incompleto
- Dependências não instaladas
- Configuração de permissões pendente

**Soluções**:
1. Complete processo de setup
2. Instale dependências necessárias
3. Configure permissões adequadas

## Ferramentas de Diagnóstico

### Console do Navegador

**Acessar**: F12 → Console

**Verificar**:
- Mensagens de erro JavaScript
- Falhas de rede
- Warnings de segurança

### Logs do Sistema

**Localização**: Setup → Debug Logs

**Configurar**:
1. Adicione usuário aos traced users
2. Configure níveis de log
3. Execute operação que causa erro
4. Analise logs gerados

### Informações de Sistema

**Coletar para Suporte**:
- Versão do navegador
- Sistema operacional
- URL da página com problema
- Passos para reproduzir
- Screenshots/vídeos se relevante

## Escalação e Suporte

### Níveis de Suporte

**Nível 1 - Auto-Atendimento**:
- Consulte esta documentação
- Verifique FAQ
- Tente soluções básicas

**Nível 2 - Suporte Local**:
- Contate administrador Salesforce
- Suporte de TI interno
- Power users da equipe

**Nível 3 - Suporte Especializado**:
- Suporte técnico do fornecedor
- Consultores Salesforce
- Desenvolvedores especializados

### Informações para Suporte

**Sempre Inclua**:
- Código de erro exato
- Passos para reproduzir
- Dados de ambiente (navegador, SO)
- Screenshots/logs relevantes
- Impacto no negócio

**Contatos**:
- **Email**: suporte@empresa.com
- **Telefone**: +55 11 9999-9999
- **Chat**: Disponível 8h-18h
- **Emergências**: Ramal 9999

---

**Não encontrou o código de erro?** 
- Consulte [Documentação Técnica](../technical/index.md)
- Entre em contato com [Suporte](support.md)
- Verifique [Logs e Diagnósticos](diagnostics.md)
