import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos", count: 12 },
    { id: "gas-natural", name: "Gás Natural", count: 5 },
    { id: "agua-mineral", name: "Água Mineral", count: 3 },
    { id: "sustentabilidade", name: "Sustentabilidade", count: 4 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Os Benefícios do Gás Natural para Sua Casa",
      excerpt: "Descubra como o gás natural pode reduzir seus custos e melhorar a eficiência energética de sua residência.",
      category: "gas-natural",
      categoryName: "Gás Natural",
      author: "Dr. Carlos Silva",
      date: "2024-01-15",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "Qualidade da Água: Por que Escolher Água Mineral",
      excerpt: "Entenda a importância da qualidade da água para sua saúde e como escolher a melhor opção para sua família.",
      category: "agua-mineral",
      categoryName: "Água Mineral",
      author: "Dra. Marina Santos",
      date: "2024-01-10",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=250&fit=crop&crop=center",
      featured: false
    },
    {
      id: 3,
      title: "Sustentabilidade e Energia Limpa: O Futuro é Agora",
      excerpt: "Como as energias limpas contribuem para um futuro sustentável e o papel do gás natural nessa transição.",
      category: "sustentabilidade",
      categoryName: "Sustentabilidade",
      author: "Prof. João Oliveira",
      date: "2024-01-08",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop&crop=center",
      featured: false
    },
    {
      id: 4,
      title: "Manutenção Preventiva: Garantindo Segurança",
      excerpt: "A importância da manutenção preventiva em sistemas de gás natural para garantir segurança e eficiência.",
      category: "gas-natural",
      categoryName: "Gás Natural",
      author: "Eng. Roberto Costa",
      date: "2024-01-05",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=250&fit=crop&crop=center",
      featured: false
    },
    {
      id: 5,
      title: "Hidratação Adequada no Ambiente de Trabalho",
      excerpt: "Como garantir que sua equipe tenha acesso à água de qualidade e mantenha-se hidratada durante o trabalho.",
      category: "agua-mineral",
      categoryName: "Água Mineral",
      author: "Dra. Ana Paula",
      date: "2024-01-03",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop&crop=center",
      featured: false
    },
    {
      id: 6,
      title: "Economia de Energia: Dicas Práticas para Empresas",
      excerpt: "Estratégias eficazes para reduzir custos energéticos em empresas através do uso inteligente do gás natural.",
      category: "gas-natural",
      categoryName: "Gás Natural",
      author: "Consultor André Lima",
      date: "2024-01-01",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop&crop=center",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog LapenhaGáz
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fique por dentro das últimas novidades sobre gás natural, água mineral 
              e sustentabilidade. Conteúdo especializado para você.
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "all" && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Artigo em Destaque</h2>
            <Card className="overflow-hidden border-border/70 hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{featuredPost.categoryName}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {featuredPost.author} • {featuredPost.readTime}
                    </div>
                    <Button variant="outline">
                      Ler Artigo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory === "all" ? "Todos os Artigos" : 
             categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Nenhum artigo encontrado para os filtros selecionados.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}>
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-border/70 hover:shadow-[var(--shadow-elevated)] transition-shadow group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {post.categoryName}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      {post.author}
                      <span>•</span>
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-[var(--shadow-glow)]">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Fique por Dentro das Novidades
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Assine nossa newsletter e receba conteúdos exclusivos sobre 
                energia limpa e sustentabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  placeholder="Seu melhor e-mail"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button size="lg" variant="secondary">
                  Assinar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;