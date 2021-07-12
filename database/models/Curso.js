module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define(
        "Curso", {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "nome": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "area_id": {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            "tableName": "cursos",
            "timestamps": true
            // createdAt e updatedAt
        }
    );

    return Curso;
}