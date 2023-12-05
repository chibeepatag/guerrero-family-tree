import { Controller } from "@hotwired/stimulus"
import autoComplete from 'autoComplete';

// Connects to data-controller="members"
export default class extends Controller {
  static targets = [ "branch" ]
  connect() {
    console.log('hello from stimulus!')
    this.createAutocomplete();
  }
  treeByBranch(){
    const branchElement = this.branchTarget
    const branch = branchElement.value
    console.log(`generating tree by branch ${branch}`)
    window.location = `/tree/branch/${branch}`
  }
  createAutocomplete(){
    const autocomplete = new autoComplete({
        name: 'members-search',
        selector: '#head',
        wrapper: true,
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
                    autocomplete.input.parentNode.parentNode.querySelector('#member_id').value = selection.id;                    
                }
            }
        }
    });
  }
}