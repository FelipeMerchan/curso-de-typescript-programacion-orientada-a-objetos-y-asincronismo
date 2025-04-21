/*
  Decoradores
  Agrega validaciones o funcionalidad extra. Los podemos encontrar en clases.
  Permiten decorar propiedades o métodos .
*/
/* Si empeiza en mayúscula como IsEmail quiere decir que es un decorador,
si empieza en minúscula como isEmail es una función: */
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from "class-validator";
import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{}
/* Con una interfaz podemos verificar que se cumpla un determinado tipo
de dato para todas las propiedades de la interfaz, pero podemos hacer validaciones
que permitan cuidar más la integridad de los datos y no solo validar que sea un string, number, etc;
sino que realmente cumpla una validación, por eso vamos a crear una clase: */
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string; // <= el ! le indica a TypeScript que vamos a inicializar la variable en otro momento

  /* El decorador verifica que image sea una url, es decir, realiza validaciones
  a una propiedad: */
  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    /* Los decoradores no nos van a indicar errores de la misma forma visual en que lo
    hace TypeScript, sino solo hasta que hagamos runtime de la app. No hay feedback instantaneo. */
    dto.name = 'asdsd';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    /* Los errores de los decoradores los vamos a tener que ejecutar con un validate o un reject
    de la librería class-validator */
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
    /*
    Error:
    [
      ValidationError {
        target: CreateCategoryDto { name: 'a' },
        value: 'a',
        property: 'name',
        children: [],
        constraints: { isLength: 'name must be longer than or equal to 4 characters' }
      },
      ValidationError {
        target: CreateCategoryDto { name: 'a' },
        value: undefined,
        property: 'image',
        children: [],
        constraints: {
          isNotEmpty: 'image should not be empty',
          isUrl: 'image must be a URL address'
        }
      }
    ]
    */
  }
})();
