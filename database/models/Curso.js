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

    Curso.associate = (models) => {

        // N:1  curso pertence a uma area
        Curso.belongsTo(models.Area, {
            as: 'area',
            foreignKey: 'area_id'
        });

        //1:N um curso possui muitas turmas
        Curso.hasMany(models.Turma, {
            as: 'turmas',
            foreignKey: 'curso_id'
        });

    }

    return Curso;
}