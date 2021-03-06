# Despliegue

## Instalación Expo-CLI
```bash
$ npm install --global expo-cli
```

## Instalar dependencias

Si las versiones de package.json son correctas:

```bash
$ expo install
```

Dependencias:

```bash
@react-navigation/native 
@react-navigation/stack 
@react-native-community/masked-view 
react-native-gesture-handler 
react-native-reanimated 
react-native-screens 
expo-sqlite
```

## Iniciar app
```bash
$ expo start
```

## Iniciar emulador android (Linux)
```bash
cd ~/Android/Sdk/emulator
./emulator -avd Pixel_3a_API_30_x86
```


### Agregar path de modulos globales npm a variable de entorno (Linux)
```bash
export PATH=~/.npm-global/bin:$PATH
```




# Notas

Identificador de instalación (para versionado y demás)

```js
import Constants from 'expo-constants';
const id = Constants.installationId;
```

Almacenamiento persistente para metadatos

```js
import AsyncStorage from '@react-native-community/async-storage';
```


## Backlog  

### TODO
- [x] Pantalla para menu principal.  
- [x] Pantalla para menu de ayuda.  
- [x] Testear navegación entre pantallas.  
- [x] Pantalla para listado de depósitos.  
- [x] Pantalla para edición de depósitos.  
- [x] Testear creación y eliminación de depósitos.  
- [x] Pantalla para listado de categorías.  
- [x] Pantalla para detalles de categoría.  
- [x] Pantalla para listado de productos.  
- [x] Pantalla para edición de productos.  
- [x] Testear creación, edición y eliminación de productos.  
- [x] Pantalla para listado de items de un producto.  
- [ ] Formulario de edición de items.  
- [ ] Testear inserción, edición y eliminación de items de un producto.  
- [ ] Testear inserción de items en edición de nuevo producto (sin guardar).  
- [ ] Listar items agrupados por producto en detalles de depósito.  
- [ ] Listar items agrupados por producto en detalles de categoría.   
- [ ] Completar acciones del menú de ayuda.  
- [ ] Métodos para exportar/importar/sincronizar db.  
- [ ] Soporte para actualización del modelo de db.  
- [ ] Herramientas para consultas especiales a la db (dashboard?).  
- [ ] Incorporar fotografía de producto/item/deposito.  
----  
- [ ] Refactoring.  
- [ ] Edición de estilos y diseño UI.  

### Fix
- [ ] Al eliminar elementos, la última tarjeta no se borra (ver qué devuelve la consulta vacía).  

