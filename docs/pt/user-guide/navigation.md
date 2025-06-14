# Navegação Básica

## Introdução à Navegação

O CalendarioReino oferece múltiplas formas de navegar e interagir com seus calendários. Esta seção ensina os fundamentos da navegação para que você possa usar o sistema de forma eficiente.

## Métodos de Navegação

### Navegação por Teclado

#### Atalhos Principais

| Ação | Atalho | Descrição |
|------|--------|-----------|
| `Ctrl+N` | Novo Evento | Criar evento rapidamente |
| `Ctrl+F` | Buscar | Busca global de eventos |
| `T` | Hoje | Voltar para data atual |
| `←` | Anterior | Período anterior |
| `→` | Próximo | Próximo período |
| `M` | Mensal | Visualização mensal |
| `W` | Semanal | Visualização semanal |
| `D` | Diária | Visualização diária |
| `L` | Lista | Visualização em lista |
| `Escape` | Cancelar | Fechar modais/cancelar ações |

#### Navegação nas Visualizações

**Visualização Mensal**:
- `←/→`: Mês anterior/próximo
- `↑/↓`: Semana anterior/próxima
- `Home`: Primeiro dia do mês
- `End`: Último dia do mês

**Visualização Semanal**:
- `←/→`: Semana anterior/próxima
- `↑/↓`: Horário anterior/próximo
- `Page Up/Down`: Pular várias horas

**Visualização Diária**:
- `←/→`: Dia anterior/próximo
- `↑/↓`: Horário anterior/próximo
- `Ctrl+↑/↓`: Início/fim do dia útil

### Navegação por Mouse

#### Cliques e Gestos

!!! info "Ações do Mouse"
    
    **Clique Simples**
    - Em data vazia: Criar evento
    - Em evento: Selecionar/visualizar
    - Em controles: Ativar função
    
    **Clique Duplo**
    - Em evento: Editar diretamente
    - Em data: Criar evento com formulário completo
    
    **Clique Direito**
    - Menu contextual com opções
    - Ações rápidas disponíveis
    
    **Arrastar e Soltar**
    - Mover eventos entre datas
    - Alterar horários
    - Redimensionar duração

#### Scroll e Zoom

- **Scroll Vertical**: Navegar horários (semanal/diária)
- **Scroll Horizontal**: Navegar datas (com Shift)
- **Ctrl + Scroll**: Zoom in/out (onde aplicável)

### Navegação por Touch (Mobile/Tablet)

#### Gestos Básicos

- **Toque**: Selecionar/criar
- **Toque Duplo**: Editar
- **Pressionar**: Menu contextual
- **Arrastar**: Mover eventos
- **Pinch**: Zoom (onde aplicável)
- **Swipe**: Navegar períodos

#### Gestos de Navegação

- **Swipe Esquerda**: Próximo período
- **Swipe Direita**: Período anterior
- **Swipe Vertical**: Navegar horários

## Visualizações e Modos

### Visualização Mensal

#### Características

- **Visão geral** de 30-31 dias
- **Ideal para** planejamento de longo prazo
- **Mostra** densidade e distribuição de eventos
- **Permite** navegação rápida entre meses

#### Navegação Específica

```text
Janeiro 2025
D  S  T  Q  Q  S  S
       1  2  3  4  5
6  7  8  9 10 11 12
13 14 15 16 17 18 19
20 21 22 23 24 25 26
27 28 29 30 31
```

- **Clique em números**: Ir para data específica
- **Setas laterais**: Mês anterior/próximo
- **Nome do mês**: Picker de mês/ano

### Visualização Semanal

#### Características

- **7 dias** com grade horária
- **Ideal para** agendamento preciso
- **Mostra** conflitos claramente
- **Permite** ajustes de horário

#### Layout da Grade

```text
Seg  Ter  Qua  Qui  Sex  Sab  Dom
8h   █    ░    ░    █    ░    ░    ░
9h   █    █    ░    █    ░    ░    ░
10h  ░    █    █    ░    ░    ░    ░
```

- **Barras horizontais**: Representam eventos
- **Cores diferentes**: Tipos de eventos
- **Sobreposição**: Indica conflitos

### Visualização Diária

#### Características

- **24 horas** de um dia específico
- **Máximo detalhe** de horários
- **Ideal para** dias intensos
- **Foco total** em um período

#### Estrutura Horária

```text
08:00 ├─────────────────────┤
      │ Reunião Diária      │
09:00 ├─────────────────────┤
      │                     │
10:00 ├─────────────────────┤
      │ Apresentação Client │
11:00 ├─────────────────────┤
```

### Visualização de Lista

#### Características

- **Lista cronológica** de eventos
- **Ideal para** revisão rápida
- **Permite** busca e filtros
- **Exportação** fácil

#### Formato da Lista

| Data | Hora | Evento | Participantes | Status |
|------|------|--------|---------------|--------|
| 15/01 | 09:00 | Reunião Equipe | 5 pessoas | ✅ |
| 15/01 | 14:00 | Cliente ABC | 2 pessoas | ⏰ |
| 16/01 | 10:00 | Treinamento | 10 pessoas | 📋 |

## Navegação por Datas

### Métodos de Acesso a Datas

#### Mini Calendário

Localizado na sidebar esquerda:

- **Navegação rápida** para qualquer data
- **Indicadores visuais** de eventos
- **Destaque** da data atual
- **Clique direto** para ir à data

#### Picker de Data

Acessível através da barra superior:

- **Campo de entrada** de data
- **Calendário popup** para seleção
- **Navegação** por mês/ano
- **Suporte** a formato local

#### Busca por Data

No campo de busca:

- **"hoje"**: Vai para data atual
- **"amanhã"**: Próximo dia
- **"próxima semana"**: Próxima semana
- **"15/01"**: Data específica

### Navegação Relativa

#### Expressões Suportadas

!!! example "Exemplos de Navegação"
    
    **Relativa ao Hoje**
    - "hoje", "now", "current"
    - "ontem", "yesterday"  
    - "amanhã", "tomorrow"
    
    **Períodos**
    - "próxima semana", "next week"
    - "mês passado", "last month"
    - "próximo ano", "next year"
    
    **Específicas**
    - "15/01/2025"
    - "Janeiro 2025"
    - "Segunda-feira"

## Filtros e Busca

### Sistema de Busca

#### Busca Global

Acessível via `Ctrl+F`:

- **Busca em títulos** de eventos
- **Busca em descrições**
- **Busca em participantes**
- **Busca em locais**

#### Sintaxe de Busca

| Sintaxe | Resultado |
|---------|-----------|
| `reunião` | Eventos com "reunião" |
| `"reunião diária"` | Frase exata |
| `reunião OR meeting` | Um dos termos |
| `reunião -cancelada` | Inclui/exclui termos |
| `participante:João` | Por participante |
| `local:Sala A` | Por local |

### Sistema de Filtros

#### Filtros Disponíveis

- **Por calendário**: Mostrar/ocultar calendários específicos
- **Por tipo**: Reuniões, eventos, tarefas
- **Por status**: Confirmado, tentativa, cancelado
- **Por participante**: Eventos com pessoas específicas
- **Por data**: Intervalos de tempo

#### Aplicação de Filtros

**Via Sidebar**:
1. Marque/desmarque calendários
2. Use controles de filtro
3. Aplique combinações

**Via Busca Avançada**:
1. Acesse busca avançada
2. Configure critérios
3. Salve filtros frequentes

## Configurações de Navegação

### Preferências Pessoais

#### Acessível em: Configurações → Navegação

**Opções Disponíveis**:

- **Visualização padrão**: Mensal, semanal, diária
- **Dia inicial da semana**: Domingo ou segunda
- **Formato de data**: DD/MM/YYYY, MM/DD/YYYY
- **Formato de hora**: 12h (AM/PM) ou 24h
- **Fuso horário**: Seleção automática ou manual

### Comportamentos

#### Navegação Automática

- **Auto-atualização**: Refresh automático
- **Sincronização**: Tempo de sincronização
- **Persistência**: Lembrar última visualização
- **Restauração**: Restaurar filtros da sessão

#### Acessibilidade

- **Alto contraste**: Para melhor visualização
- **Texto grande**: Aumentar fonte
- **Navegação por tab**: Ordem lógica
- **Leitor de tela**: Compatibilidade

## Dicas de Navegação Eficiente

### Atalhos de Produtividade

!!! tip "Navegação Rápida"
    
    **Uso do Teclado**
    - Memorize os atalhos principais
    - Use Tab para navegar formulários
    - Escape sempre cancela ações
    
    **Uso do Mouse**
    - Clique direito para menus contextuais
    - Arrastar é mais rápido que editar
    - Hover mostra pré-visualizações
    
    **Combinações**
    - Use teclado para navegação
    - Use mouse para ações específicas
    - Combine filtros com busca

### Fluxos de Trabalho

#### Planejamento Semanal

1. **Inicie** na visualização semanal
2. **Revise** eventos existentes
3. **Identifique** lacunas de tempo
4. **Planeje** novos eventos
5. **Confirme** com participantes

#### Revisão Diária

1. **Acesse** visualização diária
2. **Verifique** agenda do dia
3. **Ajuste** horários se necessário
4. **Prepare** materiais necessários
5. **Configure** lembretes

#### Busca de Informações

1. **Use busca global** para localizar eventos
2. **Aplique filtros** para refinar
3. **Navegue** para contexto
4. **Analise** informações relacionadas

---

**Próximo**: [Gestão de Eventos](event-management.md)  
**Anterior**: [Interface do Usuário](interface.md)
