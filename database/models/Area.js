module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define(
        "Area", {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "tipo": {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            "tableName": "areas",
            "timestamps": true
            // createdAt e updatedAt
        }
    );

    return Area;
}