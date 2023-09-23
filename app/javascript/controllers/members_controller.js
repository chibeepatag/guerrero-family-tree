import { Controller } from "@hotwired/stimulus"
import autoComplete from 'autoComplete';

// Connects to data-controller="members"
export default class extends Controller {
  connect() {
    console.log("Hello stimulus!")
    console.log("creating autocomplete");
    this.createAutocomplete('spouse_auto');
    this.createAutocomplete('father_auto');
    this.createAutocomplete('mother_auto');   
  }

  createAutocomplete(field){
    const autocomplete = new autoComplete({
        name: field,
        selector: `#${field}`,
        wrapper: false,
        placeHolder: "Search for member...",
        data: {
            src: async (query) => {
              try {
                const source = await fetch(`/members/search?name=${query}`);
                const data = await source.json();
                return data;
              } catch (error) {
                return error;
              }
            },
            keys: ["name"]
        },
        resultItem: {
            highlight: true
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autocomplete.input.value = selection.name;
                    autocomplete.input.parentNode.querySelector(`#${autocomplete.input.dataset.field}`).value = selection.id
                }
            }
        }
    });
  }
}
