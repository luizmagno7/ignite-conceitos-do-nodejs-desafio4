import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(error.status).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
