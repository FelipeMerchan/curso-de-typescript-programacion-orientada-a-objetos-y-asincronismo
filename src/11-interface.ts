/*
  Interfaces implementadas en las clases
  Permiten crear contratos, que llamamos interfaces, y forzar que cada
  una de las clases cumplan con un estandar de métodos y atributos.
*/

/* Todo lo que coloquemos en la interfaz es porque pensamos que tengan acceso
public, el acceso es parte de las clases no de las interfaces, si queremos algo
privado no podemos colocarlo en la interfaz porque tendrémos este error:
interface Driver {
  private port: number; <= 'private' modifier cannot appear on a type member.
}

Si queremos cosas privadas deben ser definidas dentro de las clases como en la línea 34. */
export interface Driver {
  /* Attributes */
  database: string;
  password: string;
  port: number;
  /* Methods */
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

/* No es una extensión solo estamos teniendo un contrato
que indica que todos los que implementen la interfaz deben implementar
los métodos y atributos de la interfaz, pero no es una herencia: */
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number,
  ) {}

  disconnect(): void {
    /* Code */
  }

  isConnected(name: string): boolean {
    /* Code */
    return true;
  }

  connect(): void {
    /* Code */
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) {}

  disconnect(): void {
    /* Code */
  }

  isConnected(name: string): boolean {
    /* Code */
    return true;
  }

  connect(): void {
    /* Code */
  }
}
