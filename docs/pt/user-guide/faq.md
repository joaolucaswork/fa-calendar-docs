# Perguntas Frequentes (FAQ)

## Questões Gerais

### O que é o CalendarioReino?

**Resposta**: O CalendarioReino é um componente avançado de calendário desenvolvido especificamente para o Salesforce Lightning Experience. Ele oferece uma interface moderna e intuitiva para gestão de eventos, reuniões e reserva de salas, integrado nativamente com o ecossistema Salesforce.

### Quais são os requisitos mínimos do sistema?

**Resposta**: 
- Salesforce Lightning Experience (Spring '23 ou superior)
- Navegadores: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+
- Licenças Salesforce ou Platform
- Permissões adequadas configuradas pelo administrador

### Como faço para acessar o CalendarioReino?

**Resposta**: Você pode acessar através do App Launcher (9 pontos) procurando por "Calendario" ou navegando diretamente para a aba "Calendário" se ela estiver disponível na sua barra de navegação.

## Instalação e Configuração

### Não consigo ver o componente de calendário. O que fazer?

**Possíveis Causas**:
- Permissões insuficientes
- Componente não instalado corretamente
- Perfil sem acesso

**Soluções**:
1. Contate seu administrador Salesforce
2. Verifique se você tem acesso à Lightning Experience
3. Confirme se o componente está instalado na sua org
4. Limpe o cache do navegador

### Como solicito acesso ao CalendarioReino?

**Resposta**: Entre em contato com seu administrador Salesforce ou departamento de TI. Eles precisarão:
1. Verificar se você tem as permissões necessárias
2. Adicionar você aos perfis/conjuntos de permissões apropriados
3. Configurar acesso aos objetos necessários (Event, Activity, User)

### Posso usar em dispositivos móveis?

**Resposta**: Sim! O CalendarioReino é totalmente responsivo e funciona em:
- **Tablets**: iPad, Android tablets (resolução 768px+)
- **Smartphones**: iPhone, Android (otimizado para telas menores)
- **Desktop**: Todas as resoluções acima de 1024px

## Uso Básico

### Como criar um evento rapidamente?

**Resposta**: 
1. Clique em qualquer data/horário vazio no calendário
2. Digite o título do evento
3. Pressione Enter
4. O evento será criado com configurações padrão

Para eventos mais complexos, use o botão "Novo Evento" ou Ctrl+N.

### Como convido pessoas para uma reunião?

**Resposta**:
1. Crie ou edite um evento
2. No campo "Participantes", digite o nome da pessoa
3. Selecione da lista de sugestões
4. Defina se é obrigatório ou opcional
5. Salve o evento
6. Convites são enviados automaticamente

### Como reservo uma sala?

**Resposta**:
1. Durante a criação/edição do evento
2. Clique em "Reservar Sala"
3. Sistema mostra salas disponíveis para o horário
4. Selecione a sala adequada
5. Confirme a reserva
6. Sala é reservada automaticamente

### Como cancelo um evento?

**Resposta**:
1. Clique no evento para selecioná-lo
2. Clique direito e selecione "Excluir" ou pressione Delete
3. Confirme o cancelamento
4. Participantes são notificados automaticamente
5. Salas reservadas são liberadas

## Problemas Técnicos

### O calendário não carrega. O que fazer?

**Diagnóstico**:
1. **Verifique sua conexão** com a internet
2. **Atualize a página** (F5 ou Ctrl+R)
3. **Limpe o cache** do navegador
4. **Tente outro navegador**
5. **Desabilite extensões** temporariamente

**Se persistir**:
- Contate o suporte técnico
- Forneça detalhes do erro
- Inclua informações do navegador

### Eventos não aparecem no calendário

**Possíveis Causas**:
- Filtros ativos ocultando eventos
- Calendários desmarcados na sidebar
- Sincronização pendente
- Problemas de permissão

**Soluções**:
1. Verifique filtros na sidebar esquerda
2. Confirme que calendários estão marcados
3. Atualize a página
4. Verifique permissões com administrador

### Não consigo editar eventos de outras pessoas

**Resposta**: Isso é normal e esperado por questões de segurança. Você só pode editar:
- Eventos que você criou
- Eventos onde você é organizador
- Eventos em calendários onde você tem permissão de edição

Para editar eventos de outros, solicite que:
- Te adicionem como co-organizador
- Transfiram a organização para você
- Te deem permissões específicas no calendário

### Lembretes não funcionam

**Verificações**:
1. **Configuração do navegador**: Permita notificações
2. **Configurações de email**: Verifique se emails não estão em spam
3. **Configurações do evento**: Confirme se lembretes estão ativos
4. **Fuso horário**: Verifique se está correto

**Configuração de Notificações**:
- Chrome: Configurações → Privacidade → Configurações do site → Notificações
- Firefox: Preferências → Privacidade → Permissões → Notificações

## Funcionalidades Avançadas

### Como funciona a recorrência de eventos?

**Resposta**: 
1. Ao criar/editar um evento, marque "Evento Recorrente"
2. Escolha o padrão (diário, semanal, mensal, anual)
3. Configure frequência e data final
4. Salve a série

**Editando Séries Recorrentes**:
- **Este evento**: Altera apenas uma ocorrência
- **Todos os eventos**: Altera toda a série
- **Este e futuros**: Altera da data atual em diante

### Posso compartilhar meu calendário?

**Resposta**: Sim, através das configurações:
1. Acesse Configurações → Compartilhamento
2. Adicione usuários ou grupos
3. Defina nível de permissão (visualizar, editar)
4. Envie convites
5. Usuários podem aceitar e ver seu calendário

### Como funciona a detecção de conflitos?

**Resposta**: O sistema automaticamente:
- Verifica disponibilidade de todos os participantes
- Mostra conflitos em tempo real
- Sugere horários alternativos
- Destaca usuários indisponíveis
- Oferece opções de resolução

### Posso integrar com outros calendários?

**Resposta**: O CalendarioReino suporta:
- **Exportação iCal**: Para importar em outros sistemas
- **Sincronização** com calendários do Salesforce
- **APIs** para integrações customizadas
- **Webhooks** para notificações externas

## Personalização

### Como mudo as cores dos eventos?

**Resposta**:
1. Acesse Configurações → Aparência
2. Selecione "Cores dos Calendários"
3. Escolha cores para diferentes tipos
4. Defina regras de colorização
5. Salve as configurações

### Posso personalizar a visualização padrão?

**Resposta**: Sim, em Configurações → Visualização:
- **Modo padrão**: Mensal, semanal, diária
- **Dia inicial**: Domingo ou segunda-feira
- **Formato de hora**: 12h (AM/PM) ou 24h
- **Densidade**: Quantidade de informações exibidas

### Como configurar lembretes padrão?

**Resposta**:
1. Configurações → Lembretes
2. Defina tipos padrão (email, popup)
3. Configure tempo antecipado
4. Salve configurações
5. Novos eventos usarão estes padrões

## Administração

### Como faço backup dos meus eventos?

**Resposta**:
- **Automático**: Salesforce faz backup dos dados
- **Manual**: Exporte eventos em formato iCal ou Excel
- **Configuração**: Administradores podem configurar backups regulares

### Posso recuperar eventos excluídos?

**Resposta**:
- **15 dias**: Eventos ficam na Lixeira do Salesforce
- **Administradores**: Podem restaurar via Data Recovery
- **Backup**: Restaurar de backups se disponível
- **Logs**: Verificar logs de auditoria

### Como reporto bugs ou problemas?

**Resposta**:
1. **Colete informações**:
   - Navegador e versão
   - Passos para reproduzir
   - Screenshots se possível
   - Mensagens de erro

2. **Canais de suporte**:
   - Email: suporte@empresa.com
   - Chat interno (se disponível)
   - Ticket no sistema de help desk
   - Contato direto com administrador

## Performance e Otimização

### O calendário está lento. Como otimizar?

**Dicas de Performance**:
1. **Limite eventos exibidos**: Use filtros por período
2. **Reduza calendários**: Oculte calendários não essenciais
3. **Limpe cache**: Regularmente limpe cache do navegador
4. **Atualize navegador**: Use versões mais recentes
5. **Feche abas desnecessárias**: Libere memória

### Quantos eventos posso ter?

**Resposta**: 
- **Técnico**: Sem limite rígido (limitado pelo Salesforce)
- **Prático**: Recomendado até 10.000 eventos por usuário
- **Performance**: Visualizações funcionam melhor com até 1.000 eventos visíveis
- **Otimização**: Use filtros para períodos específicos

## Segurança e Privacidade

### Meus dados estão seguros?

**Resposta**: Sim, o CalendarioReino:
- Usa a segurança nativa do Salesforce
- Respeita permissões de objeto e campo
- Criptografa dados em trânsito e repouso
- Não armazena dados fora do Salesforce
- Segue padrões de conformidade (SOC, ISO)

### Quem pode ver meus eventos?

**Resposta**: Depende das configurações:
- **Eventos privados**: Apenas você
- **Calendários compartilhados**: Usuários com permissão
- **Eventos públicos**: Conforme política organizacional
- **Administradores**: Podem ter acesso conforme políticas

### Como controlo a privacidade?

**Resposta**:
1. **Configurações de privacidade**: Defina quem pode ver seus eventos
2. **Calendários separados**: Use diferentes calendários para diferentes níveis
3. **Eventos privados**: Marque eventos sensíveis como privados
4. **Compartilhamento seletivo**: Compartilhe apenas calendários necessários

## Integração e API

### Posso integrar com outros sistemas?

**Resposta**: Sim, através de:
- **APIs REST**: Para integrações customizadas
- **Webhooks**: Para notificações em tempo real
- **iCal Export**: Para sincronização externa
- **Salesforce APIs**: Para integração com outros sistemas

### Como desenvolvimento customizações?

**Resposta**: Contate sua equipe de desenvolvimento com:
- **Documentação da API**: Disponível para desenvolvedores
- **Sandbox**: Para testes seguros
- **Suporte técnico**: Para dúvidas específicas
- **Best practices**: Para desenvolvimento seguro

---

**Não encontrou sua pergunta?** Entre em contato:
- **Email**: suporte@empresa.com
- **Chat**: Disponível 8h-18h
- **Documentação**: [Manual Completo](manual.md)
- **Treinamento**: [Recursos de Treinamento](training.md)
