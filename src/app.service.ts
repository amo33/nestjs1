/*import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
*/

import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	animals: any
	constructor() {
		this.animals = {
			1: { name: '감자' },
			2: { name: '채림' },
		}
	}

	getAnimal(id: number): string {
		return this.animals[id]
	}
}