/* Interface: declara una serie de metodos o propiedades que deben ser implementados por una o mas clases.
Las interfaces vienen a suplir la imposibilidad de herencia multiple.
Una interfaz actúa como un contrato que asegura que las clases que la implementan proporcionen ciertas funcionalidades
En TypeScript, las interfaces son una característica clave que ayuda a definir la estructura de los objetos y cómo deben comportarse. Las interfaces solo definen la estructura, pero no proporcionan una implementación real. Es decir, una interfaz establece qué métodos o propiedades deben estar presentes en una clase, pero no especifica cómo se deben implementar esos métodos o qué valores deben tener las propiedades.*/
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  qty: number;
}
