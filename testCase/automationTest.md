# Casos de Prueba

## Funcionalidad: Inicio de Sesión

- **CP01 Positivo**: Usuario `standard_user`, contraseña `secret_sauce`. Redirige al inventario.
- **CP02 Negativo**: Usuario `error_user`, contraseña `wrong_sauce`. Muestra error "Usuario y contraseña no corresponden".
- **CP02.1 Negativo**: Usuario `error_user`, contraseña `wrong_sauce`. Usuario bloqueado muestra mensaje específico.

## Funcionalidad: Agregar al Carrito

- **CP03 Agregar al carrito**: Click en "añadir al carrito" del producto. El badge del carrito muestra "1".
- **CT03.1  Agregar dos productos muestra badge con 2**: Al agregar 2 items de la web. El badge del carrito muestra "2".
- **CP04 Eliminar con error**: Agregar producto y luego quitar. Verificar que el badge muestre "0" o que desaparezca.
- **CP05 API test**: Llamar a la API de Mercado Libre. Verificar que la lista de departamentos no esté vacía.
- **CT05.1 - La respuesta de la API debe ser rápida**: LA respuesta del API debe ser menor a 3seg.
