import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

function UserException(message: string, status: number) {
  this.message = message;
  this.status = status;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new UserException("User doesn't exists!", 404);
    }

    this.usersRepository.turnAdmin(user);

    return user;
  }
}

export { TurnUserAdminUseCase };
