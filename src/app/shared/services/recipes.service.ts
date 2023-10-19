import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes = {
    recetas_saludables: [
      {
        id: 0,
        nombre: 'Ensalada de Pollo a la Parrilla',
        descripcion:
          'Una ensalada fresca y deliciosa con tiras de pollo a la parrilla, lechuga, tomate, pepino y queso feta, aderezada con vinagreta de limón y aceite de oliva.',
        tiempo_preparacion: '20 minutos',
        porciones: 4,
        img: 'ensalada_de_pollo_a_la_parrilla.jpg',
        ingredientes: [
          '2 pechugas de pollo a la parrilla, cortadas en tiras',
          '4 tazas de lechuga fresca',
          '1 tomate, cortado en cubos',
          '1/2 pepino, en rodajas finas',
          '1/4 de cebolla roja, picada',
          '1/4 de taza de queso feta desmenuzado',
          'Aceitunas negras al gusto',
          'Vinagreta de limón y aceite de oliva',
        ],
        instrucciones: [
          'En un tazón grande, combine la lechuga, el tomate, el pepino, la cebolla y las aceitunas negras.',
          'Agregue las tiras de pollo a la parrilla encima de la ensalada.',
          'Espolvoree el queso feta por encima.',
          'Rocíe la vinagreta de limón y aceite de oliva sobre la ensalada.',
          'Mezcle suavemente y sirva de inmediato.',
        ],
      },
      {
        id: 1,
        nombre: 'Salmón al Horno con Espárragos',
        descripcion:
          'Un plato ligero y saludable que combina filetes de salmón al horno con espárragos, sazonado con limón y especias al gusto.',
        tiempo_preparacion: '25 minutos',
        porciones: 2,
        img: 'salmon_al_horno_con_esparragos.jpg',
        ingredientes: [
          '2 filetes de salmón fresco',
          '1 manojo de espárragos',
          '2 cucharadas de aceite de oliva',
          'Jugo de 1 limón',
          'Sal y pimienta al gusto',
          'Especias a elección (como eneldo o romero)',
        ],
        instrucciones: [
          'Precaliente el horno a 200°C (392°F).',
          'En una bandeja para hornear, coloque los filetes de salmón y los espárragos.',
          'Rocíe el aceite de oliva y el jugo de limón sobre el salmón y los espárragos.',
          'Espolvoree con sal, pimienta y las especias de su elección.',
          'Hornee durante 15-20 minutos o hasta que el salmón esté cocido y los espárragos estén tiernos.',
        ],
      },
      {
        id: 2,
        nombre: 'Ensalada de Quinua y Aguacate',
        descripcion:
          'Una ensalada rica en proteínas y nutrientes que combina quinua, aguacate, maíz, frijoles negros y cilantro, aderezada con limón y aceite de oliva.',
        tiempo_preparacion: '30 minutos',
        porciones: 4,
        img: 'ensalada_de_quinua_y_aguacate.jpg',
        ingredientes: [
          '1 taza de quinua cocida',
          '1 aguacate maduro, cortado en cubos',
          '1/2 taza de maíz dulce',
          '1/2 taza de frijoles negros',
          '1/4 de taza de cilantro fresco, picado',
          'Jugo de 2 limones',
          'Aceite de oliva, sal y pimienta al gusto',
        ],
        instrucciones: [
          'En un tazón grande, combine la quinua, el aguacate, el maíz, los frijoles negros y el cilantro.',
          'Exprima el jugo de limón sobre la ensalada y mezcle suavemente.',
          'Añada aceite de oliva, sal y pimienta al gusto.',
          'Refrigere durante 20 minutos antes de servir.',
        ],
      },
      {
        id: 3,
        nombre: 'Sopa de Lentejas y Vegetales',
        descripcion:
          'Una reconfortante sopa de lentejas cargada de vegetales y sazonada con especias al gusto.',
        tiempo_preparacion: '45 minutos',
        porciones: 6,
        img: 'sopa_de_lentejas_y_vegetales.jpg',
        ingredientes: [
          '1 taza de lentejas secas',
          '1 zanahoria, cortada en rodajas',
          '1 apio, cortado en trozos',
          '1 cebolla, picada',
          '2 dientes de ajo, picados',
          '4 tazas de caldo de verduras',
          'Especias a elección (como cúrcuma o comino)',
        ],
        instrucciones: [
          'En una sartén grande, saltee la cebolla y el ajo hasta que estén dorados.',
          'Agregue las lentejas, zanahoria, apio y especias, y revuelva durante unos minutos.',
          'Vierta el caldo de verduras y cocine a fuego lento durante unos 30-35 minutos o hasta que las lentejas estén tiernas.',
          'Sirva caliente.',
        ],
      },
      {
        id: 4,
        nombre: 'Batido de Frutas y Espinacas',
        descripcion:
          'Un batido saludable que combina espinacas frescas con frutas como plátano y piña, endulzado con miel o edulcorante natural.',
        tiempo_preparacion: '10 minutos',
        porciones: 2,
        img: 'batido_de_frutas_y_espinacas.jpg',
        ingredientes: [
          '2 tazas de espinacas frescas',
          '1 plátano maduro',
          '1 taza de piña fresca',
          '1/2 taza de yogur natural',
          '1 taza de agua o leche de almendras',
          'Miel o edulcorante natural al gusto',
        ],
        instrucciones: [
          'Coloque las espinacas, el plátano, la piña, el yogur y el agua (o leche de almendras) en una licuadora.',
          'Mezcle hasta obtener una consistencia suave.',
          'Añada miel o edulcorante si lo desea.',
          'Sirva en vasos y disfrute.',
        ],
      },
      {
        id: 5,
        nombre: 'Bol de Avena con Frutas',
        descripcion:
          'Un desayuno saludable con avena cocida, plátano, bayas y nueces, todo endulzado con miel.',
        tiempo_preparacion: '10 minutos',
        porciones: 2,
        img: 'bol_de_avena_con_frutas.jpg',
        ingredientes: [
          '1 taza de avena',
          '1 taza de leche (puede ser leche de almendras o avena)',
          '1 plátano, en rodajas',
          '1/2 taza de bayas mixtas (fresas, arándanos, frambuesas)',
          '1 cucharada de miel',
          'Nueces o almendras picadas (opcional)',
        ],
        instrucciones: [
          'Cocine la avena según las instrucciones del paquete con la leche.',
          'Divida la avena cocida en dos tazones.',
          'Decore con plátano en rodajas, bayas y nueces o almendras (si se desea).',
          'Rocíe miel por encima y sirva.',
        ],
      },
      {
        id: 6,
        nombre: 'Tacos de Pavo y Aguacate',
        descripcion:
          'Tacos saludables con pavo molido magro, aguacate, tomates cherry y una mezcla de lechuga y cebolla, todo servido con yogur griego bajo en grasa como salsa.',
        tiempo_preparacion: '25 minutos',
        porciones: 4,
        img: 'tacos_de_pavo_y_aguacate.jpg',
        ingredientes: [
          '1 libra de tavo molido magro',
          '1 cucharada de aceite de oliva',
          '1 cucharadita de comino',
          '1 cucharadita de chile en polvo',
          '8 tortillas de maíz o trigo integral',
          '1 aguacate maduro, en rodajas',
          '1 taza de tomates cherry, cortados a la mitad',
          'Lechuga picada y cebolla roja en rodajas finas para decorar',
          'Yogur griego bajo en grasa (como salsa)',
        ],
        instrucciones: [
          'En una sartén grande, caliente el aceite de oliva y cocine el pavo molido a fuego medio hasta que esté dorado.',
          'Agregue el comino y el chile en polvo, y revuelva bien.',
          'Caliente las tortillas en una sartén durante unos segundos de cada lado.',
          'Monte los tacos con el pavo cocido, aguacate, tomates cherry, lechuga, cebolla y un poco de yogur griego como salsa.',
          'Sirva caliente.',
        ],
      },
      {
        id: 7,
        nombre: 'Budín de Chía con Frutas',
        descripcion:
          'Un desayuno o postre saludable que combina semillas de chía con leche de almendras y se sirve con frutas frescas.',
        tiempo_preparacion: '5 minutos',
        porciones: 2,
        img: 'budin_de_chia_con_frutas.jpg',
        ingredientes: [
          '1/4 de taza de semillas de chía',
          '1 taza de leche de almendras o coco',
          '1 cucharadita de miel o jarabe de arce',
          '1/2 cucharadita de extracto de vainilla',
          'Frutas frescas para decorar (fresas, kiwi, mango, etc.)',
        ],
        instrucciones: [
          'En un tazón, mezcle las semillas de chía, la leche, la miel o jarabe de arce y el extracto de vainilla.',
          'Revuelva bien y refrigere durante al menos 2 horas o durante la noche para que las semillas de chía se expandan y formen una textura similar a un pudín.',
          'Sirva con frutas frescas por encima.',
        ],
      },
    ],
  };

  constructor() {}

  getAllRecipes() {
    return this.recipes.recetas_saludables;
  }

  getOneRecipe(id: number) {
    return this.recipes.recetas_saludables[id];
  }
}
