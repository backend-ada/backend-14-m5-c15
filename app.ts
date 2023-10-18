import express, { json } from 'express';

const app = express();
const PORT = process.env.PORT ?? 45000;

app.use(json());

// Este endpoint respeta los lineamientos REST
// http://127.0.0.1:60300/products
app.get('/products', (req, res) => {
	res.status(200).json('db');
});

// Tengan en cuenta que aprendimos desde el principio a armar las APIs según REST
// Pero tranquilamente el mismo endpoint de arriba podría ser así y NO respetar los parámetros REST
// Ya que los endpoints sólo deben apuntar a recursos y contener sustantivos, no verbos. Ese trabajo ya lo hacen los verbos HTTP:
app.get('/get-products', (req, res) => {
	// Además, es una buena práctica siempre retornar las respuestas en formato JSON
	// Otros lenguajes como Python incluyen los métodos json.loads() y json.dumps() para manipular este formato...
	res.status(200).send('db');
});

// Este es otro ejemplo de un endpoint para obtener un producto
// Que NO respeta los lineamientos REST
app.get('/get-product?id=123', (req, res) => {
	res.status(200).send('db');
});

// Es importante siempre nombrar las colecciones de datos en plural
// El cliente quiere ver el product 1234, entonces solicita esa data a http://127.0.0.1:60300/product/1234
app.get('/product/:id', (req, res) => {
	// Esto no está del todo mal, pero no le avisa al cliente que podría haber otros productos
	// Por este motivo es mejor poner este recurso en plural y luego indicar el id de alguno en particular: /products/1234
	res.status(200).json('db');
});

app.patch('/products/:id', (req, res) => {
	const db = { stock: [{ name: 'test', id: 'test' }] };
	const { id } = req.params;
	const productFound = db.stock.find((product: any) => product.id === id);

	// Muy importante tomarse el tiempo de investigar cuáles son los códigos de estado de respuesta del servidor
	// que corresponden para cada situación
	if (!productFound)
		return res.status(400).json({ error: 'Product not found' });

	res.status(200).json({
		message: `Product ${productFound.name} updated successfully!`,
	});
});

// Es una buena práctica hacer un buen uso de los anidamientos en los endpoints para mostrar relaciones
// Supongamos que un usuario quiere ver todos los comentarios que tiene un post en particular
// Un endpoint válido sería http://127.0.0.1:60300/posts/33/comments
app.get('/posts/:id/comments', (req, res) => {
	// Lógica para filtrar solo los comentarios de una base de datos hipotética de posts...
	res.status(200).json();
});

// Muchas veces las bases de datos pueden ser muy grandes, en cuyos casos solicitarles datos puede ser un proceso muy lento y costoso
// Por este moitivo, lo mejor es ofrecer un buen sistema de filtrado, ordenamiento y paginación
// Supongamos que nuestra API está preparada para recibir ciertos query params
// Un usuario entoces solicita a http://127.0.0.1:60300/products?tags=wood&sort=asc&content=10
// Y así obtener todos los procutos hechos en madera, ordenados alfabéticamente en orden ascendente y con una paginación de 10 items por página
app.get('/products', (req, res) => {
	const { tags, sort, content } = req.query;

	// Lógica para filtrar datos según estos parámetros...
	const result = 'Datos filtrados';

	res.status(200).json(result);
});

app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
