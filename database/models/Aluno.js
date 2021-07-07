module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define(
        "alunos",
        {
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
        },
        {
            "tableName": "alunos",
            "timestamps": true 
            // createdAt e updatedAt
        }
    );

    return Aluno;
}


