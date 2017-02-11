module.exports = (sequelize, DataType) => {
    const TransactionHistories = sequelize.define("TransactionHistories", {
        TransactionID: { 
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProductID: { 
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ReferenceOrderID: { 
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ReferenceOrderLineID: { 
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        TransactionDate: { 
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        TransactionType: { 
            type: DataType.CHAR(1),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Quantity: { 
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ActualCost: { 
            type: DataType.DECIMAL(15, 2),
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
        }
    },{
        classMethods: {
            associate: (models) => {
                TransactionHistories.belongsTo(models.Products);
            }
        }
    });
    return TransactionHistories;
};