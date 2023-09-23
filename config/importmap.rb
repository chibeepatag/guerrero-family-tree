# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "popper", to: 'popper.js', preload: true
pin "bootstrap", to: 'bootstrap.min.js', preload: true
pin "autoComplete", to: "https://ga.jspm.io/npm:@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js", preload: true
pin "FamilyTree", to: "familytree.js" 
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
