module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define(
        "Professor", {
            "id": {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            "nome": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "sobrenome": {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: "professores",
            timestamps: true
        }
    );

    return Professor;
}