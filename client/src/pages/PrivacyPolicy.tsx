/*
  Design: Modernismo Corporativo Brasileiro
  Página: Informações Legais (Política de Privacidade / Termos de Uso)
*/

import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function LegalInformation() {
  const [location] = useLocation();
  
  // Determine default tab based on URL
  const defaultTab = location.includes("termos-de-uso") ? "terms" : "privacy";

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={defaultTab === "terms" ? "Termos de Uso | Athena Office" : "Política de Privacidade | Athena Office"}
        description="Informações legais, termos de uso e política de privacidade da Athena Office."
      />
      <Header />

      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="privacy" className="text-lg py-4">Política de Privacidade</TabsTrigger>
                <TabsTrigger value="terms" className="text-lg py-4">Termos de Uso</TabsTrigger>
              </TabsList>

              {/* Privacy Policy Content */}
              <TabsContent value="privacy">
                <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8" style={{ fontFamily: 'Montserrat' }}>
                  Política de Privacidade
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                  <section>
                    <p>
                      A Athena Office preza pela proteção e privacidade dos seus dados. Por isso, estamos de acordo com a Lei 13.709/2018 - Lei Geral de Proteção de Dados Pessoais (LGPD).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      1. Informações Coletadas
                    </h2>
                    <p>Coletamos informações dos usuários de duas maneiras:</p>
                    <div className="space-y-4 mt-4">
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">a) Informações fornecidas pelo usuário:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Dados de cadastro: Nome, e-mail, telefone, e outros dados necessários para contato e eventual prestação de serviços.</li>
                          <li>Informações para contratação: Em casos de contratação de serviços, poderemos solicitar dados adicionais para cumprimento das obrigações legais e contratuais.</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">b) Informações coletadas automaticamente:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Dados de navegação: Endereço IP, tipo de navegador, páginas acessadas, tempo de navegação, e localização aproximada.</li>
                          <li>Cookies e tecnologias similares: Utilizamos cookies para melhorar a experiência do usuário e para personalizar o conteúdo do site.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      2. Finalidade do Uso dos Dados
                    </h2>
                    <p>As informações coletadas têm como finalidade:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Fornecer e gerenciar os serviços solicitados;</li>
                      <li>Enviar comunicações sobre nossos serviços, novidades e atualizações;</li>
                      <li>Atender a obrigações legais e regulatórias;</li>
                      <li>Melhorar a navegação e a personalização do conteúdo do site;</li>
                      <li>Realizar pesquisas de mercado para melhorar os serviços prestados pela Athena Office.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      3. Compartilhamento de Informações
                    </h2>
                    <p>
                      A Athena Office não vende, aluga ou compartilha dados pessoais dos usuários com terceiros, exceto nos seguintes casos:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li><strong>Prestadores de serviços:</strong> Podemos compartilhar dados com empresas parceiras que auxiliam na prestação dos nossos serviços, garantindo que mantenham a confidencialidade e sigilo dos dados.</li>
                      <li><strong>Obrigações legais:</strong> Em casos de exigência legal, judicial ou regulatória, podemos compartilhar dados com autoridades competentes para cumprir com a legislação vigente.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      4. Proteção de Dados
                    </h2>
                    <p>
                      Adotamos medidas de segurança apropriadas para proteger as informações dos usuários contra acessos não autorizados, alteração, divulgação ou destruição de dados. Utilizamos protocolos de segurança e criptografia para garantir a integridade dos dados pessoais armazenados.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      5. Direitos dos Titulares dos Dados
                    </h2>
                    <p>
                      Conforme a Lei Geral de Proteção de Dados (LGPD), você possui os seguintes direitos em relação aos seus dados pessoais:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Acesso aos dados pessoais mantidos por nós;</li>
                      <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                      <li>Exclusão dos dados quando não forem mais necessários;</li>
                      <li>Revogação do consentimento para o uso dos dados.</li>
                    </ul>
                    <p className="mt-4">
                      Para exercer esses direitos, entre em contato através do nosso e-mail de atendimento: <a href="mailto:adm@athenaoffice.com.br" className="text-green font-semibold hover:underline">adm@athenaoffice.com.br</a>.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      6. Retenção de Dados
                    </h2>
                    <p>
                      Armazenamos os dados pessoais dos usuários apenas pelo tempo necessário para o cumprimento das finalidades mencionadas nesta Política, ou conforme exigido por lei.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      7. Cookies e Tecnologias Similares
                    </h2>
                    <p>
                      O site utiliza cookies para melhorar a experiência do usuário e personalizar o conteúdo. Ao acessar nosso site, você consente com o uso de cookies. É possível ajustar as configurações de cookies no navegador caso prefira desativá-los.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      8. Alterações na Política de Privacidade
                    </h2>
                    <p>
                      Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Publicaremos a versão revisada no site e encorajamos a revisão regular deste documento.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      9. Contato
                    </h2>
                    <p>
                      Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco pelo e-mail: <a href="mailto:adm@athenaoffice.com.br" className="text-green font-semibold hover:underline">adm@athenaoffice.com.br</a>.
                    </p>
                  </section>
                </div>
              </TabsContent>

              {/* Terms of Use Content */}
              <TabsContent value="terms">
                <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8" style={{ fontFamily: 'Montserrat' }}>
                  Termos de Uso
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                  <section>
                    <p className="mt-4">
                      Bem-vindo ao site Athena Office! Ao acessar e usar nossos serviços, você concorda com os seguintes Termos de Uso. Caso não concorde com estes termos, solicitamos que interrompa o uso de nossos serviços imediatamente.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Aceitação dos Termos
                    </h2>
                    <p>
                      Ao acessar o site da Athena Office, você concorda em cumprir os termos aqui descritos, bem como com todas as leis e regulamentos aplicáveis. Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, mediante publicação da versão atualizada no site. O uso continuado após essas alterações indica sua aceitação dos novos termos.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Descrição dos Serviços
                    </h2>
                    <p>
                      A Athena Office oferece serviços de escritório virtual, como endereço comercial e fiscal, apoio contábil e jurídico, e suporte na abertura de empresas de forma online, em conformidade com as normas vigentes no Brasil. Todos os serviços oferecidos são descritos detalhadamente em nosso site, e nos esforçamos para mantê-los atualizados.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Cadastro e Responsabilidades do Usuário
                    </h2>
                    <p>
                      Para utilizar alguns dos serviços da Athena Office, pode ser necessário o cadastro de informações pessoais. Ao fornecer essas informações, você concorda em manter sua conta segura e seus dados atualizados, sendo responsável por todas as atividades realizadas em sua conta.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Política de Privacidade
                    </h2>
                    <p>
                      Sua privacidade é uma prioridade. As informações pessoais fornecidas serão tratadas conforme nossa Política de Privacidade, que detalha como coletamos, usamos, e protegemos seus dados.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Propriedade Intelectual
                    </h2>
                    <p>
                      Todo o conteúdo do site da Athena Office, incluindo textos, imagens, gráficos, logotipos, ícones e software, são de propriedade exclusiva da Athena Office e estão protegidos por leis de direitos autorais e propriedade intelectual. É proibido o uso desses materiais para qualquer fim sem autorização prévia.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Limitações de Responsabilidade
                    </h2>
                    <p>
                      A Athena Office não se responsabiliza por danos diretos ou indiretos decorrentes do uso do nosso site, inclusive por indisponibilidades temporárias, perda de dados, ou erros no conteúdo. Fazemos o possível para garantir a precisão das informações, mas não podemos garantir sua integridade em tempo real.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Restrições de Uso
                    </h2>
                    <p>Você concorda em utilizar o site da Athena Office apenas para fins lícitos. É proibido:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                      <li>Interferir com a segurança do site ou tentar acessar informações restritas;</li>
                      <li>Utilizar o site para enviar conteúdo não solicitado (spam);</li>
                      <li>Distribuir vírus ou qualquer tecnologia que possa danificar o site.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Links para Terceiros
                    </h2>
                    <p>
                      Nosso site pode conter links para outros sites. A Athena Office não controla e não é responsável pelo conteúdo ou políticas de privacidade de sites de terceiros. O uso de links é por sua conta e risco.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Legislação Aplicável e Foro
                    </h2>
                    <p>
                      Estes Termos de Uso são regidos pelas leis brasileiras. Em caso de disputas, fica eleito o foro da cidade de São Paulo, SP, para dirimir quaisquer conflitos decorrentes do uso do site Athena Office.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      Contato
                    </h2>
                    <p>
                      Em caso de dúvidas sobre estes Termos de Uso ou sobre os serviços oferecidos, entre em contato conosco através de nosso canal de atendimento: <a href="mailto:adm@athenaoffice.com.br" className="text-green font-semibold hover:underline">adm@athenaoffice.com.br</a>.
                    </p>
                  </section>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
