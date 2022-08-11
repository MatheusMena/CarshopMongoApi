// interface IModel, que será usada para a conexão com o banco de dados
export interface IModel<T> {
  create(obj:T):Promise<T>,
  read():Promise<T[]>,
  readOne(_id:string):Promise<T | null>,
  update(id:string, obj:T):Promise<T | null>,
  delete(id:string):Promise<T | null>,
}
