import { Router } from "express"
import SelecaoController from "./app/controllers/selecaoController.js"

const router = Router()

//Rota para adicionar novas seleções
router.post('/selecoes', SelecaoController.store)

//Rota para listar todas seleções
router.get('/selecoes',SelecaoController.index)

//Rota para buscar seleções por id
router.get('/selecoes/:id',SelecaoController.show)

//Rota para atualizar uma seleção
router.put('/selecoes/:id',SelecaoController.update)

//Rota para apagar uma seleção
router.delete('/selecoes/:id', SelecaoController.delete)

export default router