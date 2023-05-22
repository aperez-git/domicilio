### Mutiny
[Mutiny](https://es.quarkus.io/guides/mutiny-primer) es una biblioteca de programación intuitiva y reactiva. Es el modelo principal para escribir aplicaciones reactivas con Quarkus.
Con Mutiny todo está orientado a eventos: se reciben eventos y se reacciona a ellos. Este aspecto orientado a eventos abarca la naturaleza asíncrona de los sistemas distribuidos y proporciona una forma elegante y precisa de expresar continuación.

Mutiny ofrece dos tipos que son a la vez impulsados por eventos:

- Un Uni emite un único evento (un elemento o un fallo). Los Unis son convenientes para representar acciones asíncronas que devuelven 0 o 1 resultado. Un buen ejemplo es el resultado de enviar un mensaje a la cola de un corredor de mensajes.

- Un Multi emite múltiples eventos (n ítems, 1 fallo o 1 finalización). Los Multi pueden representar flujos de elementos, potencialmente ilimitados. Un buen ejemplo es la recepción de mensajes de una cola de agentes de mensajes.

Estos dos tipos permiten representar cualquier tipo de interacción. Son fuentes de eventos. Son observados (suscripción) y se recibe una notificación cuando emiten un elemento, un fallo o, en el caso de un Multi acotado, un evento de finalización. Cuando se recibe el evento (el suscriptor), se puede procesar (por ejemplo, transformarlo, filtrarlo). Con Mutiny, se va a escribir código como onX().action(), que se lee como "on item X do action".