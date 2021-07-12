module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define(
        "Turma", {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "duracao": {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "ano_inicio": {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "semestre": {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "curso_id": {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            "professor_id": {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            "tableName": "turmas",
            "timestamps": true
            // createdAt e updatedAt
        }
    );

    return Turma;
}