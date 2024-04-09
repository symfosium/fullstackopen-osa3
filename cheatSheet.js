console.log(req.params);        // Параметры маршрута
console.log(req.query);         // Параметры запроса (из строки запроса)
console.log(req.method);        // HTTP метод запроса
console.log(req.path);          // Путь запроса
console.log(req.headers);       // Заголовки запроса
console.log(req.body);          // Тело запроса (при наличии парсера, например, body-parser)
console.log(req.baseUrl);       // Базовый URL
console.log(req.hostname);      // Имя хоста, указанное в заголовке Host
console.log(req.ip);            // IP-адрес клиента
console.log(req.protocol);      // Протокол (http или https)
console.log(req.secure);        // Флаг, указывающий, был ли запрос выполнен по HTTPS
console.log(req.xhr);           // Флаг, указывающий, является ли запрос AJAX-запросом
console.log(req.cookies);       // Куки запроса (если присутствуют, если используется соответствующий middleware)