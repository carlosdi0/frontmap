---
title: HTTP - Protocolo de comunicación web
description: Aprende sobre el protocolo HTTP, sus métodos, cabeceras, versiones (HTTP/1.1, HTTP/2, HTTP/3) y la seguridad con HTTPS.
---

## ¿Qué es HTTP?

El protocolo **HTTP** (HyperText Transfer Protocol) es el "idioma" que el navegador y el servidor utilizan para comunicarse. Es la base de toda la comunicación en la web moderna.

Una solicitud HTTP tiene varias partes importantes:

## Métodos HTTP

Los métodos HTTP le indican al servidor la acción que quieres realizar. Los más comunes son:

### GET
Para solicitar o obtener datos (por ejemplo, cargar una página web).

### POST
Para enviar datos al servidor (por ejemplo, los datos de un formulario de registro).

### Otros métodos importantes
- **PUT**: Para actualizar datos existentes
- **DELETE**: Para eliminar datos
- **PATCH**: Para actualizaciones parciales

## Cabeceras (Headers)

Son metadatos que proporcionan información adicional sobre la solicitud. Algunos ejemplos importantes:

### Headers comunes
- **Host**: El dominio al que te conectas (ej. google.com)
- **User-Agent**: El navegador que estás usando (ej. Mozilla/5.0...)
- **Accept-Language**: Tu idioma preferido (ej. es)
- **Content-Type**: El tipo de contenido que estás enviando
- **Authorization**: Credenciales de autenticación

## Ejemplo de solicitud HTTP

Una solicitud GET para la página de inicio de un sitio web se vería así:

```http
GET / HTTP/1.1
Host: google.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
Accept-Language: es
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

## HTTPS - HTTP Seguro 🔒

**HTTPS** (HTTP Secure) es la versión segura de HTTP. La "S" significa "Secure".

### ¿Cómo funciona la seguridad?
En lugar de enviar la información como una "postal", HTTPS la encripta y la envía como una carta en un sobre sellado y con llave.

### Certificados TLS/SSL
Esta seguridad se logra con un certificado **TLS** (Transport Layer Security), que es la versión moderna y segura del protocolo original **SSL** (Secure Sockets Layer).

## Evolución del protocolo HTTP

### HTTP/1.1
- Versión estándar durante muchos años
- Una conexión por solicitud
- Limitaciones de rendimiento

### HTTP/2
- Mejoró el rendimiento con el **multiplexing**
- Permite que el navegador y el servidor envíen y reciban múltiples archivos a la vez
- Una sola conexión para múltiples solicitudes
- Compresión de cabeceras

### HTTP/3
- La versión más reciente
- Usa un protocolo llamado **QUIC**
- Más rápido y eficiente
- Especialmente mejor en redes inestables o móviles
- Basado en UDP en lugar de TCP

## Referencias y recursos adicionales

- [The Evolution of HTTP](https://developers.google.com/web/fundamentals/performance/http2) - Un artículo de Google Developers que explica las diferencias entre las versiones de HTTP
- [HTTP/3 Explained](https://http3-explained.haxx.se/) - Un recurso detallado por Daniel Stenberg, el creador de cURL
- [How HTTPS Works](https://www.cloudflare.com/learning/ssl/how-does-ssl-work/) - Una explicación sencilla de Cloudflare sobre la seguridad web

