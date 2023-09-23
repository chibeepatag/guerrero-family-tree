# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "popper", to: 'popper.js', preload: true
pin "bootstrap", to: 'bootstrap.min.js', preload: true
pin "autoComplete", to: "https://ga.jspm.io/npm:@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js", preload: true
pin "FamilyTree", to: "familytree.js" 
pin_all_from "app/javascript/custom", under: "custom"