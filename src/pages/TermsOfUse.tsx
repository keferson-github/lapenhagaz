import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  Shield, 
  CreditCard, 
  Truck, 
  Phone, 
  Mail, 
  ExternalLink,
  MapPin
} from 'lucide-react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

function TermsOfUse() {
  const lastUpdated = '19 de Agosto de 2025';
  const effectiveDate = '19 de Agosto de 2025';

  const sections = [
    {
      id: 'object-scope',
      title: 'Objeto e Escopo',
      icon: FileText,
      content: [
        'Estes Termos regulam o uso do site lapenhagaz.com.br e dos nossos canais de atendimento para distribuição e comercialização de GLP (gás liquefeito de petróleo) e água mineral.',
        'Incluem informação de produtos, solicitações de orçamento/pedido, atendimento e pós-venda.',
        'Ao acessar e utilizar o site e os canais da LapenhaGáz, você concorda com estes Termos.',
        'Se não concordar, por favor, não utilize os serviços.'
      ]
    },
    {
      id: 'usage-rules',
      title: 'Regras de Uso do Site',
      icon: Shield,
      content: [
        'Utilize os serviços apenas para fins lícitos e em conformidade com estes Termos e a legislação aplicável.',
        'É proibido: tentar obter acesso não autorizado, realizar varreduras de segurança sem permissão, sobrecarregar o site, copiar/raspar conteúdo de forma automatizada sem autorização, ou usar identidade/dados de terceiros.',
        'Podemos suspender ou encerrar o acesso em caso de uso indevido ou suspeita de fraude.'
      ]
    },
    {
      id: 'products-info',
      title: 'Informações de Produtos, Preços e Disponibilidade',
      icon: AlertTriangle,
      content: [
        'Descrições, preços e disponibilidade podem ser atualizados sem aviso prévio.',
        'Em caso de erro evidente (ex.: preço manifestamente incorreto), a LapenhaGáz poderá cancelar o pedido e estornar eventuais valores pagos.',
        'Alguns itens podem ter estoque limitado ou depender de fornecimento do fabricante.'
      ]
    },
    {
      id: 'orders-delivery',
      title: 'Pedidos, Entrega e Instalação (GLP e Água)',
      icon: Truck,
      content: [
        'Pedidos podem ser realizados via site, WhatsApp ou telefone. A confirmação depende de verificação de estoque, área de cobertura e aprovação do pagamento.',
        'Atendemos regiões próximas à nossa sede em São Paulo/SP. Prazos de entrega são estimativas e podem variar por logística, segurança, condições climáticas e trânsito.',
        'O local de entrega deve permitir acesso seguro aos entregadores.',
        'Para GLP, a entrega segue boas práticas de segurança e normas aplicáveis. Em caso de risco (ex.: instalação irregular, vazamentos, ventilação inadequada), poderemos recusar a instalação/entrega até saneamento das condições.',
        'Para água mineral retornável, o vasilhame/casco deverá respeitar as regras do fabricante (troca, caução e integridade).'
      ]
    },
    {
      id: 'glp-safety',
      title: 'Instalação e Segurança do GLP',
      icon: AlertTriangle,
      content: [
        'É proibido qualquer transvasamento ou envase clandestino de GLP. O botijão deve ser usado lacrado e conectado por profissional qualificado e materiais adequados.',
        'A LapenhaGáz pode orientar sobre segurança, mas não se responsabiliza por instalações internas realizadas por terceiros ou pelo usuário após a entrega.'
      ]
    },
    {
      id: 'payments',
      title: 'Pagamentos, NF-e e Condições Comerciais',
      icon: CreditCard,
      content: [
        'Aceitamos meios de pagamento informados nos canais oficiais (ex.: cartão, PIX, dinheiro).',
        'Em caso de não aprovação/chargeback, o pedido poderá ser cancelado.',
        'Emitimos nota fiscal conforme legislação. Promoções e cupons possuem regras específicas e prazos de validade.'
      ]
    },
    {
      id: 'returns',
      title: 'Trocas, Devoluções e Direito de Arrependimento',
      icon: Scale,
      content: [
        'Compras feitas fora do estabelecimento (site/telefone/WhatsApp) podem ser desfeitas em até 7 dias a contar do recebimento, nos termos do art. 49 do CDC.',
        'Produtos consumíveis e lacrados (GLP e água) só podem ser devolvidos sem uso e com lacre intacto; salvo defeito comprovado.',
        'Para devolver, entre em contato pelos nossos canais, informando número da nota, produto e motivo. Após a coleta e análise, efetuaremos estorno/substituição conforme o caso.',
        'Vasilhames/cascos seguem as regras do fabricante e devem estar em condições adequadas.'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Propriedade Intelectual',
      icon: Shield,
      content: [
        'Todo o conteúdo do site (textos, imagens, marcas, logotipos, layout, código) é protegido por direitos autorais e demais normas.',
        'É vedada a reprodução, distribuição ou uso comercial sem autorização escrita da LapenhaGáz.'
      ]
    }
  ];

  const contactInfo = {
    company: 'Lapenhagaz Comercio de Gas LTDA',
    cnpj: '04.394.600/0001-32',
    address: 'Rua Dr. Assis Ribeiro, 1424 – Anexo A, Jardim Piratininga, São Paulo/SP – CEP 03717-000',
    phone: '(11) 98388-0542 / (11) 98388-0596',
    email: 'contato@lapenhagaz.com.br',
    legal_email: 'contato@lapenhagaz.com.br'
  };

  return (
    <Layout>
      <Seo 
        title="Termos de Uso - Lapenhagáz"
        description="Termos de Uso da Lapenhagáz. Conheça as condições para utilização de nossos serviços de distribuição de gás e água mineral."
        keywords="termos de uso, condições de uso, Lapenhagáz, gás, água mineral"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                Termos de Uso
              </h1>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Estes termos estabelecem as condições para o uso de nossos serviços. 
              Leia atentamente antes de utilizar nossa plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
              <Badge variant="outline">
                Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </Badge>
              <Badge variant="outline">
                Vigência: {effectiveDate}
              </Badge>
            </div>
          </div>

          {/* Informações da Empresa */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Informações da Empresa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p><strong>Razão Social:</strong> {contactInfo.company}</p>
                <p><strong>CNPJ:</strong> {contactInfo.cnpj}</p>
                <p><strong>Endereço:</strong> {contactInfo.address}</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seções dos Termos */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={section.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Informações Importantes */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-900">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5" />
                Informações Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-yellow-800 space-y-2">
                <p className="font-semibold text-sm sm:text-base">Antes de utilizar nossos serviços:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                    Leia atentamente todos os termos e condições
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                    Certifique-se de que compreende seus direitos e obrigações
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                    Em caso de dúvidas, entre em contato conosco antes de fazer pedidos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                    Mantenha-se atualizado sobre alterações nos termos
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Resolução de Conflitos */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-4 w-4 sm:h-5 sm:w-5" />
                Resolução de Conflitos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Estamos comprometidos em resolver qualquer questão de forma amigável e eficiente:
              </p>
              
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-900 text-sm sm:text-base">1º Passo</h4>
                  <p className="text-sm text-gray-600">
                    Entre em contato com nosso atendimento ao cliente através dos canais oficiais.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-900 text-sm sm:text-base">2º Passo</h4>
                  <p className="text-sm text-gray-600">
                    Se necessário, encaminhe sua questão para nosso departamento jurídico.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-900 text-sm sm:text-base">3º Passo</h4>
                  <p className="text-sm text-gray-600">
                    Como último recurso, a questão será resolvida conforme a legislação vigente.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Contato Jurídico:</strong> Para questões legais específicas, 
                  entre em contato através do e-mail: 
                  <a href={`mailto:${contactInfo.legal_email}`} className="underline ml-1">
                    {contactInfo.legal_email}
                  </a>
                </p>
                <div className="mt-3 space-y-1 text-sm text-blue-700">
                  <p><strong>Telefone:</strong> {contactInfo.phone}</p>
                  <p><strong>Horário de Atendimento:</strong> Segunda a sexta-feira, das 9h às 18h</p>
                  <p><strong>Tempo de Resposta:</strong> Até 48 horas úteis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seções Adicionais */}
          <div className="space-y-6">
            {/* Seção 9: Privacidade e Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    9
                  </div>
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Privacidade e Cookies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed">
                    O uso do site envolve tratamento de dados pessoais. Consulte:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Política de Privacidade</strong> — coleta, bases legais, direitos do titular;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Política de Cookies</strong> — categorias, consentimento e gestão de preferências.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Seção 10: Garantias, Responsabilidades e Isenções */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    10
                  </div>
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Garantias, Responsabilidades e Isenções
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-600 leading-relaxed">
                    O site é fornecido "no estado em que se encontra". Empregamos esforços razoáveis de disponibilidade, 
                    segurança e atualização, sem garantia de funcionamento ininterrupto ou livre de erros.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    A LapenhaGáz não responde por indisponibilidades causadas por terceiros (provedores, telecomunicações), 
                    casos fortuitos ou de força maior.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Em nenhum caso a responsabilidade total da LapenhaGáz por danos diretos relacionados ao uso do site 
                    e pedidos excederá o valor pago na compra que deu causa ao pedido de reparação.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Instalações internas e manutenções realizadas por terceiros ou pelo usuário são de responsabilidade do cliente.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Seção 11: Links para Terceiros */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    11
                  </div>
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Links para Terceiros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  O site pode conter links para sites de terceiros. A LapenhaGáz não se responsabiliza por conteúdos, 
                  práticas e políticas de tais sites.
                </p>
              </CardContent>
            </Card>

            {/* Seção 12: Comunicações Oficiais */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    12
                  </div>
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Comunicações Oficiais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Podemos contatá-lo por e-mail, WhatsApp ou telefone informados por você para confirmar pedidos, 
                  agendar entregas, enviar documentos fiscais, pesquisas de satisfação e, com consentimento, 
                  comunicações promocionais.
                </p>
              </CardContent>
            </Card>

            {/* Seção 13: Alterações destes Termos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    13
                  </div>
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Alterações destes Termos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Podemos atualizar estes Termos para refletir mudanças legais, operacionais ou tecnológicas. 
                  A versão vigente será publicada no site com data de atualização. Em mudanças relevantes, 
                  poderemos exibir aviso no site.
                </p>
              </CardContent>
            </Card>

            {/* Seção 14: Legislação e Foro */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                    14
                  </div>
                  <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Legislação e Foro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Aplicam-se as leis brasileiras. Fica eleito o Foro da Comarca de São Paulo/SP, com preferência 
                  ao Juizado Especial Cível, quando cabível, sem prejuízo de eventual acordo amigável entre as partes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">
                  Dúvidas sobre os Termos de Uso?
                </h3>
                <p className="text-blue-800 mb-4 text-sm sm:text-base">
                  Nossa equipe está pronta para esclarecer qualquer questão sobre nossos termos e condições.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <a href={`mailto:${contactInfo.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Entrar em Contato
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/politica-de-privacidade">
                      Ver Política de Privacidade
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

          {/* Seção 15: Contato */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg sm:text-2xl">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                  15
                </div>
                <Phone className="h-6 w-6 text-blue-600" />
                Contato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 font-medium">Dúvidas sobre estes Termos?</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">E-mail</p>
                      <p className="text-gray-600 text-sm sm:text-base">contato@lapenhagaz.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">WhatsApp</p>
                      <p className="text-gray-600 text-sm sm:text-base">(11) 98388-0542 / (11) 98388-0596</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                     <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mt-1" />
                     <div>
                       <p className="font-medium text-gray-900 text-sm sm:text-base">Endereço</p>
                       <p className="text-gray-600 text-sm sm:text-base">
                         Rua Dr. Assis Ribeiro, 1424 – Anexo A<br />
                         Jardim Piratininga, São Paulo/SP<br />
                         CEP 03717-000
                       </p>
                     </div>
                   </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border">
                    <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Lapenhagaz Comercio de Gas LTDA</p>
                    <p className="text-gray-600">CNPJ 04.394.600/0001-32</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border">
                    <p className="text-gray-600 text-sm">
                      © LapenhaGáz, 2025 — Todos os direitos reservados.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Aceitação */}
          <Card className="mt-6 bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-2">
                  Ao utilizar nossos serviços, você confirma que:
                </h3>
                <div className="text-green-800 space-y-2 max-w-2xl mx-auto">
                  <p className="text-sm">✓ Leu e compreendeu estes Termos de Uso</p>
                  <p className="text-sm">✓ Concorda em cumprir todas as condições estabelecidas</p>
                  <p className="text-sm">✓ Tem capacidade legal para aceitar estes termos</p>
                  <p className="text-sm">✓ Utilizará nossos serviços de forma responsável e legal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default TermsOfUse;