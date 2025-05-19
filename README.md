Para poder hacer uso del Analizador, se deben seguir estos pasos:
1. Descargar Node.js
2. Descargar VS Code
3. Descargar JRE
4. Descargar Git
5. Instalar la extension ANTLR4 grammar syntax support en VS Code. Luego modificar settings.json desde la configuracion de la extension. Debe quedar como:
"antlr4.generation": {
 "alternativeJar": "antlr-4.13.2-complete.jar",
 "mode": "external",
 "listeners": true,
 "visitors": true,
 "language": "JavaScript",
 "outputDir": "./generated"
}
Luego guardar (CTRL + S)
6. Clonar el repositorio a traves de una ventana de comandos: git clone https://github.com/nicoorodriguez/52106. Si el proyecto se clonó correctamente deberías ver el mensaje “done” en tu salida
7. Abre VS Code para trabajar con el código del proyecto. Para esto ejecuta en la ventana de comandos abierta: code .
8. Buscar cualquiera de los archivos input
9. Para correr un archivo input, se debe abrir una terminal (del propio VSC), y poner el codigo: node index.js. Si se desea evaluar otra gramatica, no olvidar guardar los cambios (CTLR + S)
10. Una vez el codigo se ejecute, en la terminal del VSC deben aparecer:
    1. Si el input funciona correctamente, en consola se debe mostrar el mensaje "¡Analisis exitoso!", de caso             contrario se muestra en qué linea hay error, y de qué tipo
    2. Tabla de tokens y lexemas
    3. Salida esperada
    4. Código traducido a JavaScript 

El código se encarga de verificar la sintaxis y semántica del bloque 'segun caso'/switch

Aclaraciones
1. La salida que muestra, depende de la expresion inicial que se coloca. Si no hay nada es porque se ejecutó 'salir'
2. La tabla de lexemas y tokens se crea solamente si el input es correcto
3. Al ejecutar el programa, sale una advertencia que no afecta el rendimiento del programa

