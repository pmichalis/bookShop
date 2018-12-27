import React from 'react';
import ReactDOM from 'react-dom';
import OrderView from './OrderView';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Order tests', () => {

    it('Snapshot matches', () => {
        const book = {
            name: "Book Title"
        }
        const wrapper = shallow(<OrderView book={book}/>);
        expect(wrapper).toMatchSnapshot();
    })
    it('Title of the book is displayed', () => {
        const book = {
            name: "Book Title"
        }
        const wrapper = shallow(<OrderView book={book}/>);
        expect(wrapper.find('.orderVier').find('span').text()).toBe(book.name);
    })

})
