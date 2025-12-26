/*
  Design: Modernismo Corporativo Brasileiro
  Página: Política de Privacidade
*/

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Política de Privacidade | Athena Office"
        description="Prezamos pela proteção e privacidade dos seus dados. Conheça nossa Política de Privacidade em conformidade com a LGPD."
      />
      <Header />

      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
