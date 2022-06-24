1 definimos los types de acciones en un archivo, son constantes que tienen un string que describe una accion

2 creamos las acciones que seria la logica, estas son funciones (ejem: pueden recibir parametro como el id para enviar por payload) 
que en su cuerpo reciben el type y el payload este ultimo es opcional


3 Creamos el reducer con el estado inical y el switch, importo cada uno de los types que irian en los case y en el reducer le asigno al state= initialState en caso de que no me venga

4 Creamos el index de los reducer para combinarlos y exportarlos, en caso de tener varios los voy agregando, lo agrego como una propiedad de un objeto: despues va el reducer ejem: "cart: cartReducer"
5 Creamos la store y agregamos como componente padre en App mediante Provider
6 Creamos lo diferentes eventos en la UI mediante funiones, con el useSelector para acceder a la store y el dispatch llamamos las acciones
