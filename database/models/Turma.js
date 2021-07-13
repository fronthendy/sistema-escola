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

    Turma.associate = (models) => {

        // N:1 varias turmas pertencem a 1 curso
        Turma.belongsTo(models.Curso, {
            as: 'curso',
            foreignKey: 'curso_id'
        });

        // N:1 varias turmas pertencem a 1 professor
        Turma.belongsTo(models.Professor, {
            as: 'professor',
            foreignKey: 'professor_id'
        });

        // N:M uma turma possui varios alunos
        Turma.belongsToMany(models.Aluno, {
            as: 'alunos',
            through: 'alunos_has_turmas',
            foreignKey: 'turma_id',
            otherKey: 'aluno_id',
            timestamps: true
        });

    }

    return Turma;
}