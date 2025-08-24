import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Cookie, Shield, BarChart3, Settings, Target, ExternalLink } from 'lucide-react';

function CookiePolicy() {
  // Definição das categorias de cookies
  const cookieCategories = [
    {
      id: 'necessary',
      title: 'Cookies Necessários',
      icon: Shield,
      description: 'Essenciais para o funcionamento básico do site e não podem ser desabilitados. São necessários para navegação e uso de recursos básicos.',
      color: 'blue',
      required: true,
      cookies: [
        {
          name: 'lapenhagaz_session',
          purpose: 'Manter a sessão do usuário ativa durante a navegação',
          duration: 'Sessão (até fechar o navegador)',
          type: 'Próprio'
        },
        {
          name: 'lapenhagaz_cookie_consent',
          purpose: 'Armazenar as preferências de cookies do usuário',
          duration: '1 ano',
          type: 'Próprio'
        },
        {
          name: 'lapenhagaz_cart',
          purpose: 'Manter itens no carrinho de compras',
          duration: '7 dias',
          type: 'Próprio'
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Cookies de Análise e Performance',
      icon: BarChart3,
      description: 'Coletam informações sobre como você navega e interage com o site, permitindo-nos analisar o desempenho e melhorar a experiência do usuário.',
      color: 'green',
      required: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Distinguir usuários únicos atribuindo um ID gerado aleatoriamente',
          duration: '2 anos',
          type: 'Google Analytics'
        },
        {
          name: '_ga_*',
          purpose: 'Manter o estado da sessão para o Google Analytics 4',
          duration: '2 anos',
          type: 'Google Analytics'
        },
        {
          name: '_gid',
          purpose: 'Distinguir usuários únicos',
          duration: '24 horas',
          type: 'Google Analytics'
        },
        {
          name: '_gat',
          purpose: 'Limitar a taxa de solicitações ao Google Analytics',
          duration: '1 minuto',
          type: 'Google Analytics'
        }
      ]
    },
    {
      id: 'preferences',
      title: 'Cookies de Preferências',
      icon: Settings,
      description: 'Lembram suas configurações e preferências para personalizar sua experiência.',
      color: 'purple',
      required: false,
      cookies: [
        {
          name: 'lapenhagaz_theme',
          purpose: 'Lembrar preferência de tema (claro/escuro)',
          duration: '1 ano',
          type: 'Próprio'
        },
        {
          name: 'lapenhagaz_language',
          purpose: 'Armazenar preferência de idioma',
          duration: '1 ano',
          type: 'Próprio'
        },
        {
          name: 'lapenhagaz_region',
          purpose: 'Lembrar região de entrega preferida',
          duration: '6 meses',
          type: 'Próprio'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Cookies de Marketing',
      icon: Target,
      description: 'Utilizados para mostrar anúncios relevantes e medir a eficácia das campanhas.',
      color: 'orange',
      required: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Armazenar e rastrear visitas em sites para publicidade do Facebook',
          duration: '3 meses',
          type: 'Facebook Pixel'
        },
        {
          name: '_fbc',
          purpose: 'Armazenar informações de clique em anúncios do Facebook',
          duration: '3 meses',
          type: 'Facebook Pixel'
        },
        {
          name: 'google_ads_*',
          purpose: 'Rastrear conversões e otimizar campanhas do Google Ads',
          duration: '90 dias',
          type: 'Google Ads'
        }
      ]
    }
  ];

  // Funcionalidades simplificadas após limpeza
  const handleCategoryToggle = (categoryId: string, enabled: boolean) => {
    console.log('Funcionalidade de toggle desabilitada');
  };

  const clearAllCookies = () => {
    console.log('Funcionalidade de limpeza desabilitada');
  };

  return (
    <Layout>
      <Seo 
        title="Política de Cookies - LapenhaGáz"
        description="Política de Cookies da LapenhaGáz. Saiba como utilizamos cookies e tecnologias semelhantes em conformidade com a LGPD."
        keywords="política de cookies, cookies, LGPD, LapenhaGáz, privacidade"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cookie className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                Política de Cookies
              </h1>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Esta Política descreve como a LapenhaGáz utiliza cookies e tecnologias semelhantes 
              em seu site e canais digitais, em conformidade com a LGPD (Lei nº 13.709/2018).
            </p>
            <div className="mt-6 space-y-2">
              <Badge variant="outline" className="block">
                Versão 1.0 • Vigente a partir de 19/08/2025
              </Badge>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Controladora:</strong> Lapenhagaz Comercio de Gas LTDA • CNPJ 04.394.600/0001-32</p>
                <p><strong>Sede:</strong> Rua Dr. Assis Ribeiro, 1424 – Anexo A, Jardim Piratininga, São Paulo/SP – CEP 03717-000</p>
                <p><strong>Site:</strong> lapenhagaz.com.br • <strong>E-mail:</strong> contato@lapenhagaz.com.br</p>
                <p><strong>WhatsApp:</strong> (11) 98388-0542 / (11) 98388-0596</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* O que são Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Cookie className="h-4 w-4 sm:h-5 sm:w-5" />
                  1) O que são cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm sm:text-base">
                  Cookies são pequenos arquivos de texto armazenados no seu navegador que permitem lembrar 
                  preferências, aprimorar a segurança, medir audiência e personalizar conteúdo. Tecnologias 
                  equivalentes (como pixels e localStorage) podem ser usadas com finalidades semelhantes.
                </p>
              </CardContent>
            </Card>

            {/* Como usamos cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                  2) Como usamos cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Utilizamos cookies para:</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Operação e segurança do site</p>
                      <p className="text-xs sm:text-sm text-gray-600">(ex.: manter sessões, prevenir fraudes)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Medição e desempenho</p>
                      <p className="text-xs sm:text-sm text-gray-600">(entender navegação e melhorar a experiência)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Funcionalidades</p>
                      <p className="text-xs sm:text-sm text-gray-600">(guardar idioma, carrinho, formulários)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">Marketing/remarketing</p>
                      <p className="text-xs sm:text-sm text-gray-600">(exibir ofertas e medir campanhas), somente com seu consentimento</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Base legal:</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p><strong>Cookies essenciais:</strong> legítimo interesse e execução de contrato (funcionamento do site).</p>
                    <p><strong>Cookies não essenciais (analytics e marketing):</strong> consentimento do titular.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Banner de consentimento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                  3) Banner de consentimento e gestão de preferências
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-600">
                    Ao acessar o site, você verá um banner de cookies para aceitar, recusar ou personalizar 
                    as categorias não essenciais.
                  </p>
                  <p className="text-gray-600">
                    Você pode alterar sua escolha a qualquer momento pelo link "Preferências de Cookies" 
                    no rodapé do site.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Categorias de cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Cookie className="h-4 w-4 sm:h-5 sm:w-5" />
                  4) Categorias de cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Essenciais (obrigatórios)</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Necessários para o funcionamento do site e a segurança (não podem ser desativados no sistema).
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Desempenho/Analytics</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Medem audiência e uso do site para melhoria contínua (dependem de consentimento).
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Funcionais</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Lembram preferências (idioma, região, formulário).
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Marketing/Remarketing</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Personalizam anúncios e medem campanhas (dependem de consentimento).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies de terceiros */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                  5) Cookies de terceiros e transferências internacionais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm sm:text-base">
                  Alguns cookies são definidos por terceiros (por exemplo, provedores de analytics e publicidade) 
                  e podem processar dados fora do Brasil. Nesses casos, buscamos fornecedores com cláusulas 
                  contratuais, padrões de segurança e privacidade compatíveis com a LGPD.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Importante:</strong> As práticas desses terceiros são regidas por suas próprias políticas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">
                    Contato e Dúvidas sobre Cookies
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Se você tiver dúvidas sobre nossa Política de Cookies, como gerenciar suas preferências 
                    ou sobre o uso de cookies em nosso site, entre em contato conosco:
                  </p>
                  
                  <div className="space-y-3 mb-6 text-left max-w-md mx-auto">
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-blue-900">E-mail:</div>
                        <div className="text-sm text-blue-700">contato@lapenhagaz.com.br</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-blue-900">WhatsApp:</div>
                        <div className="text-sm text-blue-700">(11) 98388-0542 / (11) 98388-0596</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-blue-900">Endereço:</div>
                        <div className="text-sm text-blue-700">
                          Rua Dr. Assis Ribeiro, 1424 – Anexo A<br />
                          Jardim Piratininga, São Paulo/SP – CEP 03717-000
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <a href="mailto:contato@lapenhagaz.com.br">
                        Entrar em Contato
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/politica-de-privacidade">
                        Ver Política de Privacidade
                      </a>
                    </Button>
                  </div>
                  
                  <div className="mt-4 p-3 bg-white border border-blue-300 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Resposta Rápida:</strong> Respondemos todas as solicitações relacionadas 
                      a cookies e privacidade em até 48 horas úteis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

              {/* Tabela de Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">6. Tabela de cookies (exemplos)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm sm:text-base">
                    A lista abaixo é exemplificativa e pode variar conforme as ferramentas ativas no site. 
                    O inventário definitivo aparece no banner de consentimento e poderá ser atualizado.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-xs sm:text-sm">Nome do cookie</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-xs sm:text-sm">Domínio</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-xs sm:text-sm">Finalidade</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-xs sm:text-sm">Duração</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-xs sm:text-sm">Categoria</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 sm:px-3 py-2 font-mono text-xs">cookie_consent</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">lapenhagaz.com.br</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Guardar suas escolhas de consentimento</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">12 meses</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Essencial</span></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 sm:px-3 py-2 font-mono text-xs">sessionid / phpsessid</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">lapenhagaz.com.br</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Manter sessão e segurança</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Sessão</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Essencial</span></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 sm:px-3 py-2 font-mono text-xs">_ga</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">lapenhagaz.com.br</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Métricas de uso (Google Analytics)*</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Até 2 anos</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Analytics</span></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 sm:px-3 py-2 font-mono text-xs">_ga_*</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">lapenhagaz.com.br</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Métricas por propriedade (GA4)*</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Até 2 anos</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Analytics</span></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 sm:px-3 py-2 font-mono text-xs">_gid</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">lapenhagaz.com.br</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Diferenciar visitantes (GA4)*</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">24 horas</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Analytics</span></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 sm:px-3 py-2 font-mono text-xs">_gcl_au</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">lapenhagaz.com.br</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Testes/atribuição de anúncios (Google Ads)*</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">90 dias</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Marketing</span></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 sm:px-3 py-2 font-mono text-xs">_fbp</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">lapenhagaz.com.br</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Entregar/analisar publicidade (Meta)*</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">3 meses</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Marketing</span></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-2 sm:px-3 py-2 font-mono text-xs">remember_locale</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">lapenhagaz.com.br</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">Lembrar idioma/região</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2 text-xs sm:text-sm">6 meses</td>
                            <td className="border border-gray-300 px-2 sm:px-3 py-2"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Funcional</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-sm text-gray-600 italic">
                    * Cookies de terceiros dependem de ativação das respectivas ferramentas (ex.: GA4, Google Ads, Meta).
                  </p>
                </CardContent>
              </Card>

              {/* Como Gerenciar Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">7. Como gerenciar e apagar cookies no navegador</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm sm:text-base">
                    Você pode gerenciar cookies pelo banner de consentimento e também pelo seu navegador:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>Chrome:</strong> Menu › Configurações › Privacidade e segurança › Cookies e outros dados do site
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>Firefox:</strong> Menu › Configurações › Privacidade e Segurança › Cookies e dados de sites
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>Safari (macOS):</strong> Preferências › Privacidade › Gerenciar dados de sites
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>Microsoft Edge:</strong> Configurações › Cookies e permissões de site
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <ul className="text-sm text-amber-800 space-y-1">
                      <li>• Bloquear cookies essenciais pode afetar o funcionamento do site.</li>
                      <li>• Dispositivos e navegadores diferentes exigem gestão individual.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Retenção e Prazo */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">8. Retenção e prazo de armazenamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Cookies persistentes permanecem até o término do prazo indicado ou até você excluí-los. 
                    Cookies de sessão expiram ao fechar o navegador. Registros agregados de analytics podem 
                    permanecer anonimizados para fins estatísticos.
                  </p>
                </CardContent>
              </Card>

              {/* Atualizações */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">9. Atualizações desta Política</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Podemos atualizar esta Política para refletir mudanças legais, tecnológicas ou operacionais. 
                    Publicaremos a versão vigente neste endereço, indicando a data de atualização. Em alterações 
                    relevantes, poderemos comunicar por aviso no site.
                  </p>
                </CardContent>
              </Card>

              {/* Contato Final */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-base sm:text-lg">10. Contato</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 mb-4 text-sm sm:text-base">
                    Dúvidas sobre esta Política ou sobre suas preferências de cookies?
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-blue-900">E-mail:</div>
                        <div className="text-sm text-blue-700">contato@lapenhagaz.com.br</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-blue-900">WhatsApp:</div>
                        <div className="text-sm text-blue-700">(11) 98388-0542 / (11) 98388-0596</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-blue-900">Endereço:</div>
                        <div className="text-sm text-blue-700">
                          Rua Dr. Assis Ribeiro, 1424 – Anexo A, Jardim Piratininga, São Paulo/SP – CEP 03717-000
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <a href="mailto:contato@lapenhagaz.com.br">
                        Entrar em Contato
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/politica-de-privacidade">
                        Ver Política de Privacidade
                      </a>
                    </Button>
                  </div>
                  
                  <div className="mt-4 p-3 bg-white border border-blue-300 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Resposta Rápida:</strong> Respondemos todas as solicitações relacionadas 
                      a cookies e privacidade em até 48 horas úteis.
                    </p>
                  </div>
                  
                  <div className="border-t border-blue-200 pt-4 mt-6">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Referências relacionadas</h4>
                    <p className="text-sm text-blue-700 mb-4">
                      Política de Privacidade: consulte a versão vigente no site da LapenhaGáz.
                    </p>
                    
                    <div className="text-center text-sm text-blue-600">
                      <p className="font-medium">Lapenhagaz Comercio de Gas LTDA • CNPJ 04.394.600/0001-32</p>
                      <p>© LapenhaGáz, 2025 — Todos os direitos reservados.</p>
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

export default CookiePolicy;