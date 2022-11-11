import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { OverviewService } from "../../../../pages/overview/overview.service";
import { ProtocolViewModel } from "../../../../pages/overview/protocol.model";

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'probeto-file-treeview',
  templateUrl: './file-treeview.component.html',
  styleUrls: ['./file-treeview.component.scss']
})
export class FileTreeviewComponent implements OnInit {
  TREE_DATA: FoodNode[] = [];

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private overviewService: OverviewService) {
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  uniq(a: any) {
    return Array.from(new Set(a));
  }

  ngOnInit() {
    this.overviewService.getPopupSource().subscribe(protocols => {
      this.TREE_DATA = [];
      const schoolYears = [...new Set(protocols.map(item => item.schoolYearBeginn))];

      let childrens: Array<FoodNode> = [];

      schoolYears.forEach(schoolYear => {
        let item: FoodNode = {
          name: schoolYear?.toString() ?? "undefined"
        };

        const conferenceTypes = [...new Set(protocols.filter(item => item.schoolYearBeginn === schoolYear).map(item => item.conferenceType))];

        conferenceTypes.forEach(conferenceType => {
          const protocolsToAdd = protocols.filter(item => item.schoolYearBeginn === schoolYear && item.conferenceType === conferenceType);

          let conf = this.capitalizeFirstLetter(conferenceType!.toLowerCase());

          childrens.push(
            {
              name: conf,
              children: protocolsToAdd.map(protocol => {
                return {
                  name: protocol.title,
                }
              })
            }
          );

          item.children = childrens;
        });
        this.TREE_DATA.push(item);
        childrens = [];
      });


      this.dataSource.data = this.TREE_DATA;
    });



  }

}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
