<h1 align="center"> RESTful APIs </h1>
<h3 align="center"> ¿Qué es una API? </h3>

![API](https://res.cloudinary.com/practicaldev/image/fetch/s--DLateTam--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zok42v209rer7ppancui.gif)

Una **Interfaz de Programación de Aplicaciones** (**A**pplication **P**rogramming **I**nterface) es una interfaz desarrollada con el propósito de que un componente de software ofrezca servicios al exterior, es decir, a otros componentes de software. Está determinada por un conjunto de reglas preestablecidas que definen cómo las aplicaciones pueden comunicarse entre sí.  Como esta interfaz no está pensada para que interactúe directamente con las personas, no necesita ningún tipo de gráfico. En su lugar, se usan los llamados **endpoints** o **rutas**.

La función principal de las **API**s es la de simplificar el acceso a los recursos que ella ofrece, mediante una capa de abstracción. Cualquier documento adjunto a estas, que describa la forma en que tienen que ser usadas, se conoce como **documentación**. Entre las herramientas más conocidas para documentar encontramos a [_Postman_](https://www.postman.com/) o [_Swagger_](https://swagger.io/).

<h3 align="center"> ¿Qué es REST? </h3>

**REST** es un **estilo de arquitectura de software** desarrollado por Roy Fielding en el año 2000 en su tesis doctoral. Su nombre es el acrónimo en inglés de **RE**presentational **S**tate **T**ransfer, en español, _transferencia de estado representacional_: esto significa que en estas aplicaciones lo que estamos transfiriendo son representaciones de los datos en algún formato, indicando en cada solicitud el estado completo necesario para llevar a cabo esa solicitud. Fue creado con el proposito de estructurar el diseño y desarrollo de la **World Wide Web**. REST define una **serie de reglas** que determinan el comportamiento de un sistema de hipermedia distribuido a través de Internet, como la WEB.

![ARQUITECTURAS](https://cdn.discordapp.com/attachments/1089135096008822869/1164140359429931148/1696426774020.gif?ex=65422132&is=652fac32&hm=26725b0883eaf74dc6d0cc84565c34d63a27b0684c50ad4f217c3675b0f9daa3&)

Como todo arquitecto, su principal objetivo es el de que la estructura que crean se sostenga la mayor cantidad de tiempo posible, de la mejor forma posible, y de la forma más simple posible. Teniendo en mente estos principios básicos, se desarrollaron unos lineamientos muy específicos a seguir:

#### Lineamientos principales de las arquitecturas REST

-   PATRÓN DE DISEÑO CLIENTE | SERVIDOR: Este patrón refuerza el principio de separación de intereses, como en el caso del patrón MVC. Tanto el cliente como el servidor deben estar separados y bien discriminados en sus funciones. Deben poder escalarse de forma independiente. `#Escalabilidad` `#Portabilidad`
-   SIN ESTADO (STATELESS): Cada solicitud que el cliente hace al servidor debe contener todos los datos necesarios para poder procesarla. El servidor NO debe mantener el estado entre solicitudes.
-   CACHEABILIDAD: Los clientes pueden guardar datos provenientes de las respuestas del servidor. Un buen uso de este principio permite eliminar parcial o totalmente algunas interacciones entre cliente y servidor. `#Rendimiento` `#Escalabilidad`
-   RECURSOS: En las arquitecturas REST, TODO es considerado un recurso: libros, items, usuarios, colecciones de items, etc. Cada recurso se identifica con una URL.
-   MÉTODOS: Verbos HTTP para poder realizar operaciones básicas (CRUD) con los recursos.
-   REPRESENTACIONES: El cliente debería de poder elegir la forma en que serán representados los recursos: JSON, XML, HTML, etc. Lo fundamental es que la representación está totalmente separada del recurso en sí.
-   INTERFAZ UNIFORME: La interfaz entre cliente y servidor tiene que ser uniforme y consistente para todas las interacciones. Los endpoints tienen siempre que hacer lo mismo.

Cuando todos estos lineamientos se usan para **estructurar una aplicación**, la misma gozará de las siguientes **propiedades**:

-   Simplicidad: estructura simple.
-   Escalabilidad: fácil de escalar.
-   Portabilidad: fácil de trasladar, de usar en distintos contextos.
-   Fiabilidad: confiable, seguro.
-   Visibilidad: gestión de acceso a la API.
-   Modificabilidad: abierto a modificaciones. Fácil de modificar.

<h3 align="center"> Entonces... ¿Qué es una API REST? </h3>

Básicamente, cualquier API que haya sido construída siguiendo los patrones de arquitectura establecidos por REST, es denominada una **API de REST** o **RESTful API**.

<h1 align="center"> LINKS </h1>

-   [OpenAPI - Documentación oficial](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md)
-   [Best API REST Practices](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
-   [Códigos de estado - Documentación oficial](https://datatracker.ietf.org/doc/html/rfc7231)
