import React from 'react';
import Textarea from './Textarea';
import TextareaFunc from './Textarea';

class FormJobInfo extends React.Component {
   constructor() {
     super();

     this.onMouse = this.onMouse.bind(this)
   }

   onMouse() {
     window.alert('Preencha com cuidado esta informação.')
   }

   render() {
      return ( 
        <form>
          <fieldset>
            <Textarea limit={'1000'} nameLabel={"Resumo do currículo: "} />
            <TextareaFunc limit={'40'} nameLabel={"Cargo: "} onMouse={ this.onMouse } />
            <Textarea limit={"500"} nameLabel={"Descrição do cargo: "} />
          </fieldset>
        </form>
      );
    }
  } 

export default FormJobInfo;
