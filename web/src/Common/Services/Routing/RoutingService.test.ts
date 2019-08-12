import * as TypeMoq from 'typemoq'
import { History } from 'history'

import { RoutingService } from '.'

describe('Routing Service', () => {
    it('should push new path', () => {
        const mockHistory = TypeMoq.Mock.ofType<History>()

        mockHistory.setup(x => x.push(TypeMoq.It.isValue('/'))).verifiable()

        const routingService = new RoutingService(mockHistory.object)

        routingService.push('/')

        mockHistory.verifyAll()
    })
})
