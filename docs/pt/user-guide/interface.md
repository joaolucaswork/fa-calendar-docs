# Interface do Usuário

## Visão Geral da Interface

O CalendarioReino apresenta uma interface moderna e intuitiva, projetada para máxima produtividade. Esta seção explica todos os elementos da interface e como utilizá-los eficientemente.

## Layout Principal

### Estrutura da Tela

```
┌─────────────────────────────────────────────────────────────┐
│                    Barra de Navegação                      │
├─────────────────────────────────────────────────────────────┤
│  Sidebar  │              Área Principal                    │
│           │                                               │
│ Calendários│         Visualização do Calendário           │
│ Filtros   │                                               │
│ Ações     │                                               │
│           │                                               │
├───────────┼───────────────────────────────────────────────┤
│           │              Barra de Status                  │
└─────────────────────────────────────────────────────────────┘
```

### Elementos da Interface

=== "Barra de Navegação"

    **Localização**: Topo da tela
    
    **Componentes**:
    - Logo do CalendarioReino
    - Navegação entre visualizações
    - Botões de ação rápida
    - Menu do usuário
    - Configurações
    
    **Funcionalidades**:
    - Acesso a diferentes modos de visualização
    - Criação rápida de eventos
    - Busca global
    - Notificações

=== "Sidebar Esquerda"

    **Localização**: Lateral esquerda
    
    **Seções**:
    - Mini calendário de navegação
    - Lista de calendários
    - Filtros ativos
    - Ações rápidas
    
    **Funcionalidades**:
    - Navegação rápida entre datas
    - Mostrar/ocultar calendários
    - Aplicar filtros
    - Criar novos calendários

=== "Área Principal"

    **Localização**: Centro da tela
    
    **Conteúdo**:
    - Grade do calendário
    - Eventos visualizados
    - Formulários de edição
    - Detalhes de eventos
    
    **Interações**:
    - Clique para criar eventos
    - Arrastar para mover eventos
    - Redimensionar para alterar duração
    - Hover para pré-visualização

## Barra de Navegação Superior

### Controles de Visualização

!!! info "Modos de Visualização"
    
    **Mensal** 📅
    - Visão geral do mês inteiro
    - Melhor para planejamento de longo prazo
    - Mostra densidade de eventos
    
    **Semanal** 📊
    - Visualização detalhada da semana
    - Ideal para agendamento preciso
    - Mostra horários específicos
    
    **Diário** 📋
    - Foco em um dia específico
    - Máximo detalhe de horários
    - Melhor para dias intensos
    
    **Lista** 📝
    - Eventos em formato de lista
    - Útil para revisão rápida
    - Permite busca e filtros

### Botões de Ação

| Botão | Função | Atalho |
|-------|--------|--------|
| ➕ Novo Evento | Criar evento rápido | `Ctrl+N` |
| 🔍 Buscar | Busca global | `Ctrl+F` |
| ⚙️ Configurações | Abrir configurações | `Ctrl+,` |
| 🔔 Notificações | Ver notificações | `Ctrl+Shift+N` |
| ❓ Ajuda | Abrir ajuda | `F1` |

### Navegação de Data

```
◀ ║ Hoje ║ ▶
```

- **Setas**: Navegar períodos anterior/próximo
- **Hoje**: Voltar para data atual
- **Picker de Data**: Ir para data específica

## Sidebar de Calendários

### Mini Calendário

O mini calendário permite navegação rápida:

- **Clique em uma data** para ir diretamente
- **Setas** para navegar meses
- **Dias destacados** indicam eventos
- **Data atual** sempre destacada

### Lista de Calendários

!!! example "Tipos de Calendários"
    
    **Calendário Pessoal** 👤
    - Seus eventos privados
    - Cor personalizável
    - Sempre visível
    
    **Calendários de Equipe** 👥
    - Compartilhados com equipe
    - Múltiplas cores
    - Controle de visibilidade
    
    **Calendários de Recursos** 🏢
    - Salas e equipamentos
    - Disponibilidade em tempo real
    - Reservas automáticas
    
    **Calendários Externos** 🔗
    - Integração com outros sistemas
    - Somente leitura
    - Sincronização automática

### Controles de Visibilidade

Cada calendário possui:

- **Checkbox**: Mostrar/ocultar
- **Cor**: Identificação visual
- **Menu**: Opções avançadas
- **Status**: Indicador de sincronização

## Área Principal do Calendário

### Visualização Mensal

```
Segunda  Terça   Quarta  Quinta  Sexta   Sábado  Domingo
   1       2       3       4       5       6       7
   8       9      10      11      12      13      14
  15      16      17      18      19      20      21
  22      23      24      25      26      27      28
```

**Características**:
- Cada célula representa um dia
- Eventos aparecem como barras coloridas
- Clique para criar evento
- Arrastar para mover entre dias

### Visualização Semanal

```
         Seg    Ter    Qua    Qui    Sex    Sab    Dom
09:00   ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐
        │     │     │     │     │     │     │     │
10:00   ├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
        │     │     │Event│     │     │     │     │
11:00   ├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
```

**Características**:
- Grade horária detalhada
- Eventos como blocos de tempo
- Fácil identificação de conflitos
- Redimensionamento para alterar duração

### Visualização Diária

```
08:00  ┌─────────────────────────────────────┐
       │                                     │
09:00  ├─────────────────────────────────────┤
       │ Reunião de Equipe                   │
10:00  ├─────────────────────────────────────┤
       │                                     │
11:00  ├─────────────────────────────────────┤
```

**Características**:
- Máximo detalhe do dia
- Visualização hora por hora
- Ideal para dias intensos
- Foco em produtividade

## Interações com Eventos

### Criação de Eventos

**Método 1: Clique Simples**
1. Clique em qualquer espaço vazio
2. Digite o título
3. Pressione Enter

**Método 2: Clique e Arrastar**
1. Clique e mantenha pressionado
2. Arraste para definir duração
3. Solte e digite o título

**Método 3: Botão de Ação**
1. Clique no botão "+" 
2. Preencha o formulário completo
3. Salve o evento

### Edição de Eventos

**Edição Rápida**:
- Clique duplo no evento
- Edite o título diretamente
- Pressione Enter para salvar

**Edição Completa**:
- Clique direito no evento
- Selecione "Editar"
- Modifique no formulário
- Salve as alterações

### Movimentação de Eventos

!!! tip "Arrastar e Soltar"
    
    **Mover para Outro Dia**
    - Arraste o evento para a nova data
    - Mantém o mesmo horário
    
    **Mover para Outro Horário**
    - Arraste verticalmente (visualização semanal/diária)
    - Altera apenas o horário
    
    **Alterar Duração**
    - Arraste as bordas do evento
    - Redimensiona início ou fim

## Estados Visuais

### Cores e Indicadores

| Cor | Significado |
|-----|-------------|
| 🔵 Azul | Eventos pessoais |
| 🟢 Verde | Reuniões confirmadas |
| 🟡 Amarelo | Eventos tentativas |
| 🔴 Vermelho | Eventos urgentes |
| ⚪ Cinza | Eventos passados |

### Status de Eventos

- **Sólido**: Evento confirmado
- **Listrado**: Evento tentativa
- **Pontilhado**: Evento cancelado
- **Borda grossa**: Evento atual

### Indicadores Especiais

- 👥 **Ícone de pessoas**: Múltiplos participantes
- 🏢 **Ícone de prédio**: Sala reservada
- 🔔 **Ícone de sino**: Lembrete ativo
- 🔄 **Ícone de setas**: Evento recorrente

## Formulários e Modais

### Modal de Criação/Edição

**Estrutura**:
```
┌─────────────────────────────────────┐
│ ✕               Novo Evento          │
├─────────────────────────────────────┤
│ Título: [________________]          │
│ Data:   [__________] [__________]   │
│ Hora:   [____] até [____]           │
│ Local:  [________________]          │
│ Desc.:  [________________]          │
│         [________________]          │
├─────────────────────────────────────┤
│           [Cancelar] [Salvar]        │
└─────────────────────────────────────┘
```

### Campos Principais

!!! info "Campos do Formulário"
    
    **Obrigatórios**
    - Título do evento
    - Data e horário
    
    **Opcionais**
    - Descrição/agenda
    - Local/sala
    - Participantes
    - Lembretes
    - Recorrência

## Configurações de Interface

### Personalização

**Acessível através de**: Configurações → Interface

**Opções Disponíveis**:
- Visualização padrão
- Cores dos calendários
- Formato de data/hora
- Idioma da interface
- Densidade de informações

### Atalhos de Teclado

| Ação | Atalho |
|------|--------|
| Novo evento | `Ctrl+N` |
| Buscar | `Ctrl+F` |
| Hoje | `T` |
| Anterior | `←` |
| Próximo | `→` |
| Visualização mensal | `M` |
| Visualização semanal | `W` |
| Visualização diária | `D` |
| Configurações | `Ctrl+,` |
| Ajuda | `F1` |

## Responsividade

### Desktop (> 1024px)

- Interface completa com sidebar
- Todas as funcionalidades disponíveis
- Atalhos de teclado ativos

### Tablet (768px - 1024px)

- Sidebar colapsável
- Toques otimizados
- Menu hamburger

### Mobile (< 768px)

- Interface simplificada
- Navegação por gestos
- Formulários adaptados

---

**Próximo**: [Navegação Básica](navigation.md)  
**Anterior**: [Primeiros Passos](first-steps.md)
