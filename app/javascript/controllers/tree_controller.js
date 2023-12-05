import { Controller } from "@hotwired/stimulus"
import FamilyTree from 'FamilyTree';
// Connects to data-controller="tree"
export default class extends Controller {
  connect() {
    console.log("Hello stimulus!");
    this.createTemplates()
    this.renderTree(nodes);
  }

  createTemplates(){
    function nodeTemplate(color, isMale){
      if(isMale){
        return `<line x1="13" x2="13" y1="0" y2="90" stroke="#${color}" stroke-width="25" opacity="0.35"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1" ></rect>;`
      } else {
        return `<line x1="13" x2="13" y1="0" y2="90" stroke="#${color}" stroke-width="25"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1"></rect>`;
      }
    }
    
    FamilyTree.templates.red = Object.assign({}, FamilyTree.templates.tommy);
    FamilyTree.templates.red.size = [350, 90]; 
    FamilyTree.templates.red.field_0 = '<text  data-text-overflow="ellipsis" style="font-size: 15px; font-weight: bold" fill="#222831" x="150" y="37" text-anchor="middle">{val}</text>'
    FamilyTree.templates.red.field_1 = '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="130" y="57" text-anchor="middle">{val}</text>';
    FamilyTree.templates.red.field_2 = '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="40" y="20" text-anchor="middle">{val}</text>';
    FamilyTree.templates.red.field_3 = '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="70" y="80" text-anchor="middle">YOB: {val}</text>';
    FamilyTree.templates.red.field_4 = '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="230" y="80" text-anchor="middle">YOD: {val}</text>';
              
    FamilyTree.templates.red_male = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.red_male.node = nodeTemplate('FF5757', true);
    FamilyTree.templates.red_female = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.red_female.node = nodeTemplate('FF5757', false);

    FamilyTree.templates.orange = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.orange_male = Object.assign({}, FamilyTree.templates.orange);
    FamilyTree.templates.orange_male.node = nodeTemplate('FF7729', true);
    FamilyTree.templates.orange_female = Object.assign({}, FamilyTree.templates.orange);
    FamilyTree.templates.orange_female.node = nodeTemplate('FF7729', false);

    FamilyTree.templates.yellow = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.yellow_male = Object.assign({}, FamilyTree.templates.yellow);
    FamilyTree.templates.yellow_male.node = nodeTemplate('FFB604', true);
    FamilyTree.templates.yellow_female = Object.assign({}, FamilyTree.templates.yellow);
    FamilyTree.templates.yellow_female.node = nodeTemplate('FFB604', false);

    FamilyTree.templates.green = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.green_male = Object.assign({}, FamilyTree.templates.green);
    FamilyTree.templates.green_male.node = nodeTemplate('0DC86F', true);
    FamilyTree.templates.green_female = Object.assign({}, FamilyTree.templates.green);
    FamilyTree.templates.green_female.node = nodeTemplate('0DC86F', false);

    FamilyTree.templates.blue = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.blue_male = Object.assign({}, FamilyTree.templates.blue);
    FamilyTree.templates.blue_male.node = nodeTemplate('2772FF', true);
    FamilyTree.templates.blue_female = Object.assign({}, FamilyTree.templates.blue);
    FamilyTree.templates.blue_female.node = nodeTemplate('2772FF', false);

    FamilyTree.templates.lavender = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.lavender_male = Object.assign({}, FamilyTree.templates.lavender);
    FamilyTree.templates.lavender_male.node = nodeTemplate('AE9CD6', true);
    FamilyTree.templates.lavender_female = Object.assign({}, FamilyTree.templates.lavender);
    FamilyTree.templates.lavender_female.node = nodeTemplate('AE9CD6', false);

    FamilyTree.templates.beige = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.beige_male = Object.assign({}, FamilyTree.templates.beige);
    FamilyTree.templates.beige_male.node = nodeTemplate('964b00', true);
    FamilyTree.templates.beige_female = Object.assign({}, FamilyTree.templates.beige);
    FamilyTree.templates.beige_female.node = nodeTemplate('964b00', false);
  }
  renderTree(nodes){
    let family = new FamilyTree(document.getElementById("tree"), {
      nodeMouseClick: "none",
      menu: {
              pdf: { text: "Export PDF" },
              png: { text: "Export PNG" },
              svg: { text: "Export SVG" },
              csv: { text: "Export CSV" },
              json: { text: "Export JSON" },
              export_pdf: {
                  text: "Export PDF A4",
                  icon: FamilyTree.icon.pdf(24, 24, "#7A7A7A"),
                  onClick: () => {
                    FamilyTree.pdfPrevUI.show(family, {
                      format: "A4",
                    });
                  }
              },
            },
          orientation: FamilyTree.orientation.left,     
          nodeBinding: {
              field_0: "name", 
              field_1: "nickname",
              field_2: "id",
              field_3: "birth",
              field_4: "death"
          },
          tags: {
              beige_female: {template: "beige_female"},
              red_female: {template: "red_female"},
              orange_female: {template: "orange_female"},
              yellow_female: {template: "yellow_female"},
              green_female: {template: "green_female"},
              blue_female: {template: "blue_female"},
              lavender_female: {template: "lavender_female"},
              beige_male: {template: "beige_male"},
              red_male: {template: "red_male"},
              orange_male: {template: "orange_male"},
              yellow_male: {template: "yellow_male"},
              green_male: {template: "green_male"},
              blue_male: {template: "blue_male"},
              lavender_male: {template: "lavender_male"}
          },    
          nodes: nodes
      });
  }
}
