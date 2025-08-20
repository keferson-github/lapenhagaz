# Modal de Consentimento de Políticas - Lapenhagáz

## 📋 Funcionalidades Implementadas

### ✅ Modal Automático
- Aparece automaticamente 2 segundos após o carregamento da página
- Exibe apenas na primeira visita (controle por `sessionStorage`)
- Design moderno com gradiente azul/ciano (paleta do projeto)

### ✅ Políticas Incluídas
1. **Política de Privacidade** - Como coletamos e protegemos dados
2. **Política de Cookies** - Uso de cookies no site
3. **Termos de Uso** - Condições gerais de utilização

### ✅ Controle de Sessão
- **Aceitar**: Salva `'accepted'` no `sessionStorage`
- **Rejeitar**: Salva `'rejected'` no `sessionStorage`
- **Renovação**: Modal reaparece apenas se a página for atualizada/recarregada

### ✅ Design Responsivo
- Adaptado para desktop e mobile
- Gradiente no header com ícones
- Cards informativos para cada política
- Botões com hover effects e acessibilidade

## 🎨 Paleta de Cores Utilizada
- **Primário**: `hsl(210 100% 25%)` - Azul escuro
- **Secundário**: `hsl(195 100% 35%)` - Ciano
- **Accent**: `hsl(45 100% 60%)` - Amarelo/âmbar
- **Gradientes**: Combinações harmoniosas das cores principais

## 🔧 Arquivos Modificados

### Novos Arquivos:
- `src/components/PolicyConsentModal.tsx` - Componente principal do modal

### Arquivos Alterados:
- `src/pages/Index.tsx` - Integração do modal na página inicial

## 🚀 Como Testar

1. **Primeira visita**: Acesse `http://localhost:5175/`
2. **Aguarde 2 segundos**: O modal aparecerá automaticamente
3. **Teste as ações**:
   - Clique em "Aceitar" ou "Rejeitar"
   - Verifique no console do navegador os logs
4. **Teste renovação**: Atualize a página (F5) para ver o modal novamente

## 📱 Responsividade
- **Desktop**: Modal centralizado com largura máxima de 2xl
- **Mobile**: Adaptação automática com scroll vertical se necessário
- **Botões**: Stack vertical em telas pequenas, horizontal em desktop

## 🔒 Conformidade LGPD
- Links diretos para todas as políticas
- Opção clara de aceitar ou rejeitar
- Informações transparentes sobre o uso de dados
- Controle total do usuário sobre o consentimento

---

**Status**: ✅ Implementado e funcional  
**Versão**: 1.0  
**Data**: Janeiro 2025  
**Projeto**: Lapenhagáz - Site Institucional