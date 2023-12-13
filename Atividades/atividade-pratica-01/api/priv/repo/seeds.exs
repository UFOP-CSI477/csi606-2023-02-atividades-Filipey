# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Api.Repo.insert!(%Api.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Api.Repo
alias Api.States
alias Api.Cities
alias Api.BloodTypes
alias Api.Persons

states = [
  %{name: "Acre", acronym: "AC"},
  %{name: "Alagoas", acronym: "AL"},
  %{name: "Amapá", acronym: "AP"},
  %{name: "Amazonas", acronym: "AM"},
  %{name: "Bahia", acronym: "BA"},
  %{name: "Ceará", acronym: "CE"},
  %{name: "Distrito Federal", acronym: "DF"},
  %{name: "Espírito Santo", acronym: "ES"},
  %{name: "Goiás", acronym: "GO"},
  %{name: "Maranhão", acronym: "MA"},
  %{name: "Mato Grosso", acronym: "MT"},
  %{name: "Mato Grosso do Sul", acronym: "MS"},
  %{name: "Minas Gerais", acronym: "MG"},
  %{name: "Pará", acronym: "PA"},
  %{name: "Paraíba", acronym: "PB"},
  %{name: "Paraná", acronym: "PR"},
  %{name: "Pernambuco", acronym: "PE"},
  %{name: "Piauí", acronym: "PI"},
  %{name: "Rio de Janeiro", acronym: "RJ"},
  %{name: "Rio Grande do Norte", acronym: "RN"},
  %{name: "Rio Grande do Sul", acronym: "RS"},
  %{name: "Rondônia", acronym: "RO"},
  %{name: "Roraima", acronym: "RR"},
  %{name: "Santa Catarina", acronym: "SC"},
  %{name: "São Paulo", acronym: "SP"},
  %{name: "Sergipe", acronym: "SE"},
  %{name: "Tocantins", acronym: "TO"}
]

cities = [
  %{state_id: 1, name: "Rio Branco"},
  %{state_id: 1, name: "Cruzeiro do Sul"},
  %{state_id: 1, name: "Sena Madureira"},
  %{state_id: 1, name: "Feijó"},
  %{state_id: 1, name: "Tarauacá"},
  %{state_id: 2, name: "Maceió"},
  %{state_id: 2, name: "Arapiraca"},
  %{state_id: 2, name: "Rio Largo"},
  %{state_id: 2, name: "Palmeira dos Índios"},
  %{state_id: 2, name: "Penedo"},
  %{state_id: 3, name: "Macapá"},
  %{state_id: 3, name: "Santana"},
  %{state_id: 3, name: "Laranjal do Jari"},
  %{state_id: 3, name: "Oiapoque"},
  %{state_id: 3, name: "Pedra Branca do Amapari"},
  %{state_id: 4, name: "Manaus"},
  %{state_id: 4, name: "Parintins"},
  %{state_id: 4, name: "Itacoatiara"},
  %{state_id: 4, name: "Manacapuru"},
  %{state_id: 4, name: "Coari"},
  %{state_id: 5, name: "Salvador"},
  %{state_id: 5, name: "Feira de Santana"},
  %{state_id: 5, name: "Vitória da Conquista"},
  %{state_id: 5, name: "Camaçari"},
  %{state_id: 5, name: "Itabuna"},
  %{state_id: 6, name: "Fortaleza"},
  %{state_id: 6, name: "Caucaia"},
  %{state_id: 6, name: "Juazeiro do Norte"},
  %{state_id: 6, name: "Maracanaú"},
  %{state_id: 6, name: "Sobral"},
  %{state_id: 7, name: "Brasília"},
  %{state_id: 7, name: "Ceilândia"},
  %{state_id: 7, name: "Taguatinga"},
  %{state_id: 7, name: "Gama"},
  %{state_id: 7, name: "Recanto das Emas"},
  %{state_id: 8, name: "Vitória"},
  %{state_id: 8, name: "Vila Velha"},
  %{state_id: 8, name: "Cariacica"},
  %{state_id: 8, name: "Serra"},
  %{state_id: 8, name: "Linhares"},
  %{state_id: 9, name: "Goiânia"},
  %{state_id: 9, name: "Aparecida de Goiânia"},
  %{state_id: 9, name: "Anápolis"},
  %{state_id: 9, name: "Rio Verde"},
  %{state_id: 9, name: "Luziânia"},
  %{state_id: 10, name: "São Luís"},
  %{state_id: 10, name: "Imperatriz"},
  %{state_id: 10, name: "São José de Ribamar"},
  %{state_id: 10, name: "Timon"},
  %{state_id: 10, name: "Caxias"},
  %{state_id: 11, name: "Cuiabá"},
  %{state_id: 11, name: "Várzea Grande"},
  %{state_id: 11, name: "Rondonópolis"},
  %{state_id: 11, name: "Sinop"},
  %{state_id: 11, name: "Tangará da Serra"},
  %{state_id: 12, name: "Campo Grande"},
  %{state_id: 12, name: "Dourados"},
  %{state_id: 12, name: "Três Lagoas"},
  %{state_id: 12, name: "Corumbá"},
  %{state_id: 12, name: "Ponta Porã"},
  %{state_id: 13, name: "Belo Horizonte"},
  %{state_id: 13, name: "Uberlândia"},
  %{state_id: 13, name: "Contagem"},
  %{state_id: 13, name: "Juiz de Fora"},
  %{state_id: 13, name: "Betim"},
  %{state_id: 14, name: "Belém"},
  %{state_id: 14, name: "Ananindeua"},
  %{state_id: 14, name: "Santarém"},
  %{state_id: 14, name: "Marabá"},
  %{state_id: 14, name: "Castanhal"},
  %{state_id: 15, name: "João Pessoa"},
  %{state_id: 15, name: "Campina Grande"},
  %{state_id: 15, name: "Santa Rita"},
  %{state_id: 15, name: "Patos"},
  %{state_id: 15, name: "Bayeux"},
  %{state_id: 16, name: "Curitiba"},
  %{state_id: 16, name: "Londrina"},
  %{state_id: 16, name: "Maringá"},
  %{state_id: 16, name: "Ponta Grossa"},
  %{state_id: 16, name: "Cascavel"},
  %{state_id: 17, name: "Recife"},
  %{state_id: 17, name: "Jaboatão dos Guararapes"},
  %{state_id: 17, name: "Olinda"},
  %{state_id: 17, name: "Caruaru"},
  %{state_id: 17, name: "Petrolina"},
  %{state_id: 18, name: "Teresina"},
  %{state_id: 18, name: "Parnaíba"},
  %{state_id: 18, name: "Picos"},
  %{state_id: 18, name: "Campo Maior"},
  %{state_id: 18, name: "Floriano"},
  %{state_id: 19, name: "Rio de Janeiro"},
  %{state_id: 19, name: "São Gonçalo"},
  %{state_id: 19, name: "Duque de Caxias"},
  %{state_id: 19, name: "Nova Iguaçu"},
  %{state_id: 19, name: "Niterói"},
  %{state_id: 20, name: "Natal"},
  %{state_id: 20, name: "Mossoró"},
  %{state_id: 20, name: "Parnamirim"},
  %{state_id: 20, name: "São Gonçalo do Amarante"},
  %{state_id: 20, name: "Ceará-Mirim"},
  %{state_id: 21, name: "Porto Alegre"},
  %{state_id: 21, name: "Caxias do Sul"},
  %{state_id: 21, name: "Pelotas"},
  %{state_id: 21, name: "Canoas"},
  %{state_id: 21, name: "Santa Maria"},
  %{state_id: 22, name: "Porto Velho"},
  %{state_id: 22, name: "Ji-Paraná"},
  %{state_id: 22, name: "Ariquemes"},
  %{state_id: 22, name: "Vilhena"},
  %{state_id: 22, name: "Cacoal"},
  %{state_id: 23, name: "Boa Vista"},
  %{state_id: 23, name: "Caracaraí"},
  %{state_id: 23, name: "Rorainópolis"},
  %{state_id: 23, name: "São João da Baliza"},
  %{state_id: 23, name: "Mucajaí"},
  %{state_id: 24, name: "Florianópolis"},
  %{state_id: 24, name: "Joinville"},
  %{state_id: 24, name: "Blumenau"},
  %{state_id: 24, name: "São José"},
  %{state_id: 24, name: "Criciúma"},
  %{state_id: 25, name: "São Paulo"},
  %{state_id: 25, name: "Guarulhos"},
  %{state_id: 25, name: "Campinas"},
  %{state_id: 25, name: "São Bernardo do Campo"},
  %{state_id: 25, name: "Santo André"},
  %{state_id: 26, name: "Aracaju"},
  %{state_id: 26, name: "Nossa Senhora do Socorro"},
  %{state_id: 26, name: "Lagarto"},
  %{state_id: 26, name: "Itabaiana"},
  %{state_id: 26, name: "Estância"},
  %{state_id: 27, name: "Palmas"},
  %{state_id: 27, name: "Araguaína"},
  %{state_id: 27, name: "Gurupi"},
  %{state_id: 27, name: "Porto Nacional"},
  %{state_id: 27, name: "Paraíso do Tocantins"}
]

blood_types = [
  %{type: "A", factor: "-"},
  %{type: "A", factor: "+"},
  %{type: "B", factor: "-"},
  %{type: "B", factor: "+"},
  %{type: "AB", factor: "-"},
  %{type: "AB", factor: "+"},
  %{type: "O", factor: "-"},
  %{type: "O", factor: "+"}
]

people_by_city = [
  %{
    name: "Lucas Lima",
    street: "Rua Cariacica",
    number: 393,
    complement: "Casa 43",
    rg: "3333444",
    city: "Cariacica"
  },

  # Serra
  %{
    name: "Fernanda Souza",
    street: "Avenida Serra",
    number: 404,
    complement: "Apto 44",
    rg: "4444555",
    city: "Serra"
  },

  # Linhares
  %{
    name: "Gabriel Oliveira",
    street: "Rua Linhares",
    number: 515,
    complement: "Casa 45",
    rg: "5555666",
    city: "Sinop"
  },

  # Goiânia
  %{
    name: "Isabela Lima",
    street: "Avenida Goiânia",
    number: 181,
    complement: "Apto 46",
    rg: "6666777",
    city: "Rondonópolis"
  },

  # Aparecida de Goiânia
  %{
    name: "Matheus Souza",
    street: "Rua Aparecida",
    number: 292,
    complement: "Casa 47",
    rg: "7777888",
    city: "São Luís"
  },

  # Anápolis
  %{
    name: "Mariana Oliveira",
    street: "Avenida Anápolis",
    number: 303,
    complement: "Apto 48",
    rg: "8888999",
    city: "Rio Verde"
  },

  # Rio Verde
  %{
    name: "Diego Lima",
    street: "Rua Rio Verde",
    number: 414,
    complement: "Casa 49",
    rg: "9999000",
    city: "Goiânia"
  },

  # Luziânia
  %{
    name: "Camila Souza",
    street: "Avenida Luziânia",
    number: 525,
    complement: "Apto 50",
    rg: "0000111",
    city: "Vila Velha"
  },

  # São Luís
  %{
    name: "Thiago Rocha",
    street: "Rua São Luís",
    number: 191,
    complement: "Casa 51",
    rg: "1111222",
    city: "Vitória"
  },

  # Imperatriz
  %{
    name: "Larissa Oliveira",
    street: "Avenida Imperatriz",
    number: 202,
    complement: "Apto 52",
    rg: "2222333",
    city: "Gama"
  },

  # São José de Ribamar
  %{
    name: "Lucas Lima",
    street: "Rua São José",
    number: 313,
    complement: "Casa 53",
    rg: "3333444",
    city: "Parintins"
  },

  # Timon
  %{
    name: "Fernanda Souza",
    street: "Avenida Timon",
    number: 424,
    complement: "Apto 54",
    rg: "4444555",
    city: "Santana"
  },

  # Caxias
  %{
    name: "Gabriel Oliveira",
    street: "Rua Caxias",
    number: 535,
    complement: "Casa 55",
    rg: "5555666",
    city: "Feijó"
  },

  # Cuiabá
  %{
    name: "Isabela Lima",
    street: "Avenida Cuiabá",
    number: 201,
    complement: "Apto 56",
    rg: "6666777",
    city: "Maceió"
  },

  # Várzea Grande
  %{
    name: "Matheus Souza",
    street: "Rua Várzea Grande",
    number: 312,
    complement: "Casa 57",
    rg: "7777888",
    city: "Rio Branco"
  },

  # Rondonópolis
  %{
    name: "Mariana Oliveira",
    street: "Avenida Rondonópolis",
    number: 423,
    complement: "Apto 58",
    rg: "8888999",
    city: "Vitória da Conquista"
  },

  # Sinop
  %{
    name: "Diego Lima",
    street: "Rua Sinop",
    number: 534,
    complement: "Casa 59",
    rg: "9999000",
    city: "Fortaleza"
  },

  # Tangará da Serra
  %{
    name: "Camila Souza",
    street: "Avenida Tangará",
    number: 645,
    complement: "Apto 60",
    rg: "0000111",
    city: "Campinas"
  },

  # Campo Grande
  %{
    name: "Thiago Rocha",
    street: "Rua Campo Grande",
    number: 211,
    complement: "Casa 61",
    rg: "1111222",
    city: "Palmas"
  },

  # Dourados
  %{
    name: "Larissa Oliveira",
    street: "Avenida Dourados",
    number: 322,
    complement: "Apto",
    rg: "9381711",
    city: "São Paulo"
  },
  %{
    name: "Ana Silva",
    street: "Rua Acreana",
    number: 123,
    complement: "Apto 1",
    rg: "1234567",
    city: "Três Lagoas"
  },

  # Cruzeiro do Sul
  %{
    name: "João Oliveira",
    street: "Avenida Rio",
    number: 456,
    complement: "Casa 2",
    rg: "7654321",
    city: "Corumbá"
  },

  # Sena Madureira
  %{
    name: "Maria Souza",
    street: "Rua Amazonas",
    number: 789,
    complement: "Casa 3",
    rg: "9876543",
    city: "Ponta Porã"
  },

  # Feijó
  %{
    name: "Carlos Santos",
    street: "Avenida dos Rios",
    number: 321,
    complement: "Apto 4",
    rg: "3456789",
    city: "Belo Horizonte"
  },

  # Tarauacá
  %{
    name: "Juliana Lima",
    street: "Rua Madeira",
    number: 101,
    complement: "Apto 5",
    rg: "2345678",
    city: "Uberlândia"
  },

  # Maceió
  %{
    name: "Fernando Rocha",
    street: "Avenida das Flores",
    number: 202,
    complement: "Casa 6",
    rg: "8765432",
    city: "Contagem"
  },

  # Arapiraca
  %{
    name: "Roberta Costa",
    street: "Rua Verde",
    number: 303,
    complement: "Casa 7",
    rg: "8765432",
    city: "Juiz de Fora"
  },

  # Rio Largo
  %{
    name: "Ricardo Pereira",
    street: "Avenida das Árvores",
    number: 404,
    complement: "Apto 8",
    rg: "2345678",
    city: "Betim"
  },

  # Palmeira dos Índios
  %{
    name: "Amanda Santos",
    street: "Rua Tarauacá",
    number: 505,
    complement: "Apto 9",
    rg: "3456789",
    city: "Belém"
  },

  # Penedo
  %{
    name: "Gabriel Oliveira",
    street: "Avenida do Sol",
    number: 606,
    complement: "Casa 10",
    rg: "9876543",
    city: "Ananindeua"
  },

  # Macapá
  %{
    name: "Larissa Lima",
    street: "Rua das Palmeiras",
    number: 111,
    complement: "Casa 11",
    rg: "1111111",
    city: "Santarém"
  },

  # Santana
  %{
    name: "Lucas Silva",
    street: "Avenida do Mar",
    number: 222,
    complement: "Apto 12",
    rg: "2222222",
    city: "Marabá"
  },

  # Laranjal do Jari
  %{
    name: "Aline Oliveira",
    street: "Rua da Natureza",
    number: 333,
    complement: "Casa 13",
    rg: "3333333",
    city: "Castanhal"
  },

  # Oiapoque
  %{
    name: "Mateus Souza",
    street: "Avenida do Norte",
    number: 444,
    complement: "Apto 14",
    rg: "4444444",
    city: "João Pessoa"
  },

  # Pedra Branca do Amapari
  %{
    name: "Camila Santos",
    street: "Rua da Montanha",
    number: 555,
    complement: "Casa 15",
    rg: "5555555",
    city: "Campina Grande"
  },

  # Manaus
  %{
    name: "Rafael Lima",
    street: "Avenida dos Rios",
    number: 666,
    complement: "Apto 16",
    rg: "6666666",
    city: "Santa Rita"
  },

  # Parintins
  %{
    name: "Julia Oliveira",
    street: "Rua das Águas",
    number: 777,
    complement: "Casa 17",
    rg: "7777777",
    city: "Patos"
  },

  # Itacoatiara
  %{
    name: "Thiago Silva",
    street: "Avenida das Flores",
    number: 888,
    complement: "Apto 18",
    rg: "8888888",
    city: "Bayeux"
  },

  # Manacapuru
  %{
    name: "Isabela Santos",
    street: "Rua das Palmeiras",
    number: 999,
    complement: "Casa 19",
    rg: "9999999",
    city: "Curitiba"
  },

  # Coari
  %{
    name: "Felipe Rocha",
    street: "Avenida do Sol",
    number: 1010,
    complement: "Apto 20",
    rg: "10101010",
    city: "Londrina"
  },

  # Salvador
  %{
    name: "Mariana Oliveira",
    street: "Rua da Bahia",
    number: 1111,
    complement: "Casa 21",
    rg: "11111111",
    city: "Maringá"
  },

  # Feira de Santana
  %{
    name: "Gustavo Lima",
    street: "Avenida dos Cajueiros",
    number: 1212,
    complement: "Apto 22",
    rg: "12121212",
    city: "Ponta Grossa"
  },

  # Vitória da Conquista
  %{
    name: "Carolina Santos",
    street: "Rua da Serra",
    number: 1313,
    complement: "Casa 23",
    rg: "13131313",
    city: "Cascavel"
  },

  # Camaçari
  %{
    name: "Lucas Oliveira",
    street: "Avenida do Mar",
    number: 1414,
    complement: "Apto 24",
    rg: "14141414",
    city: "Recife"
  },

  # Itabuna
  %{
    name: "Amanda Silva",
    street: "Rua do Cacau",
    number: 1515,
    complement: "Casa 25",
    rg: "15151515",
    city: "Jaboatão dos Guararapes"
  },

  # Fortaleza
  %{
    name: "Matheus Lima",
    street: "Avenida do Sol",
    number: 1616,
    complement: "Apto 26",
    rg: "16161616",
    city: "Olinda"
  },

  # Caucaia
  %{
    name: "Larissa Oliveira",
    street: "Rua das Dunas",
    number: 1717,
    complement: "Casa 27",
    rg: "17171717",
    city: "Caruaru"
  },

  # Juazeiro do Norte
  %{
    name: "José Santos",
    street: "Avenida da Fé",
    number: 1818,
    complement: "Apto 28",
    rg: "18181818",
    city: "Petrolina"
  },

  # Maracanaú
  %{
    name: "Fernanda Lima",
    street: "Rua da Esperança",
    number: 1919,
    complement: "Casa 29",
    rg: "19191919",
    city: "Teresina"
  },

  # Sobral
  %{
    name: "Vinícius Oliveira",
    street: "Avenida da Alegria",
    number: 2020,
    complement: "Apto 30",
    rg: "20202020",
    city: "Parnaíba"
  },

  # Brasília
  %{
    name: "Bianca Silva",
    street: "Esplanada dos Ministérios",
    number: 2121,
    complement: "Apto 31",
    rg: "21212121",
    city: "Picos"
  },

  # Ceilândia
  %{
    name: "Felipe Oliveira",
    street: "Avenida do Cerrado",
    number: 2222,
    complement: "Casa 32",
    rg: "22222222",
    city: "Campo Maior"
  },

  # Taguatinga
  %{
    name: "Camila Lima",
    street: "Rua do Planalto",
    number: 2323,
    complement: "Apto 33",
    rg: "23232323",
    city: "Floriano"
  },

  # Gama
  %{
    name: "Gustavo Silva",
    street: "Avenida da União",
    number: 2424,
    complement: "Casa 34",
    rg: "24242424",
    city: "Rio de Janeiro"
  },

  # Recanto das Emas
  %{
    name: "Aline Oliveira",
    street: "Rua da Solidariedade",
    number: 2525,
    complement: "Apto 35",
    rg: "25252525",
    city: "São Gonçalo"
  },

  # Vitória
  %{
    name: "Rafael Lima",
    street: "Avenida das Praias",
    number: 2626,
    complement: "Casa 36",
    rg: "26262626",
    city: "Duque de Caxias"
  },

  # Vila Velha
  %{
    name: "Fernanda Oliveira",
    street: "Rua do Oceano",
    number: 2727,
    complement: "Apto 37",
    rg: "27272727",
    city: "Nova Iguaçu"
  },

  # Cariacica
  %{
    name: "Bruno Silva",
    street: "Avenida das Montanhas",
    number: 2828,
    complement: "Casa 38",
    rg: "28282828",
    city: "Niterói"
  },

  # Serra
  %{
    name: "Mariana Lima",
    street: "Rua dos Vales",
    number: 2929,
    complement: "Apto 39",
    rg: "29292929",
    city: "Natal"
  },

  # Linhares
  %{
    name: "Lucas Oliveira",
    street: "Avenida do Rio",
    number: 3030,
    complement: "Casa 40",
    rg: "30303030",
    city: "Mossoró"
  },

  # Goiânia
  %{
    name: "Carla Santos",
    street: "Rua das Flores",
    number: 3131,
    complement: "Apto 41",
    rg: "31313131",
    city: "Parnamirim"
  },

  # Aparecida de Goiânia
  %{
    name: "Felipe Lima",
    street: "Avenida dos Cerrados",
    number: 3232,
    complement: "Casa 42",
    rg: "32323232",
    city: "São Gonçalo do Amarante"
  },

  # Anápolis
  %{
    name: "Amanda Oliveira",
    street: "Rua do Campo",
    number: 3333,
    complement: "Apto 43",
    rg: "33333333",
    city: "Ceará-Mirim"
  },

  # Rio Verde
  %{
    name: "Lucas Silva",
    street: "Avenida das Árvores",
    number: 3434,
    complement: "Casa 44",
    rg: "34343434",
    city: "Porto Alegre"
  },

  # Luziânia
  %{
    name: "Mariana Lima",
    street: "Rua do Cerrado",
    number: 3535,
    complement: "Apto 45",
    rg: "35353535",
    city: "Caxias do Sul"
  },

  # São Luís
  %{
    name: "Gustavo Oliveira",
    street: "Avenida do Maranhão",
    number: 3636,
    complement: "Casa 46",
    rg: "36363636",
    city: "Pelotas"
  },

  # Imperatriz
  %{
    name: "Juliana Santos",
    street: "Rua das Palmeiras",
    number: 3737,
    complement: "Apto 47",
    rg: "37373737",
    city: "Canoas"
  },

  # São José de Ribamar
  %{
    name: "Rafael Lima",
    street: "Avenida dos Rios",
    number: 3838,
    complement: "Casa 48",
    rg: "38383838",
    city: "Santa Maria"
  },

  # Timon
  %{
    name: "Larissa Oliveira",
    street: "Rua do Mar",
    number: 3939,
    complement: "Apto 49",
    rg: "39393939",
    city: "Porto Velho"
  },

  # Caxias
  %{
    name: "Vinícius Silva",
    street: "Avenida da Serra",
    number: 4040,
    complement: "Casa 50",
    rg: "40404040",
    city: "Ji-Paraná"
  },

  # Cuiabá
  %{
    name: "Camila Lima",
    street: "Rua do Cerrado",
    number: 4141,
    complement: "Apto 51",
    rg: "41414141",
    city: "Ariquemes"
  },

  # Várzea Grande
  %{
    name: "Thiago Oliveira",
    street: "Avenida das Águas",
    number: 4242,
    complement: "Casa 52",
    rg: "42424242",
    city: "Vilhena"
  },

  # Rondonópolis
  %{
    name: "Isabela Santos",
    street: "Rua do Pantanal",
    number: 4343,
    complement: "Apto 53",
    rg: "43434343",
    city: "Rorainópolis"
  },

  # Sinop
  %{
    name: "Lucas Lima",
    street: "Avenida do Norte",
    number: 4444,
    complement: "Casa 54",
    rg: "44444444",
    city: "Joinville"
  },

  # Tangará da Serra
  %{
    name: "Ana Oliveira",
    street: "Rua das Montanhas",
    number: 4545,
    complement: "Apto 55",
    rg: "45454545",
    city: "Blumenau"
  },

  # Campo Grande
  %{
    name: "Ricardo Silva",
    street: "Avenida do Campo",
    number: 4646,
    complement: "Casa 56",
    rg: "46464646",
    city: "São Paulo"
  }
]

states
|> Enum.each(fn state -> Repo.insert!(States.Schema.changeset(%States.Schema{}, state)) end)

cities
|> Enum.each(fn city ->
  state = Repo.get!(States.Schema, city.state_id)
  Repo.insert!(%Cities.Schema{name: city.name, state: state})
end)

blood_types
|> Enum.each(fn blood_type ->
  Repo.insert(%BloodTypes.Schema{type: blood_type.type, factor: blood_type.factor})
end)

people_by_city
|> Enum.each(fn person ->
  city = Repo.get_by(Cities.Schema, name: person.city)
  random_blood_type_id = :rand.uniform(8)
  blood_type = Repo.get!(BloodTypes.Schema, random_blood_type_id)

  Repo.insert(%Persons.Schema{
    name: person.name,
    street: person.street,
    number: person.number,
    complement: person.complement,
    rg: person.rg,
    city: city,
    blood_type: blood_type
  })
end)
