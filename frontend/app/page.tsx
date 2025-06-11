import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden w-full max-w-full">
     
      <section id="home" className="bg-yellow-500 text-white py-20 w-full">
        <div className="container mx-auto px-4 text-center max-w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 break-words">Impressão de Qualidade para o Seu Negócio</h2>
          <p className="text-lg md:text-xl mb-6 break-words">Cartões, banners, flyers e mais, com entrega rápida e preço justo.</p>
          <Link href="/contato" className="bg-white text-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
            Solicite um Orçamento
          </Link>
        </div>
      </section>

      <section id="services" className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { title: 'Cartões de Visita', desc: 'Designs personalizados e impressão de alta qualidade.', icon: '/icons/card.svg', link: '/servicos/cartoes' },
              { title: 'Banners e Faixas', desc: 'Tamanhos variados com cores vibrantes.', icon: '/icons/banner.svg', link: '/servicos/banners' },
              { title: 'Flyers e Panfletos', desc: 'Perfeito para promoções e eventos.', icon: '/icons/flyer.svg', link: '/servicos/flyers' },
            ].map((service, index) => (
              <Link key={index} href={service.link} className="block">
                <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Image src={service.icon} alt={service.title} width={48} height={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-gray-100 py-16 w-full">
        <div className="container mx-auto px-4 max-w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Nosso Portfólio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {Array(6).fill(null).map((_, index) => (
              <Link key={index} href={`/portfolio/projeto-${index + 1}`} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Image
                    src={`/portfolio/sample-${index + 1}.jpg`}
                    alt={`Portfólio ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">Projeto {index + 1}</h3>
                    <p className="text-gray-600">Descrição breve do projeto realizado.</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 w-full">
        <div className="container mx-auto px-4 text-center max-w-full">
          <h2 className="text-3xl font-bold mb-8">Sobre Nós</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos uma gráfica com mais de 10 anos de experiência, oferecendo soluções de impressão
            de alta qualidade para empresas e indivíduos. Nosso compromisso é com a sua satisfação.
          </p>
        </div>
      </section>

      <section id="contato" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
          <div className="max-w-lg mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full p-3 rounded-lg text-gray-800"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-3 rounded-lg text-gray-800"
              />
              <textarea
                placeholder="Mensagem"
                className="w-full p-3 rounded-lg text-gray-800 h-32"
              ></textarea>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Personalize Já. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}