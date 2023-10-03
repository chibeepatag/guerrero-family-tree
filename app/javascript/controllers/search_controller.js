import { Controller } from "@hotwired/stimulus"
import autoComplete from 'autoComplete';

// Connects to data-controller="members"
export default class extends Controller {
  connect() {
    this.createAutocomplete();
  }

  createAutocomplete(){
    const autocomplete = new autoComplete({
        name: 'members-search',
        selector: '#members-search',
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
                    window.location.href = `/members?head=${selection.id}`
                }
            }
        }
    });
  }
}