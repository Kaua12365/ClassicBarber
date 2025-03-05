import { Router } from 'express';
import { AgendamentoPOST, QuantidadeAgendamento } from '../repository/agendamentoRepository.js';
import ValidarAgendamento from '../validation/agendarValidation.js';

const endpoints = Router();

endpoints.post("/agendar", async (req, resp) => {
    try {
        ValidarAgendamento(req);
        
        let obj = req.body;
        let id = await AgendamentoPOST(obj);

        resp.send({ id: id })
        
    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }
});

endpoints.get("/agendar", async (req, resp) => {
    try {
        let agendamentos = await QuantidadeAgendamento();

        resp.send({
            total_agendamentos: agendamentos[0].total_agendamentos 
        });
        
    } catch (err) {
        resp.status(400).send({
            error: err.message
        });
    }
});

export default endpoints;