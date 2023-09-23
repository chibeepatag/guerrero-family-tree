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
    FamilyTree.templates.red = Object.assign({}, FamilyTree.templates.tommy);
    FamilyTree.templates.red.size = [300, 90]; 
    FamilyTree.templates.red.field_0 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px; font-weight: bold" fill="#222831" x="150" y="37" text-anchor="middle">{val}</text>';
    FamilyTree.templates.red.field_1 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="130" y="57" text-anchor="middle">{val}</text>';
   FamilyTree.templates.red.field_2 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="40" y="20" text-anchor="middle">{val}</text>';
    FamilyTree.templates.red.field_3 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="70" y="80" text-anchor="middle">YOB: {val}</text>';
    FamilyTree.templates.red.field_4 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="200" y="80" text-anchor="middle">YOD: {val}</text>';
    FamilyTree.templates.red_male = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.red_male.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#FF5757" stroke-width="25" opacity="0.35"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1" ></rect>';
    FamilyTree.templates.red_female = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.red_female.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#FF5757" stroke-width="25"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1"></rect>';

    FamilyTree.templates.orange = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.orange.field_0 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px; font-weight: bold" fill="#222831" x="150" y="37" text-anchor="middle">{val}</text>';
    FamilyTree.templates.orange.field_1 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="130" y="57" text-anchor="middle">{val}</text>';
   FamilyTree.templates.orange.field_2 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="40" y="20" text-anchor="middle">{val}</text>';
    FamilyTree.templates.orange.field_3 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="70" y="80" text-anchor="middle">YOB: {val}</text>';
    FamilyTree.templates.orange.field_4 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="200" y="80" text-anchor="middle">YOD: {val}</text>';
    FamilyTree.templates.orange_male = Object.assign({}, FamilyTree.templates.orange);
    FamilyTree.templates.orange_male.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#FF7729" stroke-width="25" opacity="0.35"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1" ></rect>';
    FamilyTree.templates.orange_female = Object.assign({}, FamilyTree.templates.orange);
    FamilyTree.templates.orange_female.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#FF7729" stroke-width="25"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1"></rect>';

    FamilyTree.templates.yellow = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.yellow.field_0 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px; font-weight: bold" fill="#222831" x="150" y="37" text-anchor="middle">{val}</text>';
    FamilyTree.templates.yellow.field_1 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="130" y="57" text-anchor="middle">{val}</text>';
   FamilyTree.templates.yellow.field_2 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="40" y="20" text-anchor="middle">{val}</text>';
    FamilyTree.templates.yellow.field_3 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="70" y="80" text-anchor="middle">YOB: {val}</text>';
    FamilyTree.templates.yellow.field_4 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="200" y="80" text-anchor="middle">YOD: {val}</text>';
    FamilyTree.templates.yellow_male = Object.assign({}, FamilyTree.templates.yellow);
    FamilyTree.templates.yellow_male.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#FFB604" stroke-width="25" opacity="0.35"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1" ></rect>';
    FamilyTree.templates.yellow_female = Object.assign({}, FamilyTree.templates.yellow);
    FamilyTree.templates.yellow_female.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#FFB604" stroke-width="25"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1"></rect>';

    FamilyTree.templates.green = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.green.field_0 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px; font-weight: bold" fill="#222831" x="150" y="37" text-anchor="middle">{val}</text>';
    FamilyTree.templates.green.field_1 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="130" y="57" text-anchor="middle">{val}</text>';
   FamilyTree.templates.green.field_2 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="40" y="20" text-anchor="middle">{val}</text>';
    FamilyTree.templates.green.field_3 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="70" y="80" text-anchor="middle">YOB: {val}</text>';
    FamilyTree.templates.green.field_4 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="200" y="80" text-anchor="middle">YOD: {val}</text>';
    FamilyTree.templates.green_male = Object.assign({}, FamilyTree.templates.green);
    FamilyTree.templates.green_male.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#0DC86F" stroke-width="25" opacity="0.35"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1" ></rect>';
    FamilyTree.templates.green_female = Object.assign({}, FamilyTree.templates.green);
    FamilyTree.templates.green_female.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#0DC86F" stroke-width="25"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1"></rect>';

    FamilyTree.templates.blue = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.blue.field_0 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px; font-weight: bold" fill="#222831" x="150" y="37" text-anchor="middle">{val}</text>';
    FamilyTree.templates.blue.field_1 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="130" y="57" text-anchor="middle">{val}</text>';
   FamilyTree.templates.blue.field_2 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="40" y="20" text-anchor="middle">{val}</text>';
    FamilyTree.templates.blue.field_3 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="70" y="80" text-anchor="middle">YOB: {val}</text>';
    FamilyTree.templates.blue.field_4 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="200" y="80" text-anchor="middle">YOD: {val}</text>';
    FamilyTree.templates.blue_male = Object.assign({}, FamilyTree.templates.blue);
    FamilyTree.templates.blue_male.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#2772FF" stroke-width="25" opacity="0.35"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1" ></rect>';
    FamilyTree.templates.blue_female = Object.assign({}, FamilyTree.templates.blue);
    FamilyTree.templates.blue_female.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#2772FF" stroke-width="25"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1"></rect>';

    FamilyTree.templates.lavender = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.lavender.field_0 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px; font-weight: bold" fill="#222831" x="150" y="37" text-anchor="middle">{val}</text>';
    FamilyTree.templates.lavender.field_1 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="130" y="57" text-anchor="middle">{val}</text>';
   FamilyTree.templates.lavender.field_2 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="40" y="20" text-anchor="middle">{val}</text>';
    FamilyTree.templates.lavender.field_3 =
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="70" y="80" text-anchor="middle">YOB: {val}</text>';
    FamilyTree.templates.lavender.field_4 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="200" y="80" text-anchor="middle">YOD: {val}</text>';
    FamilyTree.templates.lavender_male = Object.assign({}, FamilyTree.templates.lavender);
    FamilyTree.templates.lavender_male.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#AE9CD6" stroke-width="25" opacity="0.35"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1" ></rect>';
    FamilyTree.templates.lavender_female = Object.assign({}, FamilyTree.templates.lavender);
    FamilyTree.templates.lavender_female.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#AE9CD6" stroke-width="25"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1"></rect>';

    FamilyTree.templates.beige = Object.assign({}, FamilyTree.templates.red);
    FamilyTree.templates.beige.field_0 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px; font-weight: bold" fill="#222831" x="150" y="37" text-anchor="middle">{val}</text>';
    FamilyTree.templates.beige.field_1 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="130" y="57" text-anchor="middle">{val}</text>';
   FamilyTree.templates.beige.field_2 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="40" y="20" text-anchor="middle">{val}</text>';
    FamilyTree.templates.beige.field_3 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="70" y="80" text-anchor="middle">YOB: {val}</text>';
    FamilyTree.templates.beige.field_4 = 
              '<text  data-text-overflow="ellipsis" style="font-size: 15px;" fill="#222831" x="200" y="80" text-anchor="middle">YOD: {val}</text>';
    FamilyTree.templates.beige_male = Object.assign({}, FamilyTree.templates.beige);
    FamilyTree.templates.beige_male.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#964b00 " stroke-width="25" opacity="0.35"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1" ></rect>';
    FamilyTree.templates.beige_female = Object.assign({}, FamilyTree.templates.beige);
    FamilyTree.templates.beige_female.node = '<line x1="13" x2="13" y1="0" y2="90" stroke="#964b00 " stroke-width="25"/><rect x="25" y="0" height="90" width="300" stroke-width="0" fill="#F1F1F1"></rect>';
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
                    family.exportPDF({
                        format: "A4",
                        padding: 20
                   });
                  },
                  layout: 'landscape'
              }
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
