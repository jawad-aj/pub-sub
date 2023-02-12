import {SupportingDocument} from '../../../business-layer/models/SupportingDocument';
import {FormArray, FormControl} from '@angular/forms';
import {DiaryBrief} from '../../../business-layer/models/brief/Diary.brief';

export class FileUploadUtil {

  /*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
  /**
   * File Upload Method
   */

  static fileUpload(files: FileList, imagesFormArray: FormArray, canvas): number {
    const keys = Object.keys(files);
    let res: number = -1;
    keys.forEach((value, index) => {
      let size = (files[value].size / 1024) / 1024;
      let ext: string = files[index].name.substring(files[index].name.lastIndexOf('.') + 1, files[index].name.length);
      if (files[value].type.match(/(jpe?g|jpeg|png)$/)) {
        const supportingDocument: SupportingDocument = new SupportingDocument();
        const img = new Image();
        const reader = new FileReader();
        supportingDocument.name = files[value].name;
        supportingDocument.type = files[value].type.split('/')[1];
        reader.onload = (evt) => {
          if (evt.target['readyState'] === FileReader.DONE) {
            img.src = String(evt.target['result']);
            img.onload = () => {
              if (size > 10) {
                canvas.width = 1280;
                canvas.height = 720;
                const context = <CanvasRenderingContext2D> canvas.getContext('2d');
                context.drawImage(img, 0, 0, 1280, 720);
                supportingDocument.contents = context.canvas.toDataURL();
                imagesFormArray.push(new FormControl(supportingDocument));
              } else {
                supportingDocument.contents = img.src;
                imagesFormArray.push(new FormControl(supportingDocument));
              }
            };
          }
        };
        reader.readAsDataURL(files[value]);
      } else if ((files[value].type.match(/(pdf|plain)$/) || (files[value].type === '' && (ext === 'xlsx' || ext === 'xls' || ext === 'docx' || ext === 'doc')))) {
        const supportingDocument: SupportingDocument = new SupportingDocument();
        const img = new Image();
        const reader = new FileReader();
        supportingDocument.name = files[value].name;
        if (files[value].type === '') {
          supportingDocument.type = files[value].name.substring(files[value].name.lastIndexOf('.') + 1, files[value].name.length);
        } else if (files[value].type.match(/(plain)$/)) {
          supportingDocument.type = 'txt';
        } else {
          supportingDocument.type = files[value].type.substring(files[value].type.lastIndexOf('/') + 1);
        }
        let fileString: string;
        reader.readAsBinaryString(files[value]);
        reader.onloadend = (evt) => {
          if (evt.target['readyState'] === FileReader.DONE) {
            fileString = reader.result as string;
            supportingDocument.contents = btoa(fileString);
            imagesFormArray.push(new FormControl(supportingDocument));
          }
        };
      } else {
        res = index;
      }

    });
    return res;
  }

  static getUploadSupportDocuments(imagesFormArray, brief: DiaryBrief, title, comments): SupportingDocument[] {
    let supportingDocuments: SupportingDocument [] = [];
    imagesFormArray.controls.forEach((item) => {
      let supportingDocument: SupportingDocument = new SupportingDocument();
      supportingDocument.title = title;
      supportingDocument.comments = comments;
      supportingDocument.createdBy = brief.loginCompleteName;
      supportingDocument.userName = brief.loginName;
      supportingDocument.type = item.value.type;
      supportingDocument.name = item.value.name.slice(0, item.value.name.lastIndexOf('.'));
      if (item.value.type.match(/(jpe?g|jpeg|png)$/)) {
        supportingDocument.contents = item.value.contents.split(',')[1];
      } else {
        supportingDocument.contents = item.value.contents;
      }
      supportingDocuments.push(supportingDocument);
    });
    return supportingDocuments;
  }
}
