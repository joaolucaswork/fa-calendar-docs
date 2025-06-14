# Guia de Instalação

## Implementação e Configuração do Sistema

Esta seção fornece instruções detalhadas para a instalação e configuração inicial do CalendarioReino em seu ambiente Salesforce.

### Pré-requisitos

!!! warning "Requisitos do Sistema"
    - Salesforce org com Lightning Platform
    - Permissões de administrador
    - Acesso ao AppExchange (se aplicável)

### Passos de Instalação

=== "Instalação via AppExchange"

    1. **Acesse o AppExchange**
       - Navegue até o AppExchange do Salesforce
       - Procure por "CalendarioReino"
       
    2. **Instale o Pacote**
       - Clique em "Get It Now"
       - Selecione sua org de destino
       - Escolha o tipo de instalação

=== "Instalação Manual"

    1. **Deploy dos Componentes**
       - Faça upload dos componentes Lightning
       - Configure as permissões necessárias
       
    2. **Configuração Inicial**
       - Execute os scripts de configuração
       - Configure as permissões de usuário

### Configuração Pós-Instalação

#### Configuração de Permissões

```apex
// Exemplo de configuração de permissões
PermissionSet ps = new PermissionSet(
    Name = 'CalendarioReino_Users',
    Label = 'CalendarioReino Users'
);
```

#### Validação da Instalação

- [ ] Componentes instalados corretamente
- [ ] Permissões configuradas
- [ ] Testes básicos executados
- [ ] Usuários podem acessar o sistema

!!! success "Instalação Concluída"
    Após completar estes passos, o CalendarioReino estará pronto para uso em sua organização.
