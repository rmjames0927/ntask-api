module.exports = (sequelize, DataType) => {
    const Products = sequelize.define("Products", {
        ProductID: { 
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: { 
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ProductNumber: { 
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        MakeFlag: { 
            type: DataType.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        FinishedGoodsFlag: { 
            type: DataType.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Color: { 
            type: DataType.STRING,
            allowNull: true
        },
        SafetyStockLevel: { 
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ReorderPoint: { 
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        StandardCost: { 
            type: DataType.DECIMAL(15, 2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ListPrice: { 
            type: DataType.DECIMAL(15, 2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Size: { 
            type: DataType.STRING,
            allowNull: true
        },
        SizeUnitMeasureCode: { 
            type: DataType.CHAR(3),
            allowNull: true
        },
        WeightUnitMeasureCode: { 
            type: DataType.CHAR(3),
            allowNull: true
        },
        Weight: { 
            type: DataType.DECIMAL(8, 2),
            allowNull: true
        },
        DaysToManufacture: { 
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ProductLine: { 
            type: DataType.CHAR(2),
            allowNull: true
        },
        Class: { 
            type: DataType.CHAR(2),
            allowNull: true
        },
        Style: { 
            type: DataType.CHAR(2),
            allowNull: true
        },
        ProductSubcategoryID: { 
            type: DataType.INTEGER,
            allowNull: true
        },
        ProductModelID: { 
            type: DataType.INTEGER,
            allowNull: true
        },
        SellStartDate: { 
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        SellEndDate: { 
            type: DataType.DATE,
            allowNull: true
        },
        DiscontinuedDate: { 
            type: DataType.DATE,
            allowNull: true
        },
        rowguid: { 
            type: DataType.UUID,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ModifiedDate: { 
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    }, {
        classMethods: {
            associate: (models) => {
                Products.hasMany(models.TransactionHistories);
            }
        }
    });
    return Products;
};