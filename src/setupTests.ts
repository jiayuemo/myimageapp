// Setup testing with enzyme

const { configure } = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

// configure the enzyme adapater
configure({ adapter: new Adapter() });

// expect at least one assertion in each test
beforeEach(() => expect.hasAssertions());
