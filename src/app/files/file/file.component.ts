import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { FilesService } from './../../_services/files.service';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  imgSrc: string = '../../../assets/Images/pdf.png';
  selectedImage: any | null;
  isSubmitted!: boolean;

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),
  });

  constructor(
    private storage: AngularFireStorage,
    private service: FilesService
  ) {}

  ngOnInit() {
    // this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = '../../../assets/Images/upload.png';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue: any) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name
        .split('.')
        .slice(0, -1)
        .join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue['imageUrl'] = url;
              this.service.insertImageDetails(formValue);
            });
          })
        )
        .subscribe();
    }
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: 'Pdf',
    });
    this.imgSrc = '../../../assets/Images/upload.png';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {}
}
