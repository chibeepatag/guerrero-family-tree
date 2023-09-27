# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "popper", to: 'popper.js', preload: true
pin "bootstrap", to: 'bootstrap.min.js', preload: true
pin "autoComplete", to: "https://ga.jspm.io/npm:@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js", preload: true
pin "FamilyTree", to: "familytree.js"
pin "config", to: "config.js"
pin "helpers", to: "helpers.js"
pin "menu", to: "menu.js"
pin "main", to: "main.js"
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "jquery", to: "https://ga.jspm.io/npm:jquery@3.7.1/dist/jquery.js"
pin "masonry-layout", to: "https://ga.jspm.io/npm:masonry-layout@4.2.2/masonry.js"
pin "desandro-matches-selector", to: "https://ga.jspm.io/npm:desandro-matches-selector@2.0.2/matches-selector.js"
pin "ev-emitter", to: "https://ga.jspm.io/npm:ev-emitter@1.1.1/ev-emitter.js"
pin "fizzy-ui-utils", to: "https://ga.jspm.io/npm:fizzy-ui-utils@2.0.7/utils.js"
pin "get-size", to: "https://ga.jspm.io/npm:get-size@2.0.3/get-size.js"
pin "outlayer", to: "https://ga.jspm.io/npm:outlayer@2.1.1/outlayer.js"

pin "boxicons", to: "https://ga.jspm.io/npm:boxicons@2.1.4/dist/boxicons.js"
