import { History } from 'history'

export class RoutingService {
    constructor(private readonly history: History) {}

    push(path: string) {
        this.history.push(path)
    }
}
