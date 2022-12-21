export const queries = {

    getAllProducts: 'SELECT * FROM Products',
    addNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById: 'SELECT * FROM Products Where Id = @Id' 
}