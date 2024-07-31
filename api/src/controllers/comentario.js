const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {};
const create = async (req, res) => {
    try {
        const comentario = await prisma.colaborador.create({
            where: {
                comentario: req.params.comentario
            }
            
        });
        return res.status(201).json(comentario);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const read = async (req, res) => {
    if (req.params.comentario !== undefined) {
        const comentario = await prisma.comentario.findUnique({
            where: {
                comentario: req.params.comentario
            }
           
        });
        return res.json(comentario);
    } else {
        const comentario = await prisma.comentario.findMany();
        return res.json(comentario);
    }
};

const update = async (req, res) => {
    try {
        const comentario = await prisma.comentario.update({
            where: {
                comentario: req.params.comentario
            }
    
        });
        return res.status(202).json(comentario);
    } catch (error) {
        return res.status(404).json({ message: "Comentario não encontrado" });
    }
};

const del = async (req, res) => {
    try {
        const comentario = await prisma.comentario.delete({
            where: {
                comentario: req.params.comentario
            }
        });
        return res.status(204).json(comentario);
    } catch (error) {
        return res.status(404).json({ message: "Comentario não encontrado" });
    }
}

module.exports = {
    create,
    read,
    update,
    del
};