alias Api.Repo
alias Api.States
alias Api.Cities
alias Api.BloodTypes
alias Api.Persons
alias Api.CollectPlaces
alias Api.Donations

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
    name: "Lucas Limoeiro",
    street: "Rua Cariacica",
    number: 393,
    complement: "Casa 43",
    rg: "07612310",
    city: "Cariacica"
  },

  # Serra
  %{
    name: "Fernanda Souza",
    street: "Avenida Serra",
    number: 404,
    complement: "Apto 44",
    rg: "91283911",
    city: "Serra"
  },

  # Linhares
  %{
    name: "Gabriel Oliveira",
    street: "Rua Linhares",
    number: 515,
    complement: "Casa 45",
    rg: "98127312",
    city: "Sinop"
  },

  # Goiânia
  %{
    name: "Isabela Lima",
    street: "Avenida Goiânia",
    number: 181,
    complement: "Apto 46",
    rg: "81723112",
    city: "Rondonópolis"
  },

  # Aparecida de Goiânia
  %{
    name: "Matheus Souza",
    street: "Rua Aparecida",
    number: 292,
    complement: "Casa 47",
    rg: "72611213",
    city: "São Luís"
  },

  # Anápolis
  %{
    name: "Mariana Oliveira",
    street: "Avenida Anápolis",
    number: 303,
    complement: "Apto 48",
    rg: "01823114",
    city: "Rio Verde"
  },

  # Rio Verde
  %{
    name: "Diego Lima",
    street: "Rua Rio Verde",
    number: 414,
    complement: "Casa 49",
    rg: "01283815",
    city: "Goiânia"
  },

  # Luziânia
  %{
    name: "Camila Souza",
    street: "Avenida Luziânia",
    number: 525,
    complement: "Apto 50",
    rg: "59823116",
    city: "Vila Velha"
  },

  # São Luís
  %{
    name: "Thiago Rocha",
    street: "Rua São Luís",
    number: 191,
    complement: "Casa 51",
    rg: "19291231",
    city: "Vitória"
  },

  # Imperatriz
  %{
    name: "Larissa Oliveira",
    street: "Avenida Imperatriz",
    number: 202,
    complement: "Apto 52",
    rg: "29731299",
    city: "Gama"
  },

  # São José de Ribamar
  %{
    name: "Lucas Lima",
    street: "Rua São José",
    number: 313,
    complement: "Casa 53",
    rg: "38473231",
    city: "Parintins"
  },

  # Timon
  %{
    name: "Fernanda Souza",
    street: "Avenida Timon",
    number: 424,
    complement: "Apto 54",
    rg: "01293119",
    city: "Santana"
  },

  # Caxias
  %{
    name: "Gabriel Oliveira",
    street: "Rua Caxias",
    number: 535,
    complement: "Casa 55",
    rg: "34973520",
    city: "Feijó"
  },

  # Cuiabá
  %{
    name: "Isabela Lima",
    street: "Avenida Cuiabá",
    number: 201,
    complement: "Apto 56",
    rg: "12563121",
    city: "Maceió"
  },

  # Várzea Grande
  %{
    name: "Matheus Souza",
    street: "Rua Várzea Grande",
    number: 312,
    complement: "Casa 57",
    rg: "932742392",
    city: "Rio Branco"
  },

  # Rondonópolis
  %{
    name: "Mariana Oliveira",
    street: "Avenida Rondonópolis",
    number: 423,
    complement: "Apto 58",
    rg: "12836122",
    city: "Vitória da Conquista"
  },

  # Sinop
  %{
    name: "Diego Lima",
    street: "Rua Sinop",
    number: 534,
    complement: "Casa 59",
    rg: "81729312",
    city: "Fortaleza"
  },

  # Tangará da Serra
  %{
    name: "Camila Souza",
    street: "Avenida Tangará",
    number: 645,
    complement: "Apto 60",
    rg: "86328325",
    city: "Campinas"
  },

  # Campo Grande
  %{
    name: "Thiago Rocha",
    street: "Rua Campo Grande",
    number: 211,
    complement: "Casa 61",
    rg: "92347292",
    city: "Palmas"
  },

  # Dourados
  %{
    name: "Larissa Oliveira",
    street: "Avenida Dourados",
    number: 322,
    complement: "Apto",
    rg: "93817112",
    city: "São Paulo"
  },
  %{
    name: "Ana Silva",
    street: "Rua Acreana",
    number: 123,
    complement: "Apto 1",
    rg: "12345671",
    city: "Três Lagoas"
  },

  # Cruzeiro do Sul
  %{
    name: "João Oliveira",
    street: "Avenida Rio",
    number: 456,
    complement: "Casa 2",
    rg: "76543212",
    city: "Corumbá"
  },

  # Sena Madureira
  %{
    name: "Maria Souza",
    street: "Rua Amazonas",
    number: 789,
    complement: "Casa 3",
    rg: "98765435",
    city: "Ponta Porã"
  },

  # Feijó
  %{
    name: "Carlos Santos",
    street: "Avenida dos Rios",
    number: 321,
    complement: "Apto 4",
    rg: "34567897",
    city: "Belo Horizonte"
  },

  # Tarauacá
  %{
    name: "Juliana Lima",
    street: "Rua Madeira",
    number: 101,
    complement: "Apto 5",
    rg: "23456783",
    city: "Uberlândia"
  },

  # Maceió
  %{
    name: "Fernando Rocha",
    street: "Avenida das Flores",
    number: 202,
    complement: "Casa 6",
    rg: "87654321",
    city: "Contagem"
  },

  # Arapiraca
  %{
    name: "Roberta Costa",
    street: "Rua Verde",
    number: 303,
    complement: "Casa 7",
    rg: "87654320",
    city: "Juiz de Fora"
  },

  # Rio Largo
  %{
    name: "Ricardo Pereira",
    street: "Avenida das Árvores",
    number: 404,
    complement: "Apto 8",
    rg: "23456788",
    city: "Betim"
  },

  # Palmeira dos Índios
  %{
    name: "Amanda Santos",
    street: "Rua Tarauacá",
    number: 505,
    complement: "Apto 9",
    rg: "34567896",
    city: "Belém"
  },

  # Penedo
  %{
    name: "Gabriel Oliveira",
    street: "Avenida do Sol",
    number: 606,
    complement: "Casa 10",
    rg: "98765434",
    city: "Ananindeua"
  },

  # Macapá
  %{
    name: "Larissa Lima",
    street: "Rua das Palmeiras",
    number: 111,
    complement: "Casa 11",
    rg: "11111110",
    city: "Santarém"
  },

  # Santana
  %{
    name: "Lucas Silva",
    street: "Avenida do Mar",
    number: 222,
    complement: "Apto 12",
    rg: "22222221",
    city: "Marabá"
  },

  # Laranjal do Jari
  %{
    name: "Aline Oliveira",
    street: "Rua da Natureza",
    number: 333,
    complement: "Casa 13",
    rg: "33333332",
    city: "Castanhal"
  },

  # Oiapoque
  %{
    name: "Mateus Souza",
    street: "Avenida do Norte",
    number: 444,
    complement: "Apto 14",
    rg: "44444443",
    city: "João Pessoa"
  },

  # Pedra Branca do Amapari
  %{
    name: "Camila Santos",
    street: "Rua da Montanha",
    number: 555,
    complement: "Casa 15",
    rg: "55555554",
    city: "Campina Grande"
  },

  # Manaus
  %{
    name: "Rafael Lima",
    street: "Avenida dos Rios",
    number: 666,
    complement: "Apto 16",
    rg: "66666665",
    city: "Santa Rita"
  },

  # Parintins
  %{
    name: "Julia Oliveira",
    street: "Rua das Águas",
    number: 777,
    complement: "Casa 17",
    rg: "77777776",
    city: "Patos"
  },

  # Itacoatiara
  %{
    name: "Thiago Silva",
    street: "Avenida das Flores",
    number: 888,
    complement: "Apto 18",
    rg: "88888887",
    city: "Bayeux"
  },

  # Manacapuru
  %{
    name: "Isabela Santos",
    street: "Rua das Palmeiras",
    number: 999,
    complement: "Casa 19",
    rg: "99999998",
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

collect_places = [
  %{
    name: "Dragão do Mar",
    street: "Rua Dragão do Mar",
    number: 81,
    complement: "Centro Cultural",
    city: "Fortaleza"
  },
  %{
    name: "Parque da Cidade",
    street: "Alameda São Boaventura",
    number: 770,
    complement: "Área verde e lazer",
    city: "Niterói"
  },
  %{
    name: "MASP",
    street: "Rua do Masp",
    number: 181,
    complement: "Lugar grande e aberto",
    city: "São Paulo"
  },
  %{
    name: "Praça da Liberdade",
    street: "Praça da Liberdade",
    number: 145,
    complement: "Complexo cultural",
    city: "Belo Horizonte"
  },
  %{
    name: "Jardim Botânico",
    street: "Rua Engenheiro Ostoja Roguski",
    number: 690,
    complement: "Área verde e pesquisa",
    city: "Curitiba"
  },
  %{
    name: "Praia de Tambaú",
    street: "Avenida Almirante Tamandaré",
    number: 145,
    complement: "Praia urbana",
    city: "João Pessoa"
  },
  %{
    name: "Ponte Estaiada",
    street: "Avenida Raul Lopes",
    number: 145,
    complement: "Ponto turístico moderno",
    city: "Teresina"
  },
  %{
    name: "Parque das Nações Cincinato Naspolini",
    street: "Rua Henrique Lage",
    number: 325,
    complement: "Área verde e lazer",
    city: "Criciúma"
  },
  %{
    name: "Praça Tubal Vilela",
    street: "Avenida Anselmo Alves dos Santos",
    number: 145,
    complement: "Praça central",
    city: "Uberlândia"
  },
  %{
    name: "Parque Ambiental Ipiranga",
    street: "Avenida Tocantins",
    number: 145,
    complement: "Área verde e lazer",
    city: "Anápolis"
  },
  %{
    name: "Praça do Cidadão",
    street: "QNM 21",
    number: 145,
    complement: "Praça comunitária",
    city: "Ceilândia"
  },
  %{
    name: "Parque Flamboyant",
    street: "Av. Jamel Cecílio",
    number: 3300,
    complement: "Área verde e lazer",
    city: "Goiânia"
  },
  %{
    name: "Convento da Penha",
    street: "Praia da Costa",
    number: 145,
    complement: "Construção histórica",
    city: "Vitória"
  },
  %{
    name: "Parque da Maternidade",
    street: "Rua Santa Terezinha",
    number: 145,
    complement: "Área verde e lazer",
    city: "Feijó"
  },
  %{
    name: "Centro Histórico",
    street: "Rua João Batista",
    number: 145,
    complement: "Casarões coloniais",
    city: "Penedo"
  },
  %{
    name: "Teatro Amazonas",
    street: "Avenida Eduardo Ribeiro",
    number: 659,
    complement: "Teatro histórico",
    city: "Manaus"
  },
  %{
    name: "Pelourinho",
    street: "Rua do Pelourinho",
    number: 145,
    complement: "Centro histórico",
    city: "Salvador"
  },
  %{
    name: "Cristo Crucificado",
    street: "Rua Siqueira Campos",
    number: 145,
    complement: "Monumento religioso",
    city: "Vitória da Conquista"
  },
  %{
    name: "Catedral Metropolitana",
    street: "Esplanada dos Ministérios",
    number: 145,
    complement: "Catedral moderna",
    city: "Brasília"
  },
  %{
    name: "Praia da Costa",
    street: "Av. Dante Michelini",
    number: 145,
    complement: "Praia urbana",
    city: "Vila Velha"
  },
  %{
    name: "Parque Ambiental Ipiranga",
    street: "Avenida Tocantins",
    number: 145,
    complement: "Área verde e lazer",
    city: "Anápolis"
  },
  %{
    name: "Parque Centenário",
    street: "Rua João Batista Stocco",
    number: 145,
    complement: "Área verde e lazer",
    city: "Caxias"
  },
  %{
    name: "Parque Tia Nair",
    street: "Rua José Ribeiro Filho",
    number: 145,
    complement: "Área verde e lazer",
    city: "Cuiabá"
  },
  %{
    name: "Parque do Pombo",
    street: "Rua Antônio Trajano dos Santos",
    number: 145,
    complement: "Área verde e lazer",
    city: "Três Lagoas"
  },
  %{
    name: "Ver-o-Peso",
    street: "Avenida Boulevard Castilhos França",
    number: 145,
    complement: "Mercado e ponto turístico",
    city: "Belém"
  },
  %{
    name: "Morro do Careca",
    street: "Rua Erivan França",
    number: 145,
    complement: "Duna e ponto turístico",
    city: "Patos"
  },
  %{
    name: "Recife Antigo",
    street: "Rua do Bom Jesus",
    number: 145,
    complement: "Centro histórico",
    city: "Recife"
  },
  %{
    name: "Alto da Sé",
    street: "Largo da Sé",
    number: 145,
    complement: "Centro histórico",
    city: "Olinda"
  },
  %{
    name: "Cachoeira do Urubu",
    street: "BR-316",
    number: 145,
    complement: "Cachoeira e área verde",
    city: "Picos"
  },
  %{
    name: "Praça da Bíblia",
    street: "Avenida Gen. João Nepomuceno",
    number: 145,
    complement: "Praça central",
    city: "Duque de Caxias"
  },
  %{
    name: "Ponte Newton Navarro",
    street: "Praia da Redinha",
    number: 145,
    complement: "Ponte moderna",
    city: "Natal"
  },
  %{
    name: "Praça Coronel Pedro Osório",
    street: "Rua XV de Novembro",
    number: 145,
    complement: "Praça central",
    city: "Pelotas"
  },
  %{
    name: "Teatro Municipal",
    street: "Rua 7 de Setembro",
    number: 234,
    complement: "Teatro histórico",
    city: "Ji-Paraná"
  },
  %{
    name: "Praça do Centro Cívico",
    street: "Rua Agamenon Magalhães",
    number: 145,
    complement: "Praça central",
    city: "Mucajaí"
  },
  %{
    name: "Praça dos Girassóis",
    street: "Avenida NS 2",
    number: 145,
    complement: "Praça central",
    city: "Gurupi"
  },
  %{
    name: "Praia da Tartaruga",
    street: "Avenida 20 de Agosto",
    number: 145,
    complement: "Praia fluvial",
    city: "Lagarto"
  },
  %{
    name: "Praça dos Girassóis",
    street: "Avenida Teotônio Segurado",
    number: 145,
    complement: "Praça central",
    city: "Palmas"
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
  state = Repo.get(States.Schema, city.state_id)
  random_blood_type_id = :rand.uniform(8)
  blood_type = Repo.get!(BloodTypes.Schema, random_blood_type_id)

  Repo.insert(%Persons.Schema{
    name: person.name,
    street: person.street,
    number: person.number,
    complement: person.complement,
    rg: state.acronym <> "-" <> String.slice(person.rg, 0, 9),
    city: city,
    blood_type: blood_type
  })
end)

collect_places
|> Enum.each(fn place ->
  city = Repo.get_by(Cities.Schema, name: place.city)

  Repo.insert(%CollectPlaces.Schema{
    city: city,
    name: place.name,
    number: place.number,
    complement: place.complement,
    street: place.street
  })
end)

1..40
|> Enum.to_list()
|> Enum.each(fn number ->
  random_person =
    Repo.all(Persons.Schema) |> Enum.map(fn person -> person.id end) |> Enum.random()

  random_place =
    Repo.all(CollectPlaces.Schema) |> Enum.map(fn place -> place.id end) |> Enum.random()

  with {:ok, date} <- Date.new(2023, :rand.uniform(12), :rand.uniform(30)) do
    Repo.insert(%Donations.Schema{
      date: date,
      collect_place_id: random_place,
      person_id: random_person
    })
  end
end)
