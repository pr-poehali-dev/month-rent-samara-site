import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const apartments = [
    {
      id: 1,
      title: "Студия в центре",
      description: "Уютная студия с современным ремонтом в самом центре Самары",
      price: "2500",
      image: "/img/f0ff8a70-6750-4124-b3cf-33d1c131ff7f.jpg",
      features: ["Wi-Fi", "Кухня", "Стиральная машина", "Кондиционер"]
    },
    {
      id: 2, 
      title: "1-комнатная у Волги",
      description: "Просторная квартира с видом на Волгу и все удобства",
      price: "3200",
      image: "/img/2aac75d3-0f3a-4592-868b-04a0e3964cb1.jpg",
      features: ["Wi-Fi", "Кухня", "Балкон", "Паркинг"]
    },
    {
      id: 3,
      title: "2-комнатная для семьи",
      description: "Комфортная квартира для семейного отдыха с детской зоной",
      price: "4500",
      image: "/img/a58aa2c6-4116-4f34-9e52-5da00a3ca8ad.jpg", 
      features: ["Wi-Fi", "2 спальни", "Детская кроватка", "Кухня"]
    }
  ];

  const features = [
    {
      icon: "Key",
      title: "Простое заселение",
      description: "Быстрая процедура заселения и передача ключей"
    },
    {
      icon: "Bed",
      title: "Комфортное жилье",
      description: "Все необходимое для комфортного проживания"
    },
    {
      icon: "Home",
      title: "Как дома",
      description: "Уютная атмосфера домашнего комфорта"
    },
    {
      icon: "Wifi",
      title: "Интернет",
      description: "Высокоскоростной Wi-Fi во всех апартаментах"
    },
    {
      icon: "Calendar",
      title: "Гибкие даты",
      description: "Бронирование на любые даты и сроки"
    },
    {
      icon: "MapPin",
      title: "Центр города",
      description: "Удобное расположение в центральных районах"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">Самара Апартаменты</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors">Бронирование</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Уютные апартаменты <span className="text-primary">в Самаре</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Почувствуйте себя как дома в наших комфортных апартаментах. 
            Идеальное место для отдыха, работы и путешествий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать сейчас
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы создаем комфортные условия для вашего пребывания в Самаре
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apartments Gallery */}
      <section id="gallery" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наши апартаменты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите подходящий вариант из нашей коллекции уютных апартаментов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apartment) => (
              <Card key={apartment.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="aspect-video bg-gradient-to-br from-secondary/30 to-primary/20 overflow-hidden">
                  <img 
                    src={apartment.image} 
                    alt={apartment.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{apartment.title}</CardTitle>
                      <CardDescription className="mt-2">{apartment.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{apartment.price}₽</div>
                      <div className="text-sm text-muted-foreground">за сутки</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {apartment.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Быстрое бронирование</h2>
              <p className="text-muted-foreground text-lg">
                Заполните форму, и мы свяжемся с вами в течение часа
              </p>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Забронировать апартаменты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Дата заезда</label>
                    <Input type="date" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Дата выезда</label>
                    <Input type="date" className="w-full" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Количество гостей</label>
                  <Input type="number" min="1" max="6" placeholder="2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Дополнительные пожелания</label>
                  <Textarea placeholder="Расскажите о ваших пожеланиях..." rows={3} />
                </div>
                <Button size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (846) 123-45-67</p>
                <p className="text-muted-foreground">+7 (927) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@samara-apartments.ru</p>
                <p className="text-muted-foreground">booking@samara-apartments.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Самара</p>
                <p className="text-muted-foreground">Центральный район</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Круглосуточно</p>
                <p className="text-muted-foreground">7 дней в неделю</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Самара Апартаменты</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Комфортные апартаменты для краткосрочной аренды в центре Самары. 
                Ваш дом вдали от дома.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Полезные ссылки</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия проживания</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила бронирования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Самара Апартаменты. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;