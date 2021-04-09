import React from 'react'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas basicas en CounterApp', () => {
   
    let wrapper =  shallow(<CounterApp />);


    // beforeEach se ejecuta antes de cada prueba 
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })


    test('Mostrar <CounterApp /> y sus valores por defecto', () => {
        
        const valorDefecto = wrapper.find('h2').text();

        expect(wrapper).toMatchSnapshot();

        expect(valorDefecto).toBe("10")
    });

    test('Mostrar <CounterApp /> y su valor por defecto debe de ser 100', () => {
        const valor = 100;

        const wrapper = shallow(<CounterApp value={valor} />);

        const valorDefecto = parseInt( wrapper.find('h2').text());

        expect(valorDefecto).toBe(valor)
    });

    test('Pruebas al boton de +1', () => {

        wrapper.find('button').at(0).simulate('click');


         const valor = wrapper.find('h2').text();

         expect(valor).toBe('11');
    });

    test('Pruebas al boton de -1', () => {

        wrapper.find('button').at(2).simulate('click');
    
        const valor = wrapper.find('h2').text();

         expect(valor).toBe('9');
    });
    
    test('Pruebas al boton de reset', () => {
        const valor = 105;

        const wrapper = shallow(<CounterApp value={valor} />);

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');

        wrapper.find('button').at(1).simulate('click');
    
        const valorObtenido = wrapper.find('h2').text();

         expect(valorObtenido).toBe(`${valor}`);
    });
    
    
})
