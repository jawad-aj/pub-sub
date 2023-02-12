import * as _ from 'lodash-es';
export class WijmoGridUtil {

  static deleteRecordHandler(array: any[], grdIndex: number) {
    array.forEach((value, index) => {
      if (grdIndex == index) {
        array.splice(index, 1);
      }
    });
    return array;
  }

  static openGridObject(graphObject, gridObject) {
    graphObject = _.cloneDeep(gridObject);
    return graphObject;
  }

  static addGridHandler(graphArray: any[], gridObject) {
    graphArray.push(gridObject);
  }

}
