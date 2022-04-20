import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { merge } from 'rxjs';
import { User } from 'src/app/_models/registerUser.model';
import { UserServiceService } from 'src/app/_services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private basePath = '/images';
file!:File;
  url = '';
  userID: string | null = '';
  newID: string = '';
  person!: User|any;
  // newPerson:object={}
  constructor(
    private user: UserServiceService,
    private auth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private fire:AngularFirestore
  ) {}

  ngOnInit(): void {
    this.userID = localStorage.getItem('token');
    if (this.userID) {
      this.newID = this.userID;
    }
    // this.auth.onAuthStateChanged((user)=>{this.userID!=user?.uid});
    this.user.getuserDoc(this.newID).subscribe(res => {
      console.log(res.payload.data());
      this.person=res.payload.data();
    });
    console.log(this.person);

    // console.log(this.user.getuserDoc("ePsjAmsaqShDbam0TWrzuCGcAiF2"));


    //  this.user.getuserDoc("ePsjAmsaqShDbam0TWrzuCGcAiF2");
  }
upload(event:any){
  this.file = event.target.files[0];
}
async ayhaga(){
  if (this.file) {
    const filePath = `${this.basePath}/${this.file.name}`;
    const snap = await this.afStorage.upload(filePath, this.file);
    this.getUrl(snap);
  } else {alert('Please select an image'); }
}
private async getUrl(snap:any) {
  const url = await snap.ref.getDownloadURL();
  this.url = url;
  console.log(this.url);
  this.person.img=this.url;
  this.fire.collection('Users').doc(this.newID).set(this.person,{merge:true});
}

}

