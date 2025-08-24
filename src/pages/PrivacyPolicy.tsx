import { Shield, Eye, Lock, UserCheck, FileText, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

function PrivacyPolicy() {
  const companyInfo = {
    name: 'Lapenhagaz Comercio de Gas LTDA',
    cnpj: '04.394.600/0001-32',
    address: 'Rua Dr. Assis Ribeiro, 1424 – Anexo A, Jardim Piratininga, São Paulo/SP – CEP 03717-000',
    sector: 'Distribuição e Comércio de Água e Gás (CNAE principal 47.84-9-00)',
    website: 'lapenhagaz.com.br',
    email: 'contato@lapenhagaz.com.br',
    whatsapp: ['(11) 98388-0542', '(11) 98388-0596'],
    version: '1.0',
    effectiveDate: '19/08/2025'
  };

  const dataTypesCollected = {
    providedByUser: [
      {
        category: 'Identificação e contato',
        items: ['nome', 'CPF/CNPJ (quando aplicável)', 'e-mail', 'telefone/WhatsApp']
      },
      {
        category: 'Endereço',
        items: ['endereço de entrega/cobrança', 'ponto de referência']
      },
      {
        category: 'Dados de pedido',
        items: ['itens', 'valores', 'notas fiscais', 'preferência de pagamento']
      },
      {
        category: 'Comunicação',
        items: ['mensagens e anexos enviados em orçamentos/suporte', 'fotos de instalação (quando fornecidas)']
      }
    ],
    automaticallyCollected: [
      {
        category: 'Dados de navegação',
        items: ['endereço IP', 'data/hora', 'dispositivo', 'navegador', 'páginas visitadas', 'origem do tráfego', 'cookies/tecnologias semelhantes']
      },
      {
        category: 'Geolocalização',
        items: ['geolocalização aproximada somente se você autorizar no navegador']
      }
    ],
    fromThirdParties: [
      {
        category: 'Meios de pagamento/antifraude',
        items: ['status da transação', 'estornos', 'chargebacks']
      },
      {
        category: 'Logística/entrega',
        items: ['confirmação e ocorrências de entrega']
      },
      {
        category: 'Comunicação',
        items: ['metadados necessários à comunicação via e-mail/telefonia/WhatsApp Business']
      }
    ]
  };

  const purposes = [
    'Processar pedidos, faturar e entregar produtos (GLP/água mineral)',
    'Cumprir obrigações legais e fiscais, inclusive emissão/armazenamento de NF-e',
    'Atendimento e suporte (inclusive orientações de segurança de GLP, quando solicitadas)',
    'Comunicações transacionais: confirmação e status do pedido, agendamentos e pesquisas de satisfação',
    'Prevenção a fraudes e segurança das operações',
    'Melhoria contínua do site e da experiência do usuário (métricas e desempenho)',
    'Marketing com consentimento: newsletter, ofertas e lembretes. Você pode cancelar a qualquer momento'
  ];

  return (
    <Layout>
      <Seo 
        title="Política de Privacidade - LapenhaGáz"
        description="Política de Privacidade da LapenhaGáz em conformidade com a LGPD. Saiba como protegemos e tratamos seus dados pessoais."
        keywords="política de privacidade, LGPD, proteção de dados, LapenhaGáz, gás, água mineral"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                Política de Privacidade — LapenhaGáz
              </h1>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Versão {companyInfo.version}</strong> • Vigente a partir de {companyInfo.effectiveDate}</p>
                <p><strong>Controladora:</strong> {companyInfo.name} • CNPJ {companyInfo.cnpj}</p>
                <p><strong>Sede:</strong> {companyInfo.address}</p>
                <p><strong>Setor:</strong> {companyInfo.sector}</p>
                <p><strong>Site:</strong> {companyInfo.website}</p>
                <p><strong>Contato/DPO (Encarregado):</strong> {companyInfo.email}</p>
                <p><strong>WhatsApp:</strong> {companyInfo.whatsapp.join(' / ')}</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Esta política explica como tratamos dados pessoais em conformidade com a LGPD (Lei 13.709/2018) 
              e outras normas aplicáveis. Leia com atenção para entender seus direitos e nossas práticas.
            </p>
          </div>

          <div className="space-y-8">
            {/* Seção 1: Quais dados coletamos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  1. Quais dados pessoais coletamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Dados fornecidos pelo usuário */}
                <div>
                  <h4 className="font-semibold mb-3 text-base sm:text-lg">a) Dados que você nos fornece</h4>
                  <div className="space-y-4">
                    {dataTypesCollected.providedByUser.map((category, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{category.category}:</h5>
                        <p className="text-gray-700 text-sm sm:text-base">{category.items.join(', ')}.</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dados coletados automaticamente */}
                <div>
                  <h4 className="font-semibold mb-3 text-base sm:text-lg">b) Dados coletados automaticamente</h4>
                  <div className="space-y-4">
                    {dataTypesCollected.automaticallyCollected.map((category, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4">
                        <h5 className="font-medium text-gray-900 mb-2">{category.category}:</h5>
                        <p className="text-gray-700">{category.items.join(', ')}.</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dados de terceiros */}
                <div>
                  <h4 className="font-semibold mb-3 text-base sm:text-lg">c) Dados de terceiros (operadores)</h4>
                  <div className="space-y-4">
                    {dataTypesCollected.fromThirdParties.map((category, index) => (
                      <div key={index} className="border-l-4 border-orange-500 pl-4">
                        <h5 className="font-medium text-gray-900 mb-2">{category.category}:</h5>
                        <p className="text-gray-700">{category.items.join(', ')}.</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Importante:</strong> Não solicitamos dados sensíveis para nossas finalidades. 
                    Caso recebidos por engano, serão descartados.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Seção 2: Para que usamos seus dados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  2. Para que usamos seus dados (finalidades)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {purposes.map((purpose, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm sm:text-base">{purpose}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Seção 3: Bases legais (LGPD) */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
                  3. Bases legais (LGPD)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Execução de contrato (art. 7º, V)</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Pedidos, entrega e suporte.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Obrigação legal/regulatória (art. 7º, II)</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Documentação fiscal e guarda mínima.</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Legítimo interesse (art. 7º, IX)</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Segurança, prevenção a fraudes e melhorias, sempre preservando seus direitos.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Consentimento (art. 7º, I)</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Comunicações promocionais, cookies não essenciais e geolocalização.</p>
                  </div>
                  
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Proteção do crédito (art. 7º, X)</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Análises antifraude e confirmação de pagamento.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seção 4: Cookies e tecnologias semelhantes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  4. Cookies e tecnologias semelhantes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site 
                  e personalizar conteúdo. Você pode gerenciar suas preferências através do banner de cookies ou 
                  configurações do navegador.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">Cookies Essenciais</h4>
                    <p className="text-sm text-green-700">
                      Necessários para funcionamento básico (sessão, carrinho, preferências de cookies).
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">Cookies Analíticos</h4>
                    <p className="text-sm text-blue-700">
                      Coletam dados sobre uso e performance para melhorias (Google Analytics).
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">Cookies de Preferências</h4>
                    <p className="text-sm text-purple-700">
                      Lembram suas configurações e personalizam a experiência.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">Cookies de Marketing</h4>
                    <p className="text-sm text-orange-700">
                      Para anúncios relevantes e medição de campanhas (Facebook, Google Ads).
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Saiba mais:</strong> Consulte nossa <a href="/politica-de-cookies" className="underline hover:text-blue-900">Política de Cookies</a> 
                    para informações detalhadas sobre cada tipo e como gerenciar suas preferências.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Seção 5: Compartilhamento de dados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                  5. Compartilhamento de dados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Compartilhamos dados pessoais apenas quando necessário e com base legal adequada:
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Prestadores de serviços (operadores)</h4>
                    <p className="text-gray-600 text-sm">
                      Pagamento, logística, comunicação, hospedagem e análise de dados. 
                      Todos com contratos de proteção de dados.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Autoridades competentes</h4>
                    <p className="text-gray-600 text-sm">
                      Quando exigido por lei, ordem judicial ou para proteção de direitos.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Operações societárias</h4>
                    <p className="text-gray-600 text-sm">
                      Em caso de fusão, aquisição ou reestruturação, com as devidas proteções.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">
                    <strong>Importante:</strong> Nunca vendemos, alugamos ou comercializamos seus dados pessoais 
                    para terceiros sem base legal ou seu consentimento expresso.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Seção 6: Transferência internacional */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  6. Transferência internacional de dados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. 
                  Nestes casos, garantimos proteção adequada através de:
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>Cláusulas contratuais padrão de proteção de dados</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>Certificações internacionais de segurança</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>Adequação ao nível de proteção exigido pela LGPD</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>Garantias de que seus direitos como titular serão respeitados</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Principais destinos:</strong> Estados Unidos (Google Analytics, Facebook), 
                    União Europeia (alguns provedores de hospedagem e CDN).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Seção 7: Segurança da informação */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  7. Segurança da informação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Adotamos medidas técnicas e organizacionais para proteger seus dados contra 
                  acesso não autorizado, alteração, divulgação ou destruição:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Medidas Técnicas</h4>
                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Criptografia SSL/TLS</div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Firewalls e monitoramento</div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Controle de acesso</div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Backups seguros</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Medidas Organizacionais</h4>
                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Autenticação</div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Registros de logs</div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Backups</div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Políticas de senhas</div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <div>Treinamento de colaboradores autorizados</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-sm text-orange-800">
                    <strong>Importante:</strong> Nenhum ambiente é 100% imune: havendo incidente com risco ou dano relevante, 
                    comunicaremos conforme exigido pela LGPD e adotaremos medidas para mitigar impactos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Seção 8: Prazos de retenção */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  8. Prazos de retenção de dados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Mantemos seus dados pelo tempo necessário para as finalidades declaradas, 
                  respeitando prazos legais e seus direitos:
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Dados de clientes ativos:</strong> durante a relação comercial + 5 anos (prazo fiscal);</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Dados de marketing:</strong> até revogação do consentimento;</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Logs de acesso do site:</strong> conforme requisitos legais e de segurança.</div>
                  </div>
                </div>
                
                <p className="text-gray-600 italic">
                  Depois, eliminamos ou anonimizamos de forma segura.
                </p>
              </CardContent>
            </Card>

            {/* Seção 9: Seus direitos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                  9. Seus direitos (art. 18 da LGPD)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Você pode solicitar: confirmação de tratamento, acesso, correção, anonimização/bloqueio/eliminação, 
                  portabilidade, informações sobre compartilhamento, revisão de decisões automatizadas, além de revogar consentimento.
                </p>
                
                <p className="text-gray-600">
                  Para exercer seus direitos, use os canais do item 11. Responderemos em prazo razoável, mediante validação da identidade.
                </p>
              </CardContent>
            </Card>

            {/* Seção 10: Crianças e adolescentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  10. Crianças e adolescentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nossos serviços não são direcionados a menores. Se identificarmos dados de menores sem a devida autorização, 
                  adotaremos as providências para exclusão.
                </p>
              </CardContent>
            </Card>

            {/* Seção 11: Canais de contato */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  11. Canais de contato (Encarregado/DPO)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span><strong>E-mail:</strong> contato@lapenhagaz.com.br</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span><strong>WhatsApp:</strong> (11) 98388-0542 / (11) 98388-0596</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 mt-1" />
                  <span><strong>Endereço postal:</strong> Rua Dr. Assis Ribeiro, 1424 – Anexo A, Jardim Piratininga, São Paulo/SP – CEP 03717-000</span>
                </div>
              </CardContent>
            </Card>

            {/* Seção 12: Atualizações */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  12. Atualizações desta política
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Esta política pode ser atualizada para refletir mudanças legais, tecnológicas ou operacionais. 
                  A versão vigente estará sempre publicada em lapenhagaz.com.br, com data de atualização. 
                  Em alterações relevantes, poderemos comunicar por aviso no site, e-mail ou banner.
                </p>
              </CardContent>
            </Card>

            {/* Definições úteis */}
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle>Definições úteis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div><strong>Dados pessoais:</strong> informações que identificam/possam identificar uma pessoa natural.</div>
                <div><strong>Tratamento:</strong> operações com dados (coleta, uso, armazenamento, eliminação etc.).</div>
                <div><strong>Controladora:</strong> quem decide sobre o tratamento (LapenhaGáz).</div>
                <div><strong>Operador:</strong> quem trata dados em nosso nome (fornecedores/terceiros).</div>
                <div><strong>Titular:</strong> a pessoa a quem os dados se referem (você).</div>
              </CardContent>
            </Card>

            {/* Footer da política */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">
                      Lapenhagaz Comercio de Gas LTDA
                    </h3>
                    <p className="text-blue-800 text-sm">
                      CNPJ 04.394.600/0001-32
                    </p>
                    <p className="text-blue-700 text-sm">
                      © LapenhaGáz, 2025 — Todos os direitos reservados.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <a href="mailto:contato@lapenhagaz.com.br">
                        <Mail className="h-4 w-4 mr-2" />
                        Entrar em Contato
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/politica-de-cookies">
                        Ver Política de Cookies
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;