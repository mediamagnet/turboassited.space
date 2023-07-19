import tinymce from 'tinymce/tinymce'
import 'tinymce/icons/default/icons'
import 'tinymce/themes/silver/theme';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/models/dom';

import { Controller  } from "@hotwired/stimulus"

// Connects to data-controller="tinymce"
export default class extends Controller {
  connect() {
    tinymce.init({
      selector: 'tinymce',
      height: 500,
      menubar: false,
      plugins: [
               'advlist autolink lists link image charmap print preview anchor',
               'searchreplace visualblocks code fullscreen',
               'insertdatetime media table paste code help wordcount'
             
      ],
      toolbar: 'undo redo | formatselect | ' +
             ' bold italic backcolor | alignleft aligncenter ' +
             ' alignright alignjustify | bullist numlist outdent indent | ' +
             ' removeformat | help'
         
    });
  }
  disconnect () {
    tinymce.remove()
  }
}
