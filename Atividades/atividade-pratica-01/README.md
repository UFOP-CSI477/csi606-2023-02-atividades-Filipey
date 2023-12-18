## API feita em Elixir com o framework Phoenix.

Para subir a aplicação, basta utilizar o seguinte comando dentro do diretório /api:
```docker
docker compose up
```
O container da API irá automaticamente popular o banco com dados iniciais para teste. A aplicação estará disponível na porta 4000.

## Documentação das rotas

### Cidades
<details>
 <summary><code>GET</code> <code><b>/api/cities</b></code> <code>Obtem todas as cidades salvas</code></summary>

##### Parametros
> None
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/cities
> ```

</details>
<details>
 <summary><code>GET</code> <code><b>/api/cities/{id}</b></code> <code>Obtem uma cidade a partir do seu ID</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ID      |  obrigatório | number   | ID da cidade a ser pesquisada  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `CityJSON`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/cities/1
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/api/cities/by_name/{nome}</b></code> <code>Obtem todas as cidades que possuem a string {nome} em seu nome</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | nome      |  obrigatório | string   | Nome da cidade ou apenas parte do nome |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/cities/by_name/João
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/api/cities</b></code> <code>Salva uma nova cidade no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | nome      |  obrigatório | string   | Nome da cidade  |
> | state_id      |  opcional | number   | ID do Estado a qual pertence. Se não enviado, será salvo como NULL  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Cidade salva com sucesso", "data": CidadeJSON}`
##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @city.json http://localhost:4000/api/cities
> ```

</details>

<details>
 <summary><code>PUT</code> <code><b>/api/cities/{id}</b></code> <code>Atualiza uma cidade salva no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID da cidade a ser atualizada  |
> | nome      |  opcional | string   | Nome da cidade  |
> | state_id      |  opcional | number   | ID do Estado a qual pertence  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Cidade atualizada com sucesso", "data": CidadeJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @city.json http://localhost:4000/api/cities/1
> ```

</details>

<details>
 <summary><code>DELETE</code> <code><b>/api/cities/{id}</b></code> <code>Remove uma cidade salva no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID da cidade a ser deletada  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Cidade deletada com sucesso", "data": CidadeJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:4000/api/cities/1
> ```

</details>

### Tipos Sanguíneos

<details>
 <summary><code>GET</code> <code><b>/api/blood_types</b></code> <code>Obtem todos típos sanguíneos salvos</code></summary>

##### Parametros
> None
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/blood_types
> ```

</details>
<details>
 <summary><code>GET</code> <code><b>/api/blood_types/{id}</b></code> <code>Obtem um tipo sanguíneo a partir do seu ID</code></summary>

##### Parametros
> None
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `BloodTypeJSON`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/blood_types/1
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/api/blood_types</b></code> <code>Salva um novo tipo sanguíneo no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | type      |  obrigatório | string   | Tipo do sangue (A, O, B, etc)  |
> | factor      |  obrigatório | string   | Fator do sangue (- ou +)  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Tipo sanguíneo salvo com sucesso", "data": BloodTypeJSON}`
##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @blood_type.json http://localhost:4000/api/blood_types
> ```

</details>

<details>
 <summary><code>PUT</code> <code><b>/api/blood_types/{id}</b></code> <code>Atualiza um tipo sanguíneo salvo no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID do tipo sanguíneo a ser atualizado  |
> | type      |  opcional | string   | Tipo do sangue (A, O, B, etc)  |
> | factor      |  opcional | string   | Fator do sangue (- ou +)  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Tipo sanguíneo atualizado com sucesso", "data": BloodTypeJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @blood_type.json http://localhost:4000/api/blood_types/1
> ```

</details>

<details>
 <summary><code>DELETE</code> <code><b>/api/blood_types/{id}</b></code> <code>Remove um tipo sanguíneo salvo no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID do tipo sanguíneo a ser deletado  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Tipo sanguíneo deletado com sucesso", "data": BloodTypeJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:4000/api/blood_types/1
> ```

</details>

### Locais de Coleta

<details>
 <summary><code>GET</code> <code><b>/api/collect_places</b></code> <code>Obtem todos os locais de coleta salvos</code></summary>

##### Parametros
> None
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/collect_places
> ```

</details>
<details>
 <summary><code>GET</code> <code><b>/api/collect_places/{id}</b></code> <code>Obtem um local de coleta a partir do seu ID</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ID      |  obrigatório | number   | ID do local de coleta a ser pesquisado  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `CollectPlaceJSON`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/collect_places/1
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/api/collect_places/by_name/{nome}</b></code> <code>Obtem todos os locais de coleta que possuem a string {nome} em seu nome</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | nome      |  obrigatório | string   | Nome do local de coleta ou apenas parte do nome |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/collect_places/by_name/Praia
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/api/collect_places</b></code> <code>Salva um novo local de coleta no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | nome      |  obrigatório | string   | Nome do local de coleta  |
> | street      |  obrigatório | string   | Nome da rua do local  |
> | number      |  obrigatório | number   | Número do local  |
> | complement      |  obrigatório | string   | Complemento para referência do local  |
> | city_id      |  opcional | number   | ID da cidade a qual pertence. Se não enviado, será salvo como NULL  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Local de coleta salvo com sucesso", "data": CidadeJSON}`
##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @collect_place.json http://localhost:4000/api/collect_places
> ```

</details>

<details>
 <summary><code>PUT</code> <code><b>/api/collect_places/{id}</b></code> <code>Atualiza um local de coleta salvo no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID do local de coleta a ser atualizado  |
> | street      |  opcional | string   | Nome da rua do local  |
> | number      |  opcional | number   | Número do local  |
> | complement      |  opcional | string   | Complemento para referência do local  |
> | city_id      |  opcional | number   | ID da cidade a qual pertence  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Local de coleta atualizado com sucesso", "data": CidadeJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @collect_places.json http://localhost:4000/api/collect_places/1
> ```

</details>

<details>
 <summary><code>DELETE</code> <code><b>/api/collect_places/{id}</b></code> <code>Remove um local de coleta salvo no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID do local de coleta a ser deletado  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Cidade deletada com sucesso", "data": CidadeJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:4000/api/collect_places/1
> ```

</details>

### Doações

<details>
 <summary><code>GET</code> <code><b>/api/donations</b></code> <code>Obtem todas doações salvas</code></summary>

##### Parametros
> None
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/donations
> ```

</details>
<details>
 <summary><code>GET</code> <code><b>/api/donations/{id}</b></code> <code>Obtem uma doação a partir do seu ID</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ID      |  obrigatório | number   | ID da doação a ser pesquisada  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `DonationJSON`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/donation/1
> ```

</details>


<details>
 <summary><code>POST</code> <code><b>/api/donations</b></code> <code>Salva uma doação no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | date      |  obrigatório | date   | Data da doação  |
> | person_id      |  obrigatório | number   | ID do doador  |
> | collect_place_id      |  obrigatório | number   | ID do local de doação  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Doação salva com sucesso", "data": DonationJSON}`
##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @donation.json http://localhost:4000/api/collect_places
> ```

</details>

<details>
 <summary><code>PUT</code> <code><b>/api/donations/{id}</b></code> <code>Atualiza uma doação salva no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID da doação a ser atualizada  |
> | date      |  opcional | date   | Data da doação  |
> | person_id      |  opcional | number   | ID do doador  |
> | collect_place_id      |  opcional | number   | ID do local de doação  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Doação atualizada com sucesso", "data": DonationJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @donation.json http://localhost:4000/api/collect_places/1
> ```

</details>

<details>
 <summary><code>DELETE</code> <code><b>/api/collect_places/{id}</b></code> <code>Remove uma doação salva no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID da doação a ser deletada  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Doação deletada com sucesso", "data": DonationJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:4000/api/donations/1
> ```

</details>

### Pessoas

<details>
 <summary><code>GET</code> <code><b>/api/persons</b></code> <code>Obtem todas as pessoas salvas</code></summary>

##### Parametros
> None
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/persons
> ```

</details>
<details>
 <summary><code>GET</code> <code><b>/api/persons/{id}</b></code> <code>Obtem uma pessoa a partir do seu ID</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ID      |  obrigatório | number   | ID da pessoa a ser pesquisada  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `PersonJSON`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/persons/1
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/api/persons/by_name/{nome}</b></code> <code>Obtem todas as pessoas que possuem a string {nome} em seu nome</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | nome      |  obrigatório | string   | Nome da pessoa ou apenas parte do nome |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/persons/by_name/Pedro
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/api/persons</b></code> <code>Salva uma nova pessoa no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | nome      |  obrigatório | string   | Nome da pessoa  |
> | street      |  obrigatório | string   | Nome da rua da pessoa  |
> | number      |  obrigatório | number   | Número da residencia da pessoa  |
> | complement      |  obrigatório | string   | Complemento para referência do local  |
> | rg      |  obrigatório | string   | RG da pessoa  |
> | city_id      |  opcional | number   | ID da cidade a qual pertence. Se não enviado, será salvo como NULL  |
> | blood_type_id      |  opcional | number   | ID do tipo sanguíneo que possui. Se não enviado, será salvo como NULL  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Pessoa salva com sucesso", "data": PersonJSON}`
##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @person.json http://localhost:4000/api/persons
> ```

</details>

<details>
 <summary><code>PUT</code> <code><b>/api/persons/{id}</b></code> <code>Atualiza uma pessoa salva no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID da pessoa a ser atualizada  |
> | nome      |  opcional | string   | Nome da pessoa  |
> | street      |  opcional | string   | Nome da rua da pessoa  |
> | number      |  opcional | number   | Número da residencia da pessoa  |
> | complement      |  opcional | string   | Complemento para referência do local  |
> | rg      |  opcional | string   | RG da pessoa  |
> | city_id      |  opcional | number   | ID da cidade a qual pertence  |
> | blood_type_id      |  opcional | number   | ID do tipo sanguíneo que possui |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Pessoa atualizada com sucesso", "data": PersonJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @person.json http://localhost:4000/api/persons/1
> ```

</details>

<details>
 <summary><code>DELETE</code> <code><b>/api/persons/{id}</b></code> <code>Remove uma pessoa salva no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID da pessoa  a ser deletada  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Pessoa deletada com sucesso", "data": PersonJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:4000/api/persons/1
> ```

</details>

### Estados
<details>
 <summary><code>GET</code> <code><b>/api/states</b></code> <code>Obtem todos estados salvos</code></summary>

##### Parametros
> None
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/states
> ```

</details>
<details>
 <summary><code>GET</code> <code><b>/api/states/{id}</b></code> <code>Obtem um estado a partir do seu ID</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ID      |  obrigatório | number   | ID do estado a ser pesquisada  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `StateJSON`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/states/1
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/api/states/by_name/{nome}</b></code> <code>Obtem todos estados que possuem a string {nome} em seu nome</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | nome      |  obrigatório | string   | Nome do estado ou apenas parte do nome |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"data": []}`
##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:4000/api/states/by_name/Rio
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/api/states</b></code> <code>Salva um novo estado no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | nome      |  obrigatório | string   | Nome da estado  |
> | acronym      |  obrigatório | string   | Sigla do estado  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Estado salva com sucesso", "data": StateJSON}`
##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @state.json http://localhost:4000/api/states
> ```

</details>

<details>
 <summary><code>PUT</code> <code><b>/api/states/{id}</b></code> <code>Atualiza um estado salvo no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | descrição                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID do estado a ser atualizado  |
> | nome      |  opcional | string   | Nome da estado  |
> | acronym      |  opcional | string   | Sigla do estado  |

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Estado atualizado com sucesso", "data": StateJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @state.json http://localhost:4000/api/states/1
> ```

</details>

<details>
 <summary><code>DELETE</code> <code><b>/api/states/{id}</b></code> <code>Remove um estado salvo no banco</code></summary>

##### Parametros
> | nome      |  tipo     | tipo de dado               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  obrigatório | number   | ID do estado a ser deletado  |
##### Respostas

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"message": "Estado deletada com sucesso", "data": StateJSON}`
> | `400`         | `application/json`        | `"status": "not_found", "message": "Entidade não encontrada"`
##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:4000/api/states/1
> ```

</details>
