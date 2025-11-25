import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  //Injecting Services From Another Module.
  //Intermodular Dependency
  constructor(private readonly helloService: HelloService) {}
  getAllUser() {
    return [
      { id: 1, name: 'Tony' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Brian' },
      { id: 4, name: 'Cynthia' },
      { id: 5, name: 'David' },
      { id: 6, name: 'Emily' },
      { id: 7, name: 'Felix' },
    ];
  }

  getUserById(id: number) {
    const user = this.getAllUser().find((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      user.id === id;
    });
    return user;
  }

  getWelcomeMessage(userId: number) {
    const user = this.getUserById(userId);

    if (!user) {
      return 'User not Found';
    }
    return this.helloService.getHelloWithName(user?.name);
  }
}
