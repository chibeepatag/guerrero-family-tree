# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "popper", to: 'popper.js', preload: true
pin "bootstrap", to: 'bootstrap.min.js', preload: true
pin "autoComplete", to: "https://ga.jspm.io/npm:@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js", preload: true
pin "FamilyTree", to: "familytree.js" 
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin "flatpickr", to: "https://ga.jspm.io/npm:flatpickr@4.6.13/dist/esm/index.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "chart.js", to: "https://ga.jspm.io/npm:chart.js@4.4.0/dist/chart.js"
pin "@kurkle/color", to: "https://ga.jspm.io/npm:@kurkle/color@0.3.2/dist/color.esm.js"
