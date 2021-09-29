import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/file.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/url.min.js';
import 'froala-editor/js/plugins/word_paste.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: any = {};
  text = new FormControl();
  froalaEditor: any;

  ngOnInit() {
    this.options.attribution = false;
    this.options.initOnClick = true;
    this.options.imageDefaultWidth = 0;
    this.options.imageOutputSize = true;
    this.options.events = {
      'image.beforePasteUpload'(img: any) {
        this.commands.bold();
        this.commands.bold();
      }
    };
    this.options.imageAllowedTypes = [
      'jpeg',
      'jpg',
      'png',
      'gif',
      'webp',
      'png;base64',
    ];
    this.options.listAdvancedTypes = true;
    this.options.fontFamilySelection = true;
    this.options.toolbarButtons = {
      moreText: {
        buttons: [
          'fontSize',
          'bold',
          'italic',
          'underline',
          'strikeThrough',
          'subscript',
          'superscript',
          'textColor',
          'backgroundColor',
        ],
        buttonsVisible: 4,
      },
      moreParagraph: {
        buttons: [
          'alignLeft',
          'alignCenter',
          'formatOL',
          'formatUL',
          'alignRight',
          'alignJustify',
          'paragraphFormat',
          'paragraphStyle',
          'lineHeight',
          'outdent',
          'indent',
        ],
        buttonsVisible: 4,
      },
      moreRich: {
        buttons: ['insertLink', 'insertImage', 'insertTable'],
      },
      moreMisc: {
        buttons: ['clearFormatting', 'undo', 'redo'],
        align: 'right',
        buttonsVisible: 3,
      },
    };
    this.options.wordPasteModal = false;
  }

  traceLog(message: string) {
    console.log(message);
  }


}
