module.exports = (sequelize, _DataTypes) => {

    const PatientSurgerie = sequelize.define('Patient_surgeries', 
        {},
        { timestamps: false },
    );

    PatientSurgerie.associate = (models) => {
        models.Patients.belongsToMany(models.Surgeries, {
            as: 'surgeries',
            through: PatientSurgerie,
            foreignKey: 'patient_id',
            otherKey: 'surgery_id',    
        });
        models.Surgeries.belongsToMany(models.Patients, {
            as: 'patients',
            through: PatientSurgerie,
            foreignKey: 'surgery_id',
            otherKey: 'patient_id',    
        });
    };

    return PatientSurgerie;
};