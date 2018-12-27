//import '../bower_components/iron-collapse/iron-collapse.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-collapse/iron-collapse.js';
//import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';



class DetallePokemons extends PolymerElement {
    static get is (){
      return 'detalle-pokemon';
    }

    static get template () {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html`
        <style>
        :host {
          display: block;
        }
      </style>
        <h1 on-click="toggle">[[nombre]]</h1>[[desplegado]]
     
          <iron-collapse opened="[[desplegado]]">
          <h2>[[ability]]</h2>
          <h2>[[url]]</h2>   
        </iron-collapse>
 
          <template is="dom-if" if=[[pie]]>
            <lazy-element><p>lazy loading...</p></lazy-element>
          </template>  
        `;
      }

    static get properties (){
      return{
        nombre: String,
        url: String,
        ability: String
      };
    }

    resaltarDescripcion(e){
        console.log(e);
        this.description = this.description.toUpperCase();
    }

    toggle(){
        this.desplegado = !this.desplegado;
    }
   
  }

  customElements.define(DetallePokemons.is, DetallePokemons);