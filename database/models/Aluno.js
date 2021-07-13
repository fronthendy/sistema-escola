module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define(
        "Aluno", {
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
            "sobrenome": {
                type: DataTypes.STRING,
                allowNull: false
            },
            "ano_matricula": {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            "tableName": "alunos",
            "timestamps": true
            // createdAt e updatedAt
        }
    );

    Aluno.associate = (models) => {

        // N:M aluno pertencem a varias turmas
        Aluno.belongsToMany(models.Turma, {
            // apelido da relação
            as: 'turmas',
            // nome da tabela intermediária
            through: 'alunos_has_turmas',
            // chave estrangeira desse model
            foreignKey: 'aluno_id',
            // chave estrangeira do outro model
            otherKey: 'turma_id',
            // adiciona createdAt e updatedAt
            timestamps: true
        });
    }

    return Aluno;
}