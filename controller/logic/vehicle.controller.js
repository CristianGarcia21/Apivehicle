const vehicleDto = require("../../model/dto/vehicle.dto");

exports.createVehicle = (req, res, next) => {
    let vhc = {
        color: req.body.color,
        numberDoor: req.body.numberDoor,
        traction: req.body.traction,
        brand: req.body.brand,
        carBody: req.body.carBody,
        model: req.body.model,
        wheelSize: req.body.wheelSize,
        numberSeats: req.body.numberSeats,
        enginePower: req.body.enginePower,
        serialNumber: req.body.serialNumber
    };
    vehicleDto.update({_id: req.body.id}, vhc, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json (
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {
    vehicleDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json (
            {
                info: data
            }
        );
    });
};

exports.getByCode = (req, res, next) => {
    vehicleDto.getByCode({code: req.params.code}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json (
            {
                info: data
            }
        );
    });
};

exports.deleteVehicle = () => {
    vehicleDto.delete({_id: req.body.id}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}