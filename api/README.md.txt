Api Explora Experiences

API REFERENCE

Port
localhost:3000

Dependencies

    "cookie-parser": "^1.4.6",
    "express": "^4.18.1",
    "morgan": "^1.10.0",
    "node-fetch": "^2.6.1",
    "underscore": "^1.13.3"


Endpoints

GET/experiences
Returns 
the endpoint sends a JSON object


POST/experiences
Allows the front to request experiences

| Parameter            | Type     | Description               |
| :------------------- | :------- | :------------------------ |
| `Titulo`             | `string` | **Required**              |
| `Descripcion`        | `string` | **Required**              |
| `Sala"`              | `string` | **Required**              |
| `Imagen_Relacionada` | `string` | **Required**              |
| `Imagen`             | `string` | **Required**              |


PUT/experiences/:id
Allows the front to request experiences id to make an update

| Parameter            | Type     | Description               |
| :------------------- | :------- | :------------------------ |
| `Titulo`             | `string` | **Required**              |
| `Descripcion`        | `string` | **Required**              |
| `Sala"`              | `string` | **Required**              |
| `Imagen_Relacionada` | `string` | **Optional**              |
| `Imagen`             | `string` | **Optiona**               |


DELETE/experiences/:id
Allows the front to request experiences id to make a delete

| Parameter        | Type     | Description               |
| :--------------- | :------- | :------------------------ |
| `id`             | `string` | **Required**              |


GET//experiences/:id
Allows the front to request experiences id to make a filter

| Parameter        | Type     | Description               |
| :--------------- | :------- | :------------------------ |
| `id`             | `string` | **Required**              |


GET/experiences/salas/:nombre
Allows the front to request room name to make a filter, this can be in lowercase or uppercase

| Parameter        | Type     | Description               |
| :--------------- | :------- | :------------------------ |
| `nombre`         | `string` | **Required**              |


