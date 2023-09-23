function createAutocomplete(field){
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
function createAllAutocomplete(){
    console.log("creating autocomplete");
    createAutocomplete('spouse_auto');
    createAutocomplete('father_auto');
    createAutocomplete('mother_auto');       
}
document.addEventListener('DOMContentLoaded', createAllAutocomplete, false);