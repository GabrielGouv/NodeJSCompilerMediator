import 'jest'

import { ProcessWrapper } from '../src/runtime/process-wrapper';

const filePath = './__tests__/files/php'

test('run php file', () => {
    let command = "php Test.php"
    let input = 'Hello PHP'
    let program = new ProcessWrapper(command, {
        currentDirectory: filePath
    })
    program.writeInput(input)
    program.onOutput().subscribe((data) => {
        expect(data.toString()).toBe(input)
    })
    program.onFinish().subscribe((returnValue) => {
        expect(returnValue).toBe(0)
    })
})