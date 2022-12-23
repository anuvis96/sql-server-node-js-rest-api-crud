export const queries = {

    getAllProducts: 'SELECT * FROM Products',
    addNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById: 'SELECT * FROM Products Where Id = @Id',
    deleteProduct: 'DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products',
    updateProductById: 'UPDATE [webstore].[dbo].[Products] SET name = @name, description = @description, quantity = @quantity WHERE Id = @Id'
}