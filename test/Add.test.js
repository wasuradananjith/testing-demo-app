import Add from '../src/components/Add';
import Form from '../src/components/Form';

let wrapper;

beforeEach(() => {
    wrapper = mount(<Add />);
});

describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render one <Form>', () => {
        expect(wrapper.find(Form)).toHaveLength(1);
    });

    it('should render 2 <label>s', () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
