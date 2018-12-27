//import '../bower_components/iron-collapse/iron-collapse.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
//import '../bower_components/polymer/lib/elements/dom-repeat.js';
import '../dm/dmPokemons.js';
import '@polymer/iron-ajax/iron-ajax.js'
//import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';



class ListadoPokemons extends PolymerElement {
    static get is (){
      return 'listado-pokemons';
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
      
        </template>
        <iron-ajax id = "1" name = "1"
        handle-as= "json"
          url="https://pokeapi.co/api/v2/pokemon/"
          last-response = "{{pokemons}}"
          auto>
        </iron-ajax>
        
        <template is="dom-repeat" items="[[pokemons.results]]" name = "11" id="11">
          <detalle-pokemon
            nombre = "[[item.name]]"
            url = "[[item.url]]"
          >   </detalle-pokemon>
                    <iron-ajax
                    handle-as= "json"
                    url="[[item.url]]"
                    last-response = "{{pokemonsD}}"
                    auto
                    >
                </iron-ajax>
            <template is="dom-repeat" items="[[pokemonsD.abilities]]">
            <detalle-pokemon
                ability = "[[item.ability.name]]"
            ></detalle-pokemon>
        </template>
        `;
      }

    static get properties (){
      return{
        pokemons: {
          type: Array,
          value: function(){
            return [];
          }
        },
        pokemonsD: {
          type: Array,
          value: function(){
            return [];
          }
        }
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

  customElements.define(ListadoPokemons.is, ListadoPokemons);