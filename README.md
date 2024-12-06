## Contrato de Donaciones
* Permitir a los usuarios enviar ETH al contrato como donaciones.
* Almacenar la cantidad total donada.
* Registrar las donaciones de cada dirección.
* Permitir que el propietario del contrato retire los fondos.
  
# Donations Contract

El contrato **Donations** permite gestionar donaciones de ETH de forma simple y transparente. Su principal funcionalidad es recibir, almacenar y rastrear las donaciones realizadas por diferentes usuarios. 

## Funcionalidades principales

1. **Recibir donaciones**:
   - Los usuarios pueden enviar ETH al contrato usando la función `donate`.
   - Solo se aceptan donaciones mayores a 0 ETH.

2. **Rastrear donaciones**:
   - Cada donación se asocia con la dirección del donante.
   - Si un donante realiza múltiples donaciones, su balance se acumula.
   - Se lleva un registro de todas las direcciones que han donado.

3. **Consultar el balance total**:
   - A través de la función `getTotalDonations`, cualquiera puede consultar el balance total acumulado en el contrato.

## Eventos

- **DonationReceived**: Se emite cada vez que un usuario realiza una donación, registrando la dirección del donante y el monto.

## Cómo funciona

1. Un usuario interactúa con el contrato y envía ETH utilizando la función `donate`.
2. El contrato verifica que la donación sea válida (> 0 ETH) y actualiza el balance del donante en el registro.
3. Si es la primera vez que el usuario dona, su dirección se agrega al listado de donantes.
4. Cualquiera puede consultar el balance total del contrato o el historial de donaciones de un usuario específico.

## Aplicaciones

El contrato es ideal para:
- Campañas de crowdfunding.
- Donaciones benéficas.
- Proyectos que requieren transparencia en el manejo de fondos.
