import Add from '../src/components/Add';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Add />);
});

describe('<Comment /> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.children('h1')).toHaveLength(1);
    });
});
